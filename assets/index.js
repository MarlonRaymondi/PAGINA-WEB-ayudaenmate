const courses = document.querySelectorAll('section.container-courses .course');
const details = document.querySelectorAll('section.course-details .container-grid .details');
const pricing = document.querySelector('#details');
const section = document.querySelector('section.payment');

const instagram = document.querySelector('.social-medias .instagram');
const facebook = document.querySelector('.social-medias .facebook');

courses.forEach(course => course.addEventListener('click', () => {
  pricing.scrollIntoView()
}))

details.forEach(detail => detail.addEventListener('click', () => {
  section.scrollIntoView();
}))

instagram.addEventListener('click', () => {
  window.open('https://urls.by/QZtRX')
})

facebook.addEventListener('click', () => {
  window.open('https://urls.by/OJfye')
})