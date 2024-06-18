const { Product } = require("../db");

const fillProduct = async () => {
  try {
    const product1 = await Product.create({
      name: "Remera 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527718/vtsport/nukq2tueujfvkxa81gm5.jpg",
      price: 2000,
    });
    await product1.setGenre(1);
    await product1.setType(1);
    await product1.addWaist([1, 2]);
    const product2 = await Product.create({
      name: "Remera 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527718/vtsport/ob0twziws0vvo2mkdfqg.jpg",
      price: 4000,
    });
    await product2.setGenre(1);
    await product2.setType(2);
    await product2.addWaist([2, 3]);
    const product3 = await Product.create({
      name: "Remera 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527718/vtsport/hq2nn0whwukzssfavny2.jpg",
      price: 4500,
    });
    await product3.setGenre(1);
    await product3.setType(2);
    await product3.addWaist([2, 3]);
    const product4 = await Product.create({
      name: "Remera 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527718/vtsport/wqz5vm24hjp7uaarhfdy.jpg",
      price: 4500,
    });
    await product4.setGenre(1);
    await product4.setType(1);
    await product4.addWaist([1, 3, 6]);
    const product5 = await Product.create({
      name: "Remera 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/exrs48z60nr4mnl4v5kz.jpg",
      price: 4500,
    });
    await product5.setGenre(1);
    await product5.setType(1);
    await product5.addWaist([1, 3, 6]);
    const product6 = await Product.create({
      name: "Remera 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/sbf5opthbcfrtujw9qtd.jpg",
      price: 4500,
    });
    await product6.setGenre(1);
    await product6.setType(1);
    await product6.addWaist([1, 6]);
    const product7 = await Product.create({
      name: "Remera 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/nhjeebijxbkyc6ci5qx5.jpg",
      price: 4500,
    });
    await product7.setGenre(1);
    await product7.setType(1);
    await product7.addWaist([1, 6]);
    const product8 = await Product.create({
      name: "Remera 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/djgcznpzsbxrrwqxvhqb.jpg",
      price: 3200,
    });
    await product8.setGenre(1);
    await product8.setType(2);
    await product8.addWaist([5]);
    const product9 = await Product.create({
      name: "Remera 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/vxwnngoatraiqb11jlze.jpg",
      price: 6000,
    });
    await product9.setGenre(1);
    await product9.setType(1);
    await product9.addWaist([2]);
    const product10 = await Product.create({
      name: "Remera 10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/em3aaffvx0lzyz3z50ty.jpg",
      price: 6000,
    });
    await product10.setGenre(1);
    await product10.setType(1);
    await product10.addWaist([1, 2, 3, 4, 5]);
    const product11 = await Product.create({
      name: "Remera 11",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/fk9ahoyusfbbakrdqhml.jpg",
      price: 3000,
    });
    await product11.setGenre(1);
    await product11.setType(1);
    await product11.addWaist([1, 2, 3]);
    const product12 = await Product.create({
      name: "Remera 12",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/o6vhyz4qnhso67sqpefn.jpg",
      price: 3500,
    });
    await product12.setGenre(1);
    await product12.setType(2);
    await product12.addWaist([3]);
    const product13 = await Product.create({
      name: "Remera 13",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527719/vtsport/iiz8ygmeai4rfefwfsfb.jpg",
      price: 4500,
    });
    await product13.setGenre(2);
    await product13.setType(2);
    await product13.addWaist([1, 2]);
    const product14 = await Product.create({
      name: "Remera 14",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/bqs5pa39jvws8d29zuk1.jpg",
      price: 4500,
    });
    await product14.setGenre(1);
    await product14.setType(2);
    await product14.addWaist([1, 2, 4]);
    const product15 = await Product.create({
      name: "Remera 15",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/bqs5pa39jvws8d29zuk1.jpg",
      price: 4500,
    });
    await product15.setGenre(1);
    await product15.setType(3);
    await product15.addWaist([4]);
    const product16 = await Product.create({
      name: "Remera 16",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/nmvuxv58xiuj4bsccymx.jpg",
      price: 1300,
    });
    await product16.setGenre(1);
    await product16.setType(2);
    await product16.addWaist([4, 8]);
    const product17 = await Product.create({
      name: "Remera 17",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/ekl8bnwtnbw4wud8le46.jpg",
      price: 7510,
    });
    await product17.setGenre(2);
    await product17.setType(2);
    await product17.addWaist([8, 1, 2]);
    const product18 = await Product.create({
      name: "Remera 18",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/htvzdcn3cn3ex7fzqjnc.jpg",
      price: 1200,
    });
    await product18.setGenre(2);
    await product18.setType(2);
    await product18.addWaist([1, 2]);
    const product19 = await Product.create({
      name: "Remera 19",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/vpgisunadcivg4mxpffo.jpg",
      price: 4600,
    });
    await product19.setGenre(2);
    await product19.setType(2);
    await product19.addWaist([1, 2, 6]);
    const product20 = await Product.create({
      name: "Remera 20",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/npfwzdsruwxgncblkotx.jpg",
      price: 2500,
    });
    await product20.setGenre(1);
    await product20.setType(3);
    await product20.addWaist([6]);
    const product21 = await Product.create({
      name: "Remera 21",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/qrguiippfwiqzxmboq1w.jpg",
      price: 2000,
    });
    await product21.setGenre(1);
    await product21.setType(1);
    await product21.addWaist([6, 4, 5]);
    const product22 = await Product.create({
      name: "Remera 22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/vqfrmtzk5xxvxveokicl.jpg",
      price: 10200,
    });
    await product22.setGenre(2);
    await product22.setType(1);
    await product22.addWaist([1]);
    const product23 = await Product.create({
      name: "Remera 23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/mgcqtnhhg7wmujpmonur.jpg",
      price: 8200,
    });
    await product23.setGenre(2);
    await product23.setType(1);
    await product23.addWaist([1, 2]);
    const product24 = await Product.create({
      name: "Remera 24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527720/vtsport/yyfwzd8ugbw8aoevhnqv.jpg",
      price: 6000,
    });
    await product24.setGenre(1);
    await product24.setType(1);
    await product24.addWaist([1, 2]);
    const product25 = await Product.create({
      name: "Remera 25",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/lzmjzmdxh0x0y5hlnyfn.jpg",
      price: 1200,
    });
    await product25.setGenre(1);
    await product25.setType(1);
    await product25.addWaist([1, 2, 5]);
    const product26 = await Product.create({
      name: "Remera 26",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/psxh0kkgmvkaal1p7yzw.jpg",
      price: 1200,
    });
    await product26.setGenre(1);
    await product26.setType(1);
    await product26.addWaist([5, 7]);
    const product27 = await Product.create({
      name: "Remera 27",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/mapfzosilwww3fujrbw4.jpg",
      price: 1200,
    });
    await product27.setGenre(2);
    await product27.setType(3);
    await product27.addWaist([3]);
    const product28 = await Product.create({
      name: "Remera 28",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/kpfxnmimtikvzyf14ohe.jpg",
      price: 3500,
    });
    await product28.setGenre(2);
    await product28.setType(3);
    await product28.addWaist([3]);
    const product29 = await Product.create({
      name: "Remera 29",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/d2h5igeqjhs0uiqv3eil.jpg",
      price: 3500,
    });
    await product29.setGenre(1);
    await product29.setType(3);
    await product29.addWaist([3, 6]);
    const product30 = await Product.create({
      name: "Remera 30",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/e9kubucq36rhld1yhdk3.jpg",
      price: 3500,
    });
    await product30.setGenre(3);
    await product30.setType(3);
    await product30.addWaist([3]);
    const product31 = await Product.create({
      name: "Remera 31",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/o8gjbwa300qbcylt678g.jpg",
      price: 2500,
    });
    await product31.setGenre(1);
    await product31.setType(2);
    await product31.addWaist([3, 4]);
    const product32 = await Product.create({
      name: "Remera 32",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/vcefcojxc9e45ihfb4mh.jpg",
      price: 2500,
    });
    await product32.setGenre(1);
    await product32.setType(1);
    await product32.addWaist([4, 5]);
    const product33 = await Product.create({
      name: "Remera 33",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dytke2vlw/image/upload/v1701527721/vtsport/swccl9izdryunnahw3ng.jpg",
      price: 2500,
    });
    await product33.setGenre(1);
    await product33.setType(1);
    await product33.addWaist([5, 6]);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillProduct;
