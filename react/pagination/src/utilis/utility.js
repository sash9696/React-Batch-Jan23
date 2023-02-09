
function paginate(followers) {
    //pagination logic

    const itemsPerPage = 10

    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    const newFollowers = Array.from({ length: numberOfPages }, function (item, index) {
        const start = index * itemsPerPage
        // index is 0 => (0 , 10)
        // index is 1 => (10, 20)
        //index is 2 => (20, 30)
        return followers.slice(start, start + itemsPerPage)
    })
    return newFollowers
}


export default paginate