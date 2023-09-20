import { ArmorSet } from "@/models/ArmorSet";

export const armorSetDataMock: ArmorSet = {
  id: 91,
  rank: "high",
  name: "Zorah Alpha",
  pieces: [
    {
      id: 395,
      type: "head",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Headgear Alpha",
      slots: [],
      skills: [
        {
          id: 114,
          level: 1,
          skill: 34,
          description: "Blast buildup +5% Bonus: +10",
          skillName: "Blast Attack",
        },
        {
          id: 142,
          level: 1,
          skill: 44,
          description: "Weapon sharpness +10",
          skillName: "Handicraft",
        },
      ],
      armorSet: 91,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/b8f3c5428adf28758a8e4f9ee7080348333468cc.09abb79aed1363328ff3adca5758d5d7.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/5dba84d9621f8c5d92ee08c1320d1cd1a19492e4.41c6c1b1c7da943a5f7bcba39e78e3c3.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 6,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 8,
            item: {
              id: 118,
              rarity: 4,
              carryLimit: 99,
              value: 480,
              name: "Dragonite Ore",
              description:
                "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
            },
          },
        ],
      },
    },
    {
      id: 396,
      type: "chest",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Hide Alpha",
      slots: [],
      skills: [
        {
          id: 28,
          level: 1,
          skill: 10,
          description: "Slightly reduces the effects of minor wind pressure.",
          skillName: "Windproof",
        },
        {
          id: 115,
          level: 2,
          skill: 34,
          description: "Blast buildup +10% Bonus: +10",
          skillName: "Blast Attack",
        },
      ],
      armorSet: 91,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/775403ebd604ab3f719d728e20dce8e8067ec3b3.bad51cfcdfbf9e6b3d6db3576f36844c.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/66570c896ef9d7958ad07593f8bfc67f12579c30.cd645888e39fbc90dbe22b5ac433f72d.png",
      },
      crafting: {
        materials: [
          {
            quantity: 6,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 379,
              rarity: 6,
              carryLimit: 99,
              value: 1600,
              name: "Zorah Magdaros Pleura",
              description:
                "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor.",
            },
          },
        ],
      },
    },
    {
      id: 397,
      type: "gloves",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Claws Alpha",
      slots: [],
      skills: [
        {
          id: 120,
          level: 1,
          skill: 38,
          description:
            "Draws out 33% of hidden element and expands clip size for some ammo.",
          skillName: "Free Elem/Ammo Up",
        },
        {
          id: 241,
          level: 1,
          skill: 77,
          description: "Explosive power +10%",
          skillName: "Bombardier",
        },
      ],
      armorSet: 91,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/86dac7d13bbba6e3031ba99566ba56ce16f0b431.aa4c95359760d6a4255af250c9eb81b3.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/a912c1cd7e8748ccc267974ea7dd4ed0de2e2fc1.45c538c56ea8f0696050d9d3453ea18a.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 379,
              rarity: 6,
              carryLimit: 99,
              value: 1600,
              name: "Zorah Magdaros Pleura",
              description:
                "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
          {
            quantity: 8,
            item: {
              id: 118,
              rarity: 4,
              carryLimit: 99,
              value: 480,
              name: "Dragonite Ore",
              description:
                "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
            },
          },
        ],
      },
    },
    {
      id: 398,
      type: "waist",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Spine Alpha",
      slots: [],
      skills: [
        {
          id: 33,
          level: 1,
          skill: 11,
          description: "Nullifies minor ground tremors.",
          skillName: "Tremor Resistance",
        },
        {
          id: 179,
          level: 1,
          skill: 55,
          description:
            "Increases attack by 10% and defense by 15% with each use.",
          skillName: "Fortify",
        },
      ],
      armorSet: 91,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/bced3df21e200636e0229c61f68f65dfb82cf978.6e835f24bfc8e112e5ebef19ebdc3c94.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/d2672056c8885927cabd8014f878d0577505b6aa.99a9be932b1beeacc0d5d21a8488cd3a.png",
      },
      crafting: {
        materials: [
          {
            quantity: 8,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
        ],
      },
    },
    {
      id: 399,
      type: "legs",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Spurs Alpha",
      slots: [],
      skills: [
        {
          id: 23,
          level: 1,
          skill: 9,
          description: "Slightly reduces the effects of weak monster roars.",
          skillName: "Earplugs",
        },
        {
          id: 242,
          level: 2,
          skill: 77,
          description: "Explosive power +20%",
          skillName: "Bombardier",
        },
      ],
      armorSet: 91,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/55bcded97a8fbad3019dc6cef2207d1803eb4d03.d7229d70f31f38c31c489eb6eaeca4e1.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/7034eea36aee57888aba25b1e595ccc7b173a19e.3cfc00f8c659617bddce5798cd5bda46.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 381,
              rarity: 7,
              carryLimit: 99,
              value: 6000,
              name: "Zorah Magdaros Gem",
              description:
                "A rare gem said to have formed with Zorah Magdaros tissue. Holds untold potential.",
            },
          },
        ],
      },
    },
  ],
  bonus: {
    id: 9,
    name: "Zorah Magdaros Mastery",
    ranks: [
      {
        pieces: 3,
        skill: {
          id: 323,
          level: 1,
          modifiers: {},
          skill: 124,
          skillName: "Critical Status",
        },
        description:
          "Increases abnormal status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
      },
    ],
  },
};

