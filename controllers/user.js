import User from "../models/user";

export const signup = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await new User({ email, name, password }).save();
        res.json(user);
    } catch (error) {
        res.json(
            {
                message: "Tạo user không thành công"
            }
        )
    }

}
export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
        res.status(400).json({
            message: "Tài khoản không tồn tại"
        })
    }

}

