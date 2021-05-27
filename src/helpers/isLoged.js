export default function isLoged() {
  const token = sessionStorage.getItem('token');
  if (token === null) {
    return false
  } else {
    return true;
  }
}