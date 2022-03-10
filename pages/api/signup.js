import clientPromise from  '@lib/mongodb';

// @desc Create a new user & send token back
// @route /api/user/signup
// @access Public
export default async function handler(req, res) {
  try {
    await clientPromise;
    const { username, password } = req.data;

  } catch (e) {
    res.status(500).json({message: 'Falied to connect to database'});
  }
}
