const link = 'https://progressiveapp-47c1a.web.app/images/categories/'
const subCategoriesList = [
  {
    id: 1,
    name: 'ecom',
    route: 'ecommerce',
    image: link + 'ecommerce.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta'
  },
  {
    id: 2,
    name: 'ecom',
    route: 'ecommerce',
    image: link + 'ecommerce.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat'
  },
  {
    id: 3,
    name: 'ecom',
    route: 'ecommerce',
    image: link + 'ecommerce.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem,'
  },
  {
    id: 4,
    name: 'ecom',
    route: 'ecommerce',
    image: link + 'ecommerce.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 5,
    name: 'buildings',
    route: 'real estate',
    image: link + 'real-estate.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 6,
    name: 'matriculation',
    route: 'education',
    image: link + 'education.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 7,
    name: 'food panda',
    route: 'resturant',
    image: link + 'resturants.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    route: 'resturant',
    id: 8,
    name: 'des pardes',
    image: link + 'resturants.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    route: 'resturant',
    id: 9,
    name: 'bait-ul-mandi',
    image: link + 'resturants.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    route: 'resturant',
    id: 10,
    name: 'safron',
    image: link + 'resturants.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 11,
    name: 'telecom',
    route: 'telecom network',
    image: link + 'telecom-network.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 12,
    name: 'telecom',
    route: 'telecom network',
    image: link + 'telecom-network.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 13,
    name: 'telecom',
    route: 'telecom network',
    image: link + 'telecom-network.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 14,
    name: 'Fork Freight',
    route: 'companies',
    image: link + 'companies.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  },
  {
    id: 15,
    name: 'Emumba',
    route: 'companies',
    image: link + 'companies.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique impedit reiciendis corporis molestias deleniti dicta perferendis eligendi atque! Tempora iusto amet quasi quisquam voluptatibus porro fugiat fugit vel recusandae praesentium optio atque, non ducimus eaque et illum aut obcaecati delectus beatae enim facilis accusamus asperiores maxime. Vero ab aliquid enim error beatae? Ratione eius perferendis est nam fugiat, debitis accusantium quisquam id ad itaque perspiciatis neque, quos, repellat blanditiis laborum corrupti nihil! Nostrum harum voluptates corrupti aut. Magnam repellat iusto perferendis? Vero eos eligendi, ducimus magnam ipsa, officia nobis saepe ipsum illo fuga consequatur doloribus suscipit quis explicabo earum quasi ad! Libero praesentium porro saepe repudiandae placeat iusto dolorum itaque odio necessitatibus, velit maxime dolorem, molestiae labore. Numquam laboriosam iusto modi ad animi mollitia, deleniti reiciendis minus necessitatibus! Voluptatibus placeat exercitationem, ad, vitae rem at praesentium ut quasi rerum reiciendis facilis odio deleniti quis veniam inventore aperiam, distinctio consequatur totam? Tempore, molestiae asperiores illo distinctio cupiditate fugit beatae saepe optio animi nulla autem est modi doloremque nemo iste quam voluptates aut, quae accusantium perspiciatis laborum, corporis accusamus eius minus! Quisquam neque porro, alias unde recusandae iste veritatis odio optio officiis, laudantium dolor amet saepe eum mollitia cupiditate eaque aliquam.'
  }
]

export default subCategoriesList
