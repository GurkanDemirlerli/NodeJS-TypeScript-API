import { verify } from 'jsonwebtoken';
import { ILoginModel,ITokenModel } from './../models';

export class AuthenticationService {
    public static checkAuthentication(req): Promise<ITokenModel | null> {
        let token: string = req.body.token || req.query.token ||
            req.get('x-access-token') || req.get('authentication') || req.get('authorization') || undefined;
        if (token === undefined) {
            return Promise.resolve(null)
        } else {
            return new Promise((resolve, reject) => {
                verify(token, 'MySecret', (err: Error, decoded: any): boolean | any => {
                    if (err) {
                        resolve(null);
                    } else {
                        req.decoded = decoded;
                        resolve(decoded);
                    }
                });
            }).then(result => {
                return result
            }).catch(err => {
                return err
            });
        }
    }

    public static authenticatedRoute(req, res, next): void {
        AuthenticationService.checkAuthentication(req).then(isAuth => {
            if (isAuth) {
                next();
            } else {
                console.log('unauthorized access! kicking the client out with 403');
                res.status(403).json({
                    message: 'Error: You need to authenticate to access this part of the API',
                    success: false
                });
            }
        });
    }

    // public static provideToken(req, res, next) {

    // }
}
