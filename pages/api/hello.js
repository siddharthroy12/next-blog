import clientPromise from  '@lib/mongodb';

// Remove this in future
export default async function handler(_, res) {
  try {
    await clientPromise;
    res.status(200).json('success');
  } catch (e) {
    console.log(e);
    res.status(200).json('falied');
  }
}

/* All the routes I'm going to have
 * Signup route
 * Signin route
 * update user profile route
 * create post route
 * update post route
 * follow user
 * like post route
 * save post route
 * comment post route
 * edit comment route
 * like comment route
 * search route
 * get post feed route
 * follow hashtag
 * get posts by hashtag
 */
