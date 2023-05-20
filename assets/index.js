const courses = document.querySelectorAll('section.container-courses .course');
const details = document.querySelectorAll('section.course-details .container-grid .details');
const pricing = document.querySelector('#details');
const section = document.querySelector('section.payment');

courses.forEach(course => course.addEventListener('click', () => {
  pricing.scrollIntoView()
}))

details.forEach(detail => detail.addEventListener('click', () => {
  section.scrollIntoView();
}))