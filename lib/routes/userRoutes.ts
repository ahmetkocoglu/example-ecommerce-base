import { Request, Response } from "express";
import { LoginModel } from "models/LoginModel";
import { users } from "../mocData/users";
import { UserModel } from "models/UserModel";

export class Routes {
    public routes(app): void {
        app.route('/users')
            .get((req: Request, res: Response) => {
                res.status(200).send(users)
            })

            app.route('/user/:id')
            .get((req: Request, res: Response) => {
                const id = Number(req.params.id)
                const user = users.find((k: UserModel) => k.id === id);

                res.status(200).send(user)
            })

        app.route('/login')
            .post((req: Request, res: Response) => {
                const { email, password }: LoginModel = req.body;

                const user = users.find((k: UserModel) => k.email === email);

                res.status(200).send({
                    message: "home",
                    user
                })
            })
    }
}