import express from "express";
import authRoutes from "./routes/authRoutes.ts";
import messageRoutes from "./routes/messageRoutes.ts";
import userRoutes from "./routes/userRoutes.ts";
import chatRoutes from "./routes/chatRoutes.ts";


const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "Ok",
    name: "shivastu",
  });
});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

export default app;
