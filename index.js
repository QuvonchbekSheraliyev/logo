const headerbtn = document.querySelector('.langbtne')


const btns = document.querySelectorAll('.btnu')
const text1 = document.querySelector('.home-text')
const text2 = document.querySelector('.About')
const text3 = document.querySelector('.cont')
const text4 = document.querySelector('.text')
const text5 = document.querySelector('.text-two')
const text6 = document.querySelector('.btne')
const text7 = document.querySelector('.text-three')
const text8 = document.querySelector('.hkj')
const text9 = document.querySelector('.bnm')
const text10 = document.querySelector('.fgh')
const text11 = document.querySelector('.lgh')
const text12 = document.querySelector('.hop')
const text13 = document.querySelector('.klm')
const text14 = document.querySelector('.tak')
const text15 = document.querySelector('.kat')
const text16 = document.querySelector('.sohi')
const text17 = document.querySelector('.bhu1')
const text18 = document.querySelector('.bhu2')
const text19 = document.querySelector('.bhu3')
const text20 = document.querySelector('.eog')
const text21 = document.querySelector('.pol')
const text22 = document.querySelector('.vbn')
const text23 = document.querySelector('.pole')
const text24 = document.querySelector('.vbne')
const text25 = document.querySelector('.polu')
const text26 = document.querySelector('.pola')
const text27 = document.querySelector('.vbnu')
const text28 = document.querySelector('.vbna')
const text29 = document.querySelector('.taxt')
const text30 = document.querySelector('.tuxt')
const text31 = document.querySelector('.tixt')





btns.forEach(e => {
    e.addEventListener('click' , () =>
    {
      const til = e.getAttribute("lang")
      text1.textContent = translate[til].text1
      text2.textContent = translate[til].text2
      text3.textContent = translate[til].text3
      text4.textContent = translate[til].text4
      text5.textContent = translate[til].text5
      text6.textContent = translate[til].text6
      text7.textContent = translate[til].text7
      text8.textContent = translate[til].text8
      text9.textContent = translate[til].text9
      text10.textContent = translate[til].text10
      text11.textContent = translate[til].text11
      text12.textContent = translate[til].text12
      text13.textContent = translate[til].text13
      text14.textContent = translate[til].text14
      text15.textContent = translate[til].text15
      text16.textContent = translate[til].text16
      text17.textContent = translate[til].text17
      text18.textContent = translate[til].text18
      text19.textContent = translate[til].text19
      text20.textContent = translate[til].text20
      text21.textContent = translate[til].text21
      text22.textContent = translate[til].text22
      text23.textContent = translate[til].text23
      text24.textContent = translate[til].text24
      text25.textContent = translate[til].text25
      text26.textContent = translate[til].text26
      text27.textContent = translate[til].text27
      text28.textContent = translate[til].text28
      text29.textContent = translate[til].text29
      text30.textContent = translate[til].text30
      text31.textContent = translate[til].text31
      text32.textContent = translate[til].text32
      text33.textContent = translate[til].text33
    })
});

