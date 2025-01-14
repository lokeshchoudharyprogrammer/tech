import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ValidationMessages } from "../types/constants/ValidationMessages";
import { User } from "../types/interface/User.interface";
import { ErrorCodes } from "../types/enums/ErrorCodes.enum";

const prisma = new PrismaClient();



export const createUser = async ({ name, email, password }: User) => {

    if (!name || !email || !password) {
        return ValidationMessages.REQUIRED;
    }

    let findUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (findUser) {
        return ErrorCodes.USER_EXISTS;
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        let user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword

            }
        })
        return user;
    }
}


export const loginUser = async (email:string,  password:string) => {

    let findUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!findUser) {
        return ErrorCodes.USER_NOT_FOUND;
    } else {
        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return ErrorCodes.INVALID_PASSWORD;

        } else {
            const token = jwt.sign({ id: findUser.id }, process.env.JWT_KEY as string, { expiresIn: "1d" });
            return { findUser, token }
        }
    }
}


