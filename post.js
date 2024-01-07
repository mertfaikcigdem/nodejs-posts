const posts = [
  { user: 'Mert', post: 'Bu bir post yazısıdır.' },
  { user: 'Ayşe', post: 'Bu hayvanlar hakkında post yazısıdır.' },
  { user: 'Ceren', post: 'Bu post yazısıdır.' },
  { user: 'Selim', post: 'Bu spor ile ilgili bir post yazısıdır.' },
];

const user = process.argv[2];
const post = process.argv[3];

const listPosts = () => {
  posts?.map(item => {
    console.log(`Kullanıcı Adı: ${item?.user} => ${item?.post}`);
  })
};

const addPost = async (user, post) => {
  const newPromise = new Promise((resolve, reject) => {
    if (user && post) {
      posts.push({ user: user, post: post });
      resolve('İşlem başarılı!');
    } else {
      reject('Değerleri giriniz!');
    }
  })

  return newPromise;
};

const updatedListPost = async () => {
  try {
    await addPost(process.argv[2], process.argv[3]);
    listPosts();
  } catch (err) {
    console.log(err);
  }
};

updatedListPost();