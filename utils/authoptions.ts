import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs-react";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        // signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const dbUser = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!dbUser) return null;

                const isPasswordValid = await compare(
                    credentials.password,
                    dbUser.password
                );

                if (!isPasswordValid) return null;

                return {
                    id: dbUser.id,                    
                    username: dbUser.username,
                    email: dbUser.email,
                    emailVerified: dbUser.emailVerified,
                    image: dbUser.image,
                    password: dbUser.password,
                    banner: dbUser.banner,
                    role: dbUser.role,
                    createdAt: dbUser.createdAt,
                    updatedAt: dbUser.updatedAt
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,                    
                    username: token.username,
                    email: token.email,
                    emailVerified: token.emailVerified,
                    password: token.password,
                    banner: token.banner,
                    role: token.role,
                    createdAt: token.createdAt,
                    updatedAt: token.updatedAt
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,                    
                    username: u.username,
                    email: u.email,
                    emailVerified: u.emailVerified,
                    password: u.password,
                    banner: u.banner,
                    role: u.role,
                    createdAt: u.createdAt,
                    updatedAt: u.updatedAt
                };
            }
            return token;
        },
    }
};