var translate = {
UZ: {   
         text1: "Uy",
         text2: 'malumot',
         text3:'aloqa',
         text4:"Matnni o'zgartirish uchun  ikki marta bosing",
         text5:"Ushbu paragrafga uslub berish uchun ushbu paragrafni tanlang, so'ngra uning uslublarini bo'limda tahrirlangDizaynerning o'ng tomonidagi uslublar yorlig'i.",
         text6:"Ushbu havolani o'ng paneldagi sozlamalar yorlig'ida tahrirlang",
         text7:"O'ng panelda joylashgan navigator yorlig'ida siz barcha elementlaringizni bir joyda ko'rishingiz mumkin",
         text8:"Sinf nima?",
         text9:"Sinf shunchaki element nomi emas, balki siz yaratadigan sarlavhadirxuddi shunday uslubda boʻlishini hohlagan boshqa elementlarga qoʻshilishi mumkin.E'tibor bering, agar siz ushbu paragrafni tanlasangiz va uni o'zgartirsangiz, u ta'sir qiladi Quyidagi xatboshi ham, chunki ular bir xil sinfga ega.",
         text10:"Rasmni almashtirish uchun uni ikki marta bosing.",
         text11:"Rasmning o'lchamini o'zgartirish uchun uni ikki marta bosishingiz ham mumkin.",
         text12:"Ota-onalar va matnni tekislash",
         text13:"Hozirga kelib siz veb-dizayn, oddiy qilib aytganda, ichkaridagi bir qator qutilar ekanligini payqagan bo'lishingiz mumkin ichida matn va tasvirlar bo'lgan qutilar. Buning asosiy elementini tanlashga harakat qiling  matn",
         text14:"Tartibga oid maslahat",
         text15:"Flexbox elementining joylashish yo'nalishini gorizontaldan vertikalga o'zgartiring",
         text16:"Flexbox - bu Layout > Displey sozlamalari ostidagi uslublar ko'rinishida joylashgan displey sozlamalari",
         text17:"Ushbu paragrafni o'qiyotgan oq quti bo'lgan 1-ustunni tanlash uchun bosing hozir ichida.",
         text18:"Endi 1-ustun tanlangan bo'lsa, klaviaturadagi yuqoriga o'qni bosing va ni tanlang  asosiy element: Ustunni o'rash 1",
         text19:"Ustunni o‘rash 1 tanlanganda, Layout > Flex Layout-da yuqorida ko‘rsatilgan belgini bosing  uslublar paneli",
         text20:"Qo'shimcha maslahatlar",
         text21:"Chegara / to'ldirish",
         text22:"Yuqoridagi skrinshotda chekka va toʻldirish uchun boshqaruv elementlari koʻrsatilgan.  Oddiy qilib aytganda, bu elementning ichiga va/yoki tashqarisiga qo'shadigan joy.",
         text23:"Elementlarni qo'shish",
         text24:"Navigator yorlig'i sizga aniqlik beradi elementlarning parchalanishi va ularning ota-onalar, shuningdek, ular qaerda sahifa ichida joylashgan.",
         text25:"Javob beruvchi dizayn",
         text26:"Shtatlar",
         text27:"Ushbu to'xtash nuqtalari piktogrammalarini bosish paydo bo'ladi ko'rish oynasining o'lchamini o'zgartiring umumiy qurilma o'lchamlarini taqlid qilish. Uslublar ko'rish paytida o'zgartiriladi boshqa to'xtash nuqtalarida veb-sayt bo'ladi ta'sir o'lchamlari ham kichikroq.",
         text28:"Selektorning yuqori o'ng tomonida bo'limida davlatlar ochiladigan ro'yxati mavjud. Bu yerda siz element uslublarini tahrirlashingiz mumkin turli davlatlar. Eng keng tarqalgan Buning uchun foydalanish hover effektlarini qo'shishdir tugmalar kabi elementlar.",
         text29:"Uy",
         text30:"Malumot",
         text31:"Aloqa",
       

},      
ENG: {
    text1: 'Home',
        text2: 'About',
        text3 :'Contact',
         text4:'Double click text to change it',
  text5:' To style this paragraph , select this paragraph, then edit its styles in the  Style tab the right side of the Designer.',
  text6:"    Edit this link in the settings tab in the right panel",
  text7:"  In the navigator tab located in the right panel you can  see all your elements in one place.",
  text8:"What is a Class?",
  text9:"A Class is more than just the name of an element, it is a title you create thatcan be added to other elements that you'd like to be styled the same way.Notice that if you select this paragraph, and change it, it will effect theparagraph below as well, since they have the same Class.",
  text10:"   Double click an image to replace it.",
  text11:"   You can also double click an image to change its size.",
  text12:"  Parents, and text alignment",
  text13:" By now you may have noticed that web design, simply put, is a series of boxes  inside of boxes with text and images inside of them. Try selecting the parent  element of this text",
  text14:"Layout tip",
  text15:"  Change the layout direction of a flexbox element from horizontal to vertical.",
  text16:"  Flexbox is a display setting found in the styles tab under  Layout > Display Settings",
  text17:"  Click to select Column 1 which is the <br> white box that this paragraph you're <br> readingis currently inside of.",
  text18:"  Now that Column 1 is selected, press the  up arrow on your keyboard, selecting the  parent element: Column Wrap 1",
  text19:"   With Column Wrap 1 selected, click the icon  shown above in the Layout > Flex Layout styles panel.",
  text20:" Additional tips",
  text21:"   Margin / Padding",
  text22:" The above screenshot shows the  controls for margin and padding.  Simply put, this is the space you add  inside and/or outside of an element.",
  text23:" Add Elements",
  text24:"The navigator tab gives you a clear breakdown of elements and their parents, as well as where they are located within the page.",
  text25:" Responsive design",
  text26:" States",
  text27:"Clicking these breakpoints icons will change the size of the viewport tomimic common device sizes. Styles that are changed when viewing the  effect sizes smaller as well.",
  text28:"On the top right of the selector section, there is a states dropdown. Here you can edit element styles at different states. The most common use for this is adding hover effects to elements such as buttons.",
  text29:"Home",
  text30:"About",
  text31:"Contact",
 
}

}
