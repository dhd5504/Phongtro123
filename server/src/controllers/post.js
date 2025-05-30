import * as postService from '../services/post'

export const getPosts = async (req , res)=>{
    try {
        const response = await postService.getPostsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}

export const getPostsLimit = async (req , res)=>{
    const {page,...query} = req.query;
    // console.log(query)

    try {
        const response = await postService.getPostLimitService(page,query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}
export const getPostsLimit2 = async (req , res)=>{
    const {page,...query} = req.query;
    // console.log(query)
    try {
        const response = await postService.getPostLimitService2(page,query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}

export const getNewPosts = async (req , res)=>{
    try {
        const response = await postService.getNewPostService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}

export const createNewPost = async (req , res)=>{
    try {
        const { categoryCode ,title,priceNumber,areaNumber, label} = req.body
        const { id } = req.user
        if(!categoryCode || !title || !id || !priceNumber || !areaNumber || !label){
            return res.status(400).json({
                err : 1,
                msg : 'Missing inputs'
            })
        }

        const response = await postService.createNewPostService(req.body,id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}

export const getPostsLimitAdmin = async (req , res)=>{
    const {page, ...query} = req.query;
    const {id} = req.user;
    // console.log(query)

    try {
        if(!id){
            return res.status(400).json({
                err : 1,
                msg : 'Missing inputs'
            })
        }
        const response = await postService.getPostLimitAdminService(page,id,query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}


export const updatePost = async (req , res)=>{
    const { postId,overviewId,imagesId,attributesId,...payload} = req.body
    const {id} = req.user
    try {
        if(!postId || !id || !overviewId || !imagesId || !attributesId ) return res.status(400).json({
            err: 1,
            msg : 'Missing inputs'
        })

        const response = await postService.updatePost(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}

export const deletePost = async (req , res)=>{
    const {postId} = req.query
    const {id} = req.user
    try {
        if(!postId || !id ) return res.status(400).json({
            err: 1,
            msg : 'Missing inputs'
        })

        const response = await postService.deletePostService(postId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err : -1,
            msg : 'Failed at post controller' + error
        })
    }
}