// Utility functions used by index.html and student.html
async function loadStudentsRegistry(){
  // students/students.json should be an array of {username,name,programme,image}
  const res = await fetch('students/students.json', {cache:'no-cache'});
  if (!res.ok) return null;
  return await res.json();
}

async function loadProfile(username){
  const safe = encodeURIComponent(username);
  const res = await fetch(`students/${safe}.json`, {cache:'no-cache'});
  if (!res.ok) return null;
  return await res.json();
}

// Expose for inline scripts in HTML
window.loadStudentsRegistry = loadStudentsRegistry;
window.loadProfile = loadProfile;