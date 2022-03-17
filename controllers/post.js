import mongoose from "mongoose";
// khởi tạo model
const Post = mongoose.model('Post', { name: String });

//api thêm bài viết
export const create = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: " Không thêm bài viết mới được"
        })
    }
}
// api list bài viết
export const list = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm thấy bài viết"
        })
    }
}

export const read = (req, res) => {
    res.json(posts.find(item.id === +req.params.id));
}
export const remove = (req, res) => {
    res.json(posts.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(posts.map(item => item.id == req.params.id ? req.body : item))
}