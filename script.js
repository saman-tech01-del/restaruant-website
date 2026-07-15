// ============================================
// SCRIPT.JS — Spice Village Website (Menu Logic)
// ============================================

const menu = {
  "Village Specials": [
    ["Keema Karahi","Mince meat cooked in a wok with green peas, ginger, chilli, onions, ghee, garlic and traditional spices","£11.99"],
    ["Lahori Nihari","Lamb shank slowly cooked overnight in traditional spices","£13.99"],
    ["Shahi Haleem","Traditional Lahori dish prepared with lentils, lamb & spices","£12.99"],
    ["Maghaz (Brain) Masala","Weekend special","£12.99"],
    ["Paaya","Slow cooked goats feet in a unique mix of flavours","£9.99"],
    ["Charsi Lamb","Freshly cooked to order, allow 30 minutes — 1/2kg","£25.99"],
    ["Charsi Chicken","Freshly cooked to order, allow 30 minutes — 1kg","£22.99"],
    ["Balochi Tikka","Chicken marinated in bold Balochi spices, chargrilled","£6.99"],
    ["Matka Ghosht","Lamb slow-cooked in a sealed clay pot — Medium (2-4)","£17.99"],
    ["Chicken Mandi","Fragrant rice with slow-cooked chicken — Medium (2-4)","£13.99"]
  ],
  "Biryani & Rice": [
    ["Plain Steamed or Pilao Rice","","£3.99"],
    ["Egg Fried Rice","Stir-fried rice with eggs, bell peppers and vegetables","£6.99"],
    ["Vegetable Biryani","Simple vegetable biryani, full of Pakistani flavours","£6.99"],
    ["Chicken Biryani","Tender chicken in spiced blend, finished with fragrant rice","£8.99"],
    ["Lamb Biryani","Tender lamb in spiced blend, finished with fragrant rice","£9.99"],
    ["Chicken Tikka Biryani","Grilled chicken tikka in spiced blend with fragrant rice","£9.99"],
    ["Prawn Biryani","Grilled prawns in spiced blend with fragrant rice","£11.99"]
  ],
  "Chicken": [
    ["Chicken Korma","Diced chicken mildly spiced in a creamy sauce","£11.99"],
    ["Chicken Vindaloo","Fiery hot and spicy chicken dish","£11.99"],
    ["Butter Chicken","Off the bone chicken cooked in butter with medium sauce","£12.99"],
    ["Balti Chicken","Chicken cooked in spices with fresh herbs","£12.99"],
    ["Chicken Jalfrezi","Chicken in spicy tomato sauce with peppers and onions","£11.99"],
    ["Chicken Tikka Masala","Chargrilled chicken tikka cooked with tomatoes & herbs","£12.99"],
    ["Afghani Chicken Karahi","Baby chicken on the bone","£11.99"]
  ],
  "Lamb": [
    ["Saag Gosht","Lamb with fresh spinach puree, garlic & mustard seeds","£12.99"],
    ["Afghani Lamb Karahi","Spring lamb on the bone, cooked Afghan style","£12.99"],
    ["Lamb Madras","Hot and fiery with famous madras spices","£12.99"],
    ["Balti Lamb","Cooked with extra onions in a medium sauce","£13.99"],
    ["Lamb Bhoona","Lamb cooked in onions, tomatoes & fresh herbs","£12.99"],
    ["Lamb Korma","Creamy coconut sauce, toasted Pakistani spices","£12.99"],
    ["Achari Lamb","Sweet and pickled components for a festival of flavours","£12.99"]
  ],
  "Seafood & Veg": [
    ["Mixed Vegetable Jalfrezi","Seasonal vegetables in mildly spiced masala","£6.99"],
    ["Saag Aloo","Spinach and mustard greens with potatoes","£7.99"],
    ["Bombay Aloo","Potato cubes seasoned with cumin, garlic, garam masala","£6.99"],
    ["Chana Masala","Chickpeas soaked overnight, cooked in a subtle sauce","£7.99"],
    ["Shahi Paneer Masala","Cottage cheese cubes in thick masala with coriander","£7.99"],
    ["Mattar Paneer","Cottage cheese cubes with green peas in a runny sauce","£7.99"],
    ["Village Special Tarka Daal","Lentil dish, recommended with pilau rice","£7.99"],
    ["King Prawn Karahi","King prawns pan-fried with spices, peppers, onions","£14.99"],
    ["Prawn Madras","Hot and fiery with famous madras spices","£14.99"],
    ["Achaari Prawn Karahi","Sweet and pickled flavours for prawn lovers","£14.99"]
  ],
  "Starters": [
    ["Lamb Sheekh Kebabs","Minced lamb with spices, slow cooked on grill (2pcs)","£5.99"],
    ["Chicken Sheekh Kebabs","Minced chicken with spices, slow cooked on grill (2pcs)","£4.99"],
    ["Meat Samosa","Crispy pastry filled with spiced minced meat, onions & herbs","£4.99"],
    ["Chicken Tikka","Boneless chicken cubes, spicy marinade, barbecued (5pcs)","£6.99"],
    ["Malai Tikka","Chicken marinated with cheese, butter & cream (5pcs)","£6.99"],
    ["Fish Tikka","Grilled to perfection with a special spice blend (5pcs)","£9.99"],
    ["Chicken Wings","Tender wings, perfectly seasoned and grilled (5pcs)","£6.99"],
    ["Grilled Lamb Chops","Succulent and tender, grilled to perfection (5pcs)","£11.99"],
    ["Village Special Mixed Grill","Seekh kebabs, chicken tikka, lamb tikka & lamb chops (4 pers)","£34.99"],
    ["Onion Bhaji","Crispy deep-fried fritters of onion, spice and flour (2pcs)","£3.99"],
    ["Pakoras","Onions and potatoes in a spicy batter, deep fried (6pcs)","£4.99"],
    ["Vegetable Samosa","Spiced potatoes, onions and peas in filo pastry (2pcs)","£3.99"],
    ["Pani Puri","Crispy puris stuffed with potato and chickpea, tangy water (6pcs)","£5.99"],
    ["Paneer Tikka","Paneer, onion and pepper marinated and clay-oven roasted","£5.99"]
  ],
  "Breads": [
    ["Naan","Traditional flat bread cooked in a tandoor","£1.60"],
    ["Butter Naan","Traditional flat bread topped with butter","£1.80"],
    ["Roti","Whole meal wheat flour cooked in a tandoor","£1.60"],
    ["Kulcha","Leavened flatbread topped with sesame seeds","£2.50"],
    ["Chilli Naan","Topped with fresh green chillies","£2.50"],
    ["Garlic Naan","Topped with garlic, cooked in a tandoor","£2.99"],
    ["Peshwari Naan","Stuffed with coconut, almonds, cream and sultanas","£3.99"],
    ["Keema Naan","Stuffed with mince meat, topped with butter","£4.99"],
    ["Tandoori Paratha","Crispy and fresh — the king of breads","£2.99"]
  ],
  "Breakfast (Sun only)": [
    ["Halwa Poori Platter","Aloo bhujia, Lahori chana, two pooris and halwa","£2.99"],
    ["Aloo Bhujia","","£5.99"],
    ["Chana Masala","","£7.99"],
    ["Paaya","","£9.99"],
    ["Nihari","","£13.99"],
    ["Haleem","","£12.99"],
    ["Karak Chai","","£2.99"],
    ["Sweet Lassi Jug","","£11.99"]
  ],
  "Desserts": [
    ["Nawabi Qulfi","Frozen dessert of milk, cream, khoya and cardamom","£3.99"],
    ["Lahori Falooda","Rose syrup, vermicelli and basil seeds, served with kulfi","£5.99"],
    ["Kheer","Slow cooked rice pudding with almonds and coconut","£4.99"],
    ["Lakhnawi Halwa","Rich carrot sweet with condensed milk, cream & ghee","£5.99"],
    ["New York Style Cheesecake","Biscoff or Ferrero Rocher","£6.99"],
    ["SV Special Cheesecake","Lychee base, pistachio mousse and mango compote","£7.99"],
    ["Molten Delight","For chocolate lovers, with a scoop of vanilla ice cream","£7.99"],
    ["Birthday Special","In-house dessert with sparklers and a birthday song","£12.99"]
  ],
  "Drinks & Mocktails": [
    ["Lassi","Mango, sweet or salty","£3.99"],
    ["Milkshake","Ferrero, strawberry, vanilla, Lotus Biscoff, Oreo or mango","£5.99"],
    ["Karak Chai","Pakistani strong tea","£3.99"],
    ["Pina Colada (Mocktail)","Coconut cream and pineapple juice, blended with ice","£7.99"],
    ["Virgin Lime Mojito","Sugar, lime juice, soda water & mint","£7.99"],
    ["Lychee Martini (Mocktail)","Puree lychees with sugar syrup and lychee juice","£7.99"],
    ["Mango Mania","Fresh mint, lime, club soda, mango juice and sugar cane","£7.99"],
    ["Billionaire Daiquiri (Mocktail)","Tropical fruits with a touch of sophistication","£14.99"]
  ]
};

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
Object.keys(menu).forEach((cat, i)=>{
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (i===0 ? ' active' : '');
  btn.textContent = cat;
  btn.onclick = ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-'+i).classList.add('active');
  };
  tabsEl.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i===0 ? ' active' : '');
  panel.id = 'panel-'+i;
  const list = document.createElement('div');
  list.className = 'menu-list';
  menu[cat].forEach(([name, desc, price])=>{
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `<div><div class="mi-name">${name}</div>${desc ? `<div class="mi-desc">${desc}</div>` : ''}</div><div class="mi-price">${price}</div>`;
    list.appendChild(item);
  });
  panel.appendChild(list);
  panelsEl.appendChild(panel);
});
