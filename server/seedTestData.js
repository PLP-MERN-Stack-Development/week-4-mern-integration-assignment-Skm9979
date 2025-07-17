const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_BASE = 'http://localhost:5000/api';

async function createCategory(name) {
  const res = await fetch(`${API_BASE}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  return res.json();
}

async function createPost(title, content, categoryId) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, category: categoryId })
  });
  return res.json();
}

(async () => {
  try {
    const category = await createCategory('Test Category');
    console.log('Created category:', category);
    const post = await createPost('Test Post', 'This is a test post content.', category._id);
    console.log('Created post:', post);
  } catch (err) {
    console.error('Error seeding test data:', err);
  }
})(); 