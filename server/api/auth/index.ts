import { NuxtAuthHandler } from "#auth";
import Credentials from "@auth/core/providers/credentials";  // Asegúrate de que es esta importación

export default NuxtAuthHandler({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "1234") {
          return { id: "1", name: "Admin" }; // 'id' debe ser string
        }
        return null;
      },
    }),
  ],
});
