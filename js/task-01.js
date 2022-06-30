const itemsRef = document.querySelectorAll('.item');
console.log('itemsRef', itemsRef);
console.log('Кількість категорій в ul#categories - ', itemsRef.length);

itemsRef.forEach(item => {
  const titleRef = item.querySelector('h2');
  const listRef = item.querySelector('ul');

  console.log('Текст заголовку елемента: ', titleRef.textContent);
  console.log('Кількість елемутеів в категорії ', listRef.children.length);
});
