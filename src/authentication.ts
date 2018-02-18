import { verify } from 'jsonwebtoken';
import IUserModel = require("./app/model/interfaces/UserModel");

export class Authentication {
    public static checkAuthentication(req): Promise<IUserModel | null> {
        let token: string = req.body.token || req.query.token ||
            req.get('x-access-token') || req.get('authentication') || req.get('authorization') || undefined;

        if (token === undefined) {
            // there is no token!
            //return(false);
            return Promise.resolve(null)
        } else {
            return new Promise((resolve, reject) => {
                verify(token, 'My-Secret', (err: Error, decoded: any): boolean | any => {
                    if (err) {
                        resolve(null);
                    } else {
                        //console.log('XXXX req.decoded-> ', decoded )
                        req.decoded = decoded;
                        resolve(decoded);
                    }
                });
            })
                .then(result => {
                    return result
                })
                .catch(err => {
                    return err
                })
        }
    }

    public static authenticatedRoute(req, res, next): void {
        Authentication.checkAuthentication(req)
            .then(isAuth => {
                if (isAuth) {
                    // the user has a proper token: let's call next
                    //console.log('isAuth-> ', isAuth )
                    next();
                } else {
                    console.log('unauthorized access! kicking the client out with 403');
                    res.status(403).json({
                        message: 'Error: You need to authenticate to access this part of the API',
                        success: false
                    });
                }
            })

    }

    
}
