   declare module '../api/authService' {
     export interface RegisterData {
       email: string;
       password: string;
     }

     export interface AuthService {
       login(email: string, password: string): Promise<void>;
       register(data: RegisterData): Promise<void>;
     }

     export const authService: AuthService;
   }