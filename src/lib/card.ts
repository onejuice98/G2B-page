const CARD_COUNT = 15;
const OFFSET_VALUES = [
  { min: -0.2269, max: -0.135 },
  { min: -0.6928, max: -0.4529 },
  { min: -1.0979, max: -0.833 },
  { min: -1.4929, max: -1.176 },
  { min: -1.837, max: -1.5369 },
  { min: -2.2289, max: -1.9199 },
  { min: -2.567, max: -2.3 },
  { min: -2.9189, max: -2.7099 },
  { min: 0.042, max: 0.4141 },
  { min: 0.438, max: 0.815 },
  { min: 0.871, max: 1.2151 },
  { min: 1.2921, max: 1.697 },
  { min: 1.7362, max: 2.086 },
  { min: 2.173, max: 2.527 },
  { min: 2.663, max: 2.877 },
];

export const offsetRand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// 피셔-예이츠 셔플 알고리즘
const shuffle = (array: number[]) => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));

    const temp = array[index];
    array[index] = array[randomPosition];
    array[randomPosition] = temp;
  }
  return array;
};

export const randSelect = (maxCount: number) => {
  const result: number[] = [];
  let count = 0;
  while (count < maxCount) {
    let num = Math.floor(offsetRand(0, 14));
    if (!result.includes(num)) {
      result.push(num);
      count += 1;
    }
  }
  return result;
};
// 랜덤 카드 생성기
export const randCardValue = () => {
  const cardValues: number[] = [];
  for (let i = 0; i < CARD_COUNT; i++) {
    cardValues.push(offsetRand(OFFSET_VALUES[i].min, OFFSET_VALUES[i].max));
  }
  return shuffle(cardValues);
};
/*
const test = [
    {
      target: 170130000,
      tests: [
        170201500, 170960300, 169786400, 173279200, 168712900, 165164000,
        172945700, 167744800, 169318500, 166337900, 167515200, 174994100,
        174429200, 165784900, 171611900,
      ],
    },
    {
      target: 168576000,
      tests: [
        164248700, 166593600, 172043700, 169274000, 168335000, 172611800,
        165951300, 167530900, 171436800, 173147800, 163945300, 169314400,
        164928100, 167148200, 170046000,
      ],
    },
    {
      target: 99240000,
      tests: [
        98356800, 97983700, 97417000, 96436500, 99447500, 100298900, 101017400,
        101882800, 96843400, 99035600, 100789200, 97233400, 101651600, 98790500,
        99866300,
      ],
    },
    {
      target: 40300000,
      tests: [
        41283800, 39207900, 39607300, 40245600, 40392700, 40999700, 40592600,
        40652700, 39725400, 39950200, 40020800, 40820700, 39526300, 41384100,
        39373100,
      ],
    },
    {
      target: 68720000,
      tests: [
        67694100, 68564100, 69750200, 68312500, 70153500, 66735400, 69555000,
        67965500, 67114100, 68852700, 69280100, 67362100, 67514700, 70213300,
        70697100,
      ],
    },
  ];

  let result: any = [];
  const results = test.map((value) => {
    let temp: number[] = [];
    value.tests.map((price) => {
      temp.push(((price - value.target) / value.target) * 100);
    });
    temp.sort();
    result.push(temp);

  });
  */