export const armorSetDataMockOther: ArmorSet = {
  id: 92,
  rank: "high",
  name: "Zorah Beta",
  pieces: [
    {
      id: 400,
      type: "head",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Headgear Beta",
      slots: [
        {
          rank: 1,
        },
      ],
      skills: [
        {
          id: 142,
          level: 1,

          skill: 44,
          description: "Weapon sharpness +10",
          skillName: "Handicraft",
        },
      ],
      armorSet: 92,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/b08ddfecaa96f99beaffe5a771284a677848d8bf.ce209432986f7e9701308441585e0170.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/6ff3f07535be47471fc552efd095c8602a5db44c.9e1911573f9963b5f865a3867f95f12d.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 6,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 8,
            item: {
              id: 118,
              rarity: 4,
              carryLimit: 99,
              value: 480,
              name: "Dragonite Ore",
              description:
                "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
            },
          },
        ],
      },
    },
    {
      id: 401,
      type: "chest",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Hide Beta",
      slots: [
        {
          rank: 2,
        },
      ],
      skills: [
        {
          id: 115,
          level: 2,

          skill: 34,
          description: "Blast buildup +10% Bonus: +10",
          skillName: "Blast Attack",
        },
      ],
      armorSet: 92,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/814cd1aca432347528e3221528f9121970641653.6a7fcc537a49263ac36a8cf8df3f7baa.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/66570c896ef9d7958ad07593f8bfc67f12579c30.cd645888e39fbc90dbe22b5ac433f72d.png",
      },
      crafting: {
        materials: [
          {
            quantity: 6,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 379,
              rarity: 6,
              carryLimit: 99,
              value: 1600,
              name: "Zorah Magdaros Pleura",
              description:
                "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor.",
            },
          },
        ],
      },
    },
    {
      id: 402,
      type: "gloves",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Claws Beta",
      slots: [
        {
          rank: 1,
        },
      ],
      skills: [
        {
          id: 120,
          level: 1,

          skill: 38,
          description:
            "Draws out 33% of hidden element and expands clip size for some ammo.",
          skillName: "Free Elem/Ammo Up",
        },
      ],
      armorSet: 92,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/3248bfaa055d5b8fca1157760730ce8c627dd0ed.de2fd90de3a709d11b6563b7654ed60e.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/69bfd522c67676d58fd9ee76e3e44704ffe619a1.ecc00107b161623baafe353cf41e4251.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 379,
              rarity: 6,
              carryLimit: 99,
              value: 1600,
              name: "Zorah Magdaros Pleura",
              description:
                "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
          {
            quantity: 8,
            item: {
              id: 118,
              rarity: 4,
              carryLimit: 99,
              value: 480,
              name: "Dragonite Ore",
              description:
                "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
            },
          },
        ],
      },
    },
    {
      id: 403,
      type: "waist",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Spine Beta",
      slots: [
        {
          rank: 2,
        },
      ],
      skills: [
        {
          id: 179,
          level: 1,

          skill: 55,
          description:
            "Increases attack by 10% and defense by 15% with each use.",
          skillName: "Fortify",
        },
      ],
      armorSet: 92,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/806b8c9a848f17431942e1cd55deb9b2677474cc.32500de76cffb7813cbeae03e743b192.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/792d4f47bc7fb69487d110b524da80dcd56762bb.0f2ee986af4fbd90dbc9121b52f763ff.png",
      },
      crafting: {
        materials: [
          {
            quantity: 8,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 376,
              rarity: 6,
              carryLimit: 99,
              value: 800,
              name: "Zorah Magdaros Heat Scale",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 2,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
        ],
      },
    },
    {
      id: 404,
      type: "legs",
      rank: "high",
      rarity: 6,
      attributes: {},
      defense: {
        base: 44,
        max: 64,
        augmented: 76,
      },
      resistances: {
        fire: 4,
        water: -3,
        ice: -2,
        thunder: -1,
        dragon: -3,
      },
      name: "Zorah Spurs Beta",
      slots: [
        {
          rank: 2,
        },
      ],
      skills: [
        {
          id: 242,
          level: 2,

          skill: 77,
          description: "Explosive power +20%",
          skillName: "Bombardier",
        },
      ],
      armorSet: 92,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/d632a168f121be729fd97f4c3b48a7b15fd28eaa.73f07deb805de7d3a94e244c21b3121c.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/2c03890eb7f906e27cbb2fafda54d35d37f5baef.196673b762bc4de485a423a1b709901f.png",
      },
      crafting: {
        materials: [
          {
            quantity: 3,
            item: {
              id: 378,
              rarity: 6,
              carryLimit: 99,
              value: 1400,
              name: "Zorah Magdaros Ridge",
              description:
                "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 377,
              rarity: 6,
              carryLimit: 99,
              value: 1200,
              name: "Zorah Magdaros Carapace",
              description:
                "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear.",
            },
          },
          {
            quantity: 3,
            item: {
              id: 380,
              rarity: 6,
              carryLimit: 99,
              value: 3200,
              name: "Zorah Magdaros Magma",
              description:
                "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle.",
            },
          },
          {
            quantity: 1,
            item: {
              id: 381,
              rarity: 7,
              carryLimit: 99,
              value: 6000,
              name: "Zorah Magdaros Gem",
              description:
                "A rare gem said to have formed with Zorah Magdaros tissue. Holds untold potential.",
            },
          },
        ],
      },
    },
  ],
  bonus: {
    id: 9,
    name: "Zorah Magdaros Mastery",
    ranks: [
      {
        pieces: 3,
        skill: {
          id: 323,
          level: 1,
          modifiers: {},
          skill: 124,
          skillName: "Critical Status",
        },
        description:
          "Increases abnormal status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
      },
    ],
  },
};

export const armorSetListDataMock: ArmorSet[] = [
  armorSetDataMock,
  armorSetDataMockOther,
];
