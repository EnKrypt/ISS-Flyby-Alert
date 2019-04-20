const markers = [
    [
        'Kabul, Afghanistan',
        34.5553494,
        69.207486,
        'None',
        'Afghanistan',
        'Kabul'
    ],
    ['Tirana, Albania', 41.3275459, 19.8186982, 'None', 'Albania', 'Tirana'],
    ['Algiers, Algeria', 36.7537703, 3.0587927, 'None', 'Algeria', 'Algiers'],
    ['Luanda, Angola', -8.8399876, 13.2894368, 'None', 'Angola', 'Luanda'],
    [
        'Saint Johns, Antigua',
        17.0746557,
        -61.8175207,
        'None',
        'Antigua',
        'Saint_Johns'
    ],
    [
        'Bariloche, Argentina',
        -41.1334722,
        -71.3102778,
        'None',
        'Argentina',
        'Bariloche'
    ],
    [
        'Buenos Aires, Argentina',
        -34.6036844,
        -58.3815591,
        'None',
        'Argentina',
        'Buenos_Aires'
    ],
    [
        'Campana, Argentina',
        -34.1633346,
        -58.9592643,
        'None',
        'Argentina',
        'Campana'
    ],
    [
        'Ceres, Argentina',
        -29.8817186,
        -61.9460573,
        'None',
        'Argentina',
        'Ceres'
    ],
    [
        'Cordoba, Argentina',
        -31.4200833,
        -64.1887761,
        'None',
        'Argentina',
        'Cordoba'
    ],
    [
        'Corrientes, Argentina',
        -27.4692131,
        -58.8306349,
        'None',
        'Argentina',
        'Corrientes'
    ],
    [
        'Formosa, Argentina',
        -26.1857768,
        -58.1755669,
        'None',
        'Argentina',
        'Formosa'
    ],
    [
        'General Roca, Argentina',
        -39.0267525,
        -67.5751724,
        'None',
        'Argentina',
        'General_Roca'
    ],
    [
        'La Plata, Argentina',
        -34.9204948,
        -57.9535657,
        'None',
        'Argentina',
        'La_Plata'
    ],
    [
        'La Rioja, Argentina',
        -29.413454,
        -66.856458,
        'None',
        'Argentina',
        'La_Rioja'
    ],
    [
        'Mar del Plata, Argentina',
        -38.0054771,
        -57.5426106,
        'None',
        'Argentina',
        'Mar_del_Plata'
    ],
    [
        'Mendoza, Argentina',
        -32.8894587,
        -68.8458386,
        'None',
        'Argentina',
        'Mendoza'
    ],
    ['Moron, Argentina', -34.655861, -58.616721, 'None', 'Argentina', 'Moron'],
    [
        'Neuquen, Argentina',
        -38.9516784,
        -68.0591888,
        'None',
        'Argentina',
        'Neuquen'
    ],
    [
        'Parana, Argentina',
        -31.7413197,
        -60.5115471,
        'None',
        'Argentina',
        'Parana'
    ],
    [
        'Posadas, Argentina',
        -27.3621374,
        -55.9008746,
        'None',
        'Argentina',
        'Posadas'
    ],
    [
        'Rawson, Argentina',
        -43.2998581,
        -65.0994873,
        'None',
        'Argentina',
        'Rawson'
    ],
    [
        'Resistencia, Argentina',
        -27.4518622,
        -58.9855547,
        'None',
        'Argentina',
        'Resistencia'
    ],
    [
        'Rio Gallegos, Argentina',
        -51.6230485,
        -69.2168291,
        'None',
        'Argentina',
        'Rio_Gallegos'
    ],
    [
        'Salta, Argentina',
        -24.7821269,
        -65.4231976,
        'None',
        'Argentina',
        'Salta'
    ],
    [
        'Santa Fe, Argentina',
        -31.6106578,
        -60.697294,
        'None',
        'Argentina',
        'Santa_Fe'
    ],
    [
        'Santa Rosa, Argentina',
        -36.620922,
        -64.291237,
        'None',
        'Argentina',
        'Santa_Rosa'
    ],
    [
        'Santiago del Estero, Argentina',
        -27.7833574,
        -64.264167,
        'None',
        'Argentina',
        'Santiago_del_Estero'
    ],
    [
        'San Fernando del Valle, Argentina',
        -28.469581,
        -65.7795441,
        'None',
        'Argentina',
        'San_Fernando_del_Valle'
    ],
    [
        'San Juan, Argentina',
        -31.535107,
        -68.538594,
        'None',
        'Argentina',
        'San_Juan'
    ],
    [
        'San Luis, Argentina',
        -33.3017267,
        -66.3377522,
        'None',
        'Argentina',
        'San_Luis'
    ],
    [
        'San Miguel de Tucuman, Argentina',
        -26.8082848,
        -65.2175903,
        'None',
        'Argentina',
        'San_Miguel_de_Tucuman'
    ],
    [
        'San Pedro, Argentina',
        -33.6757835,
        -59.6628664,
        'None',
        'Argentina',
        'San_Pedro'
    ],
    [
        'San Salvador de Jujuy, Argentina',
        -24.1857864,
        -65.2994767,
        'None',
        'Argentina',
        'San_Salvador_de_Jujuy'
    ],
    [
        'Ushuaia, Argentina',
        -54.8019121,
        -68.3029511,
        'None',
        'Argentina',
        'Ushuaia'
    ],
    [
        'Viedma, Argentina',
        -40.8119087,
        -62.9962044,
        'None',
        'Argentina',
        'Viedma'
    ],
    [
        'Oranjestad, Aruba',
        12.5092044,
        -70.0086306,
        'None',
        'Aruba',
        'Oranjestad'
    ],
    ['Canberra, ACT', -35.2809368, 149.1300092, 'ACT', 'Australia', 'Canberra'],
    [
        'Albury, New South Wales',
        -36.0737293,
        146.9135418,
        'New_South_Wales',
        'Australia',
        'Albury'
    ],
    [
        'Armidale, New South Wales',
        -30.5015616,
        151.6661993,
        'New_South_Wales',
        'Australia',
        'Armidale'
    ],
    [
        'Broken Hill, New South Wales',
        -31.9539135,
        141.4539396,
        'New_South_Wales',
        'Australia',
        'Broken_Hill'
    ],
    [
        'Casino, New South Wales',
        -28.866667,
        153.05,
        'New_South_Wales',
        'Australia',
        'Casino'
    ],
    [
        'Cessnock, New South Wales',
        -32.8345098,
        151.3624266,
        'New_South_Wales',
        'Australia',
        'Cessnock'
    ],
    [
        'Coffs Harbour, New South Wales',
        -30.298612,
        153.1093922,
        'New_South_Wales',
        'Australia',
        'Coffs_Harbour'
    ],
    [
        'Coonabarabran, New South Wales',
        -31.2733434,
        149.219061,
        'New_South_Wales',
        'Australia',
        'Coonabarabran'
    ],
    [
        'Cootamundra, New South Wales',
        -34.641667,
        148.025,
        'New_South_Wales',
        'Australia',
        'Cootamundra'
    ],
    [
        'Forster, New South Wales',
        -32.180556,
        152.511667,
        'New_South_Wales',
        'Australia',
        'Forster'
    ],
    [
        'Grafton, New South Wales',
        -29.6816894,
        152.9336547,
        'New_South_Wales',
        'Australia',
        'Grafton'
    ],
    [
        'Griffith, New South Wales',
        -34.2800883,
        146.0455313,
        'New_South_Wales',
        'Australia',
        'Griffith'
    ],
    [
        'Khancoban, New South Wales',
        -36.22,
        148.126944,
        'New_South_Wales',
        'Australia',
        'Khancoban'
    ],
    [
        'Kurri Kurri, New South Wales',
        -32.816667,
        151.483333,
        'New_South_Wales',
        'Australia',
        'Kurri_Kurri'
    ],
    [
        'Lake Macquarie, New South Wales',
        -33.0539197,
        151.6432586,
        'New_South_Wales',
        'Australia',
        'Lake_Macquarie'
    ],
    [
        'Lismore, New South Wales',
        -28.8093154,
        153.2882876,
        'New_South_Wales',
        'Australia',
        'Lismore'
    ],
    [
        'Lithgow, New South Wales',
        -33.4827345,
        150.1570173,
        'New_South_Wales',
        'Australia',
        'Lithgow'
    ],
    [
        'Nelson Bay, New South Wales',
        -32.715,
        152.151111,
        'New_South_Wales',
        'Australia',
        'Nelson_Bay'
    ],
    [
        'Newcastle, New South Wales',
        -32.928333,
        151.781667,
        'New_South_Wales',
        'Australia',
        'Newcastle'
    ],
    [
        'Parkes, New South Wales',
        -33.1372943,
        148.1747161,
        'New_South_Wales',
        'Australia',
        'Parkes'
    ],
    [
        'Penrith, New South Wales',
        -33.75,
        150.7,
        'New_South_Wales',
        'Australia',
        'Penrith'
    ],
    [
        'Sydney, New South Wales',
        -33.8688197,
        151.2092955,
        'New_South_Wales',
        'Australia',
        'Sydney'
    ],
    [
        'Tamworth, New South Wales',
        -31.092748,
        150.9320334,
        'New_South_Wales',
        'Australia',
        'Tamworth'
    ],
    [
        'Tweed Heads, New South Wales',
        -28.1786656,
        153.5370011,
        'New_South_Wales',
        'Australia',
        'Tweed_Heads'
    ],
    [
        'Wagga Wagga, New South Wales',
        -35.1081689,
        147.3598323,
        'New_South_Wales',
        'Australia',
        'Wagga_Wagga'
    ],
    [
        'Wollongong, New South Wales',
        -34.4278121,
        150.8930607,
        'New_South_Wales',
        'Australia',
        'Wollongong'
    ],
    [
        'Kingston, Norfolk Island',
        -29.0563937,
        167.959588,
        'Norfolk_Island',
        'Australia',
        'Kingston'
    ],
    [
        'Alice Springs, Northern Territory',
        -23.698042,
        133.8807471,
        'Northern_Territory',
        'Australia',
        'Alice_Springs'
    ],
    [
        'Darwin, Northern Territory',
        -12.4634403,
        130.8456418,
        'Northern_Territory',
        'Australia',
        'Darwin'
    ],
    [
        'Katherine, Northern Territory',
        -14.4521139,
        132.2715145,
        'Northern_Territory',
        'Australia',
        'Katherine'
    ],
    [
        'Bowen, Queensland',
        -20.0014803,
        148.2262176,
        'Queensland',
        'Australia',
        'Bowen'
    ],
    [
        'Brisbane, Queensland',
        -27.4697707,
        153.0251235,
        'Queensland',
        'Australia',
        'Brisbane'
    ],
    [
        'Cairns, Queensland',
        -16.9185514,
        145.7780548,
        'Queensland',
        'Australia',
        'Cairns'
    ],
    [
        'Caloundra, Queensland',
        -26.799,
        153.133,
        'Queensland',
        'Australia',
        'Caloundra'
    ],
    [
        'Emerald, Queensland',
        -23.527291,
        148.164573,
        'Queensland',
        'Australia',
        'Emerald'
    ],
    [
        'Gladstone, Queensland',
        -23.8426494,
        151.2488592,
        'Queensland',
        'Australia',
        'Gladstone'
    ],
    [
        'Mackay, Queensland',
        -21.1424956,
        149.1821469,
        'Queensland',
        'Australia',
        'Mackay'
    ],
    [
        'Maryborough, Queensland',
        -25.5232627,
        152.6970636,
        'Queensland',
        'Australia',
        'Maryborough'
    ],
    [
        'Rockhampton, Queensland',
        -23.3790772,
        150.510016,
        'Queensland',
        'Australia',
        'Rockhampton'
    ],
    [
        'Toowoomba, Queensland',
        -27.5598212,
        151.9506696,
        'Queensland',
        'Australia',
        'Toowoomba'
    ],
    [
        'Townsville, Queensland',
        -19.2589635,
        146.8169483,
        'Queensland',
        'Australia',
        'Townsville'
    ],
    [
        'Adelaide, South Australia',
        -34.9284989,
        138.6007456,
        'South_Australia',
        'Australia',
        'Adelaide'
    ],
    [
        'Leigh Creek, South Australia',
        -30.5908141,
        138.3992865,
        'South_Australia',
        'Australia',
        'Leigh_Creek'
    ],
    [
        'Peterborough, South Australia',
        -32.974213,
        138.8343623,
        'South_Australia',
        'Australia',
        'Peterborough'
    ],
    [
        'Woomera, South Australia',
        -31.1656389,
        136.8192607,
        'South_Australia',
        'Australia',
        'Woomera'
    ],
    [
        'Burnie, Tasmania',
        -41.0528583,
        145.9052168,
        'Tasmania',
        'Australia',
        'Burnie'
    ],
    [
        'Hobart, Tasmania',
        -42.8821377,
        147.3271949,
        'Tasmania',
        'Australia',
        'Hobart'
    ],
    [
        'Launceston, Tasmania',
        -41.4332215,
        147.1440875,
        'Tasmania',
        'Australia',
        'Launceston'
    ],
    [
        'Ballarat, Victoria',
        -37.5621587,
        143.8502556,
        'Victoria',
        'Australia',
        'Ballarat'
    ],
    [
        'Benalla, Victoria',
        -36.5462177,
        145.963353,
        'Victoria',
        'Australia',
        'Benalla'
    ],
    [
        'Bendigo, Victoria',
        -36.7570157,
        144.2793906,
        'Victoria',
        'Australia',
        'Bendigo'
    ],
    ['Cobram, Victoria', -35.966667, 145.65, 'Victoria', 'Australia', 'Cobram'],
    [
        'Dandenong, Victoria',
        -37.981,
        145.215,
        'Victoria',
        'Australia',
        'Dandenong'
    ],
    [
        'Melbourne, Victoria',
        -37.8136276,
        144.9630576,
        'Victoria',
        'Australia',
        'Melbourne'
    ],
    [
        'Mildura, Victoria',
        -34.2080167,
        142.1245535,
        'Victoria',
        'Australia',
        'Mildura'
    ],
    [
        'Pakenham, Victoria',
        -38.073568,
        145.4851308,
        'Victoria',
        'Australia',
        'Pakenham'
    ],
    [
        'Sale, Victoria',
        -38.1026004,
        147.073027,
        'Victoria',
        'Australia',
        'Sale'
    ],
    [
        'Shepparton, Victoria',
        -36.383333,
        145.4,
        'Victoria',
        'Australia',
        'Shepparton'
    ],
    [
        'Sunbury, Victoria',
        -37.581111,
        144.713889,
        'Victoria',
        'Australia',
        'Sunbury'
    ],
    [
        'Traralgon, Victoria',
        -38.2033531,
        146.519786,
        'Victoria',
        'Australia',
        'Traralgon'
    ],
    [
        'Tylden, Victoria',
        -37.3194005,
        144.4052024,
        'Victoria',
        'Australia',
        'Tylden'
    ],
    [
        'Warrnambool, Victoria',
        -38.3686779,
        142.4982086,
        'Victoria',
        'Australia',
        'Warrnambool'
    ],
    [
        'Yarram, Victoria',
        -38.565594,
        146.6751045,
        'Victoria',
        'Australia',
        'Yarram'
    ],
    [
        'Albany, Western Australia',
        -35.0275298,
        117.883959,
        'Western_Australia',
        'Australia',
        'Albany'
    ],
    [
        'Augusta, Western Australia',
        -34.293246,
        115.139245,
        'Western_Australia',
        'Australia',
        'Augusta'
    ],
    [
        'Balladonia, Western Australia',
        -32.2505105,
        124.1889498,
        'Western_Australia',
        'Australia',
        'Balladonia'
    ],
    [
        'Broome, Western Australia',
        -17.9614336,
        122.235852,
        'Western_Australia',
        'Australia',
        'Broome'
    ],
    [
        'Bunbury, Western Australia',
        -33.325636,
        115.6396494,
        'Western_Australia',
        'Australia',
        'Bunbury'
    ],
    [
        'Carnarvon, Western Australia',
        -24.884,
        113.661,
        'Western_Australia',
        'Australia',
        'Carnarvon'
    ],
    [
        'Cocklebiddy, Western Australia',
        -32.0376086,
        126.097027,
        'Western_Australia',
        'Australia',
        'Cocklebiddy'
    ],
    [
        'Derby, Western Australia',
        -17.3179064,
        123.6490372,
        'Western_Australia',
        'Australia',
        'Derby'
    ],
    [
        'Esperance, Western Australia',
        -33.8608027,
        121.8896205,
        'Western_Australia',
        'Australia',
        'Esperance'
    ],
    [
        'Eucla, Western Australia',
        -31.6772316,
        128.8897862,
        'Western_Australia',
        'Australia',
        'Eucla'
    ],
    [
        'Exmouth, Western Australia',
        -21.9445261,
        114.1313015,
        'Western_Australia',
        'Australia',
        'Exmouth'
    ],
    [
        'Fitzroy Crossing, Western Australia',
        -18.1906989,
        125.567496,
        'Western_Australia',
        'Australia',
        'Fitzroy_Crossing'
    ],
    [
        'Geraldton, Western Australia',
        -28.7773715,
        114.6149715,
        'Western_Australia',
        'Australia',
        'Geraldton'
    ],
    [
        'Kalgoorlie, Western Australia',
        -30.749,
        121.466,
        'Western_Australia',
        'Australia',
        'Kalgoorlie'
    ],
    [
        'Karratha, Western Australia',
        -20.73535,
        116.8458043,
        'Western_Australia',
        'Australia',
        'Karratha'
    ],
    [
        'Kununurra, Western Australia',
        -15.7785409,
        128.7416854,
        'Western_Australia',
        'Australia',
        'Kununurra'
    ],
    [
        'Lake Grace, Western Australia',
        -33.1,
        118.46,
        'Western_Australia',
        'Australia',
        'Lake_Grace'
    ],
    [
        'Laverton, Western Australia',
        -28.628,
        122.403,
        'Western_Australia',
        'Australia',
        'Laverton'
    ],
    [
        'Manjimup, Western Australia',
        -34.2455371,
        116.1442778,
        'Western_Australia',
        'Australia',
        'Manjimup'
    ],
    [
        'Meekatharra, Western Australia',
        -26.593611,
        118.495278,
        'Western_Australia',
        'Australia',
        'Meekatharra'
    ],
    [
        'Merredin, Western Australia',
        -31.4837097,
        118.2770821,
        'Western_Australia',
        'Australia',
        'Merredin'
    ],
    [
        'Mount Magnet, Western Australia',
        -28.06,
        117.846111,
        'Western_Australia',
        'Australia',
        'Mount_Magnet'
    ],
    [
        'Norseman, Western Australia',
        -32.196,
        121.778,
        'Western_Australia',
        'Australia',
        'Norseman'
    ],
    [
        'Northam, Western Australia',
        -31.6525301,
        116.6654836,
        'Western_Australia',
        'Australia',
        'Northam'
    ],
    [
        'Perth, Western Australia',
        -31.9505269,
        115.8604572,
        'Western_Australia',
        'Australia',
        'Perth'
    ],
    [
        'Port Hedland, Western Australia',
        -20.3106621,
        118.5878223,
        'Western_Australia',
        'Australia',
        'Port_Hedland'
    ],
    [
        'Rawlinna, Western Australia',
        -30.7641012,
        125.3836191,
        'Western_Australia',
        'Australia',
        'Rawlinna'
    ],
    [
        'Southern Cross, Western Australia',
        -31.230556,
        119.327778,
        'Western_Australia',
        'Australia',
        'Southern_Cross'
    ],
    [
        'Tom Price, Western Australia',
        -22.6938735,
        117.7938645,
        'Western_Australia',
        'Australia',
        'Tom_Price'
    ],
    [
        'Wagin, Western Australia',
        -33.3053993,
        117.3474325,
        'Western_Australia',
        'Australia',
        'Wagin'
    ],
    [
        'Warburton, Western Australia',
        -26.1352581,
        126.5782945,
        'Western_Australia',
        'Australia',
        'Warburton'
    ],
    [
        'Wiluna, Western Australia',
        -26.595,
        120.225,
        'Western_Australia',
        'Australia',
        'Wiluna'
    ],
    [
        'Wubin, Western Australia',
        -30.0803525,
        116.6136935,
        'Western_Australia',
        'Australia',
        'Wubin'
    ],
    [
        'Wyndham, Western Australia',
        -15.4825,
        128.122778,
        'Western_Australia',
        'Australia',
        'Wyndham'
    ],
    [
        'Yampi Sound, Western Australia',
        -16.1333333,
        123.6333333,
        'Western_Australia',
        'Australia',
        'Yampi_Sound'
    ],
    ['Baden, Austria', 48.00214, 16.23091, 'None', 'Austria', 'Baden'],
    [
        'Eibiswald, Austria',
        46.6883735,
        15.2464264,
        'None',
        'Austria',
        'Eibiswald'
    ],
    ['Gmunden, Austria', 47.91839, 13.79933, 'None', 'Austria', 'Gmunden'],
    ['Graz, Austria', 47.070714, 15.439504, 'None', 'Austria', 'Graz'],
    ['Horn, Austria', 48.66607, 15.65716, 'None', 'Austria', 'Horn'],
    [
        'Innsbruck, Austria',
        47.2692124,
        11.4041024,
        'None',
        'Austria',
        'Innsbruck'
    ],
    ['Judenburg, Austria', 47.16826, 14.65811, 'None', 'Austria', 'Judenburg'],
    [
        'Kapfenberg, Austria',
        47.4433293,
        15.2791914,
        'None',
        'Austria',
        'Kapfenberg'
    ],
    [
        'Klagenfurt, Austria',
        46.6364598,
        14.3122246,
        'None',
        'Austria',
        'Klagenfurt'
    ],
    ['Linz, Austria', 48.30694, 14.28583, 'None', 'Austria', 'Linz'],
    ['Melk, Austria', 48.233, 15.333, 'None', 'Austria', 'Melk'],
    ['Modling, Austria', 48.08255, 16.2869, 'None', 'Austria', 'Modling'],
    ['Murau, Austria', 47.11304, 14.16904, 'None', 'Austria', 'Murau'],
    ['Vienna, Austria', 48.2081743, 16.3738189, 'None', 'Austria', 'Vienna'],
    [
        'Vocklabruck, Austria',
        48.00334,
        13.65613,
        'None',
        'Austria',
        'Vocklabruck'
    ],
    ['Waidhofen, Austria', 47.96023, 14.77283, 'None', 'Austria', 'Waidhofen'],
    [
        'Andros Island, Bahamas',
        24.7063805,
        -78.0195387,
        'None',
        'Bahamas',
        'Andros_Island'
    ],
    [
        'Big Major Cay, Bahamas',
        24.1836,
        -76.4563,
        'None',
        'Bahamas',
        'Big_Major_Cay'
    ],
    ['Nassau, Bahamas', 25.0479835, -77.355413, 'None', 'Bahamas', 'Nassau'],
    ['Manama, Bahrain', 26.2285161, 50.5860497, 'None', 'Bahrain', 'Manama'],
    [
        'Chittagong, Bangladesh',
        22.3475365,
        91.8123324,
        'None',
        'Bangladesh',
        'Chittagong'
    ],
    [
        'Dhaka, Bangladesh',
        23.7716426,
        90.4014785,
        'None',
        'Bangladesh',
        'Dhaka'
    ],
    [
        'Bridgetown, Barbados',
        13.1132219,
        -59.5988089,
        'None',
        'Barbados',
        'Bridgetown'
    ],
    [
        'Bobruisk, Belarus',
        53.1446069,
        29.2213753,
        'None',
        'Belarus',
        'Bobruisk'
    ],
    ['Brest, Belarus', 52.097621, 23.73405, 'None', 'Belarus', 'Brest'],
    ['Gomel, Belarus', 52.4411761, 30.9878462, 'None', 'Belarus', 'Gomel'],
    ['Hrodna, Belarus', 53.6693538, 23.8131306, 'None', 'Belarus', 'Hrodna'],
    ['Minsk, Belarus', 53.9045398, 27.5615244, 'None', 'Belarus', 'Minsk'],
    ['Mogilev, Belarus', 53.9007159, 30.3313598, 'None', 'Belarus', 'Mogilev'],
    ['Viciebsk, Belarus', 55.1848061, 30.201622, 'None', 'Belarus', 'Viciebsk'],
    ['Aalst, Belgium', 50.9378101, 4.0409517, 'None', 'Belgium', 'Aalst'],
    ['Antwerp, Belgium', 51.2194475, 4.4024643, 'None', 'Belgium', 'Antwerp'],
    ['Bruges, Belgium', 51.209348, 3.2246995, 'None', 'Belgium', 'Bruges'],
    ['Brussels, Belgium', 50.8503396, 4.3517103, 'None', 'Belgium', 'Brussels'],
    [
        'Charleroi, Belgium',
        50.4108095,
        4.444643,
        'None',
        'Belgium',
        'Charleroi'
    ],
    ['Eeklo, Belgium', 51.1852719, 3.5638899, 'None', 'Belgium', 'Eeklo'],
    ['Eupen, Belgium', 50.6292029, 6.0337111, 'None', 'Belgium', 'Eupen'],
    ['Ghent, Belgium', 51.0543422, 3.7174243, 'None', 'Belgium', 'Ghent'],
    ['Huy, Belgium', 50.5187153, 5.2396656, 'None', 'Belgium', 'Huy'],
    ['Liege, Belgium', 50.6325574, 5.5796662, 'None', 'Belgium', 'Liege'],
    ['Namur, Belgium', 50.4673883, 4.8719854, 'None', 'Belgium', 'Namur'],
    [
        'Schaerbeek, Belgium',
        50.8674164,
        4.3772981,
        'None',
        'Belgium',
        'Schaerbeek'
    ],
    ['Torhout, Belgium', 51.06498, 3.10157, 'None', 'Belgium', 'Torhout'],
    ['Waterloo, Belgium', 50.71469, 4.3991, 'None', 'Belgium', 'Waterloo'],
    ['Wervik, Belgium', 50.7841386, 3.0448969, 'None', 'Belgium', 'Wervik'],
    [
        'Belize City, Belize',
        17.5045661,
        -88.1962133,
        'None',
        'Belize',
        'Belize_City'
    ],
    ['Hamilton, Bermuda', 32.294816, -64.781375, 'None', 'Bermuda', 'Hamilton'],
    [
        'St George, Bermuda',
        32.366861,
        -64.683646,
        'None',
        'Bermuda',
        'St_George'
    ],
    [
        'Cochabamba, Bolivia',
        -17.4139766,
        -66.1653224,
        'None',
        'Bolivia',
        'Cochabamba'
    ],
    ['La Paz, Bolivia', -16.489689, -68.1192936, 'None', 'Bolivia', 'La_Paz'],
    [
        'Santa Cruz, Bolivia',
        -17.814582,
        -63.156085,
        'None',
        'Bolivia',
        'Santa_Cruz'
    ],
    [
        'Kralendijk, Bonaire',
        12.1443491,
        -68.2655456,
        'None',
        'Bonaire',
        'Kralendijk'
    ],
    ['Sarajevo, Bosnia', 43.8562586, 18.4130763, 'None', 'Bosnia', 'Sarajevo'],
    ['Tuzla, Bosnia', 44.533, 18.683, 'None', 'Bosnia', 'Tuzla'],
    [
        'Gaborone, Botswana',
        -24.6282079,
        25.9231471,
        'None',
        'Botswana',
        'Gaborone'
    ],
    ['Aracaju, Brazil', -10.9472468, -37.0730823, 'None', 'Brazil', 'Aracaju'],
    ['Bauru, Brazil', -22.314459, -49.0586951, 'None', 'Brazil', 'Bauru'],
    ['Belem, Brazil', -1.4557549, -48.4901799, 'None', 'Brazil', 'Belem'],
    [
        'Belo Horizonte, Brazil',
        -19.9324906,
        -44.0080435,
        'None',
        'Brazil',
        'Belo_Horizonte'
    ],
    [
        'Blumenau, Brazil',
        -26.9165792,
        -49.0717331,
        'None',
        'Brazil',
        'Blumenau'
    ],
    [
        'Boa Vista, Brazil',
        2.8235098,
        -60.6758331,
        'None',
        'Brazil',
        'Boa_Vista'
    ],
    ['Brasilia, Brazil', -15.794229, -47.882166, 'None', 'Brazil', 'Brasilia'],
    [
        'Campinas, Brazil',
        -22.9099384,
        -47.0626332,
        'None',
        'Brazil',
        'Campinas'
    ],
    [
        'Campina Grande, Brazil',
        -7.2290752,
        -35.8808337,
        'None',
        'Brazil',
        'Campina_Grande'
    ],
    [
        'Campo Grande, Brazil',
        -20.4697105,
        -54.6201211,
        'None',
        'Brazil',
        'Campo_Grande'
    ],
    [
        'Cascavel, Brazil',
        -24.9577771,
        -53.4595112,
        'None',
        'Brazil',
        'Cascavel'
    ],
    [
        'Caxias do Sul, Brazil',
        -29.1634031,
        -51.1796683,
        'None',
        'Brazil',
        'Caxias_do_Sul'
    ],
    ['Cuiaba, Brazil', -15.6014109, -56.0978917, 'None', 'Brazil', 'Cuiaba'],
    ['Curitiba, Brazil', -25.4289541, -49.267137, 'None', 'Brazil', 'Curitiba'],
    [
        'Florianopolis, Brazil',
        -27.5953778,
        -48.5480499,
        'None',
        'Brazil',
        'Florianopolis'
    ],
    [
        'Fortaleza, Brazil',
        -3.7318616,
        -38.5266704,
        'None',
        'Brazil',
        'Fortaleza'
    ],
    ['Goiania, Brazil', -16.6868912, -49.2647943, 'None', 'Brazil', 'Goiania'],
    [
        'Guarulhos, Brazil',
        -23.4542498,
        -46.5337925,
        'None',
        'Brazil',
        'Guarulhos'
    ],
    ['Jacarei, Brazil', -23.2987827, -45.9662542, 'None', 'Brazil', 'Jacarei'],
    [
        'Joao Pessoa, Brazil',
        -7.1817487,
        -34.869841,
        'None',
        'Brazil',
        'Joao_Pessoa'
    ],
    [
        'Juiz de Fora, Brazil',
        -21.7624237,
        -43.3433999,
        'None',
        'Brazil',
        'Juiz_de_Fora'
    ],
    ['Limeira, Brazil', -22.5665354, -47.3974368, 'None', 'Brazil', 'Limeira'],
    ['Macae, Brazil', -22.3836705, -41.7827461, 'None', 'Brazil', 'Macae'],
    ['Macapa, Brazil', 0.0355735, -51.070535, 'None', 'Brazil', 'Macapa'],
    ['Maceio, Brazil', -9.6498487, -35.7089492, 'None', 'Brazil', 'Maceio'],
    ['Manaus, Brazil', -3.1190275, -60.0217314, 'None', 'Brazil', 'Manaus'],
    ['Maraba, Brazil', -5.3811357, -49.1331024, 'None', 'Brazil', 'Maraba'],
    ['Natal, Brazil', -5.7792569, -35.200916, 'None', 'Brazil', 'Natal'],
    ['Palmas, Brazil', -10.249091, -48.3242858, 'None', 'Brazil', 'Palmas'],
    [
        'Patos de Minas, Brazil',
        -18.5872582,
        -46.5146749,
        'None',
        'Brazil',
        'Patos_de_Minas'
    ],
    [
        'Piracicaba, Brazil',
        -22.7342864,
        -47.6480644,
        'None',
        'Brazil',
        'Piracicaba'
    ],
    [
        'Pocos de Caldas, Brazil',
        -21.7853787,
        -46.5619303,
        'None',
        'Brazil',
        'Pocos_de_Caldas'
    ],
    [
        'Porto Alegre, Brazil',
        -30.0346471,
        -51.2176584,
        'None',
        'Brazil',
        'Porto_Alegre'
    ],
    [
        'Porto Velho, Brazil',
        -8.7611605,
        -63.9004303,
        'None',
        'Brazil',
        'Porto_Velho'
    ],
    ['Recife, Brazil', -8.0578381, -34.8828969, 'None', 'Brazil', 'Recife'],
    [
        'Ribeirao Preto, Brazil',
        -21.1704008,
        -47.8103238,
        'None',
        'Brazil',
        'Ribeirao_Preto'
    ],
    [
        'Rio Branco, Brazil',
        -9.975377,
        -67.8248977,
        'None',
        'Brazil',
        'Rio_Branco'
    ],
    [
        'Rio Claro, Brazil',
        -22.4149023,
        -47.5651394,
        'None',
        'Brazil',
        'Rio_Claro'
    ],
    [
        'Rio de Janeiro, Brazil',
        -22.9068467,
        -43.1728965,
        'None',
        'Brazil',
        'Rio_de_Janeiro'
    ],
    ['Salvador, Brazil', -12.9730401, -38.502304, 'None', 'Brazil', 'Salvador'],
    [
        'Santa Maria, Brazil',
        -29.6873064,
        -53.8154769,
        'None',
        'Brazil',
        'Santa_Maria'
    ],
    ['Santos, Brazil', -23.9678823, -46.3288865, 'None', 'Brazil', 'Santos'],
    [
        'Sao Goncalo, Brazil',
        -22.8272883,
        -43.0637646,
        'None',
        'Brazil',
        'Sao_Goncalo'
    ],
    ['Sao Luis, Brazil', -2.5391099, -44.2829046, 'None', 'Brazil', 'Sao_Luis'],
    [
        'Sao Mateus, Brazil',
        -18.7191438,
        -39.8567437,
        'None',
        'Brazil',
        'Sao_Mateus'
    ],
    [
        'Sao Paulo, Brazil',
        -23.5505199,
        -46.6333094,
        'None',
        'Brazil',
        'Sao_Paulo'
    ],
    ['Teresina, Brazil', -5.0446853, -42.7662325, 'None', 'Brazil', 'Teresina'],
    [
        'Teresopolis, Brazil',
        -22.4169605,
        -42.9756016,
        'None',
        'Brazil',
        'Teresopolis'
    ],
    ['Tiete, Brazil', -23.0972163, -47.7144578, 'None', 'Brazil', 'Tiete'],
    [
        'Tres Pontas, Brazil',
        -21.3699248,
        -45.5113164,
        'None',
        'Brazil',
        'Tres_Pontas'
    ],
    [
        'Vila Velha, Brazil',
        -20.3477821,
        -40.2949528,
        'None',
        'Brazil',
        'Vila_Velha'
    ],
    [
        'Vitoria da Conquista, Brazil',
        -14.845066,
        -40.8861365,
        'None',
        'Brazil',
        'Vitoria_da_Conquista'
    ],
    [
        'Votorantim, Brazil',
        -23.540286,
        -47.4445978,
        'None',
        'Brazil',
        'Votorantim'
    ],
    [
        'Bandar Seri Begawan, Brunei',
        4.9030522,
        114.939821,
        'None',
        'Brunei',
        'Bandar_Seri_Begawan'
    ],
    ['Sofia, Bulgaria', 42.6977082, 23.3218675, 'None', 'Bulgaria', 'Sofia'],
    ['Douala, Cameroon', 4.0510564, 9.7678687, 'None', 'Cameroon', 'Douala'],
    ['Yaounde, Cameroon', 3.8480325, 11.5020752, 'None', 'Cameroon', 'Yaounde'],
    [
        'Calgary, Alberta',
        51.0486151,
        -114.0708459,
        'Alberta',
        'Canada',
        'Calgary'
    ],
    [
        'Camrose, Alberta',
        53.0222045,
        -112.8285983,
        'Alberta',
        'Canada',
        'Camrose'
    ],
    [
        'Cold Lake, Alberta',
        54.4643173,
        -110.1731468,
        'Alberta',
        'Canada',
        'Cold_Lake'
    ],
    [
        'Drayton Valley, Alberta',
        53.2214074,
        -114.9766786,
        'Alberta',
        'Canada',
        'Drayton_Valley'
    ],
    [
        'Edmonton, Alberta',
        53.544389,
        -113.4909267,
        'Alberta',
        'Canada',
        'Edmonton'
    ],
    [
        'Fort McMurray, Alberta',
        56.7263796,
        -111.3803407,
        'Alberta',
        'Canada',
        'Fort_McMurray'
    ],
    [
        'Fort Saskatchewan, Alberta',
        53.7007157,
        -113.2094659,
        'Alberta',
        'Canada',
        'Fort_Saskatchewan'
    ],
    [
        'Grande Prairie, Alberta',
        55.1699396,
        -118.7986152,
        'Alberta',
        'Canada',
        'Grande_Prairie'
    ],
    [
        'Lac La Biche, Alberta',
        54.7696415,
        -111.972514,
        'Alberta',
        'Canada',
        'Lac_La_Biche'
    ],
    [
        'Lethbridge, Alberta',
        49.69349,
        -112.84184,
        'Alberta',
        'Canada',
        'Lethbridge'
    ],
    [
        'Lloydminster, Alberta',
        53.2779625,
        -110.0061451,
        'Alberta',
        'Canada',
        'Lloydminster'
    ],
    [
        'Medicine Hat, Alberta',
        50.0405486,
        -110.6764258,
        'Alberta',
        'Canada',
        'Medicine_Hat'
    ],
    [
        'Millet, Alberta',
        53.0920817,
        -113.4702831,
        'Alberta',
        'Canada',
        'Millet'
    ],
    [
        'Red Deer, Alberta',
        52.2681118,
        -113.8112386,
        'Alberta',
        'Canada',
        'Red_Deer'
    ],
    [
        'Rocky Mountain House, Alberta',
        52.3793432,
        -114.9182883,
        'Alberta',
        'Canada',
        'Rocky_Mountain_House'
    ],
    [
        'Westlock, Alberta',
        54.1521565,
        -113.851419,
        'Alberta',
        'Canada',
        'Westlock'
    ],
    [
        '100 Mile House, British Columbia',
        51.6439705,
        -121.2950097,
        'British_Columbia',
        'Canada',
        '100_Mile_House'
    ],
    [
        'Abbotsford, British Columbia',
        49.054587,
        -122.328026,
        'British_Columbia',
        'Canada',
        'Abbotsford'
    ],
    [
        'Burnaby, British Columbia',
        49.2488091,
        -122.9805104,
        'British_Columbia',
        'Canada',
        'Burnaby'
    ],
    [
        'Castlegar, British Columbia',
        49.3237408,
        -117.6593341,
        'British_Columbia',
        'Canada',
        'Castlegar'
    ],
    [
        'Chetwynd, British Columbia',
        55.6976802,
        -121.6296734,
        'British_Columbia',
        'Canada',
        'Chetwynd'
    ],
    [
        'Chilliwack, British Columbia',
        49.1579401,
        -121.9514666,
        'British_Columbia',
        'Canada',
        'Chilliwack'
    ],
    [
        'Coquitlam, British Columbia',
        49.2837626,
        -122.7932065,
        'British_Columbia',
        'Canada',
        'Coquitlam'
    ],
    [
        'Courtenay, British Columbia',
        49.6841391,
        -124.9904493,
        'British_Columbia',
        'Canada',
        'Courtenay'
    ],
    [
        'Cranbrook, British Columbia',
        49.5129678,
        -115.7694002,
        'British_Columbia',
        'Canada',
        'Cranbrook'
    ],
    [
        'Creston, British Columbia',
        49.0955401,
        -116.5135079,
        'British_Columbia',
        'Canada',
        'Creston'
    ],
    [
        'Fort Saint John, British Columbia',
        56.252423,
        -120.846409,
        'British_Columbia',
        'Canada',
        'Fort_Saint_John'
    ],
    [
        'Gold River, British Columbia',
        49.7781637,
        -126.0496149,
        'British_Columbia',
        'Canada',
        'Gold_River'
    ],
    [
        'Kamloops, British Columbia',
        50.674522,
        -120.3272674,
        'British_Columbia',
        'Canada',
        'Kamloops'
    ],
    [
        'Kelowna, British Columbia',
        49.8879519,
        -119.4960106,
        'British_Columbia',
        'Canada',
        'Kelowna'
    ],
    [
        'Kimberley, British Columbia',
        49.6651567,
        -115.9967206,
        'British_Columbia',
        'Canada',
        'Kimberley'
    ],
    [
        'Merritt, British Columbia',
        50.1113079,
        -120.7862222,
        'British_Columbia',
        'Canada',
        'Merritt'
    ],
    [
        'Nanaimo, British Columbia',
        49.1658836,
        -123.9400647,
        'British_Columbia',
        'Canada',
        'Nanaimo'
    ],
    [
        'Nelson, British Columbia',
        49.4928119,
        -117.2948343,
        'British_Columbia',
        'Canada',
        'Nelson'
    ],
    [
        'Penticton, British Columbia',
        49.4991381,
        -119.5937077,
        'British_Columbia',
        'Canada',
        'Penticton'
    ],
    [
        'Port Alberni, British Columbia',
        49.2338882,
        -124.8055494,
        'British_Columbia',
        'Canada',
        'Port_Alberni'
    ],
    [
        'Powell River, British Columbia',
        49.8352352,
        -124.5247062,
        'British_Columbia',
        'Canada',
        'Powell_River'
    ],
    [
        'Prince George, British Columbia',
        53.9170641,
        -122.7496693,
        'British_Columbia',
        'Canada',
        'Prince_George'
    ],
    [
        'Richmond, British Columbia',
        49.1665898,
        -123.133569,
        'British_Columbia',
        'Canada',
        'Richmond'
    ],
    [
        'Sandspit, British Columbia',
        53.243025,
        -131.820879,
        'British_Columbia',
        'Canada',
        'Sandspit'
    ],
    [
        'Sidney, British Columbia',
        48.6502411,
        -123.399005,
        'British_Columbia',
        'Canada',
        'Sidney'
    ],
    [
        'Surrey, British Columbia',
        49.1044302,
        -122.801094,
        'British_Columbia',
        'Canada',
        'Surrey'
    ],
    [
        'Terrace, British Columbia',
        54.5181925,
        -128.603154,
        'British_Columbia',
        'Canada',
        'Terrace'
    ],
    [
        'Vancouver, British Columbia',
        49.2827291,
        -123.1207375,
        'British_Columbia',
        'Canada',
        'Vancouver'
    ],
    [
        'Vernon, British Columbia',
        50.2670137,
        -119.2720107,
        'British_Columbia',
        'Canada',
        'Vernon'
    ],
    [
        'Victoria, British Columbia',
        48.4284207,
        -123.3656444,
        'British_Columbia',
        'Canada',
        'Victoria'
    ],
    [
        'Williams Lake, British Columbia',
        52.1416736,
        -122.1416885,
        'British_Columbia',
        'Canada',
        'Williams_Lake'
    ],
    [
        'Brandon, Manitoba',
        49.848471,
        -99.9500904,
        'Manitoba',
        'Canada',
        'Brandon'
    ],
    [
        'Carman, Manitoba',
        49.5085651,
        -98.0016988,
        'Manitoba',
        'Canada',
        'Carman'
    ],
    [
        'Gypsumville, Manitoba',
        51.76932,
        -98.6393929,
        'Manitoba',
        'Canada',
        'Gypsumville'
    ],
    [
        'Neepawa, Manitoba',
        50.2277044,
        -99.4667714,
        'Manitoba',
        'Canada',
        'Neepawa'
    ],
    ['Peguis, Manitoba', 51.31567, -97.5601434, 'Manitoba', 'Canada', 'Peguis'],
    [
        'Portage La Prairie, Manitoba',
        49.9723205,
        -98.2903251,
        'Manitoba',
        'Canada',
        'Portage_La_Prairie'
    ],
    [
        'The Pas, Manitoba',
        53.8255265,
        -101.2476129,
        'Manitoba',
        'Canada',
        'The_Pas'
    ],
    [
        'Thompson, Manitoba',
        55.7449251,
        -97.8508715,
        'Manitoba',
        'Canada',
        'Thompson'
    ],
    [
        'Virden, Manitoba',
        49.8486678,
        -100.9325285,
        'Manitoba',
        'Canada',
        'Virden'
    ],
    [
        'Winnipeg, Manitoba',
        49.8997541,
        -97.1374937,
        'Manitoba',
        'Canada',
        'Winnipeg'
    ],
    [
        'Baie Verte, Newfoundland',
        49.9392654,
        -56.1907286,
        'Newfoundland',
        'Canada',
        'Baie_Verte'
    ],
    [
        'Corner Brook, Newfoundland',
        48.9489967,
        -57.9502726,
        'Newfoundland',
        'Canada',
        'Corner_Brook'
    ],
    [
        'Goose Bay, Newfoundland',
        53.3016826,
        -60.3260842,
        'Newfoundland',
        'Canada',
        'Goose_Bay'
    ],
    [
        'Grand Falls, Newfoundland',
        48.9320529,
        -55.6528053,
        'Newfoundland',
        'Canada',
        'Grand_Falls'
    ],
    [
        'Hants Harbour, Newfoundland',
        48.015794,
        -53.2671909,
        'Newfoundland',
        'Canada',
        'Hants_Harbour'
    ],
    [
        'Saint Johns, Newfoundland',
        47.5605413,
        -52.7128315,
        'Newfoundland',
        'Canada',
        'Saint_Johns'
    ],
    [
        'Trout River, Newfoundland',
        49.471061,
        -58.126798,
        'Newfoundland',
        'Canada',
        'Trout_River'
    ],
    [
        'Bathurst, New Brunswick',
        47.6183507,
        -65.6513358,
        'New_Brunswick',
        'Canada',
        'Bathurst'
    ],
    [
        'Campbellton, New Brunswick',
        48.007399,
        -66.6722057,
        'New_Brunswick',
        'Canada',
        'Campbellton'
    ],
    [
        'Fredericton, New Brunswick',
        45.9635895,
        -66.6431151,
        'New_Brunswick',
        'Canada',
        'Fredericton'
    ],
    [
        'Miramichi, New Brunswick',
        47.0295709,
        -65.5059061,
        'New_Brunswick',
        'Canada',
        'Miramichi'
    ],
    [
        'Moncton, New Brunswick',
        46.0878165,
        -64.7782313,
        'New_Brunswick',
        'Canada',
        'Moncton'
    ],
    [
        'Saint John, New Brunswick',
        45.2733153,
        -66.0633081,
        'New_Brunswick',
        'Canada',
        'Saint_John'
    ],
    [
        'Bridgewater, Nova Scotia',
        44.3721167,
        -64.5208798,
        'Nova_Scotia',
        'Canada',
        'Bridgewater'
    ],
    [
        'Halifax, Nova Scotia',
        44.6488625,
        -63.5753196,
        'Nova_Scotia',
        'Canada',
        'Halifax'
    ],
    [
        'Kentville, Nova Scotia',
        45.0769115,
        -64.4944735,
        'Nova_Scotia',
        'Canada',
        'Kentville'
    ],
    [
        'Sherbrooke, Nova Scotia',
        45.1402166,
        -61.979911,
        'Nova_Scotia',
        'Canada',
        'Sherbrooke'
    ],
    [
        'Sydney, Nova Scotia',
        46.1367899,
        -60.194224,
        'Nova_Scotia',
        'Canada',
        'Sydney'
    ],
    [
        'Truro, Nova Scotia',
        45.3657733,
        -63.2869407,
        'Nova_Scotia',
        'Canada',
        'Truro'
    ],
    [
        'Cambridge Bay, NW Territories',
        69.1168641,
        -105.0596814,
        'NW_Territories',
        'Canada',
        'Cambridge_Bay'
    ],
    [
        'Iqaluit, NW Territories',
        63.7149378,
        -68.4986394,
        'NW_Territories',
        'Canada',
        'Iqaluit'
    ],
    [
        'Yellowknife, NW Territories',
        62.459665,
        -114.3821062,
        'NW_Territories',
        'Canada',
        'Yellowknife'
    ],
    ['Aylmer, Ontario', 42.7729381, -80.9828842, 'Ontario', 'Canada', 'Aylmer'],
    [
        'Bancroft, Ontario',
        45.0558574,
        -77.8548814,
        'Ontario',
        'Canada',
        'Bancroft'
    ],
    ['Barrie, Ontario', 44.3893556, -79.6903316, 'Ontario', 'Canada', 'Barrie'],
    ['Bath, Ontario', 44.1840483, -76.771219, 'Ontario', 'Canada', 'Bath'],
    [
        'Belleville, Ontario',
        44.1627589,
        -77.3832315,
        'Ontario',
        'Canada',
        'Belleville'
    ],
    [
        'Bowmanville, Ontario',
        43.9126042,
        -78.688019,
        'Ontario',
        'Canada',
        'Bowmanville'
    ],
    [
        'Brampton, Ontario',
        43.7315479,
        -79.7624177,
        'Ontario',
        'Canada',
        'Brampton'
    ],
    [
        'Burlington, Ontario',
        43.3255196,
        -79.7990319,
        'Ontario',
        'Canada',
        'Burlington'
    ],
    [
        'Cambridge, Ontario',
        43.3616211,
        -80.3144276,
        'Ontario',
        'Canada',
        'Cambridge'
    ],
    [
        'Chatham, Ontario',
        42.4048018,
        -82.1910376,
        'Ontario',
        'Canada',
        'Chatham'
    ],
    [
        'Cobourg, Ontario',
        43.9593373,
        -78.1677363,
        'Ontario',
        'Canada',
        'Cobourg'
    ],
    [
        'Cookstown, Ontario',
        44.1894183,
        -79.7007401,
        'Ontario',
        'Canada',
        'Cookstown'
    ],
    [
        'Cornwall, Ontario',
        45.0212762,
        -74.730345,
        'Ontario',
        'Canada',
        'Cornwall'
    ],
    ['Dryden, Ontario', 49.7800938, -92.8369592, 'Ontario', 'Canada', 'Dryden'],
    [
        'Elliot Lake, Ontario',
        46.386179,
        -82.650941,
        'Ontario',
        'Canada',
        'Elliot_Lake'
    ],
    [
        'Georgetown, Ontario',
        43.6502046,
        -79.9036236,
        'Ontario',
        'Canada',
        'Georgetown'
    ],
    [
        'Gore Bay, Ontario',
        45.9114017,
        -82.4597783,
        'Ontario',
        'Canada',
        'Gore_Bay'
    ],
    [
        'Grand Bend, Ontario',
        43.3130397,
        -81.7562242,
        'Ontario',
        'Canada',
        'Grand_Bend'
    ],
    [
        'Greater Sudbury, Ontario',
        46.522099,
        -80.9530353,
        'Ontario',
        'Canada',
        'Greater_Sudbury'
    ],
    ['Guelph, Ontario', 43.5448048, -80.2481666, 'Ontario', 'Canada', 'Guelph'],
    [
        'Hamilton, Ontario',
        43.2500208,
        -79.8660914,
        'Ontario',
        'Canada',
        'Hamilton'
    ],
    [
        'Hornepayne, Ontario',
        49.2122192,
        -84.7714443,
        'Ontario',
        'Canada',
        'Hornepayne'
    ],
    [
        'Huntsville, Ontario',
        45.3269323,
        -79.2167539,
        'Ontario',
        'Canada',
        'Huntsville'
    ],
    [
        'Ingleside, Ontario',
        44.9988842,
        -74.9897993,
        'Ontario',
        'Canada',
        'Ingleside'
    ],
    [
        'Kearney, Ontario',
        45.556352,
        -79.2235611,
        'Ontario',
        'Canada',
        'Kearney'
    ],
    ['Kenora, Ontario', 49.7670416, -94.4893924, 'Ontario', 'Canada', 'Kenora'],
    [
        'Keswick, Ontario',
        44.2266889,
        -79.453512,
        'Ontario',
        'Canada',
        'Keswick'
    ],
    [
        'Kincardine, Ontario',
        44.1752954,
        -81.6365715,
        'Ontario',
        'Canada',
        'Kincardine'
    ],
    [
        'Kingston, Ontario',
        44.2311717,
        -76.4859544,
        'Ontario',
        'Canada',
        'Kingston'
    ],
    [
        'Kitchener, Ontario',
        43.450301,
        -80.4831917,
        'Ontario',
        'Canada',
        'Kitchener'
    ],
    [
        'La Salle, Ontario',
        43.317431,
        -79.826372,
        'Ontario',
        'Canada',
        'La_Salle'
    ],
    [
        'Lindsay, Ontario',
        44.3565742,
        -78.7407542,
        'Ontario',
        'Canada',
        'Lindsay'
    ],
    ['London, Ontario', 42.9869502, -81.243177, 'Ontario', 'Canada', 'London'],
    [
        'Markham, Ontario',
        43.8561002,
        -79.3370188,
        'Ontario',
        'Canada',
        'Markham'
    ],
    ['Milton, Ontario', 43.5182991, -79.8774042, 'Ontario', 'Canada', 'Milton'],
    [
        'Mississauga, Ontario',
        43.5890452,
        -79.6441198,
        'Ontario',
        'Canada',
        'Mississauga'
    ],
    [
        'Moosonee, Ontario',
        51.273089,
        -80.640049,
        'Ontario',
        'Canada',
        'Moosonee'
    ],
    [
        'Newmarket, Ontario',
        44.059187,
        -79.461256,
        'Ontario',
        'Canada',
        'Newmarket'
    ],
    [
        'Niagara Falls, Ontario',
        43.0895577,
        -79.0849436,
        'Ontario',
        'Canada',
        'Niagara_Falls'
    ],
    [
        'North Bay, Ontario',
        46.3091152,
        -79.4608204,
        'Ontario',
        'Canada',
        'North_Bay'
    ],
    [
        'Oakville, Ontario',
        43.467517,
        -79.6876659,
        'Ontario',
        'Canada',
        'Oakville'
    ],
    ['Oshawa, Ontario', 43.8970929, -78.8657912, 'Ontario', 'Canada', 'Oshawa'],
    ['Ottawa, Ontario', 45.4215296, -75.6971931, 'Ontario', 'Canada', 'Ottawa'],
    [
        'Owen Sound, Ontario',
        44.5690305,
        -80.9405602,
        'Ontario',
        'Canada',
        'Owen_Sound'
    ],
    [
        'Pembroke, Ontario',
        45.8266513,
        -77.1108826,
        'Ontario',
        'Canada',
        'Pembroke'
    ],
    [
        'Peterborough, Ontario',
        44.309058,
        -78.319747,
        'Ontario',
        'Canada',
        'Peterborough'
    ],
    [
        'Pickering, Ontario',
        43.8384117,
        -79.0867579,
        'Ontario',
        'Canada',
        'Pickering'
    ],
    [
        'Port Sydney, Ontario',
        45.213191,
        -79.275791,
        'Ontario',
        'Canada',
        'Port_Sydney'
    ],
    [
        'Richmond Hill, Ontario',
        43.8828401,
        -79.4402808,
        'Ontario',
        'Canada',
        'Richmond_Hill'
    ],
    [
        'Saint Catharines, Ontario',
        43.1593745,
        -79.2468626,
        'Ontario',
        'Canada',
        'Saint_Catharines'
    ],
    ['Sarnia, Ontario', 42.974536, -82.4065901, 'Ontario', 'Canada', 'Sarnia'],
    [
        'Sault Sainte Marie, Ontario',
        46.521858,
        -84.3460896,
        'Ontario',
        'Canada',
        'Sault_Sainte_Marie'
    ],
    ['Simcoe, Ontario', 42.8372632, -80.3040424, 'Ontario', 'Canada', 'Simcoe'],
    [
        'Stratford, Ontario',
        43.3700007,
        -80.9822286,
        'Ontario',
        'Canada',
        'Stratford'
    ],
    [
        'Thornbury, Ontario',
        44.5617896,
        -80.4529392,
        'Ontario',
        'Canada',
        'Thornbury'
    ],
    [
        'Thunder Bay, Ontario',
        48.3808951,
        -89.2476823,
        'Ontario',
        'Canada',
        'Thunder_Bay'
    ],
    [
        'Timmins, Ontario',
        48.4758208,
        -81.3304953,
        'Ontario',
        'Canada',
        'Timmins'
    ],
    [
        'Toronto, Ontario',
        43.653226,
        -79.3831843,
        'Ontario',
        'Canada',
        'Toronto'
    ],
    [
        'Vaughan, Ontario',
        43.8372079,
        -79.508276,
        'Ontario',
        'Canada',
        'Vaughan'
    ],
    [
        'Waterdown, Ontario',
        43.3247102,
        -79.9030371,
        'Ontario',
        'Canada',
        'Waterdown'
    ],
    [
        'Waterloo, Ontario',
        43.4642578,
        -80.5204096,
        'Ontario',
        'Canada',
        'Waterloo'
    ],
    [
        'Watford, Ontario',
        42.9555662,
        -81.8799198,
        'Ontario',
        'Canada',
        'Watford'
    ],
    ['Wawa, Ontario', 47.992417, -84.7710588, 'Ontario', 'Canada', 'Wawa'],
    ['Whitby, Ontario', 43.8975446, -78.9429329, 'Ontario', 'Canada', 'Whitby'],
    [
        'Windsor, Ontario',
        42.3149367,
        -83.0363633,
        'Ontario',
        'Canada',
        'Windsor'
    ],
    [
        'Woodstock, Ontario',
        43.1314966,
        -80.7471651,
        'Ontario',
        'Canada',
        'Woodstock'
    ],
    [
        'Charlottetown, Prince Edward Isl',
        46.23824,
        -63.1310704,
        'Prince_Edward_Isl',
        'Canada',
        'Charlottetown'
    ],
    ['Alma, Quebec', 48.5504607, -71.6527704, 'Quebec', 'Canada', 'Alma'],
    ['Amqui, Quebec', 48.4646053, -67.4311915, 'Quebec', 'Canada', 'Amqui'],
    [
        'Baie Comeau, Quebec',
        49.2212971,
        -68.1503944,
        'Quebec',
        'Canada',
        'Baie_Comeau'
    ],
    [
        'Beauharnois, Quebec',
        45.3150817,
        -73.8779033,
        'Quebec',
        'Canada',
        'Beauharnois'
    ],
    [
        'Boucherville, Quebec',
        45.5913698,
        -73.4364097,
        'Quebec',
        'Canada',
        'Boucherville'
    ],
    [
        'Cap De La Madeleine, Quebec',
        46.3622521,
        -72.5067098,
        'Quebec',
        'Canada',
        'Cap_De_La_Madeleine'
    ],
    [
        'Chandler, Quebec',
        48.349494,
        -64.6769768,
        'Quebec',
        'Canada',
        'Chandler'
    ],
    [
        'Chibougamau, Quebec',
        49.9132295,
        -74.3691986,
        'Quebec',
        'Canada',
        'Chibougamau'
    ],
    [
        'Chicoutimi, Quebec',
        48.3516735,
        -71.1385136,
        'Quebec',
        'Canada',
        'Chicoutimi'
    ],
    [
        'Chisasibi, Quebec',
        53.7826457,
        -78.8937214,
        'Quebec',
        'Canada',
        'Chisasibi'
    ],
    [
        'Deauville, Quebec',
        45.991745,
        -74.095086,
        'Quebec',
        'Canada',
        'Deauville'
    ],
    ['Gaspe, Quebec', 48.8316351, -64.4869016, 'Quebec', 'Canada', 'Gaspe'],
    [
        'Gatineau, Quebec',
        45.4765446,
        -75.7012723,
        'Quebec',
        'Canada',
        'Gatineau'
    ],
    [
        'Grand Riviere, Quebec',
        48.3958679,
        -64.4912636,
        'Quebec',
        'Canada',
        'Grand_Riviere'
    ],
    ['Hull, Quebec', 45.428731, -75.7133658, 'Quebec', 'Canada', 'Hull'],
    ['Huntingdon, Quebec', 45.0891, -74.1766, 'Quebec', 'Canada', 'Huntingdon'],
    ['Laval, Quebec', 45.6066487, -73.712409, 'Quebec', 'Canada', 'Laval'],
    [
        'La Tuque, Quebec',
        47.4383405,
        -72.7839311,
        'Quebec',
        'Canada',
        'La_Tuque'
    ],
    ['Levis, Quebec', 46.7382265, -71.2464592, 'Quebec', 'Canada', 'Levis'],
    [
        'Longeuil, Quebec',
        45.5369442,
        -73.5107131,
        'Quebec',
        'Canada',
        'Longeuil'
    ],
    ['Mirabel, Quebec', 45.6518959, -74.0901696, 'Quebec', 'Canada', 'Mirabel'],
    [
        'Mistassini, Quebec',
        48.886394,
        -72.215741,
        'Quebec',
        'Canada',
        'Mistassini'
    ],
    [
        'Mobile Servicing System Operations Complex Saint Hubert, Quebec',
        45.498332,
        -73.406507,
        'Quebec',
        'Canada',
        'Mobile_Servicing_System_Operations_Complex_Saint_Hubert'
    ],
    [
        'Montreal, Quebec',
        45.5016889,
        -73.567256,
        'Quebec',
        'Canada',
        'Montreal'
    ],
    ['Quebec, Quebec', 46.8138783, -71.2079809, 'Quebec', 'Canada', 'Quebec'],
    [
        'Rimouski, Quebec',
        48.4389803,
        -68.5349704,
        'Quebec',
        'Canada',
        'Rimouski'
    ],
    [
        'Saguenay, Quebec',
        48.4280529,
        -71.0684923,
        'Quebec',
        'Canada',
        'Saguenay'
    ],
    [
        'Saint Constant, Quebec',
        45.379181,
        -73.5644913,
        'Quebec',
        'Canada',
        'Saint_Constant'
    ],
    [
        'Saint Georges, Quebec',
        46.1229184,
        -70.670352,
        'Quebec',
        'Canada',
        'Saint_Georges'
    ],
    [
        'Saint Jerome, Quebec',
        45.775357,
        -74.004948,
        'Quebec',
        'Canada',
        'Saint_Jerome'
    ],
    [
        'Saint Jovite, Quebec',
        46.1214043,
        -74.5944241,
        'Quebec',
        'Canada',
        'Saint_Jovite'
    ],
    [
        'Saint Polycarpe, Quebec',
        45.3028161,
        -74.3032421,
        'Quebec',
        'Canada',
        'Saint_Polycarpe'
    ],
    [
        'Sherbrooke, Quebec',
        45.4009928,
        -71.8824288,
        'Quebec',
        'Canada',
        'Sherbrooke'
    ],
    ['Sorel, Quebec', 46.042825, -73.112302, 'Quebec', 'Canada', 'Sorel'],
    [
        'Terrebonne, Quebec',
        45.6929818,
        -73.6331102,
        'Quebec',
        'Canada',
        'Terrebonne'
    ],
    [
        'Thetford Mines, Quebec',
        46.1028329,
        -71.3055522,
        'Quebec',
        'Canada',
        'Thetford_Mines'
    ],
    [
        'Trois-Rivieres, Quebec',
        46.3546803,
        -72.5837866,
        'Quebec',
        'Canada',
        'Trois-Rivieres'
    ],
    [
        'Val d Or, Quebec',
        48.0987106,
        -77.7967676,
        'Quebec',
        'Canada',
        'Val_d_Or'
    ],
    [
        'Estevan, Saskatchewan',
        49.1390842,
        -102.9914807,
        'Saskatchewan',
        'Canada',
        'Estevan'
    ],
    [
        'Lucky Lake, Saskatchewan',
        50.9830819,
        -107.1342746,
        'Saskatchewan',
        'Canada',
        'Lucky_Lake'
    ],
    [
        'Moose Jaw, Saskatchewan',
        50.3915811,
        -105.5348562,
        'Saskatchewan',
        'Canada',
        'Moose_Jaw'
    ],
    [
        'North Battleford, Saskatchewan',
        52.7764752,
        -108.2974555,
        'Saskatchewan',
        'Canada',
        'North_Battleford'
    ],
    [
        'Prince Albert, Saskatchewan',
        53.2033494,
        -105.7530705,
        'Saskatchewan',
        'Canada',
        'Prince_Albert'
    ],
    [
        'Regina, Saskatchewan',
        50.4452112,
        -104.6188944,
        'Saskatchewan',
        'Canada',
        'Regina'
    ],
    [
        'Saskatoon, Saskatchewan',
        52.1332144,
        -106.6700458,
        'Saskatchewan',
        'Canada',
        'Saskatoon'
    ],
    [
        'Watrous, Saskatchewan',
        51.6745142,
        -105.4683377,
        'Saskatchewan',
        'Canada',
        'Watrous'
    ],
    [
        'Yorkton, Saskatchewan',
        51.2174482,
        -102.4739331,
        'Saskatchewan',
        'Canada',
        'Yorkton'
    ],
    [
        'Whitehorse, Yukon Territory',
        60.7211871,
        -135.0568449,
        'Yukon_Territory',
        'Canada',
        'Whitehorse'
    ],
    [
        'Antofagasta, Chile',
        -23.6509279,
        -70.3975022,
        'None',
        'Chile',
        'Antofagasta'
    ],
    ['Arica, Chile', -18.4782534, -70.3125988, 'None', 'Chile', 'Arica'],
    ['Coihaique, Chile', -45.5712254, -72.068265, 'None', 'Chile', 'Coihaique'],
    [
        'Concepcion, Chile',
        -36.8201352,
        -73.0443904,
        'None',
        'Chile',
        'Concepcion'
    ],
    ['Copiapo, Chile', -27.3665763, -70.3321587, 'None', 'Chile', 'Copiapo'],
    ['Iquique, Chile', -20.2307033, -70.1356692, 'None', 'Chile', 'Iquique'],
    [
        'La Serena, Chile',
        -29.9026691,
        -71.2519374,
        'None',
        'Chile',
        'La_Serena'
    ],
    [
        'Puerto Montt, Chile',
        -41.468917,
        -72.9411364,
        'None',
        'Chile',
        'Puerto_Montt'
    ],
    [
        'Punta Arenas, Chile',
        -53.1638329,
        -70.9170683,
        'None',
        'Chile',
        'Punta_Arenas'
    ],
    ['Rancagua, Chile', -34.1701324, -70.7406259, 'None', 'Chile', 'Rancagua'],
    ['Santiago, Chile', -33.4488897, -70.6692655, 'None', 'Chile', 'Santiago'],
    ['Talca, Chile', -35.2575, -72.2677778, 'None', 'Chile', 'Talca'],
    ['Temuco, Chile', -38.7359018, -72.5903739, 'None', 'Chile', 'Temuco'],
    [
        'Valparaiso, Chile',
        -33.047238,
        -71.6126885,
        'None',
        'Chile',
        'Valparaiso'
    ],
    ['Beijing, China', 39.9431802, 116.3695425, 'None', 'China', 'Beijing'],
    ['Changchun, China', 43.817072, 125.323544, 'None', 'China', 'Changchun'],
    ['Changsha, China', 28.228209, 112.938814, 'None', 'China', 'Changsha'],
    ['Chengdu, China', 30.572816, 104.066801, 'None', 'China', 'Chengdu'],
    ['Chongqing, China', 29.56301, 106.551556, 'None', 'China', 'Chongqing'],
    ['Fuzhou, China', 26.074508, 119.296494, 'None', 'China', 'Fuzhou'],
    ['Guangzhou, China', 23.12911, 113.264385, 'None', 'China', 'Guangzhou'],
    ['Guiyang, China', 26.647661, 106.630154, 'None', 'China', 'Guiyang'],
    ['Haikou, China', 20.044002, 110.198293, 'None', 'China', 'Haikou'],
    ['Hangzhou, China', 30.274085, 120.15507, 'None', 'China', 'Hangzhou'],
    ['Harbin, China', 45.803775, 126.534967, 'None', 'China', 'Harbin'],
    ['Hefei, China', 31.820592, 117.227219, 'None', 'China', 'Hefei'],
    ['Hohhot, China', 40.842585, 111.749181, 'None', 'China', 'Hohhot'],
    ['Hong Kong, China', 22.3799639, 114.2676665, 'None', 'China', 'Hong_Kong'],
    ['Jinan, China', 36.651216, 117.12, 'None', 'China', 'Jinan'],
    ['Kunming, China', 24.880095, 102.832892, 'None', 'China', 'Kunming'],
    ['Lanzhou, China', 36.061089, 103.834304, 'None', 'China', 'Lanzhou'],
    ['Lhasa, China', 29.652491, 91.17211, 'None', 'China', 'Lhasa'],
    ['Macau, China', 22.2047465, 113.5552031, 'None', 'China', 'Macau'],
    ['Nanchang, China', 28.682892, 115.858198, 'None', 'China', 'Nanchang'],
    ['Nanjing, China', 32.060255, 118.796877, 'None', 'China', 'Nanjing'],
    ['Nanning, China', 22.817002, 108.366543, 'None', 'China', 'Nanning'],
    ['Shanghai, China', 31.230416, 121.473701, 'None', 'China', 'Shanghai'],
    ['Shenyang, China', 41.805699, 123.431472, 'None', 'China', 'Shenyang'],
    [
        'Shijiazhuang, China',
        38.042307,
        114.51486,
        'None',
        'China',
        'Shijiazhuang'
    ],
    ['Taiyuan, China', 37.87059, 112.548879, 'None', 'China', 'Taiyuan'],
    ['Tianjin, China', 39.1024168, 117.2829735, 'None', 'China', 'Tianjin'],
    ['Urumqi, China', 43.825592, 87.616848, 'None', 'China', 'Urumqi'],
    ['Wuhan, China', 30.593099, 114.305393, 'None', 'China', 'Wuhan'],
    ['Xian, China', 34.341575, 108.93977, 'None', 'China', 'Xian'],
    ['Xining, China', 36.617134, 101.778224, 'None', 'China', 'Xining'],
    ['Yinchuan, China', 38.487194, 106.230909, 'None', 'China', 'Yinchuan'],
    ['Zhengzhou, China', 34.746611, 113.625328, 'None', 'China', 'Zhengzhou'],
    ['Armenia, Colombia', 4.535092, -75.673156, 'None', 'Colombia', 'Armenia'],
    [
        'Barranquilla, Colombia',
        11.0041072,
        -74.8069813,
        'None',
        'Colombia',
        'Barranquilla'
    ],
    ['Bogota, Colombia', 4.7109886, -74.072092, 'None', 'Colombia', 'Bogota'],
    [
        'Bucaramanga, Colombia',
        7.119349,
        -73.1227416,
        'None',
        'Colombia',
        'Bucaramanga'
    ],
    ['Cali, Colombia', 3.4516467, -76.5319854, 'None', 'Colombia', 'Cali'],
    [
        'Cartagena, Colombia',
        10.3910485,
        -75.4794257,
        'None',
        'Colombia',
        'Cartagena'
    ],
    [
        'Cartago, Colombia',
        4.7472212,
        -75.9116289,
        'None',
        'Colombia',
        'Cartago'
    ],
    [
        'Manizales, Colombia',
        5.070275,
        -75.5138166,
        'None',
        'Colombia',
        'Manizales'
    ],
    [
        'Medellin, Colombia',
        6.2530408,
        -75.5645737,
        'None',
        'Colombia',
        'Medellin'
    ],
    [
        'Monteria, Colombia',
        8.750983,
        -75.8785348,
        'None',
        'Colombia',
        'Monteria'
    ],
    ['Pasto, Colombia', 1.2058837, -77.285787, 'None', 'Colombia', 'Pasto'],
    ['Pereira, Colombia', 4.8087174, -75.690601, 'None', 'Colombia', 'Pereira'],
    [
        'Popayan, Colombia',
        2.4448143,
        -76.6147395,
        'None',
        'Colombia',
        'Popayan'
    ],
    [
        'Santa Marta, Colombia',
        11.2403547,
        -74.2110227,
        'None',
        'Colombia',
        'Santa_Marta'
    ],
    ['Tulua, Colombia', 4.089869, -76.1914991, 'None', 'Colombia', 'Tulua'],
    [
        'Mamoutzou, Comoros',
        -12.7809488,
        45.227872,
        'None',
        'Comoros',
        'Mamoutzou'
    ],
    ['Moroni, Comoros', -11.7172157, 43.2473146, 'None', 'Comoros', 'Moroni'],
    [
        'Cartago, Costa Rica',
        9.7539596,
        -83.6773928,
        'None',
        'Costa_Rica',
        'Cartago'
    ],
    [
        'Liberia, Costa Rica',
        10.6345964,
        -85.4406747,
        'None',
        'Costa_Rica',
        'Liberia'
    ],
    [
        'San Jose, Costa Rica',
        9.928069,
        -84.090725,
        'None',
        'Costa_Rica',
        'San_Jose'
    ],
    ['Pozega, Croatia', 45.3314763, 17.6744748, 'None', 'Croatia', 'Pozega'],
    ['Pula, Croatia', 44.8666232, 13.8495788, 'None', 'Croatia', 'Pula'],
    ['Split, Croatia', 43.5081323, 16.4401935, 'None', 'Croatia', 'Split'],
    [
        'Vinkovci, Croatia',
        45.2879058,
        18.8056781,
        'None',
        'Croatia',
        'Vinkovci'
    ],
    ['Zagreb, Croatia', 45.8150108, 15.981919, 'None', 'Croatia', 'Zagreb'],
    ['Cardenas, Cuba', 23.036551, -81.213326, 'None', 'Cuba', 'Cardenas'],
    [
        'Guantanamo Bay, Cuba',
        20.011737,
        -75.1216254,
        'None',
        'Cuba',
        'Guantanamo_Bay'
    ],
    ['Havana, Cuba', 23.1135925, -82.3665956, 'None', 'Cuba', 'Havana'],
    ['Matanzas, Cuba', 22.5767123, -81.3399414, 'None', 'Cuba', 'Matanzas'],
    [
        'Pinar del Rio, Cuba',
        22.4133651,
        -83.6880257,
        'None',
        'Cuba',
        'Pinar_del_Rio'
    ],
    ['Santa Clara, Cuba', 22.424398, -79.941655, 'None', 'Cuba', 'Santa_Clara'],
    [
        'Willemstad, Curacao',
        12.1224221,
        -68.8824233,
        'None',
        'Curacao',
        'Willemstad'
    ],
    ['Nicosia, Cyprus', 35.1855659, 33.3822764, 'None', 'Cyprus', 'Nicosia'],
    [
        'Brno, Czech Republic',
        49.1950602,
        16.6068371,
        'None',
        'Czech_Republic',
        'Brno'
    ],
    [
        'Havirov, Czech Republic',
        49.7803923,
        18.4306254,
        'None',
        'Czech_Republic',
        'Havirov'
    ],
    [
        'Jablonec, Czech Republic',
        50.4531546,
        13.8069404,
        'None',
        'Czech_Republic',
        'Jablonec'
    ],
    [
        'Ostrava, Czech Republic',
        49.8209226,
        18.2625243,
        'None',
        'Czech_Republic',
        'Ostrava'
    ],
    [
        'Prague, Czech Republic',
        50.0755381,
        14.4378005,
        'None',
        'Czech_Republic',
        'Prague'
    ],
    [
        'Roznov, Czech Republic',
        50.3380465,
        15.8612904,
        'None',
        'Czech_Republic',
        'Roznov'
    ],
    [
        'Susice, Czech Republic',
        49.2316758,
        13.5204093,
        'None',
        'Czech_Republic',
        'Susice'
    ],
    [
        'Turnov, Czech Republic',
        50.587285,
        15.1568091,
        'None',
        'Czech_Republic',
        'Turnov'
    ],
    [
        'Upice, Czech Republic',
        50.5123719,
        16.0160733,
        'None',
        'Czech_Republic',
        'Upice'
    ],
    [
        'Usti nad Labem, Czech Republic',
        50.6611164,
        14.0531456,
        'None',
        'Czech_Republic',
        'Usti_nad_Labem'
    ],
    [
        'Valaske Mezirici, Czech Republic',
        49.4718042,
        17.9711369,
        'None',
        'Czech_Republic',
        'Valaske_Mezirici'
    ],
    [
        'Veseli nad Moravou, Czech Republic',
        48.9523773,
        17.3809152,
        'None',
        'Czech_Republic',
        'Veseli_nad_Moravou'
    ],
    [
        'Vysokov, Czech Republic',
        50.4037682,
        16.1166422,
        'None',
        'Czech_Republic',
        'Vysokov'
    ],
    [
        'Zruc nad Sazavou, Czech Republic',
        49.740105,
        15.1060638,
        'None',
        'Czech_Republic',
        'Zruc_nad_Sazavou'
    ],
    ['Aalborg, Denmark', 57.0488195, 9.921747, 'None', 'Denmark', 'Aalborg'],
    ['Aarhus, Denmark', 56.162939, 10.203921, 'None', 'Denmark', 'Aarhus'],
    ['Asnaes, Denmark', 55.813912, 11.501941, 'None', 'Denmark', 'Asnaes'],
    ['Birkerod, Denmark', 55.844295, 12.422112, 'None', 'Denmark', 'Birkerod'],
    [
        'Copenhagen, Denmark',
        55.6760968,
        12.5683371,
        'None',
        'Denmark',
        'Copenhagen'
    ],
    ['Esbjerg, Denmark', 55.476466, 8.459405, 'None', 'Denmark', 'Esbjerg'],
    [
        'Frederiksberg, Denmark',
        55.677069,
        12.513321,
        'None',
        'Denmark',
        'Frederiksberg'
    ],
    ['Hornbaek, Denmark', 56.084962, 12.458537, 'None', 'Denmark', 'Hornbaek'],
    ['Horsholm, Denmark', 55.883514, 12.504924, 'None', 'Denmark', 'Horsholm'],
    ['Kolding, Denmark', 55.495973, 9.4730519, 'None', 'Denmark', 'Kolding'],
    ['Nuuk, Denmark', 64.1814099, -51.694138, 'None', 'Denmark', 'Nuuk'],
    ['Odense, Denmark', 55.403756, 10.40237, 'None', 'Denmark', 'Odense'],
    ['Rosklide, Denmark', 55.64191, 12.087845, 'None', 'Denmark', 'Rosklide'],
    ['Skive, Denmark', 56.5651232, 9.0309083, 'None', 'Denmark', 'Skive'],
    [
        'Sonderborg, Denmark',
        54.913811,
        9.792178,
        'None',
        'Denmark',
        'Sonderborg'
    ],
    ['Struer, Denmark', 56.48493, 8.589933, 'None', 'Denmark', 'Struer'],
    ['Vejle, Denmark', 55.7113112, 9.5363541, 'None', 'Denmark', 'Vejle'],
    ['Roseau, Dominica', 15.3091676, -61.3793554, 'None', 'Dominica', 'Roseau'],
    [
        'Santo Domingo, Dominican Republic',
        18.4860575,
        -69.9312117,
        'None',
        'Dominican_Republic',
        'Santo_Domingo'
    ],
    [
        'Guayaquil, Ecuador',
        -2.1709979,
        -79.9223592,
        'None',
        'Ecuador',
        'Guayaquil'
    ],
    ['Quito, Ecuador', -0.1806532, -78.4678382, 'None', 'Ecuador', 'Quito'],
    [
        'Alexandria, Egypt',
        30.9213539,
        30.5748649,
        'None',
        'Egypt',
        'Alexandria'
    ],
    ['Aswan, Egypt', 24.088938, 32.8998293, 'None', 'Egypt', 'Aswan'],
    ['Cairo, Egypt', 30.0444196, 31.2357116, 'None', 'Egypt', 'Cairo'],
    [
        'Great Pyramid of Giza, Egypt',
        29.9792345,
        31.1342019,
        'None',
        'Egypt',
        'Great_Pyramid_of_Giza'
    ],
    [
        'Cojutepeque, El Salvador',
        13.7208503,
        -88.9365976,
        'None',
        'El_Salvador',
        'Cojutepeque'
    ],
    [
        'San Miguel, El Salvador',
        13.4451041,
        -88.2461183,
        'None',
        'El_Salvador',
        'San_Miguel'
    ],
    [
        'San Salvador, El Salvador',
        13.6929403,
        -89.2181911,
        'None',
        'El_Salvador',
        'San_Salvador'
    ],
    ['Tallinn, Estonia', 59.4369608, 24.7535746, 'None', 'Estonia', 'Tallinn'],
    ['Tartu, Estonia', 58.3776252, 26.7290063, 'None', 'Estonia', 'Tartu'],
    [
        'Addis Ababa, Ethiopia',
        8.9806034,
        38.7577605,
        'None',
        'Ethiopia',
        'Addis_Ababa'
    ],
    [
        'Stanley, Falkland Islands',
        -51.6977129,
        -57.8516627,
        'None',
        'Falkland_Islands',
        'Stanley'
    ],
    ['Suva, Fiji', -18.1248086, 178.4500789, 'None', 'Fiji', 'Suva'],
    [
        'Hameenlinna, Finland',
        60.9928787,
        24.4590243,
        'None',
        'Finland',
        'Hameenlinna'
    ],
    ['Helsinki, Finland', 60.1698557, 24.938379, 'None', 'Finland', 'Helsinki'],
    ['Joensuu, Finland', 62.6010155, 29.7635719, 'None', 'Finland', 'Joensuu'],
    ['Juva, Finland', 61.8947473, 27.8617615, 'None', 'Finland', 'Juva'],
    [
        'Jyvaskyla, Finland',
        62.2426034,
        25.7472567,
        'None',
        'Finland',
        'Jyvaskyla'
    ],
    ['Kotka, Finland', 60.4665666, 26.9459403, 'None', 'Finland', 'Kotka'],
    ['Kouvola, Finland', 60.8678835, 26.7041601, 'None', 'Finland', 'Kouvola'],
    ['Kuopio, Finland', 62.89797, 27.6781725, 'None', 'Finland', 'Kuopio'],
    ['Lahti, Finland', 60.9826749, 25.6612096, 'None', 'Finland', 'Lahti'],
    [
        'Lappeenranta, Finland',
        61.0549929,
        28.1896628,
        'None',
        'Finland',
        'Lappeenranta'
    ],
    ['Mikkeli, Finland', 61.6887271, 27.2721457, 'None', 'Finland', 'Mikkeli'],
    ['Oulu, Finland', 65.0120888, 25.4650773, 'None', 'Finland', 'Oulu'],
    ['Pori, Finland', 61.4851393, 21.7974178, 'None', 'Finland', 'Pori'],
    ['Tampere, Finland', 61.4977524, 23.7609535, 'None', 'Finland', 'Tampere'],
    ['Turku, Finland', 60.4518126, 22.2666303, 'None', 'Finland', 'Turku'],
    [
        'Aix-en-Provence, France',
        43.529742,
        5.447427,
        'None',
        'France',
        'Aix-en-Provence'
    ],
    ['Ajaccio, France', 41.919229, 8.738635, 'None', 'France', 'Ajaccio'],
    ['Amiens, France', 49.894067, 2.295753, 'None', 'France', 'Amiens'],
    ['Angers, France', 47.478419, -0.563166, 'None', 'France', 'Angers'],
    [
        'Argenteuil, France',
        48.9472096,
        2.2466847,
        'None',
        'France',
        'Argenteuil'
    ],
    ['Bastia, France', 42.697283, 9.450881, 'None', 'France', 'Bastia'],
    ['Besancon, France', 47.237829, 6.0240539, 'None', 'France', 'Besancon'],
    ['Biarritz, France', 43.4831519, -1.558626, 'None', 'France', 'Biarritz'],
    ['Bordeaux, France', 44.8678133, -0.6036913, 'None', 'France', 'Bordeaux'],
    [
        'Boulogne-Billancourt, France',
        48.8396952,
        2.2399123,
        'None',
        'France',
        'Boulogne-Billancourt'
    ],
    ['Bourges, France', 47.081012, 2.398782, 'None', 'France', 'Bourges'],
    ['Brest, France', 48.390394, -4.486076, 'None', 'France', 'Brest'],
    ['Caen, France', 49.182863, -0.370679, 'None', 'France', 'Caen'],
    ['Cahors, France', 44.4475229, 1.441989, 'None', 'France', 'Cahors'],
    ['Cannes, France', 43.552847, 7.017369, 'None', 'France', 'Cannes'],
    [
        'Clermont-Ferrand, France',
        45.777222,
        3.087025,
        'None',
        'France',
        'Clermont-Ferrand'
    ],
    ['Colmar, France', 48.0793589, 7.358512, 'None', 'France', 'Colmar'],
    [
        'Corbeil-Essonnes, France',
        48.5919201,
        2.45965,
        'None',
        'France',
        'Corbeil-Essonnes'
    ],
    ['Dijon, France', 47.322047, 5.04148, 'None', 'France', 'Dijon'],
    ['Fecamp, France', 49.755601, 0.380774, 'None', 'France', 'Fecamp'],
    ['Grenoble, France', 45.188529, 5.724524, 'None', 'France', 'Grenoble'],
    ['Homecourt, France', 49.225282, 5.99159, 'None', 'France', 'Homecourt'],
    ['Laval, France', 48.0785146, -0.7669906, 'None', 'France', 'Laval'],
    [
        'La Rochelle, France',
        46.160329,
        -1.151139,
        'None',
        'France',
        'La_Rochelle'
    ],
    [
        'Les Abymes, France',
        47.0201909,
        1.694777,
        'None',
        'France',
        'Les_Abymes'
    ],
    ['Le Havre, France', 49.49437, 0.107929, 'None', 'France', 'Le_Havre'],
    ['Le Mans, France', 48.00611, 0.199556, 'None', 'France', 'Le_Mans'],
    ['Lille, France', 50.62925, 3.057256, 'None', 'France', 'Lille'],
    ['Limoges, France', 45.833619, 1.261105, 'None', 'France', 'Limoges'],
    ['Lyon, France', 45.764043, 4.835659, 'None', 'France', 'Lyon'],
    [
        'Mantes la Jolie, France',
        48.989323,
        1.714958,
        'None',
        'France',
        'Mantes_la_Jolie'
    ],
    ['Marseille, France', 43.296482, 5.36978, 'None', 'France', 'Marseille'],
    ['Meribel, France', 45.397528, 6.56436, 'None', 'France', 'Meribel'],
    ['Metz, France', 49.1193089, 6.1757156, 'None', 'France', 'Metz'],
    [
        'Montpellier, France',
        43.610769,
        3.876716,
        'None',
        'France',
        'Montpellier'
    ],
    ['Montreuil, France', 48.863812, 2.448451, 'None', 'France', 'Montreuil'],
    ['Mulhouse, France', 47.750839, 7.335888, 'None', 'France', 'Mulhouse'],
    ['Nancy, France', 48.692054, 6.184417, 'None', 'France', 'Nancy'],
    ['Nantes, France', 47.218371, -1.553621, 'None', 'France', 'Nantes'],
    ['Nevers, France', 46.990896, 3.162845, 'None', 'France', 'Nevers'],
    ['Nice, France', 43.7101728, 7.2619532, 'None', 'France', 'Nice'],
    ['Nimes, France', 43.836699, 4.360054, 'None', 'France', 'Nimes'],
    [
        'Oinville sur Montcient, France',
        49.029116,
        1.852215,
        'None',
        'France',
        'Oinville_sur_Montcient'
    ],
    ['Orleans, France', 47.902964, 1.909251, 'None', 'France', 'Orleans'],
    ['Paris, France', 48.856614, 2.352222, 'None', 'France', 'Paris'],
    ['Perpignan, France', 42.711622, 2.853978, 'None', 'France', 'Perpignan'],
    ['Pithiviers, France', 48.173423, 2.255849, 'None', 'France', 'Pithiviers'],
    ['Poitiers, France', 46.580224, 0.340375, 'None', 'France', 'Poitiers'],
    ['Reims, France', 49.258329, 4.031696, 'None', 'France', 'Reims'],
    ['Rennes, France', 48.0782017, -1.7195832, 'None', 'France', 'Rennes'],
    ['Riom, France', 45.8939949, 3.114932, 'None', 'France', 'Riom'],
    ['Roubaix, France', 50.6927049, 3.177847, 'None', 'France', 'Roubaix'],
    ['Rouen, France', 49.443232, 1.099971, 'None', 'France', 'Rouen'],
    ['Royan, France', 45.623027, -1.043182, 'None', 'France', 'Royan'],
    [
        'Saint Denis Reunion, France',
        -20.8747731,
        55.4474071,
        'None',
        'France',
        'Saint_Denis_Reunion'
    ],
    [
        'Saint Etienne, France',
        45.439695,
        4.3871779,
        'None',
        'France',
        'Saint_Etienne'
    ],
    [
        'Saint Paul Reunion, France',
        -20.9361022,
        55.3317422,
        'None',
        'France',
        'Saint_Paul_Reunion'
    ],
    [
        'Strasbourg, France',
        48.5734053,
        7.7521113,
        'None',
        'France',
        'Strasbourg'
    ],
    ['Toulon, France', 43.124228, 5.928, 'None', 'France', 'Toulon'],
    ['Toulouse, France', 43.604652, 1.444209, 'None', 'France', 'Toulouse'],
    ['Tours, France', 47.394144, 0.68484, 'None', 'France', 'Tours'],
    ['Valognes, France', 49.509594, -1.469216, 'None', 'France', 'Valognes'],
    ['Vernon, France', 49.091958, 1.488107, 'None', 'France', 'Vernon'],
    [
        'Villeneuve d Ascq, France',
        50.6232523,
        3.1442651,
        'None',
        'France',
        'Villeneuve_d_Ascq'
    ],
    [
        'Villeurbanne, France',
        45.771944,
        4.8901709,
        'None',
        'France',
        'Villeurbanne'
    ],
    [
        'Cayenne, French Guiana',
        4.92242,
        -52.3134531,
        'None',
        'French_Guiana',
        'Cayenne'
    ],
    [
        'Kourou, French Guiana',
        5.1611312,
        -52.6493342,
        'None',
        'French_Guiana',
        'Kourou'
    ],
    ['Libreville, Gabon', 0.4161976, 9.4672676, 'None', 'Gabon', 'Libreville'],
    [
        'Port Gentil, Gabon',
        -0.7351026,
        8.7591311,
        'None',
        'Gabon',
        'Port_Gentil'
    ],
    ['Banjul, Gambia', 13.4548761, -16.5790323, 'None', 'Gambia', 'Banjul'],
    ['Tbilisi, Georgia', 41.7151377, 44.827096, 'None', 'Georgia', 'Tbilisi'],
    ['Aachen, Germany', 50.7753455, 6.0838868, 'None', 'Germany', 'Aachen'],
    ['Achim, Germany', 53.0092, 9.0510401, 'None', 'Germany', 'Achim'],
    ['Amberg, Germany', 49.4403198, 11.8633445, 'None', 'Germany', 'Amberg'],
    ['Augsburg, Germany', 48.3705449, 10.89779, 'None', 'Germany', 'Augsburg'],
    [
        'Bad Neustadt, Germany',
        50.3230337,
        10.2028107,
        'None',
        'Germany',
        'Bad_Neustadt'
    ],
    ['Balve, Germany', 51.3309319, 7.8646236, 'None', 'Germany', 'Balve'],
    ['Bamberg, Germany', 49.8988135, 10.9027636, 'None', 'Germany', 'Bamberg'],
    [
        'Bayreuth, Germany',
        49.9456399,
        11.5713346,
        'None',
        'Germany',
        'Bayreuth'
    ],
    [
        'Bergisch Gladbach, Germany',
        50.9923091,
        7.1286213,
        'None',
        'Germany',
        'Bergisch_Gladbach'
    ],
    ['Berlin, Germany', 52.5200066, 13.404954, 'None', 'Germany', 'Berlin'],
    [
        'Bielefeld, Germany',
        52.0302285,
        8.5324708,
        'None',
        'Germany',
        'Bielefeld'
    ],
    [
        'Birkenfeld, Germany',
        49.6512438,
        7.1631611,
        'None',
        'Germany',
        'Birkenfeld'
    ],
    ['Bochum, Germany', 51.4818445, 7.2162363, 'None', 'Germany', 'Bochum'],
    ['Bonn, Germany', 50.73743, 7.0982068, 'None', 'Germany', 'Bonn'],
    ['Bottrop, Germany', 51.529086, 6.9446888, 'None', 'Germany', 'Bottrop'],
    [
        'Braunschweig, Germany',
        52.2688736,
        10.5267696,
        'None',
        'Germany',
        'Braunschweig'
    ],
    ['Bremen, Germany', 53.0792962, 8.8016937, 'None', 'Germany', 'Bremen'],
    [
        'Bremerhaven, Germany',
        53.5395845,
        8.5809424,
        'None',
        'Germany',
        'Bremerhaven'
    ],
    [
        'Buxtehude, Germany',
        53.4674857,
        9.6915741,
        'None',
        'Germany',
        'Buxtehude'
    ],
    ['Celle, Germany', 52.6175963, 10.0628515, 'None', 'Germany', 'Celle'],
    ['Chemnitz, Germany', 50.827845, 12.9213697, 'None', 'Germany', 'Chemnitz'],
    ['Cologne, Germany', 50.937531, 6.9602786, 'None', 'Germany', 'Cologne'],
    [
        'Columbus Control Center Oberpfaffenhofen, Germany',
        48.080821,
        11.286046,
        'None',
        'Germany',
        'Columbus_Control_Center_Oberpfaffenhofen'
    ],
    ['Cottbus, Germany', 51.7563108, 14.3328679, 'None', 'Germany', 'Cottbus'],
    [
        'Dahlenburg, Germany',
        53.1878413,
        10.7397201,
        'None',
        'Germany',
        'Dahlenburg'
    ],
    [
        'Darmstadt, Germany',
        49.8728253,
        8.6511929,
        'None',
        'Germany',
        'Darmstadt'
    ],
    [
        'Deggendorf, Germany',
        48.8408515,
        12.9574787,
        'None',
        'Germany',
        'Deggendorf'
    ],
    ['Dortmund, Germany', 51.5135872, 7.4652981, 'None', 'Germany', 'Dortmund'],
    ['Dresden, Germany', 51.0504088, 13.7372621, 'None', 'Germany', 'Dresden'],
    ['Duisburg, Germany', 51.4344079, 6.7623293, 'None', 'Germany', 'Duisburg'],
    [
        'Dusseldorf, Germany',
        51.2277411,
        6.7734556,
        'None',
        'Germany',
        'Dusseldorf'
    ],
    ['Eltville, Germany', 50.0289744, 8.119173, 'None', 'Germany', 'Eltville'],
    [
        'Emlichheim, Germany',
        52.6146118,
        6.8535832,
        'None',
        'Germany',
        'Emlichheim'
    ],
    ['Erfurt, Germany', 50.9847679, 11.0298799, 'None', 'Germany', 'Erfurt'],
    ['Erkelenz, Germany', 51.0784539, 6.315907, 'None', 'Germany', 'Erkelenz'],
    [
        'Erlangen, Germany',
        49.5896744,
        11.0119611,
        'None',
        'Germany',
        'Erlangen'
    ],
    ['Essen, Germany', 51.4556432, 7.0115552, 'None', 'Germany', 'Essen'],
    [
        'Flensburg, Germany',
        54.7937431,
        9.4469964,
        'None',
        'Germany',
        'Flensburg'
    ],
    [
        'Frankfurt am Main, Germany',
        50.1109221,
        8.6821267,
        'None',
        'Germany',
        'Frankfurt_am_Main'
    ],
    [
        'Frankfurt an der Oder, Germany',
        52.3472237,
        14.5505673,
        'None',
        'Germany',
        'Frankfurt_an_der_Oder'
    ],
    [
        'Freiburg im Breisgau, Germany',
        47.9990077,
        7.8421043,
        'None',
        'Germany',
        'Freiburg_im_Breisgau'
    ],
    ['Furth, Germany', 49.4771169, 10.988667, 'None', 'Germany', 'Furth'],
    [
        'Gelsenkirchen, Germany',
        51.517744,
        7.0857172,
        'None',
        'Germany',
        'Gelsenkirchen'
    ],
    [
        'Giebelstadt, Germany',
        49.6534732,
        9.9452462,
        'None',
        'Germany',
        'Giebelstadt'
    ],
    ['Giessen, Germany', 50.5840512, 8.6784031, 'None', 'Germany', 'Giessen'],
    ['Gorlitz, Germany', 51.1506269, 14.968707, 'None', 'Germany', 'Gorlitz'],
    [
        'Gottingen, Germany',
        51.5412804,
        9.9158035,
        'None',
        'Germany',
        'Gottingen'
    ],
    [
        'Greifswald, Germany',
        54.0865463,
        13.3923414,
        'None',
        'Germany',
        'Greifswald'
    ],
    [
        'Gundelfingen, Germany',
        48.0424069,
        7.8669466,
        'None',
        'Germany',
        'Gundelfingen'
    ],
    [
        'Gutersloh, Germany',
        51.9032375,
        8.3857535,
        'None',
        'Germany',
        'Gutersloh'
    ],
    ['Hagen, Germany', 51.3670777, 7.4632841, 'None', 'Germany', 'Hagen'],
    [
        'Halle-Saale, Germany',
        51.4969802,
        11.9688029,
        'None',
        'Germany',
        'Halle-Saale'
    ],
    ['Hamburg, Germany', 53.5510846, 9.9936818, 'None', 'Germany', 'Hamburg'],
    ['Hamm, Germany', 51.6738583, 7.8159816, 'None', 'Germany', 'Hamm'],
    ['Hanau, Germany', 50.1264123, 8.9283105, 'None', 'Germany', 'Hanau'],
    ['Hannover, Germany', 52.3758916, 9.7320104, 'None', 'Germany', 'Hannover'],
    [
        'Heidelberg, Germany',
        49.3987524,
        8.6724335,
        'None',
        'Germany',
        'Heidelberg'
    ],
    [
        'Heilbronn, Germany',
        49.1426929,
        9.210879,
        'None',
        'Germany',
        'Heilbronn'
    ],
    [
        'Helmstedt, Germany',
        52.228966,
        11.009544,
        'None',
        'Germany',
        'Helmstedt'
    ],
    [
        'Heppenheim, Germany',
        49.6430169,
        8.6675419,
        'None',
        'Germany',
        'Heppenheim'
    ],
    ['Herne, Germany', 51.5368948, 7.2009147, 'None', 'Germany', 'Herne'],
    [
        'Herrenberg, Germany',
        48.5950369,
        8.8671577,
        'None',
        'Germany',
        'Herrenberg'
    ],
    ['Herten, Germany', 51.6020534, 7.1389575, 'None', 'Germany', 'Herten'],
    [
        'Hildesheim, Germany',
        52.154778,
        9.9579652,
        'None',
        'Germany',
        'Hildesheim'
    ],
    ['Hof, Germany', 50.3135391, 11.9127814, 'None', 'Germany', 'Hof'],
    [
        'Holzkirchen, Germany',
        47.8810573,
        11.6997577,
        'None',
        'Germany',
        'Holzkirchen'
    ],
    [
        'Idar-Oberstein, Germany',
        49.714528,
        7.3071512,
        'None',
        'Germany',
        'Idar-Oberstein'
    ],
    [
        'Ingolstadt, Germany',
        48.7665351,
        11.4257541,
        'None',
        'Germany',
        'Ingolstadt'
    ],
    ['Isen, Germany', 48.2056508, 12.0535383, 'None', 'Germany', 'Isen'],
    ['Jena, Germany', 50.927054, 11.5892372, 'None', 'Germany', 'Jena'],
    [
        'Kaiserslautern, Germany',
        49.4400657,
        7.7491265,
        'None',
        'Germany',
        'Kaiserslautern'
    ],
    [
        'Karlsruhe, Germany',
        49.0068901,
        8.4036527,
        'None',
        'Germany',
        'Karlsruhe'
    ],
    ['Kassel, Germany', 51.3127114, 9.4797461, 'None', 'Germany', 'Kassel'],
    ['Kempen, Germany', 51.3649942, 6.4205309, 'None', 'Germany', 'Kempen'],
    ['Kiel, Germany', 54.3232927, 10.1227652, 'None', 'Germany', 'Kiel'],
    ['Koblenz, Germany', 50.3569429, 7.5889959, 'None', 'Germany', 'Koblenz'],
    ['Konstanz, Germany', 47.6779496, 9.1732384, 'None', 'Germany', 'Konstanz'],
    ['Krefeld, Germany', 51.3387609, 6.5853417, 'None', 'Germany', 'Krefeld'],
    ['Kropp, Germany', 54.411313, 9.5090762, 'None', 'Germany', 'Kropp'],
    ['Landau, Germany', 49.198886, 8.1185622, 'None', 'Germany', 'Landau'],
    [
        'Landshut, Germany',
        48.5441917,
        12.1468532,
        'None',
        'Germany',
        'Landshut'
    ],
    [
        'Leichlingen, Germany',
        51.102509,
        7.0096126,
        'None',
        'Germany',
        'Leichlingen'
    ],
    ['Leipzig, Germany', 51.3396955, 12.3730747, 'None', 'Germany', 'Leipzig'],
    ['Leonberg, Germany', 48.7960447, 9.0095706, 'None', 'Germany', 'Leonberg'],
    [
        'Leverkusen, Germany',
        51.0459248,
        7.0192196,
        'None',
        'Germany',
        'Leverkusen'
    ],
    ['Lubeck, Germany', 53.8654673, 10.6865593, 'None', 'Germany', 'Lubeck'],
    [
        'Ludenscheid, Germany',
        51.2191038,
        7.63126,
        'None',
        'Germany',
        'Ludenscheid'
    ],
    [
        'Ludwigshafen, Germany',
        49.47741,
        8.44518,
        'None',
        'Germany',
        'Ludwigshafen'
    ],
    [
        'Luneburg, Germany',
        53.2464214,
        10.4115179,
        'None',
        'Germany',
        'Luneburg'
    ],
    [
        'Magdeburg, Germany',
        52.1205333,
        11.6276237,
        'None',
        'Germany',
        'Magdeburg'
    ],
    ['Mainz, Germany', 49.9928617, 8.2472526, 'None', 'Germany', 'Mainz'],
    ['Mannheim, Germany', 49.4874592, 8.4660395, 'None', 'Germany', 'Mannheim'],
    ['Marburg, Germany', 50.8021728, 8.7667933, 'None', 'Germany', 'Marburg'],
    ['Meppen, Germany', 52.6953479, 7.2994007, 'None', 'Germany', 'Meppen'],
    [
        'Meuselwitz, Germany',
        51.0427059,
        12.3024728,
        'None',
        'Germany',
        'Meuselwitz'
    ],
    ['Minden, Germany', 52.2964919, 8.8949206, 'None', 'Germany', 'Minden'],
    ['Moers, Germany', 51.4516041, 6.6408148, 'None', 'Germany', 'Moers'],
    [
        'Monchengladbach, Germany',
        51.1804572,
        6.4428041,
        'None',
        'Germany',
        'Monchengladbach'
    ],
    ['Mulheim, Germany', 51.4185682, 6.8845226, 'None', 'Germany', 'Mulheim'],
    ['Munchen, Germany', 48.1351253, 11.5819806, 'None', 'Germany', 'Munchen'],
    ['Munster, Germany', 51.7697275, 7.6972329, 'None', 'Germany', 'Munster'],
    [
        'Naumburg, Germany',
        51.1520283,
        11.8142454,
        'None',
        'Germany',
        'Naumburg'
    ],
    ['Netphen, Germany', 50.9150588, 8.1072664, 'None', 'Germany', 'Netphen'],
    ['Neuss, Germany', 51.2041968, 6.6879511, 'None', 'Germany', 'Neuss'],
    ['Neustadt, Germany', 49.3501864, 8.1486886, 'None', 'Germany', 'Neustadt'],
    ['Northeim, Germany', 51.7001785, 9.9959057, 'None', 'Germany', 'Northeim'],
    ['Nuremberg, Germany', 49.45203, 11.07675, 'None', 'Germany', 'Nuremberg'],
    [
        'Nurtingen, Germany',
        48.624421,
        9.3469069,
        'None',
        'Germany',
        'Nurtingen'
    ],
    [
        'Offenbach, Germany',
        50.0956362,
        8.7760843,
        'None',
        'Germany',
        'Offenbach'
    ],
    [
        'Oldenburg, Germany',
        53.1434501,
        8.2145521,
        'None',
        'Germany',
        'Oldenburg'
    ],
    [
        'Osnabruck, Germany',
        52.2799112,
        8.0471788,
        'None',
        'Germany',
        'Osnabruck'
    ],
    [
        'Osterhofen, Germany',
        48.7019417,
        13.0178291,
        'None',
        'Germany',
        'Osterhofen'
    ],
    [
        'Paderborn, Germany',
        51.7189205,
        8.7575093,
        'None',
        'Germany',
        'Paderborn'
    ],
    [
        'Pforzheim, Germany',
        48.8921862,
        8.6946286,
        'None',
        'Germany',
        'Pforzheim'
    ],
    ['Potsdam, Germany', 52.3905689, 13.0644729, 'None', 'Germany', 'Potsdam'],
    ['Ramstein, Germany', 49.445759, 7.5545404, 'None', 'Germany', 'Ramstein'],
    ['Rastede, Germany', 53.2445468, 8.2005361, 'None', 'Germany', 'Rastede'],
    [
        'Recklinghausen, Germany',
        51.6140649,
        7.1979453,
        'None',
        'Germany',
        'Recklinghausen'
    ],
    [
        'Regensburg, Germany',
        49.0134297,
        12.1016236,
        'None',
        'Germany',
        'Regensburg'
    ],
    [
        'Remscheid, Germany',
        51.1787418,
        7.1896962,
        'None',
        'Germany',
        'Remscheid'
    ],
    [
        'Reutlingen, Germany',
        48.5069389,
        9.2038043,
        'None',
        'Germany',
        'Reutlingen'
    ],
    [
        'Rheda-Wdbrck, Germany',
        51.8458575,
        8.2997425,
        'None',
        'Germany',
        'Rheda-Wdbrck'
    ],
    ['Rodgau, Germany', 50.0012757, 8.8769235, 'None', 'Germany', 'Rodgau'],
    ['Rostock, Germany', 54.0924406, 12.0991466, 'None', 'Germany', 'Rostock'],
    [
        'Saarbrucken, Germany',
        49.2401572,
        6.9969327,
        'None',
        'Germany',
        'Saarbrucken'
    ],
    [
        'Salzgitter, Germany',
        52.1378659,
        10.3899126,
        'None',
        'Germany',
        'Salzgitter'
    ],
    [
        'Schleswig, Germany',
        54.5239312,
        9.563227,
        'None',
        'Germany',
        'Schleswig'
    ],
    ['Schwelm, Germany', 51.2882674, 7.291086, 'None', 'Germany', 'Schwelm'],
    [
        'Senftenberg, Germany',
        51.5189796,
        13.996908,
        'None',
        'Germany',
        'Senftenberg'
    ],
    ['Siegen, Germany', 50.8838492, 8.0209591, 'None', 'Germany', 'Siegen'],
    ['Solingen, Germany', 51.1702072, 7.0831408, 'None', 'Germany', 'Solingen'],
    [
        'Spangdahlem Air Base, Germany',
        49.9729369,
        6.7019995,
        'None',
        'Germany',
        'Spangdahlem_Air_Base'
    ],
    [
        'Stuttgart, Germany',
        48.7758459,
        9.1829321,
        'None',
        'Germany',
        'Stuttgart'
    ],
    ['Trier, Germany', 49.749992, 6.6371433, 'None', 'Germany', 'Trier'],
    [
        'Trostberg, Germany',
        48.0252373,
        12.5552575,
        'None',
        'Germany',
        'Trostberg'
    ],
    ['Tubingen, Germany', 48.5216364, 9.0576448, 'None', 'Germany', 'Tubingen'],
    ['Ulm, Germany', 48.4010822, 9.9876076, 'None', 'Germany', 'Ulm'],
    ['Villingen, Germany', 50.506679, 8.93424, 'None', 'Germany', 'Villingen'],
    ['Walldorf, Germany', 49.3063689, 8.6427693, 'None', 'Germany', 'Walldorf'],
    ['Weinheim, Germany', 49.544964, 8.6602703, 'None', 'Germany', 'Weinheim'],
    [
        'Wiesbaden, Germany',
        50.0782184,
        8.2397608,
        'None',
        'Germany',
        'Wiesbaden'
    ],
    ['Winsen, Germany', 53.3574436, 10.2127204, 'None', 'Germany', 'Winsen'],
    ['Witten, Germany', 51.4438926, 7.353197, 'None', 'Germany', 'Witten'],
    [
        'Wolfsburg, Germany',
        52.4226503,
        10.7865461,
        'None',
        'Germany',
        'Wolfsburg'
    ],
    [
        'Wuerzburg, Germany',
        49.7913044,
        9.9533548,
        'None',
        'Germany',
        'Wuerzburg'
    ],
    [
        'Wuppertal, Germany',
        51.2562128,
        7.1507636,
        'None',
        'Germany',
        'Wuppertal'
    ],
    ['Accra, Ghana', 5.6037168, -0.1869644, 'None', 'Ghana', 'Accra'],
    ['Athens, Greece', 37.98381, 23.727539, 'None', 'Greece', 'Athens'],
    ['Iraklion, Greece', 35.3387352, 25.1442126, 'None', 'Greece', 'Iraklion'],
    ['Piraeus, Greece', 37.9429857, 23.6469832, 'None', 'Greece', 'Piraeus'],
    [
        'Thessaloniki, Greece',
        40.6400629,
        22.9444191,
        'None',
        'Greece',
        'Thessaloniki'
    ],
    [
        'Saint Georges, Saint George',
        12.0560975,
        -61.7487996,
        'Saint_George',
        'Grenada',
        'Saint_Georges'
    ],
    [
        'Guatemala City, Guatemala',
        14.6349149,
        -90.5068824,
        'None',
        'Guatemala',
        'Guatemala_City'
    ],
    [
        'Pointe a Pitre, Guatemala',
        16.2376869,
        -61.5340424,
        'None',
        'Guatemala',
        'Pointe_a_Pitre'
    ],
    [
        'Quesaltenango, Guatemala',
        14.85207,
        -91.530547,
        'None',
        'Guatemala',
        'Quesaltenango'
    ],
    [
        'Georgetown, Guyana',
        6.801279,
        -58.155125,
        'None',
        'Guyana',
        'Georgetown'
    ],
    [
        'Port-au-Prince, Haiti',
        18.594395,
        -72.3074326,
        'None',
        'Haiti',
        'Port-au-Prince'
    ],
    ['Roatan, Honduras', 16.3239655, -86.5350176, 'None', 'Honduras', 'Roatan'],
    [
        'San Pedro Sula, Honduras',
        15.5149204,
        -87.9922684,
        'None',
        'Honduras',
        'San_Pedro_Sula'
    ],
    [
        'Tegucigalpa, Honduras',
        14.0722751,
        -87.192136,
        'None',
        'Honduras',
        'Tegucigalpa'
    ],
    [
        'Hong Kong, Hong Kong',
        22.396428,
        114.109497,
        'None',
        'Hong_Kong',
        'Hong_Kong'
    ],
    [
        'Bekescsaba, Hungary',
        46.6735939,
        21.0877309,
        'None',
        'Hungary',
        'Bekescsaba'
    ],
    ['Budapest, Hungary', 47.497912, 19.040235, 'None', 'Hungary', 'Budapest'],
    [
        'Debrecen, Hungary',
        47.5316049,
        21.6273123,
        'None',
        'Hungary',
        'Debrecen'
    ],
    ['Eger, Hungary', 47.9025348, 20.3772284, 'None', 'Hungary', 'Eger'],
    ['Gyor, Hungary', 47.6874569, 17.6503974, 'None', 'Hungary', 'Gyor'],
    [
        'Kaposvar, Hungary',
        46.3593606,
        17.7967639,
        'None',
        'Hungary',
        'Kaposvar'
    ],
    [
        'Kecskemet, Hungary',
        46.8963711,
        19.6896861,
        'None',
        'Hungary',
        'Kecskemet'
    ],
    [
        'Keszthely, Hungary',
        46.7654716,
        17.2479554,
        'None',
        'Hungary',
        'Keszthely'
    ],
    ['Miskolc, Hungary', 48.1034775, 20.7784384, 'None', 'Hungary', 'Miskolc'],
    [
        'Nyiregyhaza, Hungary',
        47.9495324,
        21.7244053,
        'None',
        'Hungary',
        'Nyiregyhaza'
    ],
    ['Pecs, Hungary', 46.0727345, 18.232266, 'None', 'Hungary', 'Pecs'],
    [
        'Salgotarjan, Hungary',
        48.0935237,
        19.7999813,
        'None',
        'Hungary',
        'Salgotarjan'
    ],
    ['Szeged, Hungary', 46.2530102, 20.1414253, 'None', 'Hungary', 'Szeged'],
    [
        'Szekesfehervar, Hungary',
        47.1860262,
        18.4221358,
        'None',
        'Hungary',
        'Szekesfehervar'
    ],
    [
        'Szekszard, Hungary',
        46.3474326,
        18.7062293,
        'None',
        'Hungary',
        'Szekszard'
    ],
    ['Szolnok, Hungary', 47.1621355, 20.1824712, 'None', 'Hungary', 'Szolnok'],
    [
        'Szombathely, Hungary',
        47.2306851,
        16.6218441,
        'None',
        'Hungary',
        'Szombathely'
    ],
    [
        'Tatabanya, Hungary',
        47.569246,
        18.404818,
        'None',
        'Hungary',
        'Tatabanya'
    ],
    ['Tolna, Hungary', 46.4258265, 18.7752069, 'None', 'Hungary', 'Tolna'],
    [
        'Veszprem, Hungary',
        47.1028087,
        17.9093019,
        'None',
        'Hungary',
        'Veszprem'
    ],
    [
        'Zalaegerszeg, Hungary',
        46.8416936,
        16.8416322,
        'None',
        'Hungary',
        'Zalaegerszeg'
    ],
    [
        'Reykjavik, Iceland',
        64.1265206,
        -21.8174393,
        'None',
        'Iceland',
        'Reykjavik'
    ],
    ['Agartala, India', 23.831457, 91.2867777, 'None', 'India', 'Agartala'],
    ['Agra, India', 27.1766701, 78.0080745, 'None', 'India', 'Agra'],
    ['Aizawl, India', 23.727107, 92.7176389, 'None', 'India', 'Aizawl'],
    ['Allahabad, India', 25.4358011, 81.846311, 'None', 'India', 'Allahabad'],
    [
        'Aurangabad, India',
        19.8761653,
        75.3433139,
        'None',
        'India',
        'Aurangabad'
    ],
    ['Bengaluru, India', 12.9127524, 77.6076472, 'None', 'India', 'Bengaluru'],
    ['Bhopal, India', 23.2599333, 77.412615, 'None', 'India', 'Bhopal'],
    [
        'Bhubaneswar, India',
        20.2960587,
        85.8245398,
        'None',
        'India',
        'Bhubaneswar'
    ],
    [
        'Chandigarh, India',
        30.7333148,
        76.7794179,
        'None',
        'India',
        'Chandigarh'
    ],
    ['Chennai, India', 12.8682072, 80.2148769, 'None', 'India', 'Chennai'],
    [
        'Coimbatore, India',
        11.0168445,
        76.9558321,
        'None',
        'India',
        'Coimbatore'
    ],
    ['Daman, India', 20.3973736, 72.8327991, 'None', 'India', 'Daman'],
    ['Dehradun, India', 30.3164945, 78.0321918, 'None', 'India', 'Dehradun'],
    ['Delhi, India', 28.7040592, 77.1024902, 'None', 'India', 'Delhi'],
    ['Dhanbad, India', 23.7956531, 86.4303859, 'None', 'India', 'Dhanbad'],
    ['Dispur, India', 26.1433459, 91.7897953, 'None', 'India', 'Dispur'],
    [
        'Gandhinagar, India',
        23.2156354,
        72.6369415,
        'None',
        'India',
        'Gandhinagar'
    ],
    ['Gangtok, India', 27.3389356, 88.6065035, 'None', 'India', 'Gangtok'],
    ['Goa, India', 15.2993265, 74.123996, 'None', 'India', 'Goa'],
    ['Hyderabad, India', 17.385044, 78.486671, 'None', 'India', 'Hyderabad'],
    ['Imphal, India', 24.8170111, 93.9368439, 'None', 'India', 'Imphal'],
    ['Indore, India', 22.7195687, 75.8577258, 'None', 'India', 'Indore'],
    ['Itanagar, India', 27.0843682, 93.6053163, 'None', 'India', 'Itanagar'],
    ['Jabalpur, India', 23.181467, 79.9864071, 'None', 'India', 'Jabalpur'],
    ['Jaipur, India', 26.9124336, 75.7872709, 'None', 'India', 'Jaipur'],
    ['Jamnagar, India', 22.470702, 70.05773, 'None', 'India', 'Jamnagar'],
    ['Kavaratti, India', 10.5593204, 72.6358134, 'None', 'India', 'Kavaratti'],
    ['Kohima, India', 25.6585963, 94.1053307, 'None', 'India', 'Kohima'],
    ['Kolhapur, India', 16.7049873, 74.2432527, 'None', 'India', 'Kolhapur'],
    ['Kolkata, India', 22.572646, 88.363895, 'None', 'India', 'Kolkata'],
    ['Lucknow, India', 26.8466937, 80.946166, 'None', 'India', 'Lucknow'],
    ['Ludhiana, India', 30.900965, 75.8572758, 'None', 'India', 'Ludhiana'],
    ['Mumbai, India', 19.0408636, 72.8434571, 'None', 'India', 'Mumbai'],
    ['Nagpur, India', 21.1458004, 79.0881546, 'None', 'India', 'Nagpur'],
    ['New Delhi, India', 28.6900124, 77.2079272, 'None', 'India', 'New_Delhi'],
    ['Panaji, India', 15.4909301, 73.8278496, 'None', 'India', 'Panaji'],
    ['Patna, India', 25.5940947, 85.1375645, 'None', 'India', 'Patna'],
    [
        'Pondicherry, India',
        11.9138598,
        79.8144722,
        'None',
        'India',
        'Pondicherry'
    ],
    [
        'Port Blair, India',
        11.6233774,
        92.7264828,
        'None',
        'India',
        'Port_Blair'
    ],
    ['Pune, India', 18.5204303, 73.8567437, 'None', 'India', 'Pune'],
    ['Raipur, India', 21.2513844, 81.6296413, 'None', 'India', 'Raipur'],
    [
        'Rajahmundry, India',
        17.0005383,
        81.8040345,
        'None',
        'India',
        'Rajahmundry'
    ],
    ['Rajkot, India', 22.3038945, 70.8021599, 'None', 'India', 'Rajkot'],
    ['Ranchi, India', 23.3440997, 85.309562, 'None', 'India', 'Ranchi'],
    ['Shillong, India', 25.5787726, 91.8932535, 'None', 'India', 'Shillong'],
    ['Shimla, India', 31.1048145, 77.1734033, 'None', 'India', 'Shimla'],
    ['Siliguri, India', 26.7271012, 88.3952861, 'None', 'India', 'Siliguri'],
    ['Silvassa, India', 20.2762659, 73.0083061, 'None', 'India', 'Silvassa'],
    ['Srinagar, India', 34.0836708, 74.7972825, 'None', 'India', 'Srinagar'],
    ['Surat, India', 21.1702401, 72.8310607, 'None', 'India', 'Surat'],
    [
        'Thiruvananthapuram, India',
        8.5241391,
        76.9366376,
        'None',
        'India',
        'Thiruvananthapuram'
    ],
    [
        'Vijayawada, India',
        16.5061743,
        80.6480153,
        'None',
        'India',
        'Vijayawada'
    ],
    [
        'Visakhapatnam, India',
        17.6868159,
        83.2184815,
        'None',
        'India',
        'Visakhapatnam'
    ],
    ['Warangal, India', 17.9689008, 79.5940544, 'None', 'India', 'Warangal'],
    [
        'Banda Aceh, Indonesia',
        5.5482904,
        95.3237559,
        'None',
        'Indonesia',
        'Banda_Aceh'
    ],
    [
        'Denpasar, Indonesia',
        -8.6704582,
        115.2126293,
        'None',
        'Indonesia',
        'Denpasar'
    ],
    [
        'Jakarta, Indonesia',
        -6.2232862,
        106.8236219,
        'None',
        'Indonesia',
        'Jakarta'
    ],
    [
        'Sukabumi, Indonesia',
        -6.2132771,
        106.8181864,
        'None',
        'Indonesia',
        'Sukabumi'
    ],
    [
        'Surabaya, Indonesia',
        -7.2574719,
        112.7520883,
        'None',
        'Indonesia',
        'Surabaya'
    ],
    ['Tehran, Iran', 35.6891975, 51.3889736, 'None', 'Iran', 'Tehran'],
    [
        'An Nasiriyah, Iraq',
        31.0452345,
        46.2665911,
        'None',
        'Iraq',
        'An_Nasiriyah'
    ],
    ['Baghdad, Iraq', 33.3128057, 44.3614875, 'None', 'Iraq', 'Baghdad'],
    ['Kirkuk, Iraq', 35.4655761, 44.3803921, 'None', 'Iraq', 'Kirkuk'],
    ['Mosul, Iraq', 36.3566484, 43.1640004, 'None', 'Iraq', 'Mosul'],
    ['Ur, Iraq', 30.9608333, 46.1061111, 'None', 'Iraq', 'Ur'],
    ['Athlone, Ireland', 53.4239331, -7.9406898, 'None', 'Ireland', 'Athlone'],
    ['Cork, Ireland', 51.8968917, -8.4863157, 'None', 'Ireland', 'Cork'],
    ['Dublin, Ireland', 53.3498053, -6.2603097, 'None', 'Ireland', 'Dublin'],
    ['Dundalk, Ireland', 53.9979451, -6.405957, 'None', 'Ireland', 'Dundalk'],
    ['Ennis, Ireland', 52.8474255, -8.9887384, 'None', 'Ireland', 'Ennis'],
    ['Galway, Ireland', 53.270668, -9.0567905, 'None', 'Ireland', 'Galway'],
    [
        'Greystones, Ireland',
        53.1491175,
        -6.0793414,
        'None',
        'Ireland',
        'Greystones'
    ],
    [
        'Kilkenny, Ireland',
        52.6541454,
        -7.2447879,
        'None',
        'Ireland',
        'Kilkenny'
    ],
    [
        'Killarney, Ireland',
        52.0599353,
        -9.5044265,
        'None',
        'Ireland',
        'Killarney'
    ],
    [
        'Letterkenny, Ireland',
        54.9558392,
        -7.7342787,
        'None',
        'Ireland',
        'Letterkenny'
    ],
    [
        'Limerick, Ireland',
        52.6680204,
        -8.6304975,
        'None',
        'Ireland',
        'Limerick'
    ],
    ['Longford, Ireland', 53.7275564, -7.793109, 'None', 'Ireland', 'Longford'],
    [
        'Oldcastle, Ireland',
        53.8583306,
        -7.2047171,
        'None',
        'Ireland',
        'Oldcastle'
    ],
    [
        'Port Laoise, Ireland',
        53.0328123,
        -7.2987933,
        'None',
        'Ireland',
        'Port_Laoise'
    ],
    [
        'Tullamore, Ireland',
        53.2755255,
        -7.4933852,
        'None',
        'Ireland',
        'Tullamore'
    ],
    [
        'Waterford, Ireland',
        52.2593197,
        -7.1100703,
        'None',
        'Ireland',
        'Waterford'
    ],
    ['Westport, Ireland', 53.802131, -9.514347, 'None', 'Ireland', 'Westport'],
    [
        'Beer-Sheva, Israel',
        31.252973,
        34.791462,
        'None',
        'Israel',
        'Beer-Sheva'
    ],
    ['Haifa, Israel', 32.7940463, 34.989571, 'None', 'Israel', 'Haifa'],
    ['Jerusalem, Israel', 31.768319, 35.21371, 'None', 'Israel', 'Jerusalem'],
    ['Nazareth, Israel', 32.699635, 35.303546, 'None', 'Israel', 'Nazareth'],
    ['Netanya, Israel', 32.321458, 34.853196, 'None', 'Israel', 'Netanya'],
    ['Ramat Gan, Israel', 32.068424, 34.824785, 'None', 'Israel', 'Ramat_Gan'],
    ['Rehovot, Israel', 31.892773, 34.811272, 'None', 'Israel', 'Rehovot'],
    ['Tel Aviv, Israel', 32.0852999, 34.7817676, 'None', 'Israel', 'Tel_Aviv'],
    ['Adelfia, Italy', 41.0037948, 16.8721877, 'None', 'Italy', 'Adelfia'],
    [
        'Alessandria, Italy',
        44.9072727,
        8.6116796,
        'None',
        'Italy',
        'Alessandria'
    ],
    ['Ancona, Italy', 43.6158299, 13.518915, 'None', 'Italy', 'Ancona'],
    ['Aosta, Italy', 45.734955, 7.313076, 'None', 'Italy', 'Aosta'],
    ['Bari, Italy', 41.1171432, 16.8718715, 'None', 'Italy', 'Bari'],
    ['Belluno, Italy', 46.142463, 12.216709, 'None', 'Italy', 'Belluno'],
    ['Bergamo, Italy', 45.6982642, 9.6772698, 'None', 'Italy', 'Bergamo'],
    ['Bologna, Italy', 44.7158897, 11.3114967, 'None', 'Italy', 'Bologna'],
    [
        'Bozen-Bolzano, Italy',
        46.4982953,
        11.3547582,
        'None',
        'Italy',
        'Bozen-Bolzano'
    ],
    ['Brescia, Italy', 45.5532916, 10.2435924, 'None', 'Italy', 'Brescia'],
    ['Bugnara, Italy', 42.0219869, 13.8609296, 'None', 'Italy', 'Bugnara'],
    [
        'Busto Arsizio, Italy',
        45.611892,
        8.8531265,
        'None',
        'Italy',
        'Busto_Arsizio'
    ],
    ['Cagliari, Italy', 39.2238411, 9.1216613, 'None', 'Italy', 'Cagliari'],
    [
        'Campobasso, Italy',
        41.5602544,
        14.6627161,
        'None',
        'Italy',
        'Campobasso'
    ],
    [
        'Canosa di Puglia, Italy',
        41.2224319,
        16.0660707,
        'None',
        'Italy',
        'Canosa_di_Puglia'
    ],
    ['Carbonia, Italy', 39.1644281, 8.5228853, 'None', 'Italy', 'Carbonia'],
    ['Catania, Italy', 37.507877, 15.08303, 'None', 'Italy', 'Catania'],
    ['Catanzaro, Italy', 38.9097919, 16.5876516, 'None', 'Italy', 'Catanzaro'],
    ['Como, Italy', 45.8080597, 9.0851765, 'None', 'Italy', 'Como'],
    ['Ferrara, Italy', 44.8381237, 11.619787, 'None', 'Italy', 'Ferrara'],
    ['Florence, Italy', 43.76956, 11.255814, 'None', 'Italy', 'Florence'],
    ['Foggia, Italy', 41.4621984, 15.5446302, 'None', 'Italy', 'Foggia'],
    ['Forli, Italy', 44.2227398, 12.0407312, 'None', 'Italy', 'Forli'],
    ['Genoa, Italy', 44.40565, 8.946256, 'None', 'Italy', 'Genoa'],
    ['Giugliano, Italy', 40.9155632, 14.1039217, 'None', 'Italy', 'Giugliano'],
    ['Grosseto, Italy', 42.7635254, 11.1123634, 'None', 'Italy', 'Grosseto'],
    ['LAke Iseo, Italy', 45.721871, 10.0670398, 'None', 'Italy', 'LAke_Iseo'],
    ['Latina, Italy', 41.4675671, 12.9035965, 'None', 'Italy', 'Latina'],
    ['Lecce, Italy', 40.3515155, 18.1750161, 'None', 'Italy', 'Lecce'],
    ['Lecco, Italy', 45.8565698, 9.3976704, 'None', 'Italy', 'Lecco'],
    ['Legnano, Italy', 45.5983403, 8.9142485, 'None', 'Italy', 'Legnano'],
    ['Livorno, Italy', 43.548473, 10.3105674, 'None', 'Italy', 'Livorno'],
    ['Lucca, Italy', 43.837621, 10.495061, 'None', 'Italy', 'Lucca'],
    ['L Aquila, Italy', 42.3498479, 13.3995091, 'None', 'Italy', 'L_Aquila'],
    ['Macerata, Italy', 43.2984268, 13.4534767, 'None', 'Italy', 'Macerata'],
    ['Matera, Italy', 40.666379, 16.6043199, 'None', 'Italy', 'Matera'],
    ['Messina, Italy', 38.193814, 15.554015, 'None', 'Italy', 'Messina'],
    ['Milan, Italy', 45.4865701, 9.2531517, 'None', 'Italy', 'Milan'],
    ['Modena, Italy', 44.647128, 10.9252269, 'None', 'Italy', 'Modena'],
    [
        'Montevarchi, Italy',
        43.530781,
        11.5639528,
        'None',
        'Italy',
        'Montevarchi'
    ],
    ['Monza, Italy', 45.5845001, 9.2744485, 'None', 'Italy', 'Monza'],
    ['Naples, Italy', 40.851775, 14.268124, 'None', 'Italy', 'Naples'],
    ['Olbia, Italy', 40.9235764, 9.4964429, 'None', 'Italy', 'Olbia'],
    ['Oristano, Italy', 39.906182, 8.5883863, 'None', 'Italy', 'Oristano'],
    ['Padua, Italy', 45.4064349, 11.8767611, 'None', 'Italy', 'Padua'],
    ['Palermo, Italy', 38.115688, 13.361267, 'None', 'Italy', 'Palermo'],
    ['Parma, Italy', 44.801485, 10.3279036, 'None', 'Italy', 'Parma'],
    ['Perugia, Italy', 43.1107168, 12.3908279, 'None', 'Italy', 'Perugia'],
    ['Pescara, Italy', 42.4617902, 14.2160898, 'None', 'Italy', 'Pescara'],
    ['Pisa, Italy', 43.7228386, 10.4016888, 'None', 'Italy', 'Pisa'],
    ['Portici, Italy', 40.8141218, 14.339067, 'None', 'Italy', 'Portici'],
    ['Potenza, Italy', 40.6404067, 15.8056041, 'None', 'Italy', 'Potenza'],
    ['Prato, Italy', 43.8777049, 11.102228, 'None', 'Italy', 'Prato'],
    ['Ravenna, Italy', 44.4183598, 12.2035294, 'None', 'Italy', 'Ravenna'],
    [
        'Reggio Calabria, Italy',
        38.1113006,
        15.6472914,
        'None',
        'Italy',
        'Reggio_Calabria'
    ],
    [
        'Reggio Emilia, Italy',
        44.704478,
        10.625431,
        'None',
        'Italy',
        'Reggio_Emilia'
    ],
    ['Rieti, Italy', 42.404509, 12.8567281, 'None', 'Italy', 'Rieti'],
    ['Rimini, Italy', 44.0678288, 12.5695158, 'None', 'Italy', 'Rimini'],
    ['Rome, Italy', 41.902783, 12.496366, 'None', 'Italy', 'Rome'],
    ['Salerno, Italy', 40.6824408, 14.7680961, 'None', 'Italy', 'Salerno'],
    ['Samarate, Italy', 45.6260364, 8.7870324, 'None', 'Italy', 'Samarate'],
    ['Saronno, Italy', 45.6242491, 9.0359607, 'None', 'Italy', 'Saronno'],
    ['Sassari, Italy', 40.7259269, 8.5556826, 'None', 'Italy', 'Sassari'],
    ['Syracuse, Italy', 37.0754739, 15.2865861, 'None', 'Italy', 'Syracuse'],
    ['Taranto, Italy', 40.4643606, 17.2470303, 'None', 'Italy', 'Taranto'],
    ['Teramo, Italy', 42.8559297, 13.8188465, 'None', 'Italy', 'Teramo'],
    ['Terni, Italy', 42.5636168, 12.6426604, 'None', 'Italy', 'Terni'],
    ['Torino, Italy', 44.9334927, 7.5407494, 'None', 'Italy', 'Torino'],
    ['Trento, Italy', 46.074779, 11.121749, 'None', 'Italy', 'Trento'],
    ['Trieste, Italy', 45.649526, 13.776818, 'None', 'Italy', 'Trieste'],
    [
        'Turin-Torino, Italy',
        45.070312,
        7.686856,
        'None',
        'Italy',
        'Turin-Torino'
    ],
    [
        'Ustica Island, Italy',
        38.7031179,
        13.1682675,
        'None',
        'Italy',
        'Ustica_Island'
    ],
    ['Venice, Italy', 45.440847, 12.315515, 'None', 'Italy', 'Venice'],
    ['Verona, Italy', 45.4383842, 10.9916215, 'None', 'Italy', 'Verona'],
    ['Vicenza, Italy', 45.5454787, 11.5354214, 'None', 'Italy', 'Vicenza'],
    ['Villata, Italy', 45.384721, 8.433696, 'None', 'Italy', 'Villata'],
    ['Kingston, Jamaica', 18.017874, -76.809904, 'None', 'Jamaica', 'Kingston'],
    [
        'Mandeville, Jamaica',
        18.031285,
        -77.50461,
        'None',
        'Jamaica',
        'Mandeville'
    ],
    [
        'Mearnsville, Jamaica',
        18.182313,
        -78.0316676,
        'None',
        'Jamaica',
        'Mearnsville'
    ],
    [
        'Montego Bay, Jamaica',
        18.4762228,
        -77.8938895,
        'None',
        'Jamaica',
        'Montego_Bay'
    ],
    ['Ageo, Japan', 35.9773805, 139.5932055, 'None', 'Japan', 'Ageo'],
    ['Akashi, Japan', 34.6431066, 134.9971787, 'None', 'Japan', 'Akashi'],
    ['Akita, Japan', 39.7200079, 140.1025642, 'None', 'Japan', 'Akita'],
    ['Amagasaki, Japan', 34.7337339, 135.4063757, 'None', 'Japan', 'Amagasaki'],
    ['Aomori, Japan', 40.822072, 140.7473647, 'None', 'Japan', 'Aomori'],
    ['Asahikawa, Japan', 43.7706355, 142.364819, 'None', 'Japan', 'Asahikawa'],
    ['Atsugi, Japan', 35.4430818, 139.3624889, 'None', 'Japan', 'Atsugi'],
    ['Chiba, Japan', 35.6072668, 140.1062907, 'None', 'Japan', 'Chiba'],
    ['Chigasaki, Japan', 35.3338596, 139.4047163, 'None', 'Japan', 'Chigasaki'],
    ['Chofu, Japan', 35.6506145, 139.5406936, 'None', 'Japan', 'Chofu'],
    ['Fuchu, Japan', 35.6689735, 139.4776614, 'None', 'Japan', 'Fuchu'],
    ['Fukui, Japan', 36.0640669, 136.2194938, 'None', 'Japan', 'Fukui'],
    ['Fukuoka, Japan', 33.5903547, 130.4017155, 'None', 'Japan', 'Fukuoka'],
    ['Fukushima, Japan', 37.7608337, 140.4747282, 'None', 'Japan', 'Fukushima'],
    ['Gifu, Japan', 35.4232984, 136.7606537, 'None', 'Japan', 'Gifu'],
    ['Hiroshima, Japan', 34.385203, 132.455293, 'None', 'Japan', 'Hiroshima'],
    [
        'H IIB Launch Control Tanegashima, Japan',
        30.402222,
        130.975,
        'None',
        'Japan',
        'H_IIB_Launch_Control_Tanegashima'
    ],
    ['Iwakuni, Japan', 34.1665616, 132.2188479, 'None', 'Japan', 'Iwakuni'],
    [
        'JEM HTV Control Center Tsukuba, Japan',
        36.065778,
        140.129806,
        'None',
        'Japan',
        'JEM_HTV_Control_Center_Tsukuba'
    ],
    ['Kagoshima, Japan', 31.5965535, 130.5571158, 'None', 'Japan', 'Kagoshima'],
    ['Kanazawa, Japan', 36.5613254, 136.6562051, 'None', 'Japan', 'Kanazawa'],
    ['Kobe, Japan', 34.7569578, 135.1476781, 'None', 'Japan', 'Kobe'],
    ['Kochi, Japan', 33.5595867, 133.5292788, 'None', 'Japan', 'Kochi'],
    ['Kofu, Japan', 35.66228, 138.5682015, 'None', 'Japan', 'Kofu'],
    ['Kumamoto, Japan', 32.8031004, 130.7078911, 'None', 'Japan', 'Kumamoto'],
    ['Kyoto, Japan', 35.0116363, 135.7680294, 'None', 'Japan', 'Kyoto'],
    ['Maebashi, Japan', 36.3894816, 139.0634281, 'None', 'Japan', 'Maebashi'],
    ['Matsue, Japan', 35.4680595, 133.048375, 'None', 'Japan', 'Matsue'],
    ['Matsuyama, Japan', 33.8391574, 132.7655752, 'None', 'Japan', 'Matsuyama'],
    ['Misawa, Japan', 40.6831337, 141.3689761, 'None', 'Japan', 'Misawa'],
    ['Mito, Japan', 36.3665027, 140.4709965, 'None', 'Japan', 'Mito'],
    ['Miyazaki, Japan', 31.9076736, 131.4202411, 'None', 'Japan', 'Miyazaki'],
    ['Morioka, Japan', 39.702053, 141.1544838, 'None', 'Japan', 'Morioka'],
    ['Nagano, Japan', 36.6485496, 138.1942432, 'None', 'Japan', 'Nagano'],
    ['Nagasaki, Japan', 32.750286, 129.877667, 'None', 'Japan', 'Nagasaki'],
    ['Nagoya, Japan', 35.1814464, 136.906398, 'None', 'Japan', 'Nagoya'],
    ['Naha, Japan', 26.2123124, 127.6791568, 'None', 'Japan', 'Naha'],
    ['Nara, Japan', 34.6850869, 135.8050002, 'None', 'Japan', 'Nara'],
    ['Niigata, Japan', 37.9161924, 139.0364126, 'None', 'Japan', 'Niigata'],
    ['Oita, Japan', 33.2395578, 131.609272, 'None', 'Japan', 'Oita'],
    ['Okayama, Japan', 34.6551456, 133.9195019, 'None', 'Japan', 'Okayama'],
    ['Osaka, Japan', 34.7536738, 135.5331015, 'None', 'Japan', 'Osaka'],
    ['Otsu, Japan', 35.0178929, 135.8546074, 'None', 'Japan', 'Otsu'],
    ['Saga, Japan', 33.263482, 130.3008576, 'None', 'Japan', 'Saga'],
    ['Saitama, Japan', 35.8617292, 139.6454822, 'None', 'Japan', 'Saitama'],
    ['Sapporo, Japan', 43.0620958, 141.3543763, 'None', 'Japan', 'Sapporo'],
    [
        'Sasebo City, Japan',
        33.179915,
        129.71511,
        'None',
        'Japan',
        'Sasebo_City'
    ],
    ['Sendai, Japan', 38.268215, 140.8693558, 'None', 'Japan', 'Sendai'],
    ['Shimane, Japan', 35.4722952, 133.0504997, 'None', 'Japan', 'Shimane'],
    ['Shizuoka, Japan', 34.975562, 138.3827596, 'None', 'Japan', 'Shizuoka'],
    ['Takamtsu, Japan', 34.3427879, 134.046574, 'None', 'Japan', 'Takamtsu'],
    ['Tokushima, Japan', 34.0702703, 134.5548438, 'None', 'Japan', 'Tokushima'],
    ['Tokyo, Japan', 35.6602268, 139.6245193, 'None', 'Japan', 'Tokyo'],
    ['Tottori, Japan', 35.5011326, 134.2350914, 'None', 'Japan', 'Tottori'],
    ['Toyama, Japan', 36.6959518, 137.2136768, 'None', 'Japan', 'Toyama'],
    ['Tsu, Japan', 34.718596, 136.5056975, 'None', 'Japan', 'Tsu'],
    ['Tsukuba, Japan', 36.0834857, 140.0766423, 'None', 'Japan', 'Tsukuba'],
    [
        'Utsunomiya, Japan',
        36.5551124,
        139.8828072,
        'None',
        'Japan',
        'Utsunomiya'
    ],
    ['Wakayama, Japan', 34.2305113, 135.1708083, 'None', 'Japan', 'Wakayama'],
    ['Yamagata, Japan', 38.2554388, 140.3396017, 'None', 'Japan', 'Yamagata'],
    ['Yamaguchi, Japan', 34.178496, 131.4737269, 'None', 'Japan', 'Yamaguchi'],
    ['Yokohama, Japan', 35.4437078, 139.6380256, 'None', 'Japan', 'Yokohama'],
    ['Amman, Jordan', 31.9453666, 35.9283716, 'None', 'Jordan', 'Amman'],
    [
        'Aktau, Kazakhstan',
        43.6410973,
        51.1985113,
        'None',
        'Kazakhstan',
        'Aktau'
    ],
    [
        'Almaty, Kazakhstan',
        43.2220146,
        76.8512485,
        'None',
        'Kazakhstan',
        'Almaty'
    ],
    [
        'Astana, Kazakhstan',
        51.1605227,
        71.4703558,
        'None',
        'Kazakhstan',
        'Astana'
    ],
    [
        'Atyrau, Kazakhstan',
        47.0944959,
        51.9238373,
        'None',
        'Kazakhstan',
        'Atyrau'
    ],
    [
        'Baikonur, Kazakhstan',
        45.6232258,
        63.3139829,
        'None',
        'Kazakhstan',
        'Baikonur'
    ],
    [
        'Baikonur Cosmodrome, Kazakhstan',
        45.859478,
        63.313359,
        'None',
        'Kazakhstan',
        'Baikonur_Cosmodrome'
    ],
    [
        'Karaganda, Kazakhstan',
        49.8046835,
        73.1093826,
        'None',
        'Kazakhstan',
        'Karaganda'
    ],
    [
        'Kostanay, Kazakhstan',
        53.2198089,
        63.6354232,
        'None',
        'Kazakhstan',
        'Kostanay'
    ],
    ['Nairobi, Kenya', -1.2439727, 36.8928729, 'None', 'Kenya', 'Nairobi'],
    [
        'Kuwait City, Kuwait',
        29.375859,
        47.9774052,
        'None',
        'Kuwait',
        'Kuwait_City'
    ],
    [
        'Manas Air Base, Kyrgyzstan',
        43.0502,
        74.4694,
        'None',
        'Kyrgyzstan',
        'Manas_Air_Base'
    ],
    ['Vientiane, Laos', 17.9757058, 102.6331035, 'None', 'Laos', 'Vientiane'],
    ['Riga, Latvia', 56.9496487, 24.1051864, 'None', 'Latvia', 'Riga'],
    ['Beirut, Lebanon', 33.8937913, 35.5017767, 'None', 'Lebanon', 'Beirut'],
    [
        'Monrovia, Liberia',
        6.2907432,
        -10.7605239,
        'None',
        'Liberia',
        'Monrovia'
    ],
    [
        'Vilnius, Lithuania',
        54.6871555,
        25.2796514,
        'None',
        'Lithuania',
        'Vilnius'
    ],
    [
        'Luxembourg, Luxembourg',
        49.815273,
        6.129583,
        'None',
        'Luxembourg',
        'Luxembourg'
    ],
    [
        'Bitola, Macedonia',
        41.0296773,
        21.3292164,
        'None',
        'Macedonia',
        'Bitola'
    ],
    [
        'Skopje, Macedonia',
        41.9973462,
        21.4279956,
        'None',
        'Macedonia',
        'Skopje'
    ],
    [
        'Antananarivo, Madagascar',
        -18.8791902,
        47.5079055,
        'None',
        'Madagascar',
        'Antananarivo'
    ],
    ['Blantyre, Malawi', -15.7666707, 35.0167866, 'None', 'Malawi', 'Blantyre'],
    ['Lilongwe, Malawi', -13.9626121, 33.7741195, 'None', 'Malawi', 'Lilongwe'],
    ['Ipoh, Malaysia', 4.210484, 101.975766, 'None', 'Malaysia', 'Ipoh'],
    [
        'Kuala Lumpur, Malaysia',
        3.139003,
        101.686855,
        'None',
        'Malaysia',
        'Kuala_Lumpur'
    ],
    ['Penang, Malaysia', 5.414167, 100.328759, 'None', 'Malaysia', 'Penang'],
    [
        'Petaling Jaya, Malaysia',
        3.127887,
        101.594489,
        'None',
        'Malaysia',
        'Petaling_Jaya'
    ],
    [
        'Selayang, Malaysia',
        3.263739,
        101.653824,
        'None',
        'Malaysia',
        'Selayang'
    ],
    ['Rabat, Malta', 35.885499, 14.373372, 'None', 'Malta', 'Rabat'],
    ['Sliema, Malta', 35.9110081, 14.502904, 'None', 'Malta', 'Sliema'],
    ['Valletta, Malta', 35.8989085, 14.5145528, 'None', 'Malta', 'Valletta'],
    [
        'Kwajalein, Marshall Islands',
        9.1898235,
        167.4242972,
        'None',
        'Marshall_Islands',
        'Kwajalein'
    ],
    [
        'Port Louis, Mauritius',
        -20.1608912,
        57.5012222,
        'None',
        'Mauritius',
        'Port_Louis'
    ],
    ['Acapulco, Mexico', 16.8531086, -99.8236533, 'None', 'Mexico', 'Acapulco'],
    [
        'Aguascalientes, Mexico',
        21.8852562,
        -102.2915677,
        'None',
        'Mexico',
        'Aguascalientes'
    ],
    ['Cancun, Mexico', 21.161908, -86.8515279, 'None', 'Mexico', 'Cancun'],
    [
        'Chihuahua, Mexico',
        28.6329957,
        -106.0691004,
        'None',
        'Mexico',
        'Chihuahua'
    ],
    ['Cozumel, Mexico', 20.4229839, -86.9223432, 'None', 'Mexico', 'Cozumel'],
    [
        'Cuernavaca, Mexico',
        18.9242095,
        -99.2215659,
        'None',
        'Mexico',
        'Cuernavaca'
    ],
    [
        'Culiacan, Mexico',
        24.8090649,
        -107.3940117,
        'None',
        'Mexico',
        'Culiacan'
    ],
    [
        'Garza Ayala, Mexico',
        26.4905555,
        -100.0586111,
        'None',
        'Mexico',
        'Garza_Ayala'
    ],
    [
        'Guadalajara, Mexico',
        20.6596988,
        -103.3496092,
        'None',
        'Mexico',
        'Guadalajara'
    ],
    [
        'Huajuapan de Leon, Mexico',
        17.807125,
        -97.782422,
        'None',
        'Mexico',
        'Huajuapan_de_Leon'
    ],
    [
        'Irapuato, Mexico',
        20.6786652,
        -101.3544964,
        'None',
        'Mexico',
        'Irapuato'
    ],
    ['Leon, Mexico', 21.1250077, -101.6859605, 'None', 'Mexico', 'Leon'],
    ['Merida, Mexico', 20.9673702, -89.5925857, 'None', 'Mexico', 'Merida'],
    [
        'Mexico City, Mexico',
        19.4326077,
        -99.133208,
        'None',
        'Mexico',
        'Mexico_City'
    ],
    [
        'Monclova, Mexico',
        26.9080378,
        -101.4215236,
        'None',
        'Mexico',
        'Monclova'
    ],
    [
        'Monterrey, Mexico',
        25.6866142,
        -100.3161126,
        'None',
        'Mexico',
        'Monterrey'
    ],
    ['Oaxaca, Mexico', 17.0594169, -96.7216219, 'None', 'Mexico', 'Oaxaca'],
    [
        'Ojuelos de Jalisco, Mexico',
        21.865733,
        -101.594015,
        'None',
        'Mexico',
        'Ojuelos_de_Jalisco'
    ],
    [
        'Puerto Penasco, Mexico',
        31.3268218,
        -113.5311843,
        'None',
        'Mexico',
        'Puerto_Penasco'
    ],
    [
        'Puerto Vallarta, Mexico',
        20.653407,
        -105.2253316,
        'None',
        'Mexico',
        'Puerto_Vallarta'
    ],
    [
        'Saltillo, Mexico',
        25.4267244,
        -100.9954254,
        'None',
        'Mexico',
        'Saltillo'
    ],
    [
        'San Luis Potosi, Mexico',
        22.1564699,
        -100.9855409,
        'None',
        'Mexico',
        'San_Luis_Potosi'
    ],
    ['Tampico, Mexico', 22.2331041, -97.861099, 'None', 'Mexico', 'Tampico'],
    ['Tepic, Mexico', 21.5041651, -104.8945887, 'None', 'Mexico', 'Tepic'],
    ['Torreon, Mexico', 25.5428443, -103.4067861, 'None', 'Mexico', 'Torreon'],
    [
        'Tuxtla Gutierrez, Mexico',
        16.7516009,
        -93.1029939,
        'None',
        'Mexico',
        'Tuxtla_Gutierrez'
    ],
    ['Veracruz, Mexico', 19.173773, -96.1342241, 'None', 'Mexico', 'Veracruz'],
    [
        'Villahermosa, Mexico',
        17.989456,
        -92.9475061,
        'None',
        'Mexico',
        'Villahermosa'
    ],
    [
        'Zihuatanejo, Mexico',
        17.6416693,
        -101.5516955,
        'None',
        'Mexico',
        'Zihuatanejo'
    ],
    [
        'Monte Carlo, Monaco',
        43.7400718,
        7.4266436,
        'None',
        'Monaco',
        'Monte_Carlo'
    ],
    [
        'Darkhan, Mongolia',
        49.4648434,
        105.9745919,
        'None',
        'Mongolia',
        'Darkhan'
    ],
    [
        'Erdenet, Mongolia',
        49.054082,
        104.0716533,
        'None',
        'Mongolia',
        'Erdenet'
    ],
    [
        'Ulaanbaatar, Mongolia',
        47.8863988,
        106.9057439,
        'None',
        'Mongolia',
        'Ulaanbaatar'
    ],
    [
        'Ben Guerir, Morocco',
        32.2359364,
        -7.9538378,
        'None',
        'Morocco',
        'Ben_Guerir'
    ],
    [
        'Casablanca, Morocco',
        33.5731104,
        -7.5898434,
        'None',
        'Morocco',
        'Casablanca'
    ],
    [
        'Beira, Mozambique',
        -19.7963816,
        34.8844867,
        'None',
        'Mozambique',
        'Beira'
    ],
    [
        'Inhambane, Mozambique',
        -23.8879561,
        35.3959879,
        'None',
        'Mozambique',
        'Inhambane'
    ],
    [
        'Maputo, Mozambique',
        -25.891968,
        32.6051351,
        'None',
        'Mozambique',
        'Maputo'
    ],
    [
        'Nampula, Mozambique',
        -15.126635,
        39.268716,
        'None',
        'Mozambique',
        'Nampula'
    ],
    [
        'Pemba, Mozambique',
        -12.9732026,
        40.5178014,
        'None',
        'Mozambique',
        'Pemba'
    ],
    [
        'Quelimane, Mozambique',
        -17.8502636,
        36.9218584,
        'None',
        'Mozambique',
        'Quelimane'
    ],
    ['Tete, Mozambique', -16.1328104, 33.6063855, 'None', 'Mozambique', 'Tete'],
    [
        'Xai-Xai, Mozambique',
        -25.060476,
        33.6958809,
        'None',
        'Mozambique',
        'Xai-Xai'
    ],
    ['Yangon, Myanmar', 16.8660694, 96.195132, 'None', 'Myanmar', 'Yangon'],
    [
        'Walvis Bay, Namibia',
        -22.9389587,
        14.5247463,
        'None',
        'Namibia',
        'Walvis_Bay'
    ],
    [
        'Windhoek, Namibia',
        -22.5608807,
        17.0657549,
        'None',
        'Namibia',
        'Windhoek'
    ],
    [
        'Everest Base Camp, Nepal',
        28.008,
        86.565,
        'None',
        'Nepal',
        'Everest_Base_Camp'
    ],
    ['Kathmandu, Nepal', 27.6850298, 85.3722359, 'None', 'Nepal', 'Kathmandu'],
    [
        'Almere, Netherlands',
        52.3507849,
        5.2647016,
        'None',
        'Netherlands',
        'Almere'
    ],
    [
        'Amersfoort, Netherlands',
        52.1561113,
        5.3878266,
        'None',
        'Netherlands',
        'Amersfoort'
    ],
    [
        'Amsterdam, Netherlands',
        52.3702157,
        4.8951679,
        'None',
        'Netherlands',
        'Amsterdam'
    ],
    [
        'Arnhem, Netherlands',
        51.9851034,
        5.8987296,
        'None',
        'Netherlands',
        'Arnhem'
    ],
    [
        'Assen, Netherlands',
        52.992753,
        6.5642284,
        'None',
        'Netherlands',
        'Assen'
    ],
    [
        'Breda, Netherlands',
        51.5719149,
        4.768323,
        'None',
        'Netherlands',
        'Breda'
    ],
    [
        'Delft, Netherlands',
        52.0115769,
        4.3570677,
        'None',
        'Netherlands',
        'Delft'
    ],
    [
        'Den Helder, Netherlands',
        52.9562808,
        4.7607972,
        'None',
        'Netherlands',
        'Den_Helder'
    ],
    [
        'Dordrecht, Netherlands',
        51.8132979,
        4.6900929,
        'None',
        'Netherlands',
        'Dordrecht'
    ],
    ['Ede, Netherlands', 52.0401675, 5.6648594, 'None', 'Netherlands', 'Ede'],
    [
        'Eerbeek, Netherlands',
        52.1031259,
        6.0600069,
        'None',
        'Netherlands',
        'Eerbeek'
    ],
    [
        'Eindhoven, Netherlands',
        51.441642,
        5.4697225,
        'None',
        'Netherlands',
        'Eindhoven'
    ],
    [
        'Emmen, Netherlands',
        52.7858037,
        6.8975851,
        'None',
        'Netherlands',
        'Emmen'
    ],
    [
        'Emmer-Compascuum, Netherlands',
        52.8117839,
        7.0457254,
        'None',
        'Netherlands',
        'Emmer-Compascuum'
    ],
    [
        'Enkhuizen, Netherlands',
        52.7153849,
        5.2846831,
        'None',
        'Netherlands',
        'Enkhuizen'
    ],
    [
        'Enschede, Netherlands',
        52.2215372,
        6.8936619,
        'None',
        'Netherlands',
        'Enschede'
    ],
    ['Goes, Netherlands', 51.504646, 3.89113, 'None', 'Netherlands', 'Goes'],
    [
        'Gouda, Netherlands',
        52.0115205,
        4.7104633,
        'None',
        'Netherlands',
        'Gouda'
    ],
    [
        'Gravendeel, Netherlands',
        51.7792843,
        4.6180902,
        'None',
        'Netherlands',
        'Gravendeel'
    ],
    [
        'Groningen, Netherlands',
        53.2193835,
        6.5665018,
        'None',
        'Netherlands',
        'Groningen'
    ],
    [
        'Haarlem, Netherlands',
        52.3873878,
        4.6462194,
        'None',
        'Netherlands',
        'Haarlem'
    ],
    [
        'Heiloo, Netherlands',
        52.6012341,
        4.7004931,
        'None',
        'Netherlands',
        'Heiloo'
    ],
    [
        'Hertogenbosch, Netherlands',
        51.6978162,
        5.3036748,
        'None',
        'Netherlands',
        'Hertogenbosch'
    ],
    [
        'Hoogeveen, Netherlands',
        52.7286158,
        6.4901002,
        'None',
        'Netherlands',
        'Hoogeveen'
    ],
    [
        'Hoorn, Netherlands',
        52.6423654,
        5.0602124,
        'None',
        'Netherlands',
        'Hoorn'
    ],
    [
        'Ijsselstein, Netherlands',
        52.0177649,
        5.0403003,
        'None',
        'Netherlands',
        'Ijsselstein'
    ],
    [
        'Klazienaveen, Netherlands',
        52.7245467,
        6.9856663,
        'None',
        'Netherlands',
        'Klazienaveen'
    ],
    [
        'Leeuwarden, Netherlands',
        53.2012334,
        5.7999133,
        'None',
        'Netherlands',
        'Leeuwarden'
    ],
    [
        'Leiden, Netherlands',
        52.1601144,
        4.4970097,
        'None',
        'Netherlands',
        'Leiden'
    ],
    [
        'Leylstad, Netherlands',
        52.518537,
        5.471422,
        'None',
        'Netherlands',
        'Leylstad'
    ],
    [
        'Lisse, Netherlands',
        52.2579303,
        4.5574834,
        'None',
        'Netherlands',
        'Lisse'
    ],
    [
        'Maastricht, Netherlands',
        50.8513682,
        5.6909725,
        'None',
        'Netherlands',
        'Maastricht'
    ],
    [
        'Middelburg, Netherlands',
        51.4987962,
        3.610998,
        'None',
        'Netherlands',
        'Middelburg'
    ],
    [
        'Nijmegen, Netherlands',
        51.8125626,
        5.8372264,
        'None',
        'Netherlands',
        'Nijmegen'
    ],
    [
        'Noordwijk, Netherlands',
        52.2399885,
        4.4500094,
        'None',
        'Netherlands',
        'Noordwijk'
    ],
    [
        'Oranjestad, Netherlands',
        17.483333,
        -62.983333,
        'None',
        'Netherlands',
        'Oranjestad'
    ],
    [
        'Putte, Netherlands',
        52.258676,
        5.6053727,
        'None',
        'Netherlands',
        'Putte'
    ],
    [
        'Roosendaal, Netherlands',
        51.535849,
        4.4653213,
        'None',
        'Netherlands',
        'Roosendaal'
    ],
    [
        'Rotterdam, Netherlands',
        51.9244201,
        4.4777325,
        'None',
        'Netherlands',
        'Rotterdam'
    ],
    [
        'Schiedam, Netherlands',
        51.9169599,
        4.3988186,
        'None',
        'Netherlands',
        'Schiedam'
    ],
    [
        'Stadskanaal, Netherlands',
        52.9919853,
        6.9462217,
        'None',
        'Netherlands',
        'Stadskanaal'
    ],
    [
        'Steenwijk, Netherlands',
        52.7868939,
        6.1180686,
        'None',
        'Netherlands',
        'Steenwijk'
    ],
    [
        'Terneuzen, Netherlands',
        51.3322854,
        3.8324265,
        'None',
        'Netherlands',
        'Terneuzen'
    ],
    [
        'The Hague, Netherlands',
        52.0704978,
        4.3006999,
        'None',
        'Netherlands',
        'The_Hague'
    ],
    [
        'Tilburg, Netherlands',
        51.560596,
        5.0919143,
        'None',
        'Netherlands',
        'Tilburg'
    ],
    [
        'Utrecht, Netherlands',
        52.090737,
        5.12142,
        'None',
        'Netherlands',
        'Utrecht'
    ],
    [
        'Venlo, Netherlands',
        51.3703748,
        6.1724031,
        'None',
        'Netherlands',
        'Venlo'
    ],
    [
        'Willemstad, Netherlands',
        51.6919469,
        4.4379073,
        'None',
        'Netherlands',
        'Willemstad'
    ],
    [
        'Winschoten, Netherlands',
        53.1424984,
        7.0367877,
        'None',
        'Netherlands',
        'Winschoten'
    ],
    [
        'Zeist, Netherlands',
        52.0808511,
        5.2716887,
        'None',
        'Netherlands',
        'Zeist'
    ],
    [
        'Zoetermeer, Netherlands',
        52.060669,
        4.494025,
        'None',
        'Netherlands',
        'Zoetermeer'
    ],
    [
        'Zoutelande, Netherlands',
        51.5023416,
        3.4867275,
        'None',
        'Netherlands',
        'Zoutelande'
    ],
    [
        'Zwijndrecht, Netherlands',
        51.8105978,
        4.6272719,
        'None',
        'Netherlands',
        'Zwijndrecht'
    ],
    [
        'Zwolle, Netherlands',
        52.5167747,
        6.0830219,
        'None',
        'Netherlands',
        'Zwolle'
    ],
    [
        'Noumea, New Caledonia',
        -22.2558234,
        166.4505243,
        'None',
        'New_Caledonia',
        'Noumea'
    ],
    [
        'Auckland, New Zealand',
        -36.8484597,
        174.7633315,
        'None',
        'New_Zealand',
        'Auckland'
    ],
    ['Blenheim, New Zealand', -41.8, 173.55, 'None', 'New_Zealand', 'Blenheim'],
    [
        'Christchurch, New Zealand',
        -43.5320544,
        172.6362254,
        'None',
        'New_Zealand',
        'Christchurch'
    ],
    [
        'Dunedin, New Zealand',
        -45.8787605,
        170.5027976,
        'None',
        'New_Zealand',
        'Dunedin'
    ],
    [
        'Gisborne, New Zealand',
        -38.662334,
        178.017649,
        'None',
        'New_Zealand',
        'Gisborne'
    ],
    [
        'Greymouth, New Zealand',
        -42.4503925,
        171.2107623,
        'None',
        'New_Zealand',
        'Greymouth'
    ],
    [
        'Hamilton, New Zealand',
        -37.7870012,
        175.279253,
        'None',
        'New_Zealand',
        'Hamilton'
    ],
    [
        'Invercargill, New Zealand',
        -46.4131866,
        168.3537731,
        'None',
        'New_Zealand',
        'Invercargill'
    ],
    [
        'Napier, New Zealand',
        -39.4928444,
        176.9120178,
        'None',
        'New_Zealand',
        'Napier'
    ],
    [
        'Nelson, New Zealand',
        -41.2706319,
        173.2839653,
        'None',
        'New_Zealand',
        'Nelson'
    ],
    [
        'New Plymouth, New Zealand',
        -39.0556253,
        174.0752278,
        'None',
        'New_Zealand',
        'New_Plymouth'
    ],
    [
        'Oamaru, New Zealand',
        -45.0975118,
        170.9704148,
        'None',
        'New_Zealand',
        'Oamaru'
    ],
    [
        'Opotiki, New Zealand',
        -38.007228,
        177.2871279,
        'None',
        'New_Zealand',
        'Opotiki'
    ],
    [
        'Palmerston North, New Zealand',
        -40.3523065,
        175.6082145,
        'None',
        'New_Zealand',
        'Palmerston_North'
    ],
    [
        'Queenstown, New Zealand',
        -45.0311622,
        168.6626435,
        'None',
        'New_Zealand',
        'Queenstown'
    ],
    [
        'Rotorua, New Zealand',
        -38.1368478,
        176.2497461,
        'None',
        'New_Zealand',
        'Rotorua'
    ],
    [
        'Wanganui, New Zealand',
        -39.9300887,
        175.0478901,
        'None',
        'New_Zealand',
        'Wanganui'
    ],
    [
        'Wellington, New Zealand',
        -41.2864603,
        174.776236,
        'None',
        'New_Zealand',
        'Wellington'
    ],
    [
        'Whakatane, New Zealand',
        -37.9534115,
        176.9908015,
        'None',
        'New_Zealand',
        'Whakatane'
    ],
    [
        'Whangarei, New Zealand',
        -35.7251117,
        174.323708,
        'None',
        'New_Zealand',
        'Whangarei'
    ],
    [
        'Bluefields, Nicaragua',
        12.0111402,
        -83.7703693,
        'None',
        'Nicaragua',
        'Bluefields'
    ],
    [
        'Chinandega, Nicaragua',
        12.8820062,
        -87.1422895,
        'None',
        'Nicaragua',
        'Chinandega'
    ],
    [
        'Managua, Nicaragua',
        12.1149926,
        -86.2361744,
        'None',
        'Nicaragua',
        'Managua'
    ],
    ['Jos, Nigeria', 9.8965273, 8.8583309, 'None', 'Nigeria', 'Jos'],
    ['Lagos, Nigeria', 6.524379, 3.379206, 'None', 'Nigeria', 'Lagos'],
    ['Arendal, Norway', 58.4617568, 8.7724499, 'None', 'Norway', 'Arendal'],
    ['Bergen, Norway', 60.3912628, 5.3220544, 'None', 'Norway', 'Bergen'],
    ['Bodo, Norway', 67.2803556, 14.404916, 'None', 'Norway', 'Bodo'],
    ['Drammen, Norway', 59.7440738, 10.2044564, 'None', 'Norway', 'Drammen'],
    ['Gjovik, Norway', 60.7954302, 10.6916303, 'None', 'Norway', 'Gjovik'],
    ['Hamar, Norway', 60.7945331, 11.0679977, 'None', 'Norway', 'Hamar'],
    ['Haugesund, Norway', 59.413581, 5.2679869, 'None', 'Norway', 'Haugesund'],
    [
        'Kristiansand, Norway',
        58.1599119,
        8.0182064,
        'None',
        'Norway',
        'Kristiansand'
    ],
    ['Leikanger, Norway', 61.1859073, 6.8079711, 'None', 'Norway', 'Leikanger'],
    [
        'Lillehammer, Norway',
        61.1152713,
        10.4662306,
        'None',
        'Norway',
        'Lillehammer'
    ],
    ['Ljoerdalen, Norway', 60.783333, 6.766667, 'None', 'Norway', 'Ljoerdalen'],
    ['Molde, Norway', 62.7372352, 7.1607306, 'None', 'Norway', 'Molde'],
    ['Oslo, Norway', 59.9145265, 10.7199596, 'None', 'Norway', 'Oslo'],
    [
        'Sandefjord, Norway',
        59.1313095,
        10.2165948,
        'None',
        'Norway',
        'Sandefjord'
    ],
    [
        'Sarpsborg, Norway',
        59.2840729,
        11.1094028,
        'None',
        'Norway',
        'Sarpsborg'
    ],
    ['Skien, Norway', 59.2089131, 9.6057526, 'None', 'Norway', 'Skien'],
    ['Stavanger, Norway', 58.9699756, 5.7331073, 'None', 'Norway', 'Stavanger'],
    [
        'Steinkjer, Norway',
        64.0150193,
        11.4952627,
        'None',
        'Norway',
        'Steinkjer'
    ],
    ['Svolvaer, Norway', 68.2343088, 14.5682238, 'None', 'Norway', 'Svolvaer'],
    ['Tromso, Norway', 69.681557, 18.9702442, 'None', 'Norway', 'Tromso'],
    [
        'Trondheim, Norway',
        63.4305149,
        10.3950528,
        'None',
        'Norway',
        'Trondheim'
    ],
    [
        'Tronsberg, Norway',
        59.2675699,
        10.4075608,
        'None',
        'Norway',
        'Tronsberg'
    ],
    ['Vadso, Norway', 70.0745056, 29.7481181, 'None', 'Norway', 'Vadso'],
    ['Muscat, Oman', 23.58589, 58.4059227, 'None', 'Oman', 'Muscat'],
    [
        'Islamabad, Pakistan',
        33.7293882,
        73.0931461,
        'None',
        'Pakistan',
        'Islamabad'
    ],
    [
        'Karachi, Pakistan',
        24.8614622,
        67.0099388,
        'None',
        'Pakistan',
        'Karachi'
    ],
    ['Lahore, Pakistan', 31.5546061, 74.3571581, 'None', 'Pakistan', 'Lahore'],
    ['Colon, Panama', 9.335287, -79.941655, 'None', 'Panama', 'Colon'],
    [
        'Panama City, Panama',
        9.1011785,
        -79.4028639,
        'None',
        'Panama',
        'Panama_City'
    ],
    [
        'Port Moresby, Papua New Guinea',
        -9.4438004,
        147.1802671,
        'None',
        'Papua_New_Guinea',
        'Port_Moresby'
    ],
    [
        'Asuncion, Paraguay',
        -25.2637399,
        -57.575926,
        'None',
        'Paraguay',
        'Asuncion'
    ],
    ['Arequipa, Peru', -16.4090474, -71.537451, 'None', 'Peru', 'Arequipa'],
    ['Chiclayo, Peru', -6.7765974, -79.8442978, 'None', 'Peru', 'Chiclayo'],
    ['Cuzco, Peru', -13.53195, -71.9674626, 'None', 'Peru', 'Cuzco'],
    ['Huancayo, Peru', -12.0686357, -75.2102976, 'None', 'Peru', 'Huancayo'],
    ['Iquitos, Peru', -3.7436735, -73.2516326, 'None', 'Peru', 'Iquitos'],
    ['Lima, Peru', -12.046374, -77.0427934, 'None', 'Peru', 'Lima'],
    ['Piura, Peru', -5.1782884, -80.6548882, 'None', 'Peru', 'Piura'],
    ['Trujillo, Peru', -8.1090524, -79.0215336, 'None', 'Peru', 'Trujillo'],
    [
        'Bacolod, Philippines',
        10.640739,
        122.968956,
        'None',
        'Philippines',
        'Bacolod'
    ],
    [
        'Balamban, Philippines',
        10.485848,
        123.774119,
        'None',
        'Philippines',
        'Balamban'
    ],
    [
        'Binan, Philippines',
        14.303634,
        121.078149,
        'None',
        'Philippines',
        'Binan'
    ],
    [
        'Cabanatuan City, Philippines',
        15.486505,
        120.973393,
        'None',
        'Philippines',
        'Cabanatuan_City'
    ],
    [
        'Cagayan de Oro, Philippines',
        8.454236,
        124.631898,
        'None',
        'Philippines',
        'Cagayan_de_Oro'
    ],
    [
        'Cebu City, Philippines',
        10.315699,
        123.885437,
        'None',
        'Philippines',
        'Cebu_City'
    ],
    [
        'Davao City, Philippines',
        7.190708,
        125.455341,
        'None',
        'Philippines',
        'Davao_City'
    ],
    [
        'Manila, Philippines',
        14.599512,
        120.984219,
        'None',
        'Philippines',
        'Manila'
    ],
    [
        'San Jose, Philippines',
        15.420015,
        120.29742,
        'None',
        'Philippines',
        'San_Jose'
    ],
    [
        'Zamboanga, Philippines',
        6.921442,
        122.079027,
        'None',
        'Philippines',
        'Zamboanga'
    ],
    [
        'Bialystok, Poland',
        53.1324886,
        23.1688403,
        'None',
        'Poland',
        'Bialystok'
    ],
    ['Gliwice, Poland', 50.2944923, 18.6713802, 'None', 'Poland', 'Gliwice'],
    ['Koszalin, Poland', 54.1943219, 16.1714908, 'None', 'Poland', 'Koszalin'],
    ['Krakow, Poland', 50.0646501, 19.9449799, 'None', 'Poland', 'Krakow'],
    ['Krynica, Poland', 49.4215158, 20.9594208, 'None', 'Poland', 'Krynica'],
    ['Lodz, Poland', 51.7592485, 19.4559833, 'None', 'Poland', 'Lodz'],
    ['Lublin, Poland', 51.2464536, 22.5684463, 'None', 'Poland', 'Lublin'],
    [
        'Mszana Dolna, Poland',
        49.67403,
        20.07982,
        'None',
        'Poland',
        'Mszana_Dolna'
    ],
    ['Ostroda, Poland', 53.6963007, 19.9647952, 'None', 'Poland', 'Ostroda'],
    ['Poznan, Poland', 52.406374, 16.9251681, 'None', 'Poland', 'Poznan'],
    ['Sochaczew, Poland', 52.2293372, 20.238359, 'None', 'Poland', 'Sochaczew'],
    ['Szczecin, Poland', 53.4285438, 14.5528116, 'None', 'Poland', 'Szczecin'],
    ['Warsaw, Poland', 52.2296756, 21.0122287, 'None', 'Poland', 'Warsaw'],
    ['Wroclaw, Poland', 51.1078852, 17.0385376, 'None', 'Poland', 'Wroclaw'],
    [
        'Zielona Gora, Poland',
        51.9356214,
        15.5061862,
        'None',
        'Poland',
        'Zielona_Gora'
    ],
    ['Zywiec, Poland', 49.6912999, 19.1823983, 'None', 'Poland', 'Zywiec'],
    ['Lajes, Azores', 38.39682, -28.251659, 'Azores', 'Portugal', 'Lajes'],
    ['Braga, Portugal', 41.5454486, -8.426507, 'None', 'Portugal', 'Braga'],
    [
        'Covilha, Portugal',
        40.2804158,
        -7.4922407,
        'None',
        'Portugal',
        'Covilha'
    ],
    ['Faro, Portugal', 37.0193548, -7.9304397, 'None', 'Portugal', 'Faro'],
    [
        'Funchal, Portugal',
        32.6669328,
        -16.9240554,
        'None',
        'Portugal',
        'Funchal'
    ],
    ['Lisbon, Portugal', 38.7222524, -9.1393366, 'None', 'Portugal', 'Lisbon'],
    [
        'Oporto-Porto, Portugal',
        41.1579438,
        -8.6291053,
        'None',
        'Portugal',
        'Oporto-Porto'
    ],
    [
        'Ponta Delgada, Portugal',
        37.7428301,
        -25.6805868,
        'None',
        'Portugal',
        'Ponta_Delgada'
    ],
    [
        'Setubal, Portugal',
        38.5260437,
        -8.8909328,
        'None',
        'Portugal',
        'Setubal'
    ],
    ['Sintra, Portugal', 38.8028687, -9.3816589, 'None', 'Portugal', 'Sintra'],
    ['Tomar, Portugal', 39.6053819, -8.4043125, 'None', 'Portugal', 'Tomar'],
    ['Doha, Qatar', 25.2854473, 51.5310398, 'None', 'Qatar', 'Doha'],
    [
        'Bucharest, Romania',
        44.4267674,
        26.1025384,
        'None',
        'Romania',
        'Bucharest'
    ],
    [
        'Constanta, Romania',
        44.1598013,
        28.6348138,
        'None',
        'Romania',
        'Constanta'
    ],
    [
        'Jassy-Iasi, Romania',
        47.1584549,
        27.6014418,
        'None',
        'Romania',
        'Jassy-Iasi'
    ],
    [
        'Miercurea-Ciuc, Romania',
        46.3695574,
        25.7953655,
        'None',
        'Romania',
        'Miercurea-Ciuc'
    ],
    [
        'Timisoara, Romania',
        45.7488716,
        21.2086793,
        'None',
        'Romania',
        'Timisoara'
    ],
    ['Abakan, Russia', 53.7175644, 91.4293172, 'None', 'Russia', 'Abakan'],
    ['Anadyr, Russia', 64.7336613, 177.4968266, 'None', 'Russia', 'Anadyr'],
    [
        'Arkhangelsk, Russia',
        64.5472507,
        40.5601553,
        'None',
        'Russia',
        'Arkhangelsk'
    ],
    [
        'Astrakhan, Russia',
        46.3588045,
        48.0599345,
        'None',
        'Russia',
        'Astrakhan'
    ],
    [
        'Balashikha, Russia',
        55.7981904,
        37.9679867,
        'None',
        'Russia',
        'Balashikha'
    ],
    ['Barnaul, Russia', 53.3547792, 83.7697832, 'None', 'Russia', 'Barnaul'],
    ['Belgorod, Russia', 50.5997134, 36.5982621, 'None', 'Russia', 'Belgorod'],
    [
        'Birobidzhan, Russia',
        48.7803574,
        132.9130744,
        'None',
        'Russia',
        'Birobidzhan'
    ],
    [
        'Blagoveshchensk, Russia',
        50.2727763,
        127.5404017,
        'None',
        'Russia',
        'Blagoveshchensk'
    ],
    ['Bryansk, Russia', 53.2635306, 34.41611, 'None', 'Russia', 'Bryansk'],
    [
        'Cheboksary, Russia',
        56.1167663,
        47.262782,
        'None',
        'Russia',
        'Cheboksary'
    ],
    [
        'Chelyabinsk, Russia',
        55.1644419,
        61.4368431,
        'None',
        'Russia',
        'Chelyabinsk'
    ],
    [
        'Cherkessek, Russia',
        44.2273974,
        42.0591708,
        'None',
        'Russia',
        'Cherkessek'
    ],
    ['Chita, Russia', 52.0515032, 113.4711906, 'None', 'Russia', 'Chita'],
    ['Elista, Russia', 46.3154883, 44.2794012, 'None', 'Russia', 'Elista'],
    ['Gatchina, Russia', 59.5624627, 30.1064659, 'None', 'Russia', 'Gatchina'],
    [
        'Gorno-Altaysk, Russia',
        51.942186,
        85.9719355,
        'None',
        'Russia',
        'Gorno-Altaysk'
    ],
    ['Grozny, Russia', 43.3168796, 45.6814856, 'None', 'Russia', 'Grozny'],
    ['Irkutsk, Russia', 52.2869741, 104.3050183, 'None', 'Russia', 'Irkutsk'],
    ['Ivanovo, Russia', 57.0050671, 40.9766453, 'None', 'Russia', 'Ivanovo'],
    ['Izhevsk, Russia', 56.8618601, 53.2324285, 'None', 'Russia', 'Izhevsk'],
    [
        'Kaliningrad, Russia',
        54.7104264,
        20.4522144,
        'None',
        'Russia',
        'Kaliningrad'
    ],
    ['Kaluga, Russia', 54.5518584, 36.2850973, 'None', 'Russia', 'Kaluga'],
    ['Kazan, Russia', 55.8304307, 49.0660806, 'None', 'Russia', 'Kazan'],
    ['Kemerovo, Russia', 55.3450231, 86.0623044, 'None', 'Russia', 'Kemerovo'],
    [
        'Khabarovsk, Russia',
        48.5027313,
        135.0662599,
        'None',
        'Russia',
        'Khabarovsk'
    ],
    [
        'Khanty-Mansiysk, Russia',
        61.0090919,
        69.0374596,
        'None',
        'Russia',
        'Khanty-Mansiysk'
    ],
    ['Kirov, Russia', 58.6035321, 49.6667983, 'None', 'Russia', 'Kirov'],
    ['Korolev, Russia', 55.9316797, 37.8518552, 'None', 'Russia', 'Korolev'],
    ['Kostroma, Russia', 57.7774816, 40.9698928, 'None', 'Russia', 'Kostroma'],
    ['Krasnodar, Russia', 45.0392674, 38.987221, 'None', 'Russia', 'Krasnodar'],
    [
        'Krasnoyarsk, Russia',
        56.0152834,
        92.8932476,
        'None',
        'Russia',
        'Krasnoyarsk'
    ],
    ['Kurgan, Russia', 55.4649113, 65.3053512, 'None', 'Russia', 'Kurgan'],
    ['Kursk, Russia', 51.7091957, 36.1562241, 'None', 'Russia', 'Kursk'],
    ['Kyzyl, Russia', 51.7150832, 94.4574804, 'None', 'Russia', 'Kyzyl'],
    ['Lipetsk, Russia', 52.6121996, 39.5981225, 'None', 'Russia', 'Lipetsk'],
    ['Magadan, Russia', 59.5611525, 150.8301413, 'None', 'Russia', 'Magadan'],
    ['Magas, Russia', 43.1675563, 44.810103, 'None', 'Russia', 'Magas'],
    [
        'Makhachkala, Russia',
        42.9666308,
        47.5126285,
        'None',
        'Russia',
        'Makhachkala'
    ],
    ['Maykop, Russia', 44.5984115, 40.1080869, 'None', 'Russia', 'Maykop'],
    ['Moscow, Russia', 55.755826, 37.6173, 'None', 'Russia', 'Moscow'],
    ['Murmansk, Russia', 68.9585244, 33.0826598, 'None', 'Russia', 'Murmansk'],
    ['Nalchik, Russia', 43.4949918, 43.6045132, 'None', 'Russia', 'Nalchik'],
    [
        'Naryan-Mar, Russia',
        67.6710067,
        53.1078339,
        'None',
        'Russia',
        'Naryan-Mar'
    ],
    [
        'Nizhny Novgorod, Russia',
        56.2965039,
        43.9360589,
        'None',
        'Russia',
        'Nizhny_Novgorod'
    ],
    ['Norilsk, Russia', 69.35579, 88.1892938, 'None', 'Russia', 'Norilsk'],
    [
        'Novosibirsk, Russia',
        55.0083526,
        82.9357327,
        'None',
        'Russia',
        'Novosibirsk'
    ],
    ['Omsk, Russia', 54.9884804, 73.3242362, 'None', 'Russia', 'Omsk'],
    ['Orenburg, Russia', 51.7666482, 55.1004538, 'None', 'Russia', 'Orenburg'],
    ['Oryol, Russia', 52.9668468, 36.0624898, 'None', 'Russia', 'Oryol'],
    ['Penza, Russia', 53.2272903, 45.0, 'None', 'Russia', 'Penza'],
    ['Perm, Russia', 58.0296813, 56.2667916, 'None', 'Russia', 'Perm'],
    [
        'Petropavlovsk-Kamchatsky, Russia',
        53.0409109,
        158.6777259,
        'None',
        'Russia',
        'Petropavlovsk-Kamchatsky'
    ],
    [
        'Petrozavodsk, Russia',
        61.7781617,
        34.3640396,
        'None',
        'Russia',
        'Petrozavodsk'
    ],
    ['Pskov, Russia', 57.8166994, 28.3344734, 'None', 'Russia', 'Pskov'],
    ['Rostov, Russia', 47.2357137, 39.701505, 'None', 'Russia', 'Rostov'],
    ['Ryazan, Russia', 54.6095418, 39.7125857, 'None', 'Russia', 'Ryazan'],
    [
        'Saint Petersburg, Russia',
        59.93428,
        30.335099,
        'None',
        'Russia',
        'Saint_Petersburg'
    ],
    ['Salekhard, Russia', 66.550073, 66.6028111, 'None', 'Russia', 'Salekhard'],
    ['Samara, Russia', 53.2415041, 50.2212463, 'None', 'Russia', 'Samara'],
    ['Saransk, Russia', 54.2000477, 45.1745115, 'None', 'Russia', 'Saransk'],
    ['Saratov, Russia', 51.5563789, 45.9798167, 'None', 'Russia', 'Saratov'],
    ['Smolensk, Russia', 54.7903112, 32.0503663, 'None', 'Russia', 'Smolensk'],
    [
        'Stavropol, Russia',
        45.0454764,
        41.9683431,
        'None',
        'Russia',
        'Stavropol'
    ],
    [
        'Syktyvkar, Russia',
        61.6478508,
        50.8339029,
        'None',
        'Russia',
        'Syktyvkar'
    ],
    ['Tambov, Russia', 52.723598, 41.4423062, 'None', 'Russia', 'Tambov'],
    ['Tomsk, Russia', 56.5010397, 84.9924506, 'None', 'Russia', 'Tomsk'],
    ['Tula, Russia', 54.204836, 37.6184915, 'None', 'Russia', 'Tula'],
    ['Tver, Russia', 56.8587214, 35.9175965, 'None', 'Russia', 'Tver'],
    ['Tyumen, Russia', 57.1612975, 65.5250172, 'None', 'Russia', 'Tyumen'],
    ['Ufa, Russia', 54.7387621, 55.9720554, 'None', 'Russia', 'Ufa'],
    ['Ulan-Ude, Russia', 51.8238785, 107.607338, 'None', 'Russia', 'Ulan-Ude'],
    [
        'Ulyanovsk, Russia',
        54.3181598,
        48.3837914,
        'None',
        'Russia',
        'Ulyanovsk'
    ],
    [
        'Usolje-Sibirskoje, Russia',
        52.7664236,
        103.6381712,
        'None',
        'Russia',
        'Usolje-Sibirskoje'
    ],
    [
        'Veliky Novgorod, Russia',
        58.5255698,
        31.2741928,
        'None',
        'Russia',
        'Veliky_Novgorod'
    ],
    [
        'Vladikavkaz, Russia',
        43.0252344,
        44.6659759,
        'None',
        'Russia',
        'Vladikavkaz'
    ],
    ['Vladimir, Russia', 56.1445956, 40.4178686, 'None', 'Russia', 'Vladimir'],
    [
        'Vladivostok, Russia',
        43.1737387,
        132.0064506,
        'None',
        'Russia',
        'Vladivostok'
    ],
    ['Volgograd, Russia', 48.708048, 44.5133034, 'None', 'Russia', 'Volgograd'],
    ['Vologda, Russia', 59.2180665, 39.8978052, 'None', 'Russia', 'Vologda'],
    ['Voronezh, Russia', 51.6754966, 39.2088823, 'None', 'Russia', 'Voronezh'],
    ['Yakutsk, Russia', 62.0354523, 129.6754745, 'None', 'Russia', 'Yakutsk'],
    [
        'Yaroslavl, Russia',
        57.6260744,
        39.8844708,
        'None',
        'Russia',
        'Yaroslavl'
    ],
    [
        'Yekaterinburg, Russia',
        56.8389261,
        60.6057025,
        'None',
        'Russia',
        'Yekaterinburg'
    ],
    [
        'Yoshkar-Ola, Russia',
        56.6402225,
        47.883858,
        'None',
        'Russia',
        'Yoshkar-Ola'
    ],
    [
        'Yuzhno-Sakhalinsk, Russia',
        46.9641127,
        142.7347556,
        'None',
        'Russia',
        'Yuzhno-Sakhalinsk'
    ],
    [
        'Zvezdny Gorolok, Russia',
        55.8805,
        38.1105,
        'None',
        'Russia',
        'Zvezdny_Gorolok'
    ],
    [
        'Al Kharj, Saudi Arabia',
        24.1455367,
        47.3119448,
        'None',
        'Saudi_Arabia',
        'Al_Kharj'
    ],
    [
        'Dhahran, Saudi Arabia',
        26.2361248,
        50.0393017,
        'None',
        'Saudi_Arabia',
        'Dhahran'
    ],
    [
        'Riyadh, Saudi Arabia',
        24.7135517,
        46.6752957,
        'None',
        'Saudi_Arabia',
        'Riyadh'
    ],
    [
        'Tabuk, Saudi Arabia',
        28.3835079,
        36.5661908,
        'None',
        'Saudi_Arabia',
        'Tabuk'
    ],
    ['Dakar, Senegal', 14.7645042, -17.3660286, 'None', 'Senegal', 'Dakar'],
    [
        'Belgrade, Serbia Montenegro',
        44.786568,
        20.4489216,
        'None',
        'Serbia_Montenegro',
        'Belgrade'
    ],
    [
        'Novi Sad, Serbia Montenegro',
        45.2671352,
        19.8335496,
        'None',
        'Serbia_Montenegro',
        'Novi_Sad'
    ],
    [
        'Pirot, Serbia Montenegro',
        43.15,
        22.583,
        'None',
        'Serbia_Montenegro',
        'Pirot'
    ],
    [
        'Sombor, Serbia Montenegro',
        45.773295,
        19.1151468,
        'None',
        'Serbia_Montenegro',
        'Sombor'
    ],
    [
        'Victoria, Seychelles',
        -4.619143,
        55.4513149,
        'None',
        'Seychelles',
        'Victoria'
    ],
    [
        'Singapore, Singapore',
        1.352083,
        103.819836,
        'None',
        'Singapore',
        'Singapore'
    ],
    [
        'Bratislava, Slovakia',
        48.1485965,
        17.1077477,
        'None',
        'Slovakia',
        'Bratislava'
    ],
    [
        'Murska Sobota, Slovakia',
        46.6581381,
        16.1610293,
        'None',
        'Slovakia',
        'Murska_Sobota'
    ],
    [
        'Partizanske, Slovakia',
        48.628493,
        18.3768911,
        'None',
        'Slovakia',
        'Partizanske'
    ],
    [
        'Ajdovscina, Slovenia',
        45.8869025,
        13.909914,
        'None',
        'Slovenia',
        'Ajdovscina'
    ],
    [
        'Ljubljana, Slovenia',
        46.0569465,
        14.5057515,
        'None',
        'Slovenia',
        'Ljubljana'
    ],
    [
        'Maribor, Slovenia',
        46.5546503,
        15.6458812,
        'None',
        'Slovenia',
        'Maribor'
    ],
    [
        'Bloemfontein, South Africa',
        -29.085214,
        26.1595761,
        'None',
        'South_Africa',
        'Bloemfontein'
    ],
    [
        'Cape Town, South Africa',
        -33.9248685,
        18.4240553,
        'None',
        'South_Africa',
        'Cape_Town'
    ],
    [
        'Durban, South Africa',
        -29.8586804,
        31.0218404,
        'None',
        'South_Africa',
        'Durban'
    ],
    [
        'East London, South Africa',
        -33.01529,
        27.91162,
        'None',
        'South_Africa',
        'East_London'
    ],
    [
        'Grahamstown, South Africa',
        -33.3106292,
        26.5255946,
        'None',
        'South_Africa',
        'Grahamstown'
    ],
    [
        'Howick, South Africa',
        -29.489295,
        30.216652,
        'None',
        'South_Africa',
        'Howick'
    ],
    [
        'Johannesburg, South Africa',
        -26.2041028,
        28.0473051,
        'None',
        'South_Africa',
        'Johannesburg'
    ],
    [
        'Kimberley, South Africa',
        -28.7282384,
        24.7499112,
        'None',
        'South_Africa',
        'Kimberley'
    ],
    [
        'Mbabane, South Africa',
        -26.3054482,
        31.1366715,
        'None',
        'South_Africa',
        'Mbabane'
    ],
    [
        'Pietermaritzburg, South Africa',
        -29.6006068,
        30.3794118,
        'None',
        'South_Africa',
        'Pietermaritzburg'
    ],
    [
        'PortElizabeth, South Africa',
        -33.7139247,
        25.5207358,
        'None',
        'South_Africa',
        'PortElizabeth'
    ],
    [
        'Pretoria, South Africa',
        -25.7478676,
        28.2292712,
        'None',
        'South_Africa',
        'Pretoria'
    ],
    [
        'Stellenbosch, South Africa',
        -33.9321045,
        18.860152,
        'None',
        'South_Africa',
        'Stellenbosch'
    ],
    [
        'Vanderbijlpark, South Africa',
        -26.7034204,
        27.8076959,
        'None',
        'South_Africa',
        'Vanderbijlpark'
    ],
    [
        'Wilderness, South Africa',
        -33.9940082,
        22.5748481,
        'None',
        'South_Africa',
        'Wilderness'
    ],
    [
        'Osan, South Korea',
        37.1498096,
        127.0772212,
        'None',
        'South_Korea',
        'Osan'
    ],
    [
        'Pusan, South Korea',
        35.1795543,
        129.0756416,
        'None',
        'South_Korea',
        'Pusan'
    ],
    [
        'P ohang, South Korea',
        36.0190178,
        129.3434808,
        'None',
        'South_Korea',
        'P_ohang'
    ],
    [
        'Seoul, South Korea',
        37.566535,
        126.9779692,
        'None',
        'South_Korea',
        'Seoul'
    ],
    ['Alava, Spain', 42.9099989, -2.6983868, 'None', 'Spain', 'Alava'],
    ['Albacete, Spain', 38.994349, -1.8585424, 'None', 'Spain', 'Albacete'],
    ['Alicante, Spain', 38.3459963, -0.4906855, 'None', 'Spain', 'Alicante'],
    ['Almeria, Spain', 36.834047, -2.4637136, 'None', 'Spain', 'Almeria'],
    ['Avila, Spain', 40.656685, -4.6812086, 'None', 'Spain', 'Avila'],
    ['Aviles, Spain', 43.5579523, -5.9246653, 'None', 'Spain', 'Aviles'],
    ['Badajoz, Spain', 38.8794495, -6.9706535, 'None', 'Spain', 'Badajoz'],
    ['Barbastro, Spain', 42.0360435, 0.1284404, 'None', 'Spain', 'Barbastro'],
    ['Barcelona, Spain', 41.3850639, 2.1734035, 'None', 'Spain', 'Barcelona'],
    ['Bilbao, Spain', 43.2630126, -2.9349852, 'None', 'Spain', 'Bilbao'],
    ['Burgos, Spain', 42.3439925, -3.696906, 'None', 'Spain', 'Burgos'],
    ['Caceres, Spain', 39.4752765, -6.3724247, 'None', 'Spain', 'Caceres'],
    ['Cadiz, Spain', 36.5270612, -6.2885962, 'None', 'Spain', 'Cadiz'],
    ['Castellon, Spain', 40.1451772, -0.1494988, 'None', 'Spain', 'Castellon'],
    ['Ceuta, Spain', 35.8893874, -5.3213455, 'None', 'Spain', 'Ceuta'],
    [
        'Ciudad Real, Spain',
        38.9848295,
        -3.9273778,
        'None',
        'Spain',
        'Ciudad_Real'
    ],
    ['Cordoba, Spain', 37.8881751, -4.7793835, 'None', 'Spain', 'Cordoba'],
    ['Cuellar, Spain', 41.4011715, -4.3117951, 'None', 'Spain', 'Cuellar'],
    [
        'Donostia-San Sebastian, Spain',
        43.318334,
        -1.9812313,
        'None',
        'Spain',
        'Donostia-San_Sebastian'
    ],
    [
        'El Vendrell, Spain',
        41.2196699,
        1.534307,
        'None',
        'Spain',
        'El_Vendrell'
    ],
    ['Galapagar, Spain', 40.5768377, -4.0058027, 'None', 'Spain', 'Galapagar'],
    ['Gijon, Spain', 43.5322015, -5.6611195, 'None', 'Spain', 'Gijon'],
    ['Girona, Spain', 41.9794005, 2.8214264, 'None', 'Spain', 'Girona'],
    ['Granada, Spain', 37.1773363, -3.5985571, 'None', 'Spain', 'Granada'],
    ['Guadalajara, Spain', 40.632489, -3.16017, 'None', 'Spain', 'Guadalajara'],
    ['Guitiriz, Spain', 43.1816306, -7.8922143, 'None', 'Spain', 'Guitiriz'],
    ['Huelva, Spain', 37.261421, -6.9447224, 'None', 'Spain', 'Huelva'],
    ['Huesca, Spain', 42.131845, -0.4078058, 'None', 'Spain', 'Huesca'],
    ['Ibiza, Spain', 38.9067339, 1.4205983, 'None', 'Spain', 'Ibiza'],
    ['Jaen, Spain', 37.7795941, -3.7849057, 'None', 'Spain', 'Jaen'],
    [
        'Las Palmas, Spain',
        28.1235459,
        -15.4362574,
        'None',
        'Spain',
        'Las_Palmas'
    ],
    ['La Coruna, Spain', 43.3623436, -8.4115401, 'None', 'Spain', 'La_Coruna'],
    ['Leon, Spain', 42.5987263, -5.5670959, 'None', 'Spain', 'Leon'],
    ['Lleida, Spain', 41.6175899, 0.6200146, 'None', 'Spain', 'Lleida'],
    ['Logrono, Spain', 42.4627195, -2.4449852, 'None', 'Spain', 'Logrono'],
    ['Lugo, Spain', 43.0097384, -7.5567582, 'None', 'Spain', 'Lugo'],
    ['Madrid, Spain', 40.4167754, -3.7037902, 'None', 'Spain', 'Madrid'],
    ['Malaga, Spain', 36.721261, -4.4212655, 'None', 'Spain', 'Malaga'],
    ['Mataro, Spain', 41.5381124, 2.4447406, 'None', 'Spain', 'Mataro'],
    ['Melilla, Spain', 35.2922775, -2.9380973, 'None', 'Spain', 'Melilla'],
    ['Menorca, Spain', 39.949629, 4.110445, 'None', 'Spain', 'Menorca'],
    ['Merida, Spain', 38.9191439, -6.3408055, 'None', 'Spain', 'Merida'],
    ['Murcia, Spain', 37.9922399, -1.1306544, 'None', 'Spain', 'Murcia'],
    ['Orense, Spain', 42.3357893, -7.863881, 'None', 'Spain', 'Orense'],
    ['Oviedo, Spain', 43.3619145, -5.8493887, 'None', 'Spain', 'Oviedo'],
    ['Palencia, Spain', 42.0096857, -4.5288016, 'None', 'Spain', 'Palencia'],
    [
        'Palma de Mallorca, Spain',
        39.5696005,
        2.6501603,
        'None',
        'Spain',
        'Palma_de_Mallorca'
    ],
    ['Pamplona, Spain', 42.812526, -1.6457745, 'None', 'Spain', 'Pamplona'],
    [
        'Picamoixons, Spain',
        41.3024284,
        1.202149,
        'None',
        'Spain',
        'Picamoixons'
    ],
    [
        'Pontevedra, Spain',
        42.4298846,
        -8.6446202,
        'None',
        'Spain',
        'Pontevedra'
    ],
    [
        'Puerto de la Cruz, Spain',
        28.411413,
        -16.5449611,
        'None',
        'Spain',
        'Puerto_de_la_Cruz'
    ],
    ['Sabadell, Spain', 41.5462745, 2.1086131, 'None', 'Spain', 'Sabadell'],
    ['Sagunt, Spain', 39.6798633, -0.2784385, 'None', 'Spain', 'Sagunt'],
    ['Sahagun, Spain', 42.3709599, -5.0299493, 'None', 'Spain', 'Sahagun'],
    ['Salamanca, Spain', 40.9701039, -5.6635397, 'None', 'Spain', 'Salamanca'],
    ['Santander, Spain', 43.4623057, -3.8099803, 'None', 'Spain', 'Santander'],
    [
        'Santa Cruz, Spain',
        28.4636296,
        -16.2518467,
        'None',
        'Spain',
        'Santa_Cruz'
    ],
    ['Santiago, Spain', 42.878213, -8.544844, 'None', 'Spain', 'Santiago'],
    ['Segovia, Spain', 40.9429032, -4.1088069, 'None', 'Spain', 'Segovia'],
    ['Sevilla, Spain', 37.3890924, -5.9844589, 'None', 'Spain', 'Sevilla'],
    ['Soria, Spain', 41.7665972, -2.4790306, 'None', 'Spain', 'Soria'],
    [
        'Talavera de la Reina, Spain',
        39.962884,
        -4.8304536,
        'None',
        'Spain',
        'Talavera_de_la_Reina'
    ],
    [
        'Tamarite de Litera, Spain',
        41.8673774,
        0.4213552,
        'None',
        'Spain',
        'Tamarite_de_Litera'
    ],
    ['Tarragona, Spain', 41.1188827, 1.2444909, 'None', 'Spain', 'Tarragona'],
    ['Teruel, Spain', 40.3456879, -1.1064345, 'None', 'Spain', 'Teruel'],
    ['Toledo, Spain', 39.8628316, -4.0273231, 'None', 'Spain', 'Toledo'],
    [
        'Torrelavega, Spain',
        43.3488503,
        -4.0501505,
        'None',
        'Spain',
        'Torrelavega'
    ],
    [
        'Torremolinos, Spain',
        36.6225541,
        -4.4994767,
        'None',
        'Spain',
        'Torremolinos'
    ],
    ['Valencia, Spain', 39.4699075, -0.3762881, 'None', 'Spain', 'Valencia'],
    ['Valladolid, Spain', 41.6517375, -4.724495, 'None', 'Spain', 'Valladolid'],
    ['Vigo, Spain', 42.2405989, -8.7207268, 'None', 'Spain', 'Vigo'],
    ['Vitoria, Spain', 42.8591656, -2.6817918, 'None', 'Spain', 'Vitoria'],
    ['Zamora, Spain', 41.5034712, -5.7467879, 'None', 'Spain', 'Zamora'],
    ['Zaragoza, Spain', 41.6488226, -0.8890853, 'None', 'Spain', 'Zaragoza'],
    [
        'Colombo, Sri Lanka',
        6.9270786,
        79.861243,
        'None',
        'Sri_Lanka',
        'Colombo'
    ],
    ['Jaffna, Sri Lanka', 9.6614981, 80.0255465, 'None', 'Sri_Lanka', 'Jaffna'],
    ['Khartoum, Sudan', 15.5006544, 32.5598994, 'None', 'Sudan', 'Khartoum'],
    [
        'Paramaribo, Suriname',
        5.8520355,
        -55.2038278,
        'None',
        'Suriname',
        'Paramaribo'
    ],
    ['Alingsas, Sweden', 57.9300205, 12.5362113, 'None', 'Sweden', 'Alingsas'],
    ['Arboga, Sweden', 59.3936883, 15.8381747, 'None', 'Sweden', 'Arboga'],
    ['Boden, Sweden', 65.8251188, 21.6887028, 'None', 'Sweden', 'Boden'],
    ['Borlange, Sweden', 60.484304, 15.433969, 'None', 'Sweden', 'Borlange'],
    ['Eggby, Sweden', 58.4320252, 13.6439215, 'None', 'Sweden', 'Eggby'],
    ['Eksjo, Sweden', 57.6651652, 14.9732214, 'None', 'Sweden', 'Eksjo'],
    ['Falun, Sweden', 60.60646, 15.6355, 'None', 'Sweden', 'Falun'],
    ['Gallivare, Sweden', 67.1379, 20.6593618, 'None', 'Sweden', 'Gallivare'],
    ['Gavle, Sweden', 60.6748796, 17.1412726, 'None', 'Sweden', 'Gavle'],
    ['Gimo, Sweden', 60.1716941, 18.185871, 'None', 'Sweden', 'Gimo'],
    ['Gotene, Sweden', 58.528002, 13.491428, 'None', 'Sweden', 'Gotene'],
    ['Gothenburg, Sweden', 57.70887, 11.97456, 'None', 'Sweden', 'Gothenburg'],
    [
        'Grebbestad, Sweden',
        58.6930388,
        11.2549947,
        'None',
        'Sweden',
        'Grebbestad'
    ],
    ['Halmstad, Sweden', 56.6743748, 12.8577884, 'None', 'Sweden', 'Halmstad'],
    [
        'Hargshamn, Sweden',
        60.1666195,
        18.4724607,
        'None',
        'Sweden',
        'Hargshamn'
    ],
    [
        'Harnosand, Sweden',
        62.6322698,
        17.9408714,
        'None',
        'Sweden',
        'Harnosand'
    ],
    [
        'Hassleholm, Sweden',
        56.1589145,
        13.7667655,
        'None',
        'Sweden',
        'Hassleholm'
    ],
    ['Hedemora, Sweden', 60.2775453, 15.985892, 'None', 'Sweden', 'Hedemora'],
    [
        'Helsingborg, Sweden',
        56.0464674,
        12.6945121,
        'None',
        'Sweden',
        'Helsingborg'
    ],
    [
        'Huskvarna, Sweden',
        57.7904141,
        14.2755781,
        'None',
        'Sweden',
        'Huskvarna'
    ],
    [
        'Jonkoping, Sweden',
        57.7826137,
        14.1617876,
        'None',
        'Sweden',
        'Jonkoping'
    ],
    ['Kalmar, Sweden', 56.6634447, 16.356779, 'None', 'Sweden', 'Kalmar'],
    ['Karlshamn, Sweden', 56.170303, 14.863073, 'None', 'Sweden', 'Karlshamn'],
    ['Karlskrona, Sweden', 56.161224, 15.5869, 'None', 'Sweden', 'Karlskrona'],
    ['Karlstad, Sweden', 59.4021806, 13.5114977, 'None', 'Sweden', 'Karlstad'],
    [
        'Kiruna-Giron, Sweden',
        67.8558,
        20.225282,
        'None',
        'Sweden',
        'Kiruna-Giron'
    ],
    [
        'Kristianstad, Sweden',
        56.0293936,
        14.1566778,
        'None',
        'Sweden',
        'Kristianstad'
    ],
    ['Kumla, Sweden', 59.1265359, 15.1401053, 'None', 'Sweden', 'Kumla'],
    [
        'Kungsbacka, Sweden',
        57.4874919,
        12.0761927,
        'None',
        'Sweden',
        'Kungsbacka'
    ],
    ['Linkoping, Sweden', 58.410807, 15.6213727, 'None', 'Sweden', 'Linkoping'],
    ['Ljungby, Sweden', 56.8338774, 13.9410417, 'None', 'Sweden', 'Ljungby'],
    ['Ludvika, Sweden', 60.152358, 15.191639, 'None', 'Sweden', 'Ludvika'],
    ['Lulea, Sweden', 65.584819, 22.1567026, 'None', 'Sweden', 'Lulea'],
    ['Lund, Sweden', 55.7046601, 13.1910073, 'None', 'Sweden', 'Lund'],
    ['Lycksele, Sweden', 64.5958098, 18.676367, 'None', 'Sweden', 'Lycksele'],
    ['Malmo, Sweden', 55.604981, 13.003822, 'None', 'Sweden', 'Malmo'],
    ['Mora, Sweden', 61.004878, 14.537003, 'None', 'Sweden', 'Mora'],
    [
        'Norrkoping, Sweden',
        58.587745,
        16.192421,
        'None',
        'Sweden',
        'Norrkoping'
    ],
    ['Nykoping, Sweden', 58.7528439, 17.0091593, 'None', 'Sweden', 'Nykoping'],
    ['Orebro, Sweden', 59.2752626, 15.2134105, 'None', 'Sweden', 'Orebro'],
    [
        'Ostersund, Sweden',
        63.1766832,
        14.6360681,
        'None',
        'Sweden',
        'Ostersund'
    ],
    ['Sandviken, Sweden', 60.621607, 16.775918, 'None', 'Sweden', 'Sandviken'],
    [
        'Simrishamn, Sweden',
        55.5573959,
        14.3489651,
        'None',
        'Sweden',
        'Simrishamn'
    ],
    [
        'Stockholm, Sweden',
        59.3293235,
        18.0685808,
        'None',
        'Sweden',
        'Stockholm'
    ],
    ['Sundsvall, Sweden', 62.390811, 17.306927, 'None', 'Sweden', 'Sundsvall'],
    [
        'Trollhattan, Sweden',
        58.2834894,
        12.2858206,
        'None',
        'Sweden',
        'Trollhattan'
    ],
    ['Umea, Sweden', 63.8258471, 20.2630354, 'None', 'Sweden', 'Umea'],
    ['Uppsala, Sweden', 59.8585638, 17.6389267, 'None', 'Sweden', 'Uppsala'],
    ['Varnamo, Sweden', 57.1831605, 14.0478214, 'None', 'Sweden', 'Varnamo'],
    ['Vasteras, Sweden', 59.6099005, 16.5448091, 'None', 'Sweden', 'Vasteras'],
    ['Vaxjo, Sweden', 56.8790044, 14.8058522, 'None', 'Sweden', 'Vaxjo'],
    ['Visby, Sweden', 57.6348, 18.29484, 'None', 'Sweden', 'Visby'],
    [
        'Aarau, Switzerland',
        47.390434,
        8.0457015,
        'None',
        'Switzerland',
        'Aarau'
    ],
    [
        'Basel, Switzerland',
        47.5595986,
        7.5885761,
        'None',
        'Switzerland',
        'Basel'
    ],
    [
        'Bellinzona, Switzerland',
        46.1946216,
        9.0244124,
        'None',
        'Switzerland',
        'Bellinzona'
    ],
    ['Bern, Switzerland', 46.9479739, 7.4474468, 'None', 'Switzerland', 'Bern'],
    ['Chur, Switzerland', 46.8507835, 9.5319859, 'None', 'Switzerland', 'Chur'],
    [
        'Fribourg, Switzerland',
        46.8064773,
        7.1619719,
        'None',
        'Switzerland',
        'Fribourg'
    ],
    [
        'Geneva, Switzerland',
        46.2043907,
        6.1431577,
        'None',
        'Switzerland',
        'Geneva'
    ],
    [
        'Lausanne, Switzerland',
        46.5196535,
        6.6322734,
        'None',
        'Switzerland',
        'Lausanne'
    ],
    [
        'Liestal, Switzerland',
        47.4866143,
        7.7334272,
        'None',
        'Switzerland',
        'Liestal'
    ],
    [
        'Lugano, Switzerland',
        46.0036778,
        8.951052,
        'None',
        'Switzerland',
        'Lugano'
    ],
    [
        'Luzern, Switzerland',
        47.0501682,
        8.3093072,
        'None',
        'Switzerland',
        'Luzern'
    ],
    [
        'Morges, Switzerland',
        46.508813,
        6.49613,
        'None',
        'Switzerland',
        'Morges'
    ],
    [
        'Neuchatel, Switzerland',
        46.9899874,
        6.9292732,
        'None',
        'Switzerland',
        'Neuchatel'
    ],
    [
        'Saint Gallen, Switzerland',
        47.4244818,
        9.3767173,
        'None',
        'Switzerland',
        'Saint_Gallen'
    ],
    ['Sion, Switzerland', 46.2331221, 7.360626, 'None', 'Switzerland', 'Sion'],
    [
        'Solothurn, Switzerland',
        47.2088348,
        7.532291,
        'None',
        'Switzerland',
        'Solothurn'
    ],
    ['Thun, Switzerland', 46.7579868, 7.6279881, 'None', 'Switzerland', 'Thun'],
    [
        'Yverdon, Switzerland',
        46.7784736,
        6.641183,
        'None',
        'Switzerland',
        'Yverdon'
    ],
    [
        'Zurich, Switzerland',
        47.3768866,
        8.541694,
        'None',
        'Switzerland',
        'Zurich'
    ],
    ['Damascus, Syria', 33.5138073, 36.2765279, 'None', 'Syria', 'Damascus'],
    ['Homs, Syria', 34.7324273, 36.7136959, 'None', 'Syria', 'Homs'],
    ['Papeete, Tahiti', -17.5516251, -149.5584758, 'None', 'Tahiti', 'Papeete'],
    ['Tainan, Taiwan', 22.9997281, 120.2270277, 'None', 'Taiwan', 'Tainan'],
    ['Taipei, Taiwan', 25.0329694, 121.5654177, 'None', 'Taiwan', 'Taipei'],
    [
        'Dar es Salaam, Tanzania',
        -6.792354,
        39.2083284,
        'None',
        'Tanzania',
        'Dar_es_Salaam'
    ],
    [
        'Mawanza, Tanzania',
        -2.5164305,
        32.9174517,
        'None',
        'Tanzania',
        'Mawanza'
    ],
    [
        'Zanzibar, Tanzania',
        -6.165917,
        39.202641,
        'None',
        'Tanzania',
        'Zanzibar'
    ],
    [
        'Bangkok, Thailand',
        13.7704618,
        100.4685762,
        'None',
        'Thailand',
        'Bangkok'
    ],
    [
        'Chiang Mai, Thailand',
        18.740851,
        98.9555791,
        'None',
        'Thailand',
        'Chiang_Mai'
    ],
    ['Songkhla, Thailand', 6.75, 100.9, 'None', 'Thailand', 'Songkhla'],
    [
        'Port of Spain, Trinidad and Tobago',
        10.6549013,
        -61.5019256,
        'None',
        'Trinidad_and_Tobago',
        'Port_of_Spain'
    ],
    [
        'Scarborough, Trinidad and Tobago',
        11.18698,
        -60.730151,
        'None',
        'Trinidad_and_Tobago',
        'Scarborough'
    ],
    ['Tunis, Tunisia', 36.806495, 10.181532, 'None', 'Tunisia', 'Tunis'],
    ['Ankara, Turkey', 39.9333635, 32.8597419, 'None', 'Turkey', 'Ankara'],
    ['Istanbul, Turkey', 41.0082376, 28.9783589, 'None', 'Turkey', 'Istanbul'],
    ['Izmir, Turkey', 38.423734, 27.142826, 'None', 'Turkey', 'Izmir'],
    ['Ortahisar, Turkey', 38.620833, 34.864722, 'None', 'Turkey', 'Ortahisar'],
    ['Rize, Turkey', 41.025511, 40.517666, 'None', 'Turkey', 'Rize'],
    ['Abu Dhabi, UAE', 24.299174, 54.697277, 'None', 'UAE', 'Abu_Dhabi'],
    ['Al Ayn, UAE', 24.130162, 55.802312, 'None', 'UAE', 'Al_Ayn'],
    ['Dubai, UAE', 25.2048493, 55.2707828, 'None', 'UAE', 'Dubai'],
    [
        'Ras al-Khaymah, UAE',
        25.8006926,
        55.9761994,
        'None',
        'UAE',
        'Ras_al-Khaymah'
    ],
    ['Kampala, Uganda', 0.3475964, 32.5825197, 'None', 'Uganda', 'Kampala'],
    [
        'Dnipropetrovsk, Ukraine',
        48.464717,
        35.046183,
        'None',
        'Ukraine',
        'Dnipropetrovsk'
    ],
    ['Kharkov, Ukraine', 49.9935, 36.230383, 'None', 'Ukraine', 'Kharkov'],
    ['Kiev, Ukraine', 50.4501, 30.5234, 'None', 'Ukraine', 'Kiev'],
    ['Lugansk, Ukraine', 48.574041, 39.307815, 'None', 'Ukraine', 'Lugansk'],
    ['L viv, Ukraine', 49.839683, 24.029717, 'None', 'Ukraine', 'L_viv'],
    ['Odessa, Ukraine', 46.482526, 30.72331, 'None', 'Ukraine', 'Odessa'],
    [
        'Georgetown, Ascension Island',
        -7.926223,
        -14.4112011,
        'Ascension_Island',
        'United_Kingdom',
        'Georgetown'
    ],
    [
        'Ambleside, England',
        54.428736,
        -2.961333,
        'England',
        'United_Kingdom',
        'Ambleside'
    ],
    [
        'Ashford, England',
        51.1464659,
        0.875019,
        'England',
        'United_Kingdom',
        'Ashford'
    ],
    [
        'Barnstaple, England',
        51.0781599,
        -4.058338,
        'England',
        'United_Kingdom',
        'Barnstaple'
    ],
    [
        'Basingstoke, England',
        51.26654,
        -1.0923964,
        'England',
        'United_Kingdom',
        'Basingstoke'
    ],
    [
        'Bath, England',
        51.375801,
        -2.3599039,
        'England',
        'United_Kingdom',
        'Bath'
    ],
    [
        'Berwick-Upon-Tweed, England',
        55.770242,
        -2.005395,
        'England',
        'United_Kingdom',
        'Berwick-Upon-Tweed'
    ],
    [
        'Birmingham, England',
        52.486243,
        -1.890401,
        'England',
        'United_Kingdom',
        'Birmingham'
    ],
    [
        'Bishops Stortford, England',
        51.8721635,
        0.1536502,
        'England',
        'United_Kingdom',
        'Bishops_Stortford'
    ],
    [
        'Blackpool, England',
        53.8175053,
        -3.0356748,
        'England',
        'United_Kingdom',
        'Blackpool'
    ],
    [
        'Boston, England',
        52.97894,
        -0.026577,
        'England',
        'United_Kingdom',
        'Boston'
    ],
    [
        'Bournemouth, England',
        50.719164,
        -1.880769,
        'England',
        'United_Kingdom',
        'Bournemouth'
    ],
    [
        'Bracknell, England',
        51.41604,
        -0.75398,
        'England',
        'United_Kingdom',
        'Bracknell'
    ],
    [
        'Bradford, England',
        53.795984,
        -1.759398,
        'England',
        'United_Kingdom',
        'Bradford'
    ],
    [
        'Brighton, England',
        50.82253,
        -0.137163,
        'England',
        'United_Kingdom',
        'Brighton'
    ],
    [
        'Bristol, England',
        51.454513,
        -2.58791,
        'England',
        'United_Kingdom',
        'Bristol'
    ],
    [
        'Bromley, England',
        51.406025,
        0.013156,
        'England',
        'United_Kingdom',
        'Bromley'
    ],
    [
        'Cambridge, England',
        52.205337,
        0.121817,
        'England',
        'United_Kingdom',
        'Cambridge'
    ],
    [
        'Canterbury, England',
        51.280233,
        1.0789089,
        'England',
        'United_Kingdom',
        'Canterbury'
    ],
    [
        'Canvey Island, England',
        51.517083,
        0.578411,
        'England',
        'United_Kingdom',
        'Canvey_Island'
    ],
    [
        'Carlisle, England',
        54.892473,
        -2.932931,
        'England',
        'United_Kingdom',
        'Carlisle'
    ],
    [
        'Chelmsford, England',
        51.7355868,
        0.4685497,
        'England',
        'United_Kingdom',
        'Chelmsford'
    ],
    [
        'Cheltenham, England',
        51.8993855,
        -2.0782533,
        'England',
        'United_Kingdom',
        'Cheltenham'
    ],
    [
        'Chester, England',
        53.193392,
        -2.893075,
        'England',
        'United_Kingdom',
        'Chester'
    ],
    [
        'Corsham, England',
        51.431443,
        -2.189674,
        'England',
        'United_Kingdom',
        'Corsham'
    ],
    [
        'Coventry, England',
        52.406822,
        -1.519693,
        'England',
        'United_Kingdom',
        'Coventry'
    ],
    [
        'Derby, England',
        52.9225301,
        -1.4746186,
        'England',
        'United_Kingdom',
        'Derby'
    ],
    [
        'Dorking, England',
        51.232202,
        -0.332378,
        'England',
        'United_Kingdom',
        'Dorking'
    ],
    [
        'Durham, England',
        54.77525,
        -1.584852,
        'England',
        'United_Kingdom',
        'Durham'
    ],
    [
        'Eastbourne, England',
        50.768035,
        0.290472,
        'England',
        'United_Kingdom',
        'Eastbourne'
    ],
    [
        'East Grinstead, England',
        51.128742,
        -0.014468,
        'England',
        'United_Kingdom',
        'East_Grinstead'
    ],
    ['Ely, England', 52.399539, 0.262363, 'England', 'United_Kingdom', 'Ely'],
    [
        'Evesham, England',
        52.092149,
        -1.94677,
        'England',
        'United_Kingdom',
        'Evesham'
    ],
    [
        'Exeter, England',
        50.718412,
        -3.533899,
        'England',
        'United_Kingdom',
        'Exeter'
    ],
    [
        'Faringdon, England',
        51.658477,
        -1.584679,
        'England',
        'United_Kingdom',
        'Faringdon'
    ],
    [
        'Farnborough, England',
        51.2868939,
        -0.752615,
        'England',
        'United_Kingdom',
        'Farnborough'
    ],
    [
        'Farnham, England',
        51.214321,
        -0.798802,
        'England',
        'United_Kingdom',
        'Farnham'
    ],
    [
        'Faversham, England',
        51.315994,
        0.889358,
        'England',
        'United_Kingdom',
        'Faversham'
    ],
    [
        'Folkestone, England',
        51.081397,
        1.169456,
        'England',
        'United_Kingdom',
        'Folkestone'
    ],
    [
        'Fordham, England',
        52.31187,
        0.38498,
        'England',
        'United_Kingdom',
        'Fordham'
    ],
    [
        'Freshwater, England',
        50.680686,
        -1.523164,
        'England',
        'United_Kingdom',
        'Freshwater'
    ],
    [
        'Gloucester, England',
        51.8642449,
        -2.238156,
        'England',
        'United_Kingdom',
        'Gloucester'
    ],
    [
        'Grantham, England',
        52.912524,
        -0.643582,
        'England',
        'United_Kingdom',
        'Grantham'
    ],
    [
        'Gravesend, England',
        51.441884,
        0.370759,
        'England',
        'United_Kingdom',
        'Gravesend'
    ],
    [
        'Great Ayton, England',
        54.491018,
        -1.1402159,
        'England',
        'United_Kingdom',
        'Great_Ayton'
    ],
    [
        'Grimsby, England',
        53.567471,
        -0.080784,
        'England',
        'United_Kingdom',
        'Grimsby'
    ],
    [
        'Guildford, England',
        51.23622,
        -0.570409,
        'England',
        'United_Kingdom',
        'Guildford'
    ],
    [
        'Halstead, England',
        51.945073,
        0.639032,
        'England',
        'United_Kingdom',
        'Halstead'
    ],
    [
        'Hastings, England',
        50.854259,
        0.573453,
        'England',
        'United_Kingdom',
        'Hastings'
    ],
    [
        'Hull, England',
        53.7456709,
        -0.3367413,
        'England',
        'United_Kingdom',
        'Hull'
    ],
    [
        'Ipswich, England',
        52.056736,
        1.14822,
        'England',
        'United_Kingdom',
        'Ipswich'
    ],
    [
        'Kendal, England',
        54.328006,
        -2.74629,
        'England',
        'United_Kingdom',
        'Kendal'
    ],
    [
        'Kettering, England',
        52.396322,
        -0.730249,
        'England',
        'United_Kingdom',
        'Kettering'
    ],
    [
        'Kidderminster, England',
        52.388596,
        -2.2496839,
        'England',
        'United_Kingdom',
        'Kidderminster'
    ],
    [
        'Kings Lynn, England',
        52.7516798,
        0.4022963,
        'England',
        'United_Kingdom',
        'Kings_Lynn'
    ],
    [
        'Lancaster, England',
        54.046575,
        -2.8007399,
        'England',
        'United_Kingdom',
        'Lancaster'
    ],
    [
        'Leeds, England',
        53.8007554,
        -1.5490774,
        'England',
        'United_Kingdom',
        'Leeds'
    ],
    [
        'Leicester, England',
        52.6368778,
        -1.1397592,
        'England',
        'United_Kingdom',
        'Leicester'
    ],
    [
        'Lewes, England',
        50.873872,
        0.00878,
        'England',
        'United_Kingdom',
        'Lewes'
    ],
    [
        'Lincoln, England',
        53.230688,
        -0.540579,
        'England',
        'United_Kingdom',
        'Lincoln'
    ],
    [
        'Liverpool, England',
        53.4083714,
        -2.9915726,
        'England',
        'United_Kingdom',
        'Liverpool'
    ],
    [
        'London, England',
        51.5073509,
        -0.1277583,
        'England',
        'United_Kingdom',
        'London'
    ],
    [
        'Long Eaton, England',
        52.898446,
        -1.269778,
        'England',
        'United_Kingdom',
        'Long_Eaton'
    ],
    [
        'Loughborough, England',
        52.772099,
        -1.206166,
        'England',
        'United_Kingdom',
        'Loughborough'
    ],
    [
        'Luton, England',
        51.8786707,
        -0.4200255,
        'England',
        'United_Kingdom',
        'Luton'
    ],
    [
        'Maidstone, England',
        51.270363,
        0.522699,
        'England',
        'United_Kingdom',
        'Maidstone'
    ],
    [
        'Malmesbury, England',
        51.586357,
        -2.102834,
        'England',
        'United_Kingdom',
        'Malmesbury'
    ],
    [
        'Manchester, England',
        53.4807593,
        -2.2426305,
        'England',
        'United_Kingdom',
        'Manchester'
    ],
    [
        'Margate, England',
        51.389646,
        1.3868339,
        'England',
        'United_Kingdom',
        'Margate'
    ],
    [
        'Marlborough, England',
        51.420073,
        -1.727062,
        'England',
        'United_Kingdom',
        'Marlborough'
    ],
    [
        'Middlesbrough, England',
        54.574227,
        -1.234956,
        'England',
        'United_Kingdom',
        'Middlesbrough'
    ],
    [
        'Milton Keynes, England',
        52.0406224,
        -0.7594171,
        'England',
        'United_Kingdom',
        'Milton_Keynes'
    ],
    [
        'Newcastle, England',
        54.978252,
        -1.61778,
        'England',
        'United_Kingdom',
        'Newcastle'
    ],
    [
        'Newent, England',
        51.929281,
        -2.404578,
        'England',
        'United_Kingdom',
        'Newent'
    ],
    [
        'Newmarket, England',
        52.24488,
        0.407962,
        'England',
        'United_Kingdom',
        'Newmarket'
    ],
    [
        'Newport, England',
        51.584151,
        -2.997664,
        'England',
        'United_Kingdom',
        'Newport'
    ],
    [
        'Northampton, England',
        52.240477,
        -0.902656,
        'England',
        'United_Kingdom',
        'Northampton'
    ],
    [
        'Norwich, England',
        52.6308859,
        1.297355,
        'England',
        'United_Kingdom',
        'Norwich'
    ],
    [
        'Nottingham, England',
        52.9547832,
        -1.1581086,
        'England',
        'United_Kingdom',
        'Nottingham'
    ],
    [
        'Nuneaton, England',
        52.520489,
        -1.465382,
        'England',
        'United_Kingdom',
        'Nuneaton'
    ],
    [
        'Otley, England',
        53.905825,
        -1.691786,
        'England',
        'United_Kingdom',
        'Otley'
    ],
    [
        'Oxford, England',
        51.7520209,
        -1.2577263,
        'England',
        'United_Kingdom',
        'Oxford'
    ],
    [
        'Peterborough, England',
        52.5694985,
        -0.2405299,
        'England',
        'United_Kingdom',
        'Peterborough'
    ],
    [
        'Plymouth, England',
        50.3754565,
        -4.1426565,
        'England',
        'United_Kingdom',
        'Plymouth'
    ],
    [
        'Poole, England',
        50.71505,
        -1.987248,
        'England',
        'United_Kingdom',
        'Poole'
    ],
    [
        'Portsmouth, England',
        50.8197675,
        -1.0879769,
        'England',
        'United_Kingdom',
        'Portsmouth'
    ],
    [
        'Preston, England',
        53.763201,
        -2.70309,
        'England',
        'United_Kingdom',
        'Preston'
    ],
    [
        'Radlett, England',
        51.686808,
        -0.3173869,
        'England',
        'United_Kingdom',
        'Radlett'
    ],
    [
        'Reading, England',
        51.4542645,
        -0.9781303,
        'England',
        'United_Kingdom',
        'Reading'
    ],
    [
        'Rugeley, England',
        52.761515,
        -1.935967,
        'England',
        'United_Kingdom',
        'Rugeley'
    ],
    [
        'Saint Albans, England',
        51.752725,
        -0.339436,
        'England',
        'United_Kingdom',
        'Saint_Albans'
    ],
    [
        'Saint Helens, England',
        53.456307,
        -2.737095,
        'England',
        'United_Kingdom',
        'Saint_Helens'
    ],
    [
        'Saint Helier, England',
        49.186822,
        -2.106568,
        'England',
        'United_Kingdom',
        'Saint_Helier'
    ],
    [
        'Salford, England',
        53.4875235,
        -2.2901264,
        'England',
        'United_Kingdom',
        'Salford'
    ],
    [
        'Salisbury, England',
        51.068785,
        -1.794472,
        'England',
        'United_Kingdom',
        'Salisbury'
    ],
    [
        'Scarborough, England',
        54.283113,
        -0.399752,
        'England',
        'United_Kingdom',
        'Scarborough'
    ],
    [
        'Scunthorpe, England',
        53.588646,
        -0.654413,
        'England',
        'United_Kingdom',
        'Scunthorpe'
    ],
    [
        'Sheffield, England',
        53.381129,
        -1.470085,
        'England',
        'United_Kingdom',
        'Sheffield'
    ],
    [
        'Sleaford, England',
        53.0003079,
        -0.40965,
        'England',
        'United_Kingdom',
        'Sleaford'
    ],
    [
        'Slough, England',
        51.5105384,
        -0.5950406,
        'England',
        'United_Kingdom',
        'Slough'
    ],
    [
        'Soham, England',
        52.335212,
        0.3375079,
        'England',
        'United_Kingdom',
        'Soham'
    ],
    [
        'Solihull, England',
        52.411811,
        -1.77761,
        'England',
        'United_Kingdom',
        'Solihull'
    ],
    [
        'Southampton, England',
        50.9097004,
        -1.4043509,
        'England',
        'United_Kingdom',
        'Southampton'
    ],
    [
        'Stevenage, England',
        51.903761,
        -0.196612,
        'England',
        'United_Kingdom',
        'Stevenage'
    ],
    [
        'Stoke-on-Trent, England',
        53.002668,
        -2.179404,
        'England',
        'United_Kingdom',
        'Stoke-on-Trent'
    ],
    [
        'Stratford-Upon-Avon, England',
        52.19173,
        -1.708298,
        'England',
        'United_Kingdom',
        'Stratford-Upon-Avon'
    ],
    [
        'Swindon, England',
        51.5557739,
        -1.7797176,
        'England',
        'United_Kingdom',
        'Swindon'
    ],
    [
        'Tamworth, England',
        52.633584,
        -1.691032,
        'England',
        'United_Kingdom',
        'Tamworth'
    ],
    [
        'Taunton, England',
        51.015344,
        -3.106849,
        'England',
        'United_Kingdom',
        'Taunton'
    ],
    [
        'Telford, England',
        52.678419,
        -2.445258,
        'England',
        'United_Kingdom',
        'Telford'
    ],
    [
        'Tetbury, England',
        51.639295,
        -2.15818,
        'England',
        'United_Kingdom',
        'Tetbury'
    ],
    [
        'Truro, England',
        50.263195,
        -5.051041,
        'England',
        'United_Kingdom',
        'Truro'
    ],
    [
        'Uxbridge, England',
        51.5485,
        -0.479611,
        'England',
        'United_Kingdom',
        'Uxbridge'
    ],
    [
        'Walsall, England',
        52.586214,
        -1.982919,
        'England',
        'United_Kingdom',
        'Walsall'
    ],
    [
        'Warwick, England',
        52.282316,
        -1.584927,
        'England',
        'United_Kingdom',
        'Warwick'
    ],
    [
        'Watford, England',
        51.656489,
        -0.39032,
        'England',
        'United_Kingdom',
        'Watford'
    ],
    [
        'Wells, England',
        51.209347,
        -2.6445979,
        'England',
        'United_Kingdom',
        'Wells'
    ],
    [
        'Weymouth, England',
        50.6144279,
        -2.457621,
        'England',
        'United_Kingdom',
        'Weymouth'
    ],
    [
        'Whitby, England',
        54.486335,
        -0.613347,
        'England',
        'United_Kingdom',
        'Whitby'
    ],
    [
        'Winchester, England',
        51.059771,
        -1.310142,
        'England',
        'United_Kingdom',
        'Winchester'
    ],
    [
        'Windsor, England',
        51.4817279,
        -0.613576,
        'England',
        'United_Kingdom',
        'Windsor'
    ],
    [
        'Wolverhampton, England',
        52.586973,
        -2.12882,
        'England',
        'United_Kingdom',
        'Wolverhampton'
    ],
    [
        'Worcester, England',
        52.193636,
        -2.221575,
        'England',
        'United_Kingdom',
        'Worcester'
    ],
    [
        'Worthing, England',
        50.81787,
        -0.372882,
        'England',
        'United_Kingdom',
        'Worthing'
    ],
    [
        'York, England',
        53.9599651,
        -1.0872979,
        'England',
        'United_Kingdom',
        'York'
    ],
    [
        'Gibraltar, Gibraltar',
        36.140773,
        -5.353599,
        'Gibraltar',
        'United_Kingdom',
        'Gibraltar'
    ],
    [
        'Georgetown, Grand Cayman',
        19.2869323,
        -81.3674389,
        'Grand_Cayman',
        'United_Kingdom',
        'Georgetown'
    ],
    [
        'Saint Peter Port, Guernsey',
        49.4541677,
        -2.5497069,
        'Guernsey',
        'United_Kingdom',
        'Saint_Peter_Port'
    ],
    [
        'Diego Garcia, Indian Ocean Terr',
        -7.3195005,
        72.4228556,
        'Indian_Ocean_Terr',
        'United_Kingdom',
        'Diego_Garcia'
    ],
    [
        'Douglas, Isle of Man',
        54.1523372,
        -4.4861228,
        'Isle_of_Man',
        'United_Kingdom',
        'Douglas'
    ],
    [
        'Armagh, Northern Ireland',
        54.3502798,
        -6.652792,
        'Northern_Ireland',
        'United_Kingdom',
        'Armagh'
    ],
    [
        'Belfast, Northern Ireland',
        54.597285,
        -5.93012,
        'Northern_Ireland',
        'United_Kingdom',
        'Belfast'
    ],
    [
        'Coleraine, Northern Ireland',
        55.1325802,
        -6.6646102,
        'Northern_Ireland',
        'United_Kingdom',
        'Coleraine'
    ],
    [
        'Enniskillen, Northern Ireland',
        54.3438243,
        -7.6315336,
        'Northern_Ireland',
        'United_Kingdom',
        'Enniskillen'
    ],
    [
        'Hillsborough, Northern Ireland',
        54.462983,
        -6.0829658,
        'Northern_Ireland',
        'United_Kingdom',
        'Hillsborough'
    ],
    [
        'Lisnaskea, Northern Ireland',
        54.2528935,
        -7.4428696,
        'Northern_Ireland',
        'United_Kingdom',
        'Lisnaskea'
    ],
    [
        'Londonderry, Northern Ireland',
        54.9966124,
        -7.3085748,
        'Northern_Ireland',
        'United_Kingdom',
        'Londonderry'
    ],
    [
        'Aberdeen, Scotland',
        57.149717,
        -2.094278,
        'Scotland',
        'United_Kingdom',
        'Aberdeen'
    ],
    [
        'Crail, Scotland',
        56.260551,
        -2.6275909,
        'Scotland',
        'United_Kingdom',
        'Crail'
    ],
    [
        'Cumbernauld, Scotland',
        55.945668,
        -3.992534,
        'Scotland',
        'United_Kingdom',
        'Cumbernauld'
    ],
    [
        'Dumfries, Scotland',
        55.070859,
        -3.60512,
        'Scotland',
        'United_Kingdom',
        'Dumfries'
    ],
    [
        'Dundee, Scotland',
        56.462018,
        -2.970721,
        'Scotland',
        'United_Kingdom',
        'Dundee'
    ],
    [
        'Dunfermline, Scotland',
        56.071741,
        -3.452151,
        'Scotland',
        'United_Kingdom',
        'Dunfermline'
    ],
    [
        'Edinburgh, Scotland',
        55.953252,
        -3.188267,
        'Scotland',
        'United_Kingdom',
        'Edinburgh'
    ],
    [
        'Elgin, Scotland',
        57.649454,
        -3.318485,
        'Scotland',
        'United_Kingdom',
        'Elgin'
    ],
    [
        'Forres, Scotland',
        57.609791,
        -3.61998,
        'Scotland',
        'United_Kingdom',
        'Forres'
    ],
    [
        'Glasgow, Scotland',
        55.864237,
        -4.251806,
        'Scotland',
        'United_Kingdom',
        'Glasgow'
    ],
    [
        'Inverness, Scotland',
        57.477773,
        -4.224721,
        'Scotland',
        'United_Kingdom',
        'Inverness'
    ],
    [
        'Inverurie, Scotland',
        57.283474,
        -2.373995,
        'Scotland',
        'United_Kingdom',
        'Inverurie'
    ],
    [
        'Portree, Scotland',
        57.412474,
        -6.196023,
        'Scotland',
        'United_Kingdom',
        'Portree'
    ],
    [
        'Prestwick, Scotland',
        55.495587,
        -4.6142139,
        'Scotland',
        'United_Kingdom',
        'Prestwick'
    ],
    [
        'Saint Andrews, Scotland',
        56.3397753,
        -2.7967214,
        'Scotland',
        'United_Kingdom',
        'Saint_Andrews'
    ],
    [
        'Stirling, Scotland',
        56.1165227,
        -3.9369029,
        'Scotland',
        'United_Kingdom',
        'Stirling'
    ],
    [
        'Stronoway, Scotland',
        58.209435,
        -6.3848692,
        'Scotland',
        'United_Kingdom',
        'Stronoway'
    ],
    [
        'Thurso, Scotland',
        58.593566,
        -3.52208,
        'Scotland',
        'United_Kingdom',
        'Thurso'
    ],
    [
        'Uist Islands, Scotland',
        57.433,
        -7.317,
        'Scotland',
        'United_Kingdom',
        'Uist_Islands'
    ],
    [
        'Road Town, Virgin Islands',
        18.4286115,
        -64.6184657,
        'Virgin_Islands',
        'United_Kingdom',
        'Road_Town'
    ],
    [
        'Aberystwyth, Wales',
        52.415303,
        -4.08292,
        'Wales',
        'United_Kingdom',
        'Aberystwyth'
    ],
    [
        'Barmouth, Wales',
        52.722873,
        -4.0560919,
        'Wales',
        'United_Kingdom',
        'Barmouth'
    ],
    [
        'Beaumaris, Wales',
        53.265865,
        -4.09199,
        'Wales',
        'United_Kingdom',
        'Beaumaris'
    ],
    [
        'Cardiff, Wales',
        51.481581,
        -3.17909,
        'Wales',
        'United_Kingdom',
        'Cardiff'
    ],
    [
        'Denbigh, Wales',
        53.183906,
        -3.425002,
        'Wales',
        'United_Kingdom',
        'Denbigh'
    ],
    [
        'Holyhead, Wales',
        53.309441,
        -4.633038,
        'Wales',
        'United_Kingdom',
        'Holyhead'
    ],
    [
        'Llandudno, Wales',
        53.324061,
        -3.827609,
        'Wales',
        'United_Kingdom',
        'Llandudno'
    ],
    [
        'Saundersfoot, Wales',
        51.709379,
        -4.699726,
        'Wales',
        'United_Kingdom',
        'Saundersfoot'
    ],
    [
        'Swansea, Wales',
        51.62144,
        -3.943646,
        'Wales',
        'United_Kingdom',
        'Swansea'
    ],
    [
        'Wrexham, Wales',
        53.04304,
        -2.992494,
        'Wales',
        'United_Kingdom',
        'Wrexham'
    ],
    [
        'Abbeville, Alabama',
        31.5718352,
        -85.2504893,
        'Alabama',
        'United_States',
        'Abbeville'
    ],
    [
        'Alexander City, Alabama',
        32.944012,
        -85.9538532,
        'Alabama',
        'United_States',
        'Alexander_City'
    ],
    [
        'Andalusia, Alabama',
        31.3085039,
        -86.4832913,
        'Alabama',
        'United_States',
        'Andalusia'
    ],
    [
        'Anniston, Alabama',
        33.6598257,
        -85.8316318,
        'Alabama',
        'United_States',
        'Anniston'
    ],
    [
        'Ashland, Alabama',
        33.2737256,
        -85.8360741,
        'Alabama',
        'United_States',
        'Ashland'
    ],
    [
        'Athens, Alabama',
        34.8028661,
        -86.9716741,
        'Alabama',
        'United_States',
        'Athens'
    ],
    [
        'Auburn, Alabama',
        32.6098566,
        -85.4807825,
        'Alabama',
        'United_States',
        'Auburn'
    ],
    [
        'Bay Minette, Alabama',
        30.696821,
        -87.9175451,
        'Alabama',
        'United_States',
        'Bay_Minette'
    ],
    [
        'Birmingham, Alabama',
        33.5206608,
        -86.80249,
        'Alabama',
        'United_States',
        'Birmingham'
    ],
    [
        'Brewton, Alabama',
        31.1051779,
        -87.0721918,
        'Alabama',
        'United_States',
        'Brewton'
    ],
    [
        'Butler, Alabama',
        32.0895908,
        -88.2219652,
        'Alabama',
        'United_States',
        'Butler'
    ],
    [
        'Camden, Alabama',
        31.9909813,
        -87.2905456,
        'Alabama',
        'United_States',
        'Camden'
    ],
    [
        'Carrollton, Alabama',
        33.2617871,
        -88.0950263,
        'Alabama',
        'United_States',
        'Carrollton'
    ],
    [
        'Centre, Alabama',
        34.1520406,
        -85.6788531,
        'Alabama',
        'United_States',
        'Centre'
    ],
    [
        'Centreville, Alabama',
        32.9445682,
        -87.1386067,
        'Alabama',
        'United_States',
        'Centreville'
    ],
    [
        'Chatom, Alabama',
        31.4651653,
        -88.2544557,
        'Alabama',
        'United_States',
        'Chatom'
    ],
    [
        'Clanton, Alabama',
        32.8387371,
        -86.6294262,
        'Alabama',
        'United_States',
        'Clanton'
    ],
    [
        'Clayton, Alabama',
        31.8782162,
        -85.4496627,
        'Alabama',
        'United_States',
        'Clayton'
    ],
    [
        'Columbiana, Alabama',
        33.1781718,
        -86.6072054,
        'Alabama',
        'United_States',
        'Columbiana'
    ],
    [
        'Cullman, Alabama',
        34.1748208,
        -86.8436124,
        'Alabama',
        'United_States',
        'Cullman'
    ],
    [
        'Dadeville, Alabama',
        32.831238,
        -85.7635692,
        'Alabama',
        'United_States',
        'Dadeville'
    ],
    [
        'Decatur, Alabama',
        34.6059253,
        -86.9833417,
        'Alabama',
        'United_States',
        'Decatur'
    ],
    [
        'Dothan, Alabama',
        31.2232313,
        -85.3904888,
        'Alabama',
        'United_States',
        'Dothan'
    ],
    [
        'Double Springs, Alabama',
        34.1464916,
        -87.4022386,
        'Alabama',
        'United_States',
        'Double_Springs'
    ],
    [
        'Elberta, Alabama',
        30.4143646,
        -87.5977615,
        'Alabama',
        'United_States',
        'Elberta'
    ],
    [
        'Enterprise, Alabama',
        31.3151708,
        -85.8552161,
        'Alabama',
        'United_States',
        'Enterprise'
    ],
    [
        'Eutaw, Alabama',
        32.8406848,
        -87.8875145,
        'Alabama',
        'United_States',
        'Eutaw'
    ],
    [
        'Evergreen, Alabama',
        31.4341907,
        -86.9545924,
        'Alabama',
        'United_States',
        'Evergreen'
    ],
    [
        'Fairhope, Alabama',
        30.5229719,
        -87.9033261,
        'Alabama',
        'United_States',
        'Fairhope'
    ],
    [
        'Fayette, Alabama',
        33.6845539,
        -87.8308522,
        'Alabama',
        'United_States',
        'Fayette'
    ],
    [
        'Florence, Alabama',
        34.79981,
        -87.677251,
        'Alabama',
        'United_States',
        'Florence'
    ],
    [
        'Fort Payne, Alabama',
        34.4442547,
        -85.7196893,
        'Alabama',
        'United_States',
        'Fort_Payne'
    ],
    [
        'Gadsden, Alabama',
        34.014264,
        -86.0066386,
        'Alabama',
        'United_States',
        'Gadsden'
    ],
    [
        'Geneva, Alabama',
        31.0329572,
        -85.8638242,
        'Alabama',
        'United_States',
        'Geneva'
    ],
    [
        'Greensboro, Alabama',
        32.7045753,
        -87.5958396,
        'Alabama',
        'United_States',
        'Greensboro'
    ],
    [
        'Greenville, Alabama',
        31.8295972,
        -86.6177517,
        'Alabama',
        'United_States',
        'Greenville'
    ],
    [
        'Grove Hill, Alabama',
        31.7087681,
        -87.7772218,
        'Alabama',
        'United_States',
        'Grove_Hill'
    ],
    [
        'Gulf Shores, Alabama',
        30.2460361,
        -87.7008193,
        'Alabama',
        'United_States',
        'Gulf_Shores'
    ],
    [
        'Guntersville, Alabama',
        34.3581473,
        -86.2947041,
        'Alabama',
        'United_States',
        'Guntersville'
    ],
    [
        'Hamilton, Alabama',
        34.1423235,
        -87.9886438,
        'Alabama',
        'United_States',
        'Hamilton'
    ],
    [
        'Hartford, Alabama',
        31.1023998,
        -85.6968778,
        'Alabama',
        'United_States',
        'Hartford'
    ],
    [
        'Hartselle, Alabama',
        34.4434282,
        -86.9352842,
        'Alabama',
        'United_States',
        'Hartselle'
    ],
    [
        'Hayneville, Alabama',
        32.1840315,
        -86.5802533,
        'Alabama',
        'United_States',
        'Hayneville'
    ],
    [
        'Heflin, Alabama',
        33.6444926,
        -85.5842385,
        'Alabama',
        'United_States',
        'Heflin'
    ],
    [
        'Horseshoe Bend National Military Park, Alabama',
        32.9822858,
        -85.7353386,
        'Alabama',
        'United_States',
        'Horseshoe_Bend_National_Military_Park'
    ],
    [
        'Huntsville, Alabama',
        34.7303688,
        -86.5861037,
        'Alabama',
        'United_States',
        'Huntsville'
    ],
    [
        'Jacksonville, Alabama',
        33.8137125,
        -85.7613536,
        'Alabama',
        'United_States',
        'Jacksonville'
    ],
    [
        'Jasper, Alabama',
        33.8312185,
        -87.2775053,
        'Alabama',
        'United_States',
        'Jasper'
    ],
    [
        'LaFayette, Alabama',
        32.899776,
        -85.4011588,
        'Alabama',
        'United_States',
        'LaFayette'
    ],
    [
        'Linden, Alabama',
        32.3062534,
        -87.7980665,
        'Alabama',
        'United_States',
        'Linden'
    ],
    [
        'Little River Canyon, Alabama',
        34.3707481,
        -85.661936,
        'Alabama',
        'United_States',
        'Little_River_Canyon'
    ],
    [
        'Livingston, Alabama',
        32.5843025,
        -88.1872475,
        'Alabama',
        'United_States',
        'Livingston'
    ],
    [
        'Luverne, Alabama',
        31.7165455,
        -86.2638492,
        'Alabama',
        'United_States',
        'Luverne'
    ],
    [
        'Magnolia Springs, Alabama',
        30.3996424,
        -87.7761,
        'Alabama',
        'United_States',
        'Magnolia_Springs'
    ],
    [
        'Marion, Alabama',
        32.6323536,
        -87.3191655,
        'Alabama',
        'United_States',
        'Marion'
    ],
    [
        'MarshallSpace Flight Center, Alabama',
        32.3182314,
        -86.902298,
        'Alabama',
        'United_States',
        'MarshallSpace_Flight_Center'
    ],
    [
        'Mobile, Alabama',
        30.6953657,
        -88.0398912,
        'Alabama',
        'United_States',
        'Mobile'
    ],
    [
        'Monroeville, Alabama',
        31.5279399,
        -87.3247077,
        'Alabama',
        'United_States',
        'Monroeville'
    ],
    [
        'Montgomery, Alabama',
        32.3668052,
        -86.2999689,
        'Alabama',
        'United_States',
        'Montgomery'
    ],
    [
        'Moody, Alabama',
        33.5909365,
        -86.4908168,
        'Alabama',
        'United_States',
        'Moody'
    ],
    [
        'Moulton, Alabama',
        34.4812062,
        -87.2933533,
        'Alabama',
        'United_States',
        'Moulton'
    ],
    [
        'New Brockton, Alabama',
        31.3857239,
        -85.9293861,
        'Alabama',
        'United_States',
        'New_Brockton'
    ],
    [
        'Onenota, Alabama',
        33.9481537,
        -86.472764,
        'Alabama',
        'United_States',
        'Onenota'
    ],
    [
        'Opelika, Alabama',
        32.6454116,
        -85.3782795,
        'Alabama',
        'United_States',
        'Opelika'
    ],
    [
        'Ozark, Alabama',
        31.459017,
        -85.640289,
        'Alabama',
        'United_States',
        'Ozark'
    ],
    [
        'Pell City, Alabama',
        33.5862149,
        -86.2860888,
        'Alabama',
        'United_States',
        'Pell_City'
    ],
    [
        'Phenix City, Alabama',
        32.4709761,
        -85.0007653,
        'Alabama',
        'United_States',
        'Phenix_City'
    ],
    [
        'Prattville, Alabama',
        32.4640245,
        -86.4596966,
        'Alabama',
        'United_States',
        'Prattville'
    ],
    [
        'Rockford, Alabama',
        32.8895681,
        -86.2196936,
        'Alabama',
        'United_States',
        'Rockford'
    ],
    [
        'Russellville, Alabama',
        34.5078726,
        -87.7286431,
        'Alabama',
        'United_States',
        'Russellville'
    ],
    [
        'Russell Cave, Alabama',
        34.9764537,
        -85.8142571,
        'Alabama',
        'United_States',
        'Russell_Cave'
    ],
    [
        'Scottsboro, Alabama',
        34.6723069,
        -86.0341463,
        'Alabama',
        'United_States',
        'Scottsboro'
    ],
    [
        'Selma, Alabama',
        32.4073589,
        -87.0211007,
        'Alabama',
        'United_States',
        'Selma'
    ],
    [
        'Talladega, Alabama',
        33.4359416,
        -86.1058048,
        'Alabama',
        'United_States',
        'Talladega'
    ],
    [
        'Troy, Alabama',
        31.8087678,
        -85.969951,
        'Alabama',
        'United_States',
        'Troy'
    ],
    [
        'Tuscaloosa, Alabama',
        33.2098407,
        -87.5691735,
        'Alabama',
        'United_States',
        'Tuscaloosa'
    ],
    [
        'Tuscumbia, Alabama',
        34.7312005,
        -87.70253,
        'Alabama',
        'United_States',
        'Tuscumbia'
    ],
    [
        'Tuskegee Airmen National Historic Site, Alabama',
        32.4572429,
        -85.680366,
        'Alabama',
        'United_States',
        'Tuskegee_Airmen_National_Historic_Site'
    ],
    [
        'Tuskegee Institute, Alabama',
        32.430237,
        -85.7077266,
        'Alabama',
        'United_States',
        'Tuskegee_Institute'
    ],
    [
        'Union Springs, Alabama',
        32.144316,
        -85.7149495,
        'Alabama',
        'United_States',
        'Union_Springs'
    ],
    [
        'Vernon, Alabama',
        33.7570541,
        -88.1089185,
        'Alabama',
        'United_States',
        'Vernon'
    ],
    [
        'Wedowee, Alabama',
        33.3090047,
        -85.484675,
        'Alabama',
        'United_States',
        'Wedowee'
    ],
    [
        'Wetumpka, Alabama',
        32.5437448,
        -86.2119127,
        'Alabama',
        'United_States',
        'Wetumpka'
    ],
    [
        'Alagnak National Wild and Scenic River, Alaska',
        59.0134287,
        -156.1181311,
        'Alaska',
        'United_States',
        'Alagnak_National_Wild_and_Scenic_River'
    ],
    [
        'Anchorage, Alaska',
        61.2180556,
        -149.9002778,
        'Alaska',
        'United_States',
        'Anchorage'
    ],
    [
        'Aniakchak National Monument, Alaska',
        56.8954,
        -158.1178,
        'Alaska',
        'United_States',
        'Aniakchak_National_Monument'
    ],
    [
        'Aniakchak National Preserve, Alaska',
        56.7547403,
        -157.7396917,
        'Alaska',
        'United_States',
        'Aniakchak_National_Preserve'
    ],
    [
        'Barrow, Alaska',
        71.2905556,
        -156.7886111,
        'Alaska',
        'United_States',
        'Barrow'
    ],
    [
        'Bering Land Bridge National Preserve, Alaska',
        65.9258669,
        -164.4377877,
        'Alaska',
        'United_States',
        'Bering_Land_Bridge_National_Preserve'
    ],
    [
        'Bethel, Alaska',
        60.7922222,
        -161.7558333,
        'Alaska',
        'United_States',
        'Bethel'
    ],
    [
        'Cape Krusenstern National Monument, Alaska',
        67.4756668,
        -163.6153984,
        'Alaska',
        'United_States',
        'Cape_Krusenstern_National_Monument'
    ],
    [
        'Denali National Park, Alaska',
        63.3411076,
        -150.7341423,
        'Alaska',
        'United_States',
        'Denali_National_Park'
    ],
    [
        'Denali National Preserve, Alaska',
        63.4775071,
        -152.4397427,
        'Alaska',
        'United_States',
        'Denali_National_Preserve'
    ],
    [
        'Denali Park and Wilderness, Alaska',
        61.8806118,
        -150.093237,
        'Alaska',
        'United_States',
        'Denali_Park_and_Wilderness'
    ],
    [
        'Fairbanks, Alaska',
        64.8377778,
        -147.7163889,
        'Alaska',
        'United_States',
        'Fairbanks'
    ],
    [
        'Gates of the Arctic National Park, Alaska',
        68.0747,
        -151.3983,
        'Alaska',
        'United_States',
        'Gates_of_the_Arctic_National_Park'
    ],
    [
        'Gates of the Arctic National Preserve, Alaska',
        66.7795,
        -155.4099,
        'Alaska',
        'United_States',
        'Gates_of_the_Arctic_National_Preserve'
    ],
    [
        'Gates of the Arctic Park and Wilderness, Alaska',
        67.783333,
        -153.3,
        'Alaska',
        'United_States',
        'Gates_of_the_Arctic_Park_and_Wilderness'
    ],
    [
        'Glacier Bay National Park, Alaska',
        58.6658073,
        -136.9002147,
        'Alaska',
        'United_States',
        'Glacier_Bay_National_Park'
    ],
    [
        'Glacier Bay National Preserve, Alaska',
        58.665807,
        -136.900215,
        'Alaska',
        'United_States',
        'Glacier_Bay_National_Preserve'
    ],
    [
        'Glacier Bay Park and Wilderness, Alaska',
        59.066667,
        -136.983333,
        'Alaska',
        'United_States',
        'Glacier_Bay_Park_and_Wilderness'
    ],
    [
        'Glacier Bay Park Water and Wilderness, Alaska',
        58.5289496,
        -135.9799387,
        'Alaska',
        'United_States',
        'Glacier_Bay_Park_Water_and_Wilderness'
    ],
    [
        'Haines, Alaska',
        59.2358333,
        -135.445,
        'Alaska',
        'United_States',
        'Haines'
    ],
    [
        'Healy, Alaska',
        63.8697384,
        -149.0215109,
        'Alaska',
        'United_States',
        'Healy'
    ],
    [
        'Juneau, Alaska',
        58.3019444,
        -134.4197222,
        'Alaska',
        'United_States',
        'Juneau'
    ],
    [
        'Katmai National Preserve, Alaska',
        58.5975286,
        -154.6937285,
        'Alaska',
        'United_States',
        'Katmai_National_Preserve'
    ],
    [
        'Kenai Fjords National Park, Alaska',
        60.0437764,
        -149.8163644,
        'Alaska',
        'United_States',
        'Kenai_Fjords_National_Park'
    ],
    [
        'Ketchikan, Alaska',
        55.3422222,
        -131.6461111,
        'Alaska',
        'United_States',
        'Ketchikan'
    ],
    [
        'King Salmon, Alaska',
        58.6883251,
        -156.661351,
        'Alaska',
        'United_States',
        'King_Salmon'
    ],
    [
        'Klondike Gold Rush National Historical Park, Alaska',
        67.55,
        -159.283333,
        'Alaska',
        'United_States',
        'Klondike_Gold_Rush_National_Historical_Park'
    ],
    [
        'Kobuk Valley National Park, Alaska',
        67.3543521,
        -159.1476428,
        'Alaska',
        'United_States',
        'Kobuk_Valley_National_Park'
    ],
    [
        'Kobuk Valley Park and Wilderness, Alaska',
        67.183333,
        -158.766667,
        'Alaska',
        'United_States',
        'Kobuk_Valley_Park_and_Wilderness'
    ],
    [
        'Kodiak, Alaska',
        57.79,
        -152.4072222,
        'Alaska',
        'United_States',
        'Kodiak'
    ],
    [
        'Kotzebue, Alaska',
        66.8983333,
        -162.5966666,
        'Alaska',
        'United_States',
        'Kotzebue'
    ],
    [
        'Lake Clark National Park, Alaska',
        60.966667,
        -153.416667,
        'Alaska',
        'United_States',
        'Lake_Clark_National_Park'
    ],
    [
        'Lake Clark National Preserve, Alaska',
        60.4300173,
        -154.3031838,
        'Alaska',
        'United_States',
        'Lake_Clark_National_Preserve'
    ],
    [
        'Lake Clark Park and Wilderness, Alaska',
        60.6362563,
        -153.3401011,
        'Alaska',
        'United_States',
        'Lake_Clark_Park_and_Wilderness'
    ],
    [
        'Lake Clark Preserve and Wilderness, Alaska',
        61.2143305,
        -153.4986237,
        'Alaska',
        'United_States',
        'Lake_Clark_Preserve_and_Wilderness'
    ],
    [
        'Naknek, Alaska',
        58.7283333,
        -157.0138889,
        'Alaska',
        'United_States',
        'Naknek'
    ],
    [
        'Noatak National Preserve, Alaska',
        67.6448536,
        -162.1650466,
        'Alaska',
        'United_States',
        'Noatak_National_Preserve'
    ],
    [
        'Noatak Preserve and Wilderness, Alaska',
        67.5711111,
        -162.9652778,
        'Alaska',
        'United_States',
        'Noatak_Preserve_and_Wilderness'
    ],
    [
        'Nome, Alaska',
        64.5011111,
        -165.4063889,
        'Alaska',
        'United_States',
        'Nome'
    ],
    [
        'Palmer, Alaska',
        61.5997222,
        -149.1127778,
        'Alaska',
        'United_States',
        'Palmer'
    ],
    [
        'Petersburg, Alaska',
        56.8125,
        -132.9555556,
        'Alaska',
        'United_States',
        'Petersburg'
    ],
    [
        'Sand Point, Alaska',
        55.3397222,
        -160.4972222,
        'Alaska',
        'United_States',
        'Sand_Point'
    ],
    [
        'Sitka National Historical Park, Alaska',
        57.0489284,
        -135.3159066,
        'Alaska',
        'United_States',
        'Sitka_National_Historical_Park'
    ],
    [
        'Skagway, Alaska',
        59.4583333,
        -135.3138889,
        'Alaska',
        'United_States',
        'Skagway'
    ],
    [
        'Soldotna, Alaska',
        60.4877778,
        -151.0583332,
        'Alaska',
        'United_States',
        'Soldotna'
    ],
    [
        'Sterling, Alaska',
        60.5372222,
        -150.7647222,
        'Alaska',
        'United_States',
        'Sterling'
    ],
    [
        'Wrangell St Elias National Park, Alaska',
        61.7104448,
        -142.9856804,
        'Alaska',
        'United_States',
        'Wrangell_St_Elias_National_Park'
    ],
    [
        'Wrangell St Elias Park and Wilderness, Alaska',
        61.266667,
        -141.6,
        'Alaska',
        'United_States',
        'Wrangell_St_Elias_Park_and_Wilderness'
    ],
    [
        'Wrangell St Elias Preserve and Wilderness, Alaska',
        61.0,
        -142.0,
        'Alaska',
        'United_States',
        'Wrangell_St_Elias_Preserve_and_Wilderness'
    ],
    [
        'Yakutat, Alaska',
        59.5469444,
        -139.7272222,
        'Alaska',
        'United_States',
        'Yakutat'
    ],
    [
        'Yukon Charley Rivers National Preserve, Alaska',
        64.9715824,
        -143.290758,
        'Alaska',
        'United_States',
        'Yukon_Charley_Rivers_National_Preserve'
    ],
    [
        'National Park of American Samoa, American Samoa',
        -14.243,
        -169.4362,
        'American_Samoa',
        'United_States',
        'National_Park_of_American_Samoa'
    ],
    [
        'Benson, Arizona',
        31.9678611,
        -110.2945174,
        'Arizona',
        'United_States',
        'Benson'
    ],
    [
        'Bisbee, Arizona',
        31.4481547,
        -109.9284084,
        'Arizona',
        'United_States',
        'Bisbee'
    ],
    [
        'Bullhead City, Arizona',
        35.1359386,
        -114.5285981,
        'Arizona',
        'United_States',
        'Bullhead_City'
    ],
    [
        'Camp Verde, Arizona',
        34.5636358,
        -111.8543178,
        'Arizona',
        'United_States',
        'Camp_Verde'
    ],
    [
        'Canyon de Chelly National Monument, Arizona',
        36.1336111,
        -109.4694444,
        'Arizona',
        'United_States',
        'Canyon_de_Chelly_National_Monument'
    ],
    [
        'Casa Grande, Arizona',
        32.8795022,
        -111.7573521,
        'Arizona',
        'United_States',
        'Casa_Grande'
    ],
    [
        'Casa Grande Ruins National Monument, Arizona',
        32.9954589,
        -111.5355282,
        'Arizona',
        'United_States',
        'Casa_Grande_Ruins_National_Monument'
    ],
    [
        'Chiricahua National Monument, Arizona',
        32.0031812,
        -109.3523656,
        'Arizona',
        'United_States',
        'Chiricahua_National_Monument'
    ],
    [
        'Clifton, Arizona',
        33.0508966,
        -109.2961826,
        'Arizona',
        'United_States',
        'Clifton'
    ],
    [
        'Coronado National Memorial, Arizona',
        31.3461028,
        -110.2532332,
        'Arizona',
        'United_States',
        'Coronado_National_Memorial'
    ],
    [
        'Douglas, Arizona',
        31.3445471,
        -109.5453447,
        'Arizona',
        'United_States',
        'Douglas'
    ],
    [
        'Flagstaff, Arizona',
        35.1982836,
        -111.651302,
        'Arizona',
        'United_States',
        'Flagstaff'
    ],
    [
        'Florence, Arizona',
        33.0314508,
        -111.3873431,
        'Arizona',
        'United_States',
        'Florence'
    ],
    [
        'Fort Bowie National Historic Site, Arizona',
        32.156556,
        -109.452661,
        'Arizona',
        'United_States',
        'Fort_Bowie_National_Historic_Site'
    ],
    [
        'Globe, Arizona',
        33.3942223,
        -110.7864984,
        'Arizona',
        'United_States',
        'Globe'
    ],
    [
        'Grand Canyon National Park, Arizona',
        36.1069652,
        -112.1129972,
        'Arizona',
        'United_States',
        'Grand_Canyon_National_Park'
    ],
    [
        'Green Valley, Arizona',
        31.8542511,
        -110.9937019,
        'Arizona',
        'United_States',
        'Green_Valley'
    ],
    [
        'Hohokam Pima National Monument, Arizona',
        33.1872,
        -111.9198,
        'Arizona',
        'United_States',
        'Hohokam_Pima_National_Monument'
    ],
    [
        'Holbrook, Arizona',
        34.9022482,
        -110.1581768,
        'Arizona',
        'United_States',
        'Holbrook'
    ],
    [
        'Hubbell Trading Post National Historic Site, Arizona',
        35.7094554,
        -109.5584754,
        'Arizona',
        'United_States',
        'Hubbell_Trading_Post_National_Historic_Site'
    ],
    [
        'Kingman, Arizona',
        35.189443,
        -114.0530065,
        'Arizona',
        'United_States',
        'Kingman'
    ],
    [
        'Lake Havasu City, Arizona',
        34.483901,
        -114.3224548,
        'Arizona',
        'United_States',
        'Lake_Havasu_City'
    ],
    [
        'Lake Mead National Recreation Area, Arizona',
        36.0973319,
        -114.4250949,
        'Arizona',
        'United_States',
        'Lake_Mead_National_Recreation_Area'
    ],
    [
        'Mesa, Arizona',
        33.4151843,
        -111.8314724,
        'Arizona',
        'United_States',
        'Mesa'
    ],
    [
        'Montezuma Castle National Monument, Arizona',
        34.6115755,
        -111.8349854,
        'Arizona',
        'United_States',
        'Montezuma_Castle_National_Monument'
    ],
    [
        'Navajo National Monument, Arizona',
        36.681999,
        -110.5328509,
        'Arizona',
        'United_States',
        'Navajo_National_Monument'
    ],
    [
        'Nogales, Arizona',
        31.3403775,
        -110.9342532,
        'Arizona',
        'United_States',
        'Nogales'
    ],
    [
        'Organ Pipe Cactus National Monument, Arizona',
        32.0877596,
        -112.9058802,
        'Arizona',
        'United_States',
        'Organ_Pipe_Cactus_National_Monument'
    ],
    [
        'Page, Arizona',
        36.9147222,
        -111.4558333,
        'Arizona',
        'United_States',
        'Page'
    ],
    [
        'Palominas, Arizona',
        31.3798232,
        -110.1184106,
        'Arizona',
        'United_States',
        'Palominas'
    ],
    [
        'Parker, Arizona',
        34.1500162,
        -114.2891177,
        'Arizona',
        'United_States',
        'Parker'
    ],
    [
        'Payson, Arizona',
        34.2308684,
        -111.3251355,
        'Arizona',
        'United_States',
        'Payson'
    ],
    [
        'Petrified Forest National Park, Arizona',
        35.065931,
        -109.78204,
        'Arizona',
        'United_States',
        'Petrified_Forest_National_Park'
    ],
    [
        'Phoenix, Arizona',
        33.4483771,
        -112.0740373,
        'Arizona',
        'United_States',
        'Phoenix'
    ],
    [
        'Pipe Spring National Monument, Arizona',
        36.8628913,
        -112.7397318,
        'Arizona',
        'United_States',
        'Pipe_Spring_National_Monument'
    ],
    [
        'Prescott, Arizona',
        34.5400242,
        -112.4685025,
        'Arizona',
        'United_States',
        'Prescott'
    ],
    [
        'Safford, Arizona',
        32.8339546,
        -109.70758,
        'Arizona',
        'United_States',
        'Safford'
    ],
    [
        'Saguaro National Park, Arizona',
        32.25,
        -110.5,
        'Arizona',
        'United_States',
        'Saguaro_National_Park'
    ],
    [
        'Scottsdale, Arizona',
        33.4941704,
        -111.9260519,
        'Arizona',
        'United_States',
        'Scottsdale'
    ],
    [
        'Sedona, Arizona',
        34.8697395,
        -111.7609896,
        'Arizona',
        'United_States',
        'Sedona'
    ],
    [
        'Sierra Vista, Arizona',
        31.5455001,
        -110.2772856,
        'Arizona',
        'United_States',
        'Sierra_Vista'
    ],
    [
        'Springerville, Arizona',
        34.1333799,
        -109.2859196,
        'Arizona',
        'United_States',
        'Springerville'
    ],
    [
        'St Johns, Arizona',
        34.5058698,
        -109.3609327,
        'Arizona',
        'United_States',
        'St_Johns'
    ],
    [
        'Sunset Crater Volcano National Monument, Arizona',
        35.3633485,
        -111.5027331,
        'Arizona',
        'United_States',
        'Sunset_Crater_Volcano_National_Monument'
    ],
    [
        'Tempe, Arizona',
        33.4255104,
        -111.9400054,
        'Arizona',
        'United_States',
        'Tempe'
    ],
    [
        'Tonto National Monument, Arizona',
        33.6452781,
        -111.1126846,
        'Arizona',
        'United_States',
        'Tonto_National_Monument'
    ],
    [
        'Tucson, Arizona',
        32.2217429,
        -110.926479,
        'Arizona',
        'United_States',
        'Tucson'
    ],
    [
        'Tumacacori National Historical Park, Arizona',
        31.5678197,
        -111.0510277,
        'Arizona',
        'United_States',
        'Tumacacori_National_Historical_Park'
    ],
    [
        'Tuzigoot National Monument, Arizona',
        34.772827,
        -112.0293132,
        'Arizona',
        'United_States',
        'Tuzigoot_National_Monument'
    ],
    [
        'Walnut Canyon National Monument, Arizona',
        35.171558,
        -111.509362,
        'Arizona',
        'United_States',
        'Walnut_Canyon_National_Monument'
    ],
    [
        'Winslow, Arizona',
        35.0241873,
        -110.6973571,
        'Arizona',
        'United_States',
        'Winslow'
    ],
    [
        'Wupatki National Monument, Arizona',
        35.519932,
        -111.371154,
        'Arizona',
        'United_States',
        'Wupatki_National_Monument'
    ],
    [
        'Yuma, Arizona',
        32.6926512,
        -114.6276916,
        'Arizona',
        'United_States',
        'Yuma'
    ],
    [
        'Alexander, Arkansas',
        34.6295373,
        -92.4412674,
        'Arkansas',
        'United_States',
        'Alexander'
    ],
    [
        'Arkadelphia, Arkansas',
        34.1209292,
        -93.0537839,
        'Arkansas',
        'United_States',
        'Arkadelphia'
    ],
    [
        'Arkansas City, Arkansas',
        33.6087222,
        -91.2067794,
        'Arkansas',
        'United_States',
        'Arkansas_City'
    ],
    [
        'Arkansas Post National Memorial, Arkansas',
        34.0205702,
        -91.3493356,
        'Arkansas',
        'United_States',
        'Arkansas_Post_National_Memorial'
    ],
    [
        'Ashdown, Arkansas',
        33.6742867,
        -94.1313054,
        'Arkansas',
        'United_States',
        'Ashdown'
    ],
    [
        'Ash Flat, Arkansas',
        36.2239566,
        -91.6084751,
        'Arkansas',
        'United_States',
        'Ash_Flat'
    ],
    [
        'Augusta, Arkansas',
        35.2823079,
        -91.3654063,
        'Arkansas',
        'United_States',
        'Augusta'
    ],
    [
        'Batesville, Arkansas',
        35.769799,
        -91.6409721,
        'Arkansas',
        'United_States',
        'Batesville'
    ],
    [
        'Benton, Arkansas',
        34.5645371,
        -92.586828,
        'Arkansas',
        'United_States',
        'Benton'
    ],
    [
        'Bentonville, Arkansas',
        36.3728538,
        -94.2088172,
        'Arkansas',
        'United_States',
        'Bentonville'
    ],
    [
        'Berryville, Arkansas',
        36.364792,
        -93.5679667,
        'Arkansas',
        'United_States',
        'Berryville'
    ],
    [
        'Blytheville, Arkansas',
        35.9272953,
        -89.9189753,
        'Arkansas',
        'United_States',
        'Blytheville'
    ],
    [
        'Booneville, Arkansas',
        35.140093,
        -93.9215909,
        'Arkansas',
        'United_States',
        'Booneville'
    ],
    [
        'Buffalo National River, Arkansas',
        35.979665,
        -92.7558261,
        'Arkansas',
        'United_States',
        'Buffalo_National_River'
    ],
    [
        'Cabot, Arkansas',
        34.974532,
        -92.0165336,
        'Arkansas',
        'United_States',
        'Cabot'
    ],
    [
        'Camden, Arkansas',
        33.5845581,
        -92.8343294,
        'Arkansas',
        'United_States',
        'Camden'
    ],
    [
        'Clarendon, Arkansas',
        34.6931517,
        -91.313737,
        'Arkansas',
        'United_States',
        'Clarendon'
    ],
    [
        'Clarksville, Arkansas',
        35.4714724,
        -93.4665731,
        'Arkansas',
        'United_States',
        'Clarksville'
    ],
    [
        'Clinton, Arkansas',
        35.5914665,
        -92.4604361,
        'Arkansas',
        'United_States',
        'Clinton'
    ],
    [
        'Conway, Arkansas',
        35.0886963,
        -92.4421011,
        'Arkansas',
        'United_States',
        'Conway'
    ],
    [
        'Danville, Arkansas',
        35.0539792,
        -93.3935185,
        'Arkansas',
        'United_States',
        'Danville'
    ],
    [
        'Des Arc, Arkansas',
        34.9770353,
        -91.4951307,
        'Arkansas',
        'United_States',
        'Des_Arc'
    ],
    [
        'De Queen, Arkansas',
        34.0378916,
        -94.3413168,
        'Arkansas',
        'United_States',
        'De_Queen'
    ],
    [
        'El Dorado, Arkansas',
        33.20763,
        -92.6662674,
        'Arkansas',
        'United_States',
        'El_Dorado'
    ],
    [
        'Fayetteville, Arkansas',
        36.0625795,
        -94.1574263,
        'Arkansas',
        'United_States',
        'Fayetteville'
    ],
    [
        'Fordyce, Arkansas',
        33.8137161,
        -92.4129303,
        'Arkansas',
        'United_States',
        'Fordyce'
    ],
    [
        'Forrest City, Arkansas',
        35.0081474,
        -90.7898342,
        'Arkansas',
        'United_States',
        'Forrest_City'
    ],
    [
        'Fort Smith, Arkansas',
        35.3859242,
        -94.3985475,
        'Arkansas',
        'United_States',
        'Fort_Smith'
    ],
    [
        'Fort Smith National Historic Site, Arkansas',
        35.3881141,
        -94.4299203,
        'Arkansas',
        'United_States',
        'Fort_Smith_National_Historic_Site'
    ],
    [
        'Hamburg, Arkansas',
        33.2281757,
        -91.7976285,
        'Arkansas',
        'United_States',
        'Hamburg'
    ],
    [
        'Hampton, Arkansas',
        33.537892,
        -92.4698762,
        'Arkansas',
        'United_States',
        'Hampton'
    ],
    [
        'Hardy, Arkansas',
        36.3158994,
        -91.4826388,
        'Arkansas',
        'United_States',
        'Hardy'
    ],
    [
        'Harrisburg, Arkansas',
        35.5642471,
        -90.7167786,
        'Arkansas',
        'United_States',
        'Harrisburg'
    ],
    [
        'Harrison, Arkansas',
        36.2297936,
        -93.1076765,
        'Arkansas',
        'United_States',
        'Harrison'
    ],
    [
        'Hatfield, Arkansas',
        34.485662,
        -94.378547,
        'Arkansas',
        'United_States',
        'Hatfield'
    ],
    [
        'Heber Springs, Arkansas',
        35.4914677,
        -92.03126,
        'Arkansas',
        'United_States',
        'Heber_Springs'
    ],
    [
        'Helena, Arkansas',
        34.5291253,
        -90.5900273,
        'Arkansas',
        'United_States',
        'Helena'
    ],
    [
        'Hickory Ridge, Arkansas',
        35.3973062,
        -90.9965085,
        'Arkansas',
        'United_States',
        'Hickory_Ridge'
    ],
    [
        'Hope, Arkansas',
        33.6670615,
        -93.5915665,
        'Arkansas',
        'United_States',
        'Hope'
    ],
    [
        'Hot Springs, Arkansas',
        34.5037004,
        -93.0551795,
        'Arkansas',
        'United_States',
        'Hot_Springs'
    ],
    [
        'Hot Springs National Park, Arkansas',
        34.5313219,
        -93.0637411,
        'Arkansas',
        'United_States',
        'Hot_Springs_National_Park'
    ],
    [
        'Huntsville, Arkansas',
        36.086187,
        -93.7413032,
        'Arkansas',
        'United_States',
        'Huntsville'
    ],
    [
        'Jasper, Arkansas',
        36.0081324,
        -93.1865659,
        'Arkansas',
        'United_States',
        'Jasper'
    ],
    [
        'Jonesboro, Arkansas',
        35.8422967,
        -90.704279,
        'Arkansas',
        'United_States',
        'Jonesboro'
    ],
    [
        'Lake Village, Arkansas',
        33.3314091,
        -91.2842212,
        'Arkansas',
        'United_States',
        'Lake_Village'
    ],
    [
        'Lewisville, Arkansas',
        33.3584583,
        -93.5776771,
        'Arkansas',
        'United_States',
        'Lewisville'
    ],
    [
        'Little Rock, Arkansas',
        34.7464809,
        -92.2895948,
        'Arkansas',
        'United_States',
        'Little_Rock'
    ],
    [
        'Little Rock Central High School National Historic Site, Arkansas',
        34.737,
        -92.3001,
        'Arkansas',
        'United_States',
        'Little_Rock_Central_High_School_National_Historic_Site'
    ],
    [
        'Lonoke, Arkansas',
        34.7839795,
        -91.8998611,
        'Arkansas',
        'United_States',
        'Lonoke'
    ],
    [
        'Magnolia, Arkansas',
        33.2670725,
        -93.239334,
        'Arkansas',
        'United_States',
        'Magnolia'
    ],
    [
        'Malvern, Arkansas',
        34.3623149,
        -92.8129462,
        'Arkansas',
        'United_States',
        'Malvern'
    ],
    [
        'Marianna, Arkansas',
        34.7737082,
        -90.7576112,
        'Arkansas',
        'United_States',
        'Marianna'
    ],
    [
        'Marion, Arkansas',
        35.2145336,
        -90.1964835,
        'Arkansas',
        'United_States',
        'Marion'
    ],
    [
        'Marshall, Arkansas',
        35.9089643,
        -92.6312746,
        'Arkansas',
        'United_States',
        'Marshall'
    ],
    [
        'Melbourne, Arkansas',
        36.0595148,
        -91.9084819,
        'Arkansas',
        'United_States',
        'Melbourne'
    ],
    [
        'Mena, Arkansas',
        34.5862171,
        -94.2396554,
        'Arkansas',
        'United_States',
        'Mena'
    ],
    [
        'Monticello, Arkansas',
        33.6289974,
        -91.7909639,
        'Arkansas',
        'United_States',
        'Monticello'
    ],
    [
        'Morrilton, Arkansas',
        35.1509173,
        -92.7440538,
        'Arkansas',
        'United_States',
        'Morrilton'
    ],
    [
        'Mountain Home, Arkansas',
        36.3353949,
        -92.381346,
        'Arkansas',
        'United_States',
        'Mountain_Home'
    ],
    [
        'Mountain View, Arkansas',
        35.8684075,
        -92.1176521,
        'Arkansas',
        'United_States',
        'Mountain_View'
    ],
    [
        'Mount Ida, Arkansas',
        34.5567637,
        -93.6340814,
        'Arkansas',
        'United_States',
        'Mount_Ida'
    ],
    [
        'Murfreesboro, Arkansas',
        34.0623308,
        -93.6899049,
        'Arkansas',
        'United_States',
        'Murfreesboro'
    ],
    [
        'Nashville, Arkansas',
        33.9456692,
        -93.847129,
        'Arkansas',
        'United_States',
        'Nashville'
    ],
    [
        'Newport, Arkansas',
        35.6048018,
        -91.2817951,
        'Arkansas',
        'United_States',
        'Newport'
    ],
    [
        'Norman, Arkansas',
        34.4550997,
        -93.6801914,
        'Arkansas',
        'United_States',
        'Norman'
    ],
    [
        'Ozark, Arkansas',
        35.4870295,
        -93.8276965,
        'Arkansas',
        'United_States',
        'Ozark'
    ],
    [
        'Paragould, Arkansas',
        36.0584021,
        -90.4973286,
        'Arkansas',
        'United_States',
        'Paragould'
    ],
    [
        'Pea Ridge National Military Park, Arkansas',
        36.4437655,
        -94.025807,
        'Arkansas',
        'United_States',
        'Pea_Ridge_National_Military_Park'
    ],
    [
        'Perryville, Arkansas',
        35.0048102,
        -92.8026673,
        'Arkansas',
        'United_States',
        'Perryville'
    ],
    [
        'Piggot, Arkansas',
        36.382839,
        -90.1906542,
        'Arkansas',
        'United_States',
        'Piggot'
    ],
    [
        'Pine Bluff, Arkansas',
        34.2284312,
        -92.0031955,
        'Arkansas',
        'United_States',
        'Pine_Bluff'
    ],
    [
        'Pocahontas, Arkansas',
        36.2614554,
        -90.971233,
        'Arkansas',
        'United_States',
        'Pocahontas'
    ],
    [
        'Prescott, Arkansas',
        33.8026107,
        -93.3810057,
        'Arkansas',
        'United_States',
        'Prescott'
    ],
    [
        'Ralph, Arkansas',
        36.1239491,
        -90.511255,
        'Arkansas',
        'United_States',
        'Ralph'
    ],
    [
        'Rector, Arkansas',
        36.2631185,
        -90.2926008,
        'Arkansas',
        'United_States',
        'Rector'
    ],
    [
        'Rison, Arkansas',
        33.9584347,
        -92.1901454,
        'Arkansas',
        'United_States',
        'Rison'
    ],
    [
        'Rogers, Arkansas',
        36.3320196,
        -94.1185366,
        'Arkansas',
        'United_States',
        'Rogers'
    ],
    [
        'Russellville, Arkansas',
        35.2784173,
        -93.1337856,
        'Arkansas',
        'United_States',
        'Russellville'
    ],
    [
        'Salem, Arkansas',
        36.3711763,
        -91.8226479,
        'Arkansas',
        'United_States',
        'Salem'
    ],
    [
        'Searcy, Arkansas',
        35.2468204,
        -91.7336846,
        'Arkansas',
        'United_States',
        'Searcy'
    ],
    [
        'Sheridan, Arkansas',
        34.3070406,
        -92.4012654,
        'Arkansas',
        'United_States',
        'Sheridan'
    ],
    [
        'Siloam Springs, Arkansas',
        36.1881365,
        -94.5404962,
        'Arkansas',
        'United_States',
        'Siloam_Springs'
    ],
    [
        'Springdale, Arkansas',
        36.1867442,
        -94.1288141,
        'Arkansas',
        'United_States',
        'Springdale'
    ],
    [
        'Star City, Arkansas',
        33.9428794,
        -91.8434668,
        'Arkansas',
        'United_States',
        'Star_City'
    ],
    [
        'Stuttgart, Arkansas',
        34.5003748,
        -91.5526281,
        'Arkansas',
        'United_States',
        'Stuttgart'
    ],
    [
        'Texarkana, Arkansas',
        33.4417915,
        -94.0376881,
        'Arkansas',
        'United_States',
        'Texarkana'
    ],
    [
        'Van Bruen, Arkansas',
        35.436756,
        -94.348268,
        'Arkansas',
        'United_States',
        'Van_Bruen'
    ],
    [
        'Waldron, Arkansas',
        34.8984323,
        -94.0907634,
        'Arkansas',
        'United_States',
        'Waldron'
    ],
    [
        'Walnut Rdige, Arkansas',
        36.0684035,
        -90.9559534,
        'Arkansas',
        'United_States',
        'Walnut_Rdige'
    ],
    [
        'Warren, Arkansas',
        33.6126086,
        -92.064583,
        'Arkansas',
        'United_States',
        'Warren'
    ],
    [
        'Wynne, Arkansas',
        35.224533,
        -90.7867798,
        'Arkansas',
        'United_States',
        'Wynne'
    ],
    [
        'Yellville, Arkansas',
        36.2261815,
        -92.6848876,
        'Arkansas',
        'United_States',
        'Yellville'
    ],
    [
        'Alameda, California',
        37.7652065,
        -122.2416355,
        'California',
        'United_States',
        'Alameda'
    ],
    [
        'Alturas, California',
        41.4871146,
        -120.5424555,
        'California',
        'United_States',
        'Alturas'
    ],
    [
        'Ames Research Center, California',
        37.4271813,
        -122.0619054,
        'California',
        'United_States',
        'Ames_Research_Center'
    ],
    [
        'Anaheim, California',
        33.8352932,
        -117.9145036,
        'California',
        'United_States',
        'Anaheim'
    ],
    [
        'Antioch, California',
        38.0049214,
        -121.805789,
        'California',
        'United_States',
        'Antioch'
    ],
    [
        'Apple Valley, California',
        34.5008311,
        -117.1858759,
        'California',
        'United_States',
        'Apple_Valley'
    ],
    [
        'Armstrong Flight Research Center, California',
        34.9507,
        -117.8865,
        'California',
        'United_States',
        'Armstrong_Flight_Research_Center'
    ],
    [
        'Arnold, California',
        38.2554729,
        -120.3510307,
        'California',
        'United_States',
        'Arnold'
    ],
    [
        'Atascadero, California',
        35.4894169,
        -120.6707255,
        'California',
        'United_States',
        'Atascadero'
    ],
    [
        'Auburn, California',
        38.8965654,
        -121.0768901,
        'California',
        'United_States',
        'Auburn'
    ],
    [
        'Bakersfield, California',
        35.3732921,
        -119.0187125,
        'California',
        'United_States',
        'Bakersfield'
    ],
    [
        'Baldwin Park, California',
        34.0852868,
        -117.9608978,
        'California',
        'United_States',
        'Baldwin_Park'
    ],
    [
        'Banta, California',
        37.7543731,
        -121.3707773,
        'California',
        'United_States',
        'Banta'
    ],
    [
        'Barstow, California',
        34.8957957,
        -117.0172826,
        'California',
        'United_States',
        'Barstow'
    ],
    [
        'Benicia, California',
        38.049365,
        -122.1585777,
        'California',
        'United_States',
        'Benicia'
    ],
    [
        'Berkeley, California',
        37.8715926,
        -122.272747,
        'California',
        'United_States',
        'Berkeley'
    ],
    [
        'Bishop, California',
        37.3614238,
        -118.3996636,
        'California',
        'United_States',
        'Bishop'
    ],
    [
        'Blythe, California',
        33.6177725,
        -114.5882607,
        'California',
        'United_States',
        'Blythe'
    ],
    [
        'Brea, California',
        33.9166805,
        -117.9000604,
        'California',
        'United_States',
        'Brea'
    ],
    [
        'Brentwood, California',
        37.931868,
        -121.6957863,
        'California',
        'United_States',
        'Brentwood'
    ],
    [
        'Bridgeport, California',
        38.2557045,
        -119.2313932,
        'California',
        'United_States',
        'Bridgeport'
    ],
    [
        'Burbank, California',
        34.1808392,
        -118.3089661,
        'California',
        'United_States',
        'Burbank'
    ],
    [
        'Cabrillo National Monument, California',
        32.6735426,
        -117.2425191,
        'California',
        'United_States',
        'Cabrillo_National_Monument'
    ],
    [
        'Camarillo, California',
        34.2163937,
        -119.0376023,
        'California',
        'United_States',
        'Camarillo'
    ],
    [
        'Cameron Park, California',
        38.6687929,
        -120.9871643,
        'California',
        'United_States',
        'Cameron_Park'
    ],
    [
        'Campbell, California',
        37.2871651,
        -121.9499568,
        'California',
        'United_States',
        'Campbell'
    ],
    [
        'Canoga Park, California',
        34.208254,
        -118.6058609,
        'California',
        'United_States',
        'Canoga_Park'
    ],
    [
        'Capitola, California',
        36.9752283,
        -121.953293,
        'California',
        'United_States',
        'Capitola'
    ],
    [
        'Carlsbad, California',
        33.1580933,
        -117.3505939,
        'California',
        'United_States',
        'Carlsbad'
    ],
    [
        'Castro Valley, California',
        37.6940973,
        -122.0863522,
        'California',
        'United_States',
        'Castro_Valley'
    ],
    [
        'Catheys Valley, California',
        37.4319861,
        -120.0985207,
        'California',
        'United_States',
        'Catheys_Valley'
    ],
    [
        'Channel Islands National Park, California',
        33.9960737,
        -119.7691632,
        'California',
        'United_States',
        'Channel_Islands_National_Park'
    ],
    [
        'Chico, California',
        39.7284944,
        -121.8374777,
        'California',
        'United_States',
        'Chico'
    ],
    [
        'China Lake, California',
        35.6507888,
        -117.66173,
        'California',
        'United_States',
        'China_Lake'
    ],
    [
        'Chino Hills, California',
        33.9898188,
        -117.7325848,
        'California',
        'United_States',
        'Chino_Hills'
    ],
    [
        'Citrus Heights, California',
        38.7071247,
        -121.2810611,
        'California',
        'United_States',
        'Citrus_Heights'
    ],
    [
        'Claremont, California',
        34.0966764,
        -117.7197785,
        'California',
        'United_States',
        'Claremont'
    ],
    [
        'Clearlake, California',
        38.9582307,
        -122.6263728,
        'California',
        'United_States',
        'Clearlake'
    ],
    [
        'Cloverdale, California',
        38.8054624,
        -123.0172227,
        'California',
        'United_States',
        'Cloverdale'
    ],
    [
        'Clovis, California',
        36.8252277,
        -119.7029194,
        'California',
        'United_States',
        'Clovis'
    ],
    [
        'Coalinga, California',
        36.139678,
        -120.3601496,
        'California',
        'United_States',
        'Coalinga'
    ],
    [
        'Colusa, California',
        39.2143343,
        -122.0094175,
        'California',
        'United_States',
        'Colusa'
    ],
    [
        'Concord, California',
        37.9779776,
        -122.0310733,
        'California',
        'United_States',
        'Concord'
    ],
    [
        'Corona, California',
        33.8752935,
        -117.5664384,
        'California',
        'United_States',
        'Corona'
    ],
    [
        'Coronado, California',
        32.6858853,
        -117.1830891,
        'California',
        'United_States',
        'Coronado'
    ],
    [
        'Costa Mesa, California',
        33.6411316,
        -117.9186689,
        'California',
        'United_States',
        'Costa_Mesa'
    ],
    [
        'Cotati, California',
        38.3293416,
        -122.7096666,
        'California',
        'United_States',
        'Cotati'
    ],
    [
        'Crescent City, California',
        41.7557501,
        -124.2025913,
        'California',
        'United_States',
        'Crescent_City'
    ],
    [
        'Cupertino, California',
        37.3229978,
        -122.0321823,
        'California',
        'United_States',
        'Cupertino'
    ],
    [
        'Dana Point, California',
        33.4669721,
        -117.6981075,
        'California',
        'United_States',
        'Dana_Point'
    ],
    [
        'Davis, California',
        38.5449065,
        -121.7405167,
        'California',
        'United_States',
        'Davis'
    ],
    [
        'Death Valley National Park, California',
        36.5053891,
        -117.0794078,
        'California',
        'United_States',
        'Death_Valley_National_Park'
    ],
    [
        'Desert Hot Springs, California',
        33.961124,
        -116.5016784,
        'California',
        'United_States',
        'Desert_Hot_Springs'
    ],
    [
        'Devils Postpile National Monument, California',
        37.6250936,
        -119.084908,
        'California',
        'United_States',
        'Devils_Postpile_National_Monument'
    ],
    [
        'Downey, California',
        33.9401088,
        -118.1331593,
        'California',
        'United_States',
        'Downey'
    ],
    [
        'Downieville, California',
        39.5595198,
        -120.8276966,
        'California',
        'United_States',
        'Downieville'
    ],
    [
        'Edwards AFB, California',
        34.9240314,
        -117.8912085,
        'California',
        'United_States',
        'Edwards_AFB'
    ],
    [
        'El Centro, California',
        32.792,
        -115.5630514,
        'California',
        'United_States',
        'El_Centro'
    ],
    [
        'El Portal, California',
        37.6746514,
        -119.7840609,
        'California',
        'United_States',
        'El_Portal'
    ],
    [
        'El Segundo, California',
        33.9191799,
        -118.4164652,
        'California',
        'United_States',
        'El_Segundo'
    ],
    [
        'Encinitas, California',
        33.0369867,
        -117.2919818,
        'California',
        'United_States',
        'Encinitas'
    ],
    [
        'Escondido, California',
        33.1192068,
        -117.086421,
        'California',
        'United_States',
        'Escondido'
    ],
    [
        'Eugene ONeill National Historic Site, California',
        37.826009,
        -122.027184,
        'California',
        'United_States',
        'Eugene_ONeill_National_Historic_Site'
    ],
    [
        'Eureka, California',
        40.8020712,
        -124.1636729,
        'California',
        'United_States',
        'Eureka'
    ],
    [
        'Fairfield, California',
        38.2493581,
        -122.0399663,
        'California',
        'United_States',
        'Fairfield'
    ],
    [
        'Ferndale, California',
        40.5762406,
        -124.2639442,
        'California',
        'United_States',
        'Ferndale'
    ],
    [
        'Folsom, California',
        38.6779591,
        -121.1760583,
        'California',
        'United_States',
        'Folsom'
    ],
    [
        'Fort Bragg, California',
        39.445723,
        -123.8052935,
        'California',
        'United_States',
        'Fort_Bragg'
    ],
    [
        'Fort Point National Historic Site, California',
        37.8105931,
        -122.4771093,
        'California',
        'United_States',
        'Fort_Point_National_Historic_Site'
    ],
    [
        'Fountain Valley, California',
        33.7091847,
        -117.9536697,
        'California',
        'United_States',
        'Fountain_Valley'
    ],
    [
        'Fremont, California',
        37.5482697,
        -121.9885719,
        'California',
        'United_States',
        'Fremont'
    ],
    [
        'Fresno, California',
        36.7468422,
        -119.7725868,
        'California',
        'United_States',
        'Fresno'
    ],
    [
        'Fullerton, California',
        33.8703596,
        -117.9242966,
        'California',
        'United_States',
        'Fullerton'
    ],
    [
        'Gardena, California',
        33.8883487,
        -118.3089624,
        'California',
        'United_States',
        'Gardena'
    ],
    [
        'Garden Grove, California',
        33.7739053,
        -117.9414477,
        'California',
        'United_States',
        'Garden_Grove'
    ],
    [
        'Gilroy, California',
        37.0057816,
        -121.5682751,
        'California',
        'United_States',
        'Gilroy'
    ],
    [
        'Glendale, California',
        34.1425078,
        -118.255075,
        'California',
        'United_States',
        'Glendale'
    ],
    [
        'Glendora, California',
        34.1361187,
        -117.865339,
        'California',
        'United_States',
        'Glendora'
    ],
    [
        'Golden Gate National Recreation Area, California',
        37.8345025,
        -122.5047923,
        'California',
        'United_States',
        'Golden_Gate_National_Recreation_Area'
    ],
    [
        'Grass Valley, California',
        39.2190608,
        -121.0610606,
        'California',
        'United_States',
        'Grass_Valley'
    ],
    [
        'Half Moon Bay, California',
        37.4635519,
        -122.4285862,
        'California',
        'United_States',
        'Half_Moon_Bay'
    ],
    [
        'Hanford, California',
        36.3274502,
        -119.6456844,
        'California',
        'United_States',
        'Hanford'
    ],
    [
        'Hemet, California',
        33.7475203,
        -116.9719684,
        'California',
        'United_States',
        'Hemet'
    ],
    [
        'Hesperia, California',
        34.4263886,
        -117.3008784,
        'California',
        'United_States',
        'Hesperia'
    ],
    [
        'Highland, California',
        34.1283442,
        -117.2086513,
        'California',
        'United_States',
        'Highland'
    ],
    [
        'Hollister, California',
        36.8524545,
        -121.4016021,
        'California',
        'United_States',
        'Hollister'
    ],
    [
        'Hornbrook, California',
        41.9101394,
        -122.5558584,
        'California',
        'United_States',
        'Hornbrook'
    ],
    [
        'Huntington Beach, California',
        33.660297,
        -117.9992265,
        'California',
        'United_States',
        'Huntington_Beach'
    ],
    [
        'Independence, California',
        36.8027102,
        -118.2000951,
        'California',
        'United_States',
        'Independence'
    ],
    [
        'Inglewood, California',
        33.9616801,
        -118.3531311,
        'California',
        'United_States',
        'Inglewood'
    ],
    [
        'Irvine, California',
        33.6839473,
        -117.7946942,
        'California',
        'United_States',
        'Irvine'
    ],
    [
        'Jackson, California',
        38.3488023,
        -120.7741018,
        'California',
        'United_States',
        'Jackson'
    ],
    [
        'Jamestown, California',
        37.9532584,
        -120.4226952,
        'California',
        'United_States',
        'Jamestown'
    ],
    [
        'Jet Propulsion Lab, California',
        34.1979017,
        -118.1752251,
        'California',
        'United_States',
        'Jet_Propulsion_Lab'
    ],
    [
        'John Muir National Historic Site, California',
        37.9921949,
        -122.1309248,
        'California',
        'United_States',
        'John_Muir_National_Historic_Site'
    ],
    [
        'Joshua Tree National Park, California',
        33.873415,
        -115.9009923,
        'California',
        'United_States',
        'Joshua_Tree_National_Park'
    ],
    [
        'June Lake, California',
        37.7797825,
        -119.0754232,
        'California',
        'United_States',
        'June_Lake'
    ],
    [
        'Kern River Valley, California',
        35.400157,
        -118.9852381,
        'California',
        'United_States',
        'Kern_River_Valley'
    ],
    [
        'Kings Canyon National Park, California',
        36.8878548,
        -118.5551477,
        'California',
        'United_States',
        'Kings_Canyon_National_Park'
    ],
    [
        'Lafayette, California',
        37.8857582,
        -122.1180201,
        'California',
        'United_States',
        'Lafayette'
    ],
    [
        'Laguna Beach, California',
        33.5422475,
        -117.7831104,
        'California',
        'United_States',
        'Laguna_Beach'
    ],
    [
        'Laguna Niguel, California',
        33.5225261,
        -117.7075526,
        'California',
        'United_States',
        'Laguna_Niguel'
    ],
    [
        'Lakeport, California',
        39.0429506,
        -122.9158293,
        'California',
        'United_States',
        'Lakeport'
    ],
    [
        'Lakewood, California',
        33.8536269,
        -118.1339563,
        'California',
        'United_States',
        'Lakewood'
    ],
    [
        'Lake Arrowhead, California',
        34.2483396,
        -117.1892078,
        'California',
        'United_States',
        'Lake_Arrowhead'
    ],
    [
        'Lake Elsinore, California',
        33.6680772,
        -117.3272615,
        'California',
        'United_States',
        'Lake_Elsinore'
    ],
    [
        'Lancaster, California',
        34.6867846,
        -118.1541632,
        'California',
        'United_States',
        'Lancaster'
    ],
    [
        'Lassen Volcanic National Park, California',
        40.49766,
        -121.4206552,
        'California',
        'United_States',
        'Lassen_Volcanic_National_Park'
    ],
    [
        'Lava Beds National Monument, California',
        41.7142224,
        -121.5098159,
        'California',
        'United_States',
        'Lava_Beds_National_Monument'
    ],
    [
        'La Grange, California',
        37.6635433,
        -120.4635289,
        'California',
        'United_States',
        'La_Grange'
    ],
    [
        'La Mesa, California',
        32.7678287,
        -117.0230839,
        'California',
        'United_States',
        'La_Mesa'
    ],
    [
        'La Quinta, California',
        33.6633573,
        -116.3100095,
        'California',
        'United_States',
        'La_Quinta'
    ],
    [
        'La Verne, California',
        34.1008426,
        -117.7678355,
        'California',
        'United_States',
        'La_Verne'
    ],
    [
        'Lemoore, California',
        36.3007835,
        -119.7829107,
        'California',
        'United_States',
        'Lemoore'
    ],
    [
        'Le Grand, California',
        37.228554,
        -120.2482336,
        'California',
        'United_States',
        'Le_Grand'
    ],
    [
        'Livermore, California',
        37.6818745,
        -121.7680088,
        'California',
        'United_States',
        'Livermore'
    ],
    [
        'Lompoc, California',
        34.6391501,
        -120.4579409,
        'California',
        'United_States',
        'Lompoc'
    ],
    [
        'Long Beach, California',
        33.7700504,
        -118.1937395,
        'California',
        'United_States',
        'Long_Beach'
    ],
    [
        'Los Altos, California',
        37.3852183,
        -122.1141298,
        'California',
        'United_States',
        'Los_Altos'
    ],
    [
        'Los Angeles, California',
        34.0522342,
        -118.2436849,
        'California',
        'United_States',
        'Los_Angeles'
    ],
    [
        'Los Gatos, California',
        37.2358078,
        -121.9623751,
        'California',
        'United_States',
        'Los_Gatos'
    ],
    [
        'Madera, California',
        36.9613356,
        -120.0607176,
        'California',
        'United_States',
        'Madera'
    ],
    [
        'Magalia, California',
        39.8121058,
        -121.5783059,
        'California',
        'United_States',
        'Magalia'
    ],
    [
        'Manteca, California',
        37.7974273,
        -121.2160526,
        'California',
        'United_States',
        'Manteca'
    ],
    [
        'Manzanar National Historic Site, California',
        36.7272288,
        -118.1527894,
        'California',
        'United_States',
        'Manzanar_National_Historic_Site'
    ],
    [
        'Marina, California',
        36.6844029,
        -121.802173,
        'California',
        'United_States',
        'Marina'
    ],
    [
        'Mariposa, California',
        37.4849377,
        -119.9662843,
        'California',
        'United_States',
        'Mariposa'
    ],
    [
        'Markleeville, California',
        38.6937227,
        -119.7796826,
        'California',
        'United_States',
        'Markleeville'
    ],
    [
        'Martinez, California',
        38.0193657,
        -122.1341321,
        'California',
        'United_States',
        'Martinez'
    ],
    [
        'Marysville, California',
        39.1457253,
        -121.5913547,
        'California',
        'United_States',
        'Marysville'
    ],
    [
        'Menlo Park, California',
        37.4529598,
        -122.1817252,
        'California',
        'United_States',
        'Menlo_Park'
    ],
    [
        'Mentone, California',
        34.070013,
        -117.1344806,
        'California',
        'United_States',
        'Mentone'
    ],
    [
        'Merced, California',
        37.3021632,
        -120.4829677,
        'California',
        'United_States',
        'Merced'
    ],
    [
        'Mill Valley, California',
        37.9060368,
        -122.5449763,
        'California',
        'United_States',
        'Mill_Valley'
    ],
    [
        'Milpitas, California',
        37.4323341,
        -121.8995741,
        'California',
        'United_States',
        'Milpitas'
    ],
    [
        'Mission Viejo, California',
        33.6000232,
        -117.6719953,
        'California',
        'United_States',
        'Mission_Viejo'
    ],
    [
        'Modesto, California',
        37.6390972,
        -120.9968782,
        'California',
        'United_States',
        'Modesto'
    ],
    [
        'Mojave National Preserve, California',
        35.0109913,
        -115.4733554,
        'California',
        'United_States',
        'Mojave_National_Preserve'
    ],
    [
        'Monrovia, California',
        34.1442616,
        -118.0019482,
        'California',
        'United_States',
        'Monrovia'
    ],
    [
        'Montecito, California',
        34.4366626,
        -119.6320753,
        'California',
        'United_States',
        'Montecito'
    ],
    [
        'Monterey, California',
        36.6002378,
        -121.8946761,
        'California',
        'United_States',
        'Monterey'
    ],
    [
        'Moreno Valley, California',
        33.9424658,
        -117.2296717,
        'California',
        'United_States',
        'Moreno_Valley'
    ],
    [
        'Moss Beach, California',
        37.5274401,
        -122.5133117,
        'California',
        'United_States',
        'Moss_Beach'
    ],
    [
        'Mountain View, California',
        37.3860517,
        -122.0838511,
        'California',
        'United_States',
        'Mountain_View'
    ],
    [
        'Mount Baldy, California',
        34.2363809,
        -117.6589752,
        'California',
        'United_States',
        'Mount_Baldy'
    ],
    [
        'Mount Shasta, California',
        41.3098746,
        -122.3105666,
        'California',
        'United_States',
        'Mount_Shasta'
    ],
    [
        'Muir Woods National Monument, California',
        37.8953689,
        -122.5780709,
        'California',
        'United_States',
        'Muir_Woods_National_Monument'
    ],
    [
        'Murrieta, California',
        33.5539143,
        -117.2139232,
        'California',
        'United_States',
        'Murrieta'
    ],
    [
        'Napa, California',
        38.2975381,
        -122.286865,
        'California',
        'United_States',
        'Napa'
    ],
    [
        'Nevada City, California',
        39.2615606,
        -121.0160594,
        'California',
        'United_States',
        'Nevada_City'
    ],
    [
        'Newark, California',
        37.5296593,
        -122.0402399,
        'California',
        'United_States',
        'Newark'
    ],
    [
        'Newport Beach, California',
        33.6189101,
        -117.9289469,
        'California',
        'United_States',
        'Newport_Beach'
    ],
    [
        'Nipomo, California',
        35.0427547,
        -120.4759986,
        'California',
        'United_States',
        'Nipomo'
    ],
    [
        'Norco, California',
        33.9311257,
        -117.548661,
        'California',
        'United_States',
        'Norco'
    ],
    [
        'Northridge, California',
        34.2381251,
        -118.530123,
        'California',
        'United_States',
        'Northridge'
    ],
    [
        'North Hollywood, California',
        34.187044,
        -118.3812562,
        'California',
        'United_States',
        'North_Hollywood'
    ],
    [
        'Novato, California',
        38.1074198,
        -122.5697032,
        'California',
        'United_States',
        'Novato'
    ],
    [
        'Oakland, California',
        37.8043637,
        -122.2711137,
        'California',
        'United_States',
        'Oakland'
    ],
    [
        'Oak View, California',
        34.399996,
        -119.3001134,
        'California',
        'United_States',
        'Oak_View'
    ],
    [
        'Oceanside, California',
        33.1958696,
        -117.3794834,
        'California',
        'United_States',
        'Oceanside'
    ],
    [
        'Ojai, California',
        34.4480495,
        -119.242889,
        'California',
        'United_States',
        'Ojai'
    ],
    [
        'Ontario, California',
        34.0633443,
        -117.6508876,
        'California',
        'United_States',
        'Ontario'
    ],
    [
        'Orange, California',
        33.7877944,
        -117.8531119,
        'California',
        'United_States',
        'Orange'
    ],
    [
        'Orangevale, California',
        38.6785145,
        -121.2257818,
        'California',
        'United_States',
        'Orangevale'
    ],
    [
        'Orinda, California',
        37.8771476,
        -122.1796888,
        'California',
        'United_States',
        'Orinda'
    ],
    [
        'Oroville, California',
        39.5137752,
        -121.556359,
        'California',
        'United_States',
        'Oroville'
    ],
    [
        'Palmdale, California',
        34.5794343,
        -118.1164613,
        'California',
        'United_States',
        'Palmdale'
    ],
    [
        'Palm Springs, California',
        33.8302961,
        -116.5452921,
        'California',
        'United_States',
        'Palm_Springs'
    ],
    [
        'Palo Alto, California',
        37.4418834,
        -122.1430195,
        'California',
        'United_States',
        'Palo_Alto'
    ],
    [
        'Paradise, California',
        39.7596061,
        -121.6219177,
        'California',
        'United_States',
        'Paradise'
    ],
    [
        'Paramount, California',
        33.8894598,
        -118.1597911,
        'California',
        'United_States',
        'Paramount'
    ],
    [
        'Pasadena, California',
        34.1477849,
        -118.1445155,
        'California',
        'United_States',
        'Pasadena'
    ],
    [
        'Paso Robles, California',
        35.6368759,
        -120.6545022,
        'California',
        'United_States',
        'Paso_Robles'
    ],
    [
        'Perris, California',
        33.7825194,
        -117.2286478,
        'California',
        'United_States',
        'Perris'
    ],
    [
        'Pescadero, California',
        37.2551636,
        -122.3830152,
        'California',
        'United_States',
        'Pescadero'
    ],
    [
        'Petaluma, California',
        38.232417,
        -122.6366524,
        'California',
        'United_States',
        'Petaluma'
    ],
    [
        'Pittsburg, California',
        38.0279762,
        -121.8846806,
        'California',
        'United_States',
        'Pittsburg'
    ],
    [
        'Placentia, California',
        33.8722371,
        -117.8703363,
        'California',
        'United_States',
        'Placentia'
    ],
    [
        'Placerville, California',
        38.7296252,
        -120.798546,
        'California',
        'United_States',
        'Placerville'
    ],
    [
        'Pleasanton, California',
        37.6624312,
        -121.8746789,
        'California',
        'United_States',
        'Pleasanton'
    ],
    [
        'Pleasant Hill, California',
        37.9479786,
        -122.0607963,
        'California',
        'United_States',
        'Pleasant_Hill'
    ],
    [
        'Point Reyes National Seashore, California',
        38.0439546,
        -122.7984295,
        'California',
        'United_States',
        'Point_Reyes_National_Seashore'
    ],
    [
        'Pomona, California',
        34.055103,
        -117.7499909,
        'California',
        'United_States',
        'Pomona'
    ],
    [
        'Porterville, California',
        36.06523,
        -119.0167679,
        'California',
        'United_States',
        'Porterville'
    ],
    [
        'Presidio of San Francisco, California',
        37.7988737,
        -122.4661937,
        'California',
        'United_States',
        'Presidio_of_San_Francisco'
    ],
    [
        'Quincy, California',
        39.9368363,
        -120.9471764,
        'California',
        'United_States',
        'Quincy'
    ],
    [
        'Rancho Cucamonga, California',
        34.1063989,
        -117.5931084,
        'California',
        'United_States',
        'Rancho_Cucamonga'
    ],
    [
        'Rancho Margarita, California',
        33.640855,
        -117.603104,
        'California',
        'United_States',
        'Rancho_Margarita'
    ],
    [
        'Rancho Palos Verdes, California',
        33.7444613,
        -118.3870173,
        'California',
        'United_States',
        'Rancho_Palos_Verdes'
    ],
    [
        'Redding, California',
        40.5865396,
        -122.3916754,
        'California',
        'United_States',
        'Redding'
    ],
    [
        'Redlands, California',
        34.0555693,
        -117.1825381,
        'California',
        'United_States',
        'Redlands'
    ],
    [
        'Redwood City, California',
        37.4852152,
        -122.2363548,
        'California',
        'United_States',
        'Redwood_City'
    ],
    [
        'Redwood National Park, California',
        41.2131788,
        -124.0046276,
        'California',
        'United_States',
        'Redwood_National_Park'
    ],
    [
        'Red Bluff, California',
        40.1784886,
        -122.2358302,
        'California',
        'United_States',
        'Red_Bluff'
    ],
    [
        'Ridgecrest, California',
        35.6224561,
        -117.6708966,
        'California',
        'United_States',
        'Ridgecrest'
    ],
    [
        'Riverside, California',
        33.9533487,
        -117.3961564,
        'California',
        'United_States',
        'Riverside'
    ],
    [
        'Rocklin, California',
        38.7907339,
        -121.2357828,
        'California',
        'United_States',
        'Rocklin'
    ],
    [
        'Roseville, California',
        38.7521235,
        -121.2880059,
        'California',
        'United_States',
        'Roseville'
    ],
    [
        'Rosie the Riveter WWII Home Front National Historical Park, California',
        37.909544,
        -122.357356,
        'California',
        'United_States',
        'Rosie_the_Riveter_WWII_Home_Front_National_Historical_Park'
    ],
    [
        'Running Springs, California',
        34.2077859,
        -117.1092049,
        'California',
        'United_States',
        'Running_Springs'
    ],
    [
        'Sacramento, California',
        38.5815719,
        -121.4943996,
        'California',
        'United_States',
        'Sacramento'
    ],
    [
        'Salinas, California',
        36.6777372,
        -121.6555013,
        'California',
        'United_States',
        'Salinas'
    ],
    [
        'Santa Ana, California',
        33.7455731,
        -117.8678338,
        'California',
        'United_States',
        'Santa_Ana'
    ],
    [
        'Santa Barbara, California',
        34.4208305,
        -119.6981901,
        'California',
        'United_States',
        'Santa_Barbara'
    ],
    [
        'Santa Clara, California',
        37.3541079,
        -121.9552356,
        'California',
        'United_States',
        'Santa_Clara'
    ],
    [
        'Santa Clarita, California',
        34.3916641,
        -118.542586,
        'California',
        'United_States',
        'Santa_Clarita'
    ],
    [
        'Santa Cruz, California',
        36.9741171,
        -122.0307963,
        'California',
        'United_States',
        'Santa_Cruz'
    ],
    [
        'Santa Maria, California',
        34.9530337,
        -120.4357191,
        'California',
        'United_States',
        'Santa_Maria'
    ],
    [
        'Santa Monica Mountains National Recreation Area, California',
        34.1203,
        -118.9318,
        'California',
        'United_States',
        'Santa_Monica_Mountains_National_Recreation_Area'
    ],
    [
        'Santa Rosa, California',
        38.440429,
        -122.7140548,
        'California',
        'United_States',
        'Santa_Rosa'
    ],
    [
        'San Andreas, California',
        38.1960298,
        -120.6804872,
        'California',
        'United_States',
        'San_Andreas'
    ],
    [
        'San Bernardino, California',
        34.1083449,
        -117.2897652,
        'California',
        'United_States',
        'San_Bernardino'
    ],
    [
        'San Clemente, California',
        33.4269728,
        -117.6119925,
        'California',
        'United_States',
        'San_Clemente'
    ],
    [
        'San Diego, California',
        32.715738,
        -117.1610838,
        'California',
        'United_States',
        'San_Diego'
    ],
    [
        'San Fernando, California',
        34.2819461,
        -118.4389719,
        'California',
        'United_States',
        'San_Fernando'
    ],
    [
        'San Francisco, California',
        37.7749295,
        -122.4194155,
        'California',
        'United_States',
        'San_Francisco'
    ],
    [
        'San Francisco Maritime National Historical Park, California',
        37.807743,
        -122.42415,
        'California',
        'United_States',
        'San_Francisco_Maritime_National_Historical_Park'
    ],
    [
        'San Jacinto, California',
        33.7839084,
        -116.958635,
        'California',
        'United_States',
        'San_Jacinto'
    ],
    [
        'San Jose, California',
        37.3382082,
        -121.8863286,
        'California',
        'United_States',
        'San_Jose'
    ],
    [
        'San Juan Capistrano, California',
        33.5016932,
        -117.6625509,
        'California',
        'United_States',
        'San_Juan_Capistrano'
    ],
    [
        'San Luis Obispo, California',
        35.2827524,
        -120.6596156,
        'California',
        'United_States',
        'San_Luis_Obispo'
    ],
    [
        'San Marcos, California',
        33.1433723,
        -117.1661449,
        'California',
        'United_States',
        'San_Marcos'
    ],
    [
        'San Rafael, California',
        37.9735346,
        -122.5310874,
        'California',
        'United_States',
        'San_Rafael'
    ],
    [
        'Seal Beach, California',
        33.7414064,
        -118.1047866,
        'California',
        'United_States',
        'Seal_Beach'
    ],
    [
        'Sebastopol, California',
        38.4021359,
        -122.8238806,
        'California',
        'United_States',
        'Sebastopol'
    ],
    [
        'Sequoia National Park, California',
        36.4863668,
        -118.5657516,
        'California',
        'United_States',
        'Sequoia_National_Park'
    ],
    [
        'Simi Valley, California',
        34.2694474,
        -118.781482,
        'California',
        'United_States',
        'Simi_Valley'
    ],
    [
        'Solvang, California',
        34.5958201,
        -120.1376481,
        'California',
        'United_States',
        'Solvang'
    ],
    [
        'Sonoma, California',
        38.291859,
        -122.4580356,
        'California',
        'United_States',
        'Sonoma'
    ],
    [
        'Sonora, California',
        37.9829496,
        -120.3821724,
        'California',
        'United_States',
        'Sonora'
    ],
    [
        'South Lake Tahoe, California',
        38.939926,
        -119.9771868,
        'California',
        'United_States',
        'South_Lake_Tahoe'
    ],
    [
        'Stanford, California',
        37.424106,
        -122.1660756,
        'California',
        'United_States',
        'Stanford'
    ],
    [
        'Starfleet Headquarters, California',
        37.835887,
        -122.47889,
        'California',
        'United_States',
        'Starfleet_Headquarters'
    ],
    [
        'Stockton, California',
        37.9577016,
        -121.2907796,
        'California',
        'United_States',
        'Stockton'
    ],
    [
        'Sunnyvale, California',
        37.36883,
        -122.0363496,
        'California',
        'United_States',
        'Sunnyvale'
    ],
    [
        'Susanville, California',
        40.4162842,
        -120.6530063,
        'California',
        'United_States',
        'Susanville'
    ],
    [
        'Tahoe City, California',
        39.1446803,
        -120.1762494,
        'California',
        'United_States',
        'Tahoe_City'
    ],
    [
        'Tehachapi, California',
        35.1321877,
        -118.4489739,
        'California',
        'United_States',
        'Tehachapi'
    ],
    [
        'Temecula, California',
        33.4936391,
        -117.1483648,
        'California',
        'United_States',
        'Temecula'
    ],
    [
        'Thousand Oaks, California',
        34.1705609,
        -118.8375937,
        'California',
        'United_States',
        'Thousand_Oaks'
    ],
    [
        'Torrance, California',
        33.8358492,
        -118.3406288,
        'California',
        'United_States',
        'Torrance'
    ],
    [
        'Truckee, California',
        39.327962,
        -120.1832533,
        'California',
        'United_States',
        'Truckee'
    ],
    [
        'Ukiah, California',
        39.1501709,
        -123.2077831,
        'California',
        'United_States',
        'Ukiah'
    ],
    [
        'Union City, California',
        37.5933918,
        -122.0438298,
        'California',
        'United_States',
        'Union_City'
    ],
    [
        'Vacaville, California',
        38.3565773,
        -121.9877444,
        'California',
        'United_States',
        'Vacaville'
    ],
    [
        'Valencia, California',
        34.456151,
        -118.5713823,
        'California',
        'United_States',
        'Valencia'
    ],
    [
        'Vallejo, California',
        38.1040864,
        -122.2566367,
        'California',
        'United_States',
        'Vallejo'
    ],
    [
        'Venice, California',
        33.9850469,
        -118.4694832,
        'California',
        'United_States',
        'Venice'
    ],
    [
        'Ventura, California',
        34.274646,
        -119.2290316,
        'California',
        'United_States',
        'Ventura'
    ],
    [
        'Victorville, California',
        34.5362184,
        -117.2927641,
        'California',
        'United_States',
        'Victorville'
    ],
    [
        'Visalia, California',
        36.3302284,
        -119.2920585,
        'California',
        'United_States',
        'Visalia'
    ],
    [
        'Vista, California',
        33.2000368,
        -117.2425355,
        'California',
        'United_States',
        'Vista'
    ],
    [
        'Walnut Creek, California',
        37.9100783,
        -122.0651819,
        'California',
        'United_States',
        'Walnut_Creek'
    ],
    [
        'Weaverville, California',
        40.7309778,
        -122.9419708,
        'California',
        'United_States',
        'Weaverville'
    ],
    [
        'Westminster, California',
        33.7513419,
        -117.9939921,
        'California',
        'United_States',
        'Westminster'
    ],
    [
        'Whiskeytown Shasta Trinity National Recreation Area, California',
        40.6387601,
        -122.5597373,
        'California',
        'United_States',
        'Whiskeytown_Shasta_Trinity_National_Recreation_Area'
    ],
    [
        'Whittier, California',
        33.9791793,
        -118.032844,
        'California',
        'United_States',
        'Whittier'
    ],
    [
        'Wildomar, California',
        33.5989126,
        -117.2800372,
        'California',
        'United_States',
        'Wildomar'
    ],
    [
        'Willits, California',
        39.4096079,
        -123.3555656,
        'California',
        'United_States',
        'Willits'
    ],
    [
        'Willows, California',
        39.5243265,
        -122.1935931,
        'California',
        'United_States',
        'Willows'
    ],
    [
        'Woodland, California',
        38.6785157,
        -121.7732971,
        'California',
        'United_States',
        'Woodland'
    ],
    [
        'Woodland Hills, California',
        34.165357,
        -118.6089752,
        'California',
        'United_States',
        'Woodland_Hills'
    ],
    [
        'Yorba Linda, California',
        33.8886259,
        -117.8131125,
        'California',
        'United_States',
        'Yorba_Linda'
    ],
    [
        'Yosemite National Park, California',
        37.8651011,
        -119.5383294,
        'California',
        'United_States',
        'Yosemite_National_Park'
    ],
    [
        'Yreka, California',
        41.7354186,
        -122.6344708,
        'California',
        'United_States',
        'Yreka'
    ],
    [
        'Yuba City, California',
        39.1404477,
        -121.6169108,
        'California',
        'United_States',
        'Yuba_City'
    ],
    [
        'Yucca Valley, California',
        34.1141743,
        -116.432235,
        'California',
        'United_States',
        'Yucca_Valley'
    ],
    [
        'Air Force Academy, Colorado',
        38.9983573,
        -104.8617533,
        'Colorado',
        'United_States',
        'Air_Force_Academy'
    ],
    [
        'Akron, Colorado',
        40.1605373,
        -103.2143843,
        'Colorado',
        'United_States',
        'Akron'
    ],
    [
        'Alamosa, Colorado',
        37.4694491,
        -105.8700214,
        'Colorado',
        'United_States',
        'Alamosa'
    ],
    [
        'Aspen, Colorado',
        39.1910983,
        -106.8175387,
        'Colorado',
        'United_States',
        'Aspen'
    ],
    [
        'Aurora, Colorado',
        39.7294319,
        -104.8319195,
        'Colorado',
        'United_States',
        'Aurora'
    ],
    [
        'Bents Old Fort National Historic Site, Colorado',
        38.0404402,
        -103.4295308,
        'Colorado',
        'United_States',
        'Bents_Old_Fort_National_Historic_Site'
    ],
    [
        'Black Canyon of the Gunnison National Park, Colorado',
        38.5753936,
        -107.7415961,
        'Colorado',
        'United_States',
        'Black_Canyon_of_the_Gunnison_National_Park'
    ],
    [
        'Boulder, Colorado',
        40.0149856,
        -105.2705456,
        'Colorado',
        'United_States',
        'Boulder'
    ],
    [
        'Breckenridge, Colorado',
        39.4816537,
        -106.0383518,
        'Colorado',
        'United_States',
        'Breckenridge'
    ],
    [
        'Brighton, Colorado',
        39.9852617,
        -104.8205283,
        'Colorado',
        'United_States',
        'Brighton'
    ],
    [
        'Broomfield, Colorado',
        39.9205411,
        -105.0866504,
        'Colorado',
        'United_States',
        'Broomfield'
    ],
    [
        'Burlington, Colorado',
        39.3061082,
        -102.2693563,
        'Colorado',
        'United_States',
        'Burlington'
    ],
    [
        'Calument, Colorado',
        41.5583866,
        -87.2657262,
        'Colorado',
        'United_States',
        'Calument'
    ],
    [
        'Canon City, Colorado',
        38.4494063,
        -105.2253316,
        'Colorado',
        'United_States',
        'Canon_City'
    ],
    [
        'Castle Rock, Colorado',
        39.3722121,
        -104.8560902,
        'Colorado',
        'United_States',
        'Castle_Rock'
    ],
    [
        'Cedaredge, Colorado',
        38.9016487,
        -107.926454,
        'Colorado',
        'United_States',
        'Cedaredge'
    ],
    [
        'Central City, Colorado',
        39.8019322,
        -105.5141639,
        'Colorado',
        'United_States',
        'Central_City'
    ],
    [
        'Cheyenne Wells, Colorado',
        38.821395,
        -102.3532435,
        'Colorado',
        'United_States',
        'Cheyenne_Wells'
    ],
    [
        'Colorado National Monument, Colorado',
        39.0603406,
        -108.6888013,
        'Colorado',
        'United_States',
        'Colorado_National_Monument'
    ],
    [
        'Colorado Springs, Colorado',
        38.8338816,
        -104.8213634,
        'Colorado',
        'United_States',
        'Colorado_Springs'
    ],
    [
        'Conejos, Colorado',
        37.0883453,
        -106.0197445,
        'Colorado',
        'United_States',
        'Conejos'
    ],
    [
        'Cortez, Colorado',
        37.3488827,
        -108.5859265,
        'Colorado',
        'United_States',
        'Cortez'
    ],
    [
        'Craig, Colorado',
        40.5152491,
        -107.5464541,
        'Colorado',
        'United_States',
        'Craig'
    ],
    [
        'Creede, Colorado',
        37.8491662,
        -106.9264345,
        'Colorado',
        'United_States',
        'Creede'
    ],
    [
        'Cripple Creek, Colorado',
        38.7466555,
        -105.1783149,
        'Colorado',
        'United_States',
        'Cripple_Creek'
    ],
    [
        'Curecanti National Recreation Area, Colorado',
        38.4641441,
        -107.1839024,
        'Colorado',
        'United_States',
        'Curecanti_National_Recreation_Area'
    ],
    [
        'Delta, Colorado',
        38.7422062,
        -108.0689582,
        'Colorado',
        'United_States',
        'Delta'
    ],
    [
        'Del Norte, Colorado',
        37.6788919,
        -106.3533683,
        'Colorado',
        'United_States',
        'Del_Norte'
    ],
    [
        'Denver, Colorado',
        39.7392358,
        -104.990251,
        'Colorado',
        'United_States',
        'Denver'
    ],
    [
        'Dinosaur National Monument, Colorado',
        40.5130533,
        -108.9487453,
        'Colorado',
        'United_States',
        'Dinosaur_National_Monument'
    ],
    [
        'Dove Creek, Colorado',
        37.7661,
        -108.9059393,
        'Colorado',
        'United_States',
        'Dove_Creek'
    ],
    [
        'Durango, Colorado',
        37.27528,
        -107.8800667,
        'Colorado',
        'United_States',
        'Durango'
    ],
    [
        'Eads, Colorado',
        38.4805615,
        -102.7818628,
        'Colorado',
        'United_States',
        'Eads'
    ],
    [
        'Eagle, Colorado',
        39.6552634,
        -106.8286507,
        'Colorado',
        'United_States',
        'Eagle'
    ],
    [
        'Englewood, Colorado',
        39.6477653,
        -104.9877597,
        'Colorado',
        'United_States',
        'Englewood'
    ],
    [
        'Fairplay, Colorado',
        39.2247125,
        -106.0019618,
        'Colorado',
        'United_States',
        'Fairplay'
    ],
    [
        'Florissant Fossil Beds National Monument, Colorado',
        38.9145141,
        -105.2878403,
        'Colorado',
        'United_States',
        'Florissant_Fossil_Beds_National_Monument'
    ],
    [
        'Fort Collins, Colorado',
        40.5852602,
        -105.084423,
        'Colorado',
        'United_States',
        'Fort_Collins'
    ],
    [
        'Fort Morgan, Colorado',
        40.2502582,
        -103.7999509,
        'Colorado',
        'United_States',
        'Fort_Morgan'
    ],
    [
        'Georgetown, Colorado',
        39.7060984,
        -105.6975041,
        'Colorado',
        'United_States',
        'Georgetown'
    ],
    [
        'Glenwood Springs, Colorado',
        39.5505376,
        -107.3247762,
        'Colorado',
        'United_States',
        'Glenwood_Springs'
    ],
    [
        'Golden, Colorado',
        39.755543,
        -105.2210997,
        'Colorado',
        'United_States',
        'Golden'
    ],
    [
        'Grand Junction, Colorado',
        39.0638705,
        -108.5506486,
        'Colorado',
        'United_States',
        'Grand_Junction'
    ],
    [
        'Grand Lake, Colorado',
        40.2522073,
        -105.8230671,
        'Colorado',
        'United_States',
        'Grand_Lake'
    ],
    [
        'Great Sand Dunes National Park, Colorado',
        37.7765436,
        -105.6288604,
        'Colorado',
        'United_States',
        'Great_Sand_Dunes_National_Park'
    ],
    [
        'Greeley, Colorado',
        40.4233142,
        -104.7091322,
        'Colorado',
        'United_States',
        'Greeley'
    ],
    [
        'Gunnison, Colorado',
        38.5458246,
        -106.9253207,
        'Colorado',
        'United_States',
        'Gunnison'
    ],
    [
        'Holyoke, Colorado',
        40.5844369,
        -102.3024103,
        'Colorado',
        'United_States',
        'Holyoke'
    ],
    [
        'Hot Sulphur Springs, Colorado',
        40.0730411,
        -106.1027991,
        'Colorado',
        'United_States',
        'Hot_Sulphur_Springs'
    ],
    [
        'Hugo, Colorado',
        39.1361003,
        -103.4699447,
        'Colorado',
        'United_States',
        'Hugo'
    ],
    [
        'Julesburg, Colorado',
        40.9883258,
        -102.2643519,
        'Colorado',
        'United_States',
        'Julesburg'
    ],
    [
        'Kiowa, Colorado',
        39.3472095,
        -104.4644112,
        'Colorado',
        'United_States',
        'Kiowa'
    ],
    [
        'Lakewood, Colorado',
        39.7047095,
        -105.0813734,
        'Colorado',
        'United_States',
        'Lakewood'
    ],
    [
        'Lake City, Colorado',
        38.0299967,
        -107.3153335,
        'Colorado',
        'United_States',
        'Lake_City'
    ],
    [
        'Lamar, Colorado',
        38.0872307,
        -102.6207496,
        'Colorado',
        'United_States',
        'Lamar'
    ],
    [
        'Las Animas, Colorado',
        38.0666735,
        -103.222708,
        'Colorado',
        'United_States',
        'Las_Animas'
    ],
    [
        'La Junta, Colorado',
        37.9850091,
        -103.5438321,
        'Colorado',
        'United_States',
        'La_Junta'
    ],
    [
        'Leadville, Colorado',
        39.2508229,
        -106.2925238,
        'Colorado',
        'United_States',
        'Leadville'
    ],
    [
        'Littleton, Colorado',
        39.613321,
        -105.0166498,
        'Colorado',
        'United_States',
        'Littleton'
    ],
    [
        'Longmont, Colorado',
        40.1672068,
        -105.1019275,
        'Colorado',
        'United_States',
        'Longmont'
    ],
    [
        'Lyons, Colorado',
        40.2247075,
        -105.271378,
        'Colorado',
        'United_States',
        'Lyons'
    ],
    [
        'Meeker, Colorado',
        40.0374733,
        -107.9131299,
        'Colorado',
        'United_States',
        'Meeker'
    ],
    [
        'Mesa Verde National Park, Colorado',
        37.1837823,
        -108.4886935,
        'Colorado',
        'United_States',
        'Mesa_Verde_National_Park'
    ],
    [
        'Montrose, Colorado',
        38.4783198,
        -107.8761738,
        'Colorado',
        'United_States',
        'Montrose'
    ],
    [
        'Ordway, Colorado',
        38.2180608,
        -103.7560606,
        'Colorado',
        'United_States',
        'Ordway'
    ],
    [
        'Ouray, Colorado',
        38.0227716,
        -107.6714487,
        'Colorado',
        'United_States',
        'Ouray'
    ],
    [
        'Pagosa Springs, Colorado',
        37.26945,
        -107.0097617,
        'Colorado',
        'United_States',
        'Pagosa_Springs'
    ],
    [
        'Poncha Springs, Colorado',
        38.5127752,
        -106.0772384,
        'Colorado',
        'United_States',
        'Poncha_Springs'
    ],
    [
        'Pueblo, Colorado',
        38.2544472,
        -104.6091409,
        'Colorado',
        'United_States',
        'Pueblo'
    ],
    [
        'Rocky Mountain National Park, Colorado',
        40.3427932,
        -105.6836389,
        'Colorado',
        'United_States',
        'Rocky_Mountain_National_Park'
    ],
    [
        'Saguache, Colorado',
        38.0875,
        -106.1419671,
        'Colorado',
        'United_States',
        'Saguache'
    ],
    [
        'Salida, Colorado',
        38.5347193,
        -105.9989022,
        'Colorado',
        'United_States',
        'Salida'
    ],
    [
        'Sand Creek Massacre National Historic Site, Colorado',
        39.5500507,
        -105.7820674,
        'Colorado',
        'United_States',
        'Sand_Creek_Massacre_National_Historic_Site'
    ],
    [
        'San Luis, Colorado',
        37.2008482,
        -105.4239012,
        'Colorado',
        'United_States',
        'San_Luis'
    ],
    [
        'Silverton, Colorado',
        37.811941,
        -107.6645057,
        'Colorado',
        'United_States',
        'Silverton'
    ],
    [
        'Simla, Colorado',
        39.1416551,
        -104.0838479,
        'Colorado',
        'United_States',
        'Simla'
    ],
    [
        'Springfield, Colorado',
        37.4083485,
        -102.6143616,
        'Colorado',
        'United_States',
        'Springfield'
    ],
    [
        'Steamboat Springs, Colorado',
        40.4849769,
        -106.8317158,
        'Colorado',
        'United_States',
        'Steamboat_Springs'
    ],
    [
        'Sterling, Colorado',
        40.6255415,
        -103.207709,
        'Colorado',
        'United_States',
        'Sterling'
    ],
    [
        'Telluride, Colorado',
        37.9374939,
        -107.8122852,
        'Colorado',
        'United_States',
        'Telluride'
    ],
    [
        'Trinidad, Colorado',
        37.1694632,
        -104.5005407,
        'Colorado',
        'United_States',
        'Trinidad'
    ],
    [
        'Vail, Colorado',
        39.6402638,
        -106.3741955,
        'Colorado',
        'United_States',
        'Vail'
    ],
    [
        'Walden, Colorado',
        40.7316433,
        -106.2836373,
        'Colorado',
        'United_States',
        'Walden'
    ],
    [
        'Walsenburg, Colorado',
        37.6241793,
        -104.7802645,
        'Colorado',
        'United_States',
        'Walsenburg'
    ],
    [
        'Westcliffe, Colorado',
        38.1328,
        -105.4659,
        'Colorado',
        'United_States',
        'Westcliffe'
    ],
    [
        'Westminster, Colorado',
        39.8366528,
        -105.0372046,
        'Colorado',
        'United_States',
        'Westminster'
    ],
    [
        'Wheat Ridge, Colorado',
        39.766098,
        -105.0772063,
        'Colorado',
        'United_States',
        'Wheat_Ridge'
    ],
    [
        'Wray, Colorado',
        40.0758231,
        -102.2232495,
        'Colorado',
        'United_States',
        'Wray'
    ],
    [
        'Yucca House National Monument, Colorado',
        37.2493159,
        -108.6865956,
        'Colorado',
        'United_States',
        'Yucca_House_National_Monument'
    ],
    [
        'Branford, Connecticut',
        41.2799027,
        -72.8141185,
        'Connecticut',
        'United_States',
        'Branford'
    ],
    [
        'Bridgeport, Connecticut',
        41.1865478,
        -73.1951767,
        'Connecticut',
        'United_States',
        'Bridgeport'
    ],
    [
        'Bristol, Connecticut',
        41.6717648,
        -72.9492703,
        'Connecticut',
        'United_States',
        'Bristol'
    ],
    [
        'Burlington, Connecticut',
        41.7691235,
        -72.9648388,
        'Connecticut',
        'United_States',
        'Burlington'
    ],
    [
        'Coventry, Connecticut',
        41.78468,
        -72.3393021,
        'Connecticut',
        'United_States',
        'Coventry'
    ],
    [
        'Danbury, Connecticut',
        41.394817,
        -73.4540111,
        'Connecticut',
        'United_States',
        'Danbury'
    ],
    [
        'Darien, Connecticut',
        41.0771914,
        -73.4686858,
        'Connecticut',
        'United_States',
        'Darien'
    ],
    [
        'Derby, Connecticut',
        41.3206523,
        -73.0889973,
        'Connecticut',
        'United_States',
        'Derby'
    ],
    [
        'Enfield, Connecticut',
        42.0027181,
        -72.5441445,
        'Connecticut',
        'United_States',
        'Enfield'
    ],
    [
        'Fairfield, Connecticut',
        41.1408363,
        -73.2612615,
        'Connecticut',
        'United_States',
        'Fairfield'
    ],
    [
        'Glastonbury, Connecticut',
        41.6861794,
        -72.5450779,
        'Connecticut',
        'United_States',
        'Glastonbury'
    ],
    [
        'Groton, Connecticut',
        41.3497456,
        -72.0790717,
        'Connecticut',
        'United_States',
        'Groton'
    ],
    [
        'Hartford, Connecticut',
        41.7637111,
        -72.6850932,
        'Connecticut',
        'United_States',
        'Hartford'
    ],
    [
        'Killingly, Connecticut',
        41.8122401,
        -71.8334145,
        'Connecticut',
        'United_States',
        'Killingly'
    ],
    [
        'Lakeville, Connecticut',
        41.9644861,
        -73.4408034,
        'Connecticut',
        'United_States',
        'Lakeville'
    ],
    [
        'Litchfield, Connecticut',
        41.7472642,
        -73.1887165,
        'Connecticut',
        'United_States',
        'Litchfield'
    ],
    [
        'Manchester, Connecticut',
        41.7759301,
        -72.5215009,
        'Connecticut',
        'United_States',
        'Manchester'
    ],
    [
        'Meriden, Connecticut',
        41.5381535,
        -72.8070435,
        'Connecticut',
        'United_States',
        'Meriden'
    ],
    [
        'Middletown, Connecticut',
        41.5623209,
        -72.6506488,
        'Connecticut',
        'United_States',
        'Middletown'
    ],
    [
        'Milford, Connecticut',
        41.2306979,
        -73.064036,
        'Connecticut',
        'United_States',
        'Milford'
    ],
    [
        'Monroe, Connecticut',
        41.3325962,
        -73.2073358,
        'Connecticut',
        'United_States',
        'Monroe'
    ],
    [
        'Naugatuck, Connecticut',
        41.485921,
        -73.0506972,
        'Connecticut',
        'United_States',
        'Naugatuck'
    ],
    [
        'New Britain, Connecticut',
        41.6612104,
        -72.7795419,
        'Connecticut',
        'United_States',
        'New_Britain'
    ],
    [
        'New Canaan, Connecticut',
        41.146763,
        -73.4948445,
        'Connecticut',
        'United_States',
        'New_Canaan'
    ],
    [
        'New Haven, Connecticut',
        41.308274,
        -72.9278835,
        'Connecticut',
        'United_States',
        'New_Haven'
    ],
    [
        'New London, Connecticut',
        41.3556539,
        -72.0995209,
        'Connecticut',
        'United_States',
        'New_London'
    ],
    [
        'North Grosvenordale, Connecticut',
        41.9856531,
        -71.8986833,
        'Connecticut',
        'United_States',
        'North_Grosvenordale'
    ],
    [
        'North Haven, Connecticut',
        41.3909139,
        -72.8595447,
        'Connecticut',
        'United_States',
        'North_Haven'
    ],
    [
        'Norwalk, Connecticut',
        41.117744,
        -73.4081575,
        'Connecticut',
        'United_States',
        'Norwalk'
    ],
    [
        'Norwich, Connecticut',
        41.5242649,
        -72.0759105,
        'Connecticut',
        'United_States',
        'Norwich'
    ],
    [
        'Oakdale, Connecticut',
        41.4832665,
        -72.1593842,
        'Connecticut',
        'United_States',
        'Oakdale'
    ],
    [
        'Oxford, Connecticut',
        41.4338203,
        -73.1168393,
        'Connecticut',
        'United_States',
        'Oxford'
    ],
    [
        'Plainville, Connecticut',
        41.6757457,
        -72.8633635,
        'Connecticut',
        'United_States',
        'Plainville'
    ],
    [
        'Redding, Connecticut',
        41.3045399,
        -73.392898,
        'Connecticut',
        'United_States',
        'Redding'
    ],
    [
        'Salisbury, Connecticut',
        41.983426,
        -73.4212318,
        'Connecticut',
        'United_States',
        'Salisbury'
    ],
    [
        'Somers, Connecticut',
        41.9851929,
        -72.4460798,
        'Connecticut',
        'United_States',
        'Somers'
    ],
    [
        'Southington, Connecticut',
        41.5964869,
        -72.8776013,
        'Connecticut',
        'United_States',
        'Southington'
    ],
    [
        'Stamford, Connecticut',
        41.0534302,
        -73.5387341,
        'Connecticut',
        'United_States',
        'Stamford'
    ],
    [
        'Storrs, Connecticut',
        41.8084314,
        -72.2495231,
        'Connecticut',
        'United_States',
        'Storrs'
    ],
    [
        'Stratford, Connecticut',
        41.1845415,
        -73.1331651,
        'Connecticut',
        'United_States',
        'Stratford'
    ],
    [
        'Tolland, Connecticut',
        41.8714865,
        -72.3686931,
        'Connecticut',
        'United_States',
        'Tolland'
    ],
    [
        'Torrington, Connecticut',
        41.8003049,
        -73.1211715,
        'Connecticut',
        'United_States',
        'Torrington'
    ],
    [
        'Vernon, Connecticut',
        41.8186802,
        -72.479037,
        'Connecticut',
        'United_States',
        'Vernon'
    ],
    [
        'Wallingford, Connecticut',
        41.4570108,
        -72.8230736,
        'Connecticut',
        'United_States',
        'Wallingford'
    ],
    [
        'Waterbury, Connecticut',
        41.5581525,
        -73.0514965,
        'Connecticut',
        'United_States',
        'Waterbury'
    ],
    [
        'Weir Farm National Historic Site, Connecticut',
        41.2564685,
        -73.4569502,
        'Connecticut',
        'United_States',
        'Weir_Farm_National_Historic_Site'
    ],
    [
        'Willimantic, Connecticut',
        41.7106543,
        -72.2081338,
        'Connecticut',
        'United_States',
        'Willimantic'
    ],
    [
        'Willington, Connecticut',
        41.8809434,
        -72.2600655,
        'Connecticut',
        'United_States',
        'Willington'
    ],
    [
        'Wilton, Connecticut',
        41.1953739,
        -73.4378988,
        'Connecticut',
        'United_States',
        'Wilton'
    ],
    [
        'Windham, Connecticut',
        41.6998208,
        -72.1570219,
        'Connecticut',
        'United_States',
        'Windham'
    ],
    [
        'Windsor, Connecticut',
        41.8525984,
        -72.6437022,
        'Connecticut',
        'United_States',
        'Windsor'
    ],
    [
        'NASA Headquarters, DC',
        38.8829544,
        -77.0163194,
        'DC',
        'United_States',
        'NASA_Headquarters'
    ],
    [
        'Washington, DC',
        38.9071923,
        -77.0368707,
        'DC',
        'United_States',
        'Washington'
    ],
    [
        'Dover, Delaware',
        39.158168,
        -75.5243682,
        'Delaware',
        'United_States',
        'Dover'
    ],
    [
        'Georgetown, Delaware',
        38.6901134,
        -75.3854728,
        'Delaware',
        'United_States',
        'Georgetown'
    ],
    [
        'Lewes, Delaware',
        38.7745565,
        -75.1393498,
        'Delaware',
        'United_States',
        'Lewes'
    ],
    [
        'Middletown, Delaware',
        39.449556,
        -75.7163207,
        'Delaware',
        'United_States',
        'Middletown'
    ],
    [
        'Milford, Delaware',
        38.9126129,
        -75.4279748,
        'Delaware',
        'United_States',
        'Milford'
    ],
    [
        'Millsboro, Delaware',
        38.5915023,
        -75.2913018,
        'Delaware',
        'United_States',
        'Millsboro'
    ],
    [
        'New Castle, Delaware',
        39.6620397,
        -75.5668166,
        'Delaware',
        'United_States',
        'New_Castle'
    ],
    [
        'Wilmington, Delaware',
        39.7390721,
        -75.5397878,
        'Delaware',
        'United_States',
        'Wilmington'
    ],
    [
        'Apalachicola, Florida',
        29.7257675,
        -84.9832435,
        'Florida',
        'United_States',
        'Apalachicola'
    ],
    [
        'Arcadia, Florida',
        27.2158826,
        -81.8584164,
        'Florida',
        'United_States',
        'Arcadia'
    ],
    [
        'Archer, Florida',
        29.5299677,
        -82.5189969,
        'Florida',
        'United_States',
        'Archer'
    ],
    [
        'Bartow, Florida',
        27.8964147,
        -81.8431374,
        'Florida',
        'United_States',
        'Bartow'
    ],
    [
        'Belle Isle, Florida',
        28.4583383,
        -81.3592364,
        'Florida',
        'United_States',
        'Belle_Isle'
    ],
    [
        'Big Cypress National Preserve, Florida',
        26.214506,
        -81.302708,
        'Florida',
        'United_States',
        'Big_Cypress_National_Preserve'
    ],
    [
        'Biscayne National Park, Florida',
        25.4824229,
        -80.2083103,
        'Florida',
        'United_States',
        'Biscayne_National_Park'
    ],
    [
        'Blountstown, Florida',
        30.4435293,
        -85.0451953,
        'Florida',
        'United_States',
        'Blountstown'
    ],
    [
        'Boca Raton, Florida',
        26.3683064,
        -80.1289321,
        'Florida',
        'United_States',
        'Boca_Raton'
    ],
    [
        'Bonifay, Florida',
        30.7918559,
        -85.6796533,
        'Florida',
        'United_States',
        'Bonifay'
    ],
    [
        'Boynton Beach, Florida',
        26.5317866,
        -80.0905465,
        'Florida',
        'United_States',
        'Boynton_Beach'
    ],
    [
        'Bradenton, Florida',
        27.4989278,
        -82.5748194,
        'Florida',
        'United_States',
        'Bradenton'
    ],
    [
        'Bristol, Florida',
        30.4321407,
        -84.9757496,
        'Florida',
        'United_States',
        'Bristol'
    ],
    [
        'Bronson, Florida',
        29.4477445,
        -82.6423336,
        'Florida',
        'United_States',
        'Bronson'
    ],
    [
        'Brooksville, Florida',
        28.5552719,
        -82.3878709,
        'Florida',
        'United_States',
        'Brooksville'
    ],
    [
        'Bunnell, Florida',
        29.4660863,
        -81.2578416,
        'Florida',
        'United_States',
        'Bunnell'
    ],
    [
        'Bushnell, Florida',
        28.6649924,
        -82.1128629,
        'Florida',
        'United_States',
        'Bushnell'
    ],
    [
        'Canaveral National Seashore, Florida',
        28.7868818,
        -80.754698,
        'Florida',
        'United_States',
        'Canaveral_National_Seashore'
    ],
    [
        'Cape Canaveral, Florida',
        28.3922182,
        -80.6077132,
        'Florida',
        'United_States',
        'Cape_Canaveral'
    ],
    [
        'Cape Coral, Florida',
        26.5628537,
        -81.9495331,
        'Florida',
        'United_States',
        'Cape_Coral'
    ],
    [
        'Casselberry, Florida',
        28.677775,
        -81.3278455,
        'Florida',
        'United_States',
        'Casselberry'
    ],
    [
        'Chiefland, Florida',
        29.4749621,
        -82.8598421,
        'Florida',
        'United_States',
        'Chiefland'
    ],
    [
        'Chipley, Florida',
        30.7818584,
        -85.538541,
        'Florida',
        'United_States',
        'Chipley'
    ],
    [
        'Clearwater, Florida',
        27.9658533,
        -82.8001026,
        'Florida',
        'United_States',
        'Clearwater'
    ],
    [
        'Clermont, Florida',
        28.5494447,
        -81.7728543,
        'Florida',
        'United_States',
        'Clermont'
    ],
    [
        'Cocoa, Florida',
        28.3861159,
        -80.7419984,
        'Florida',
        'United_States',
        'Cocoa'
    ],
    [
        'Cocoa Beach, Florida',
        28.3200067,
        -80.6075513,
        'Florida',
        'United_States',
        'Cocoa_Beach'
    ],
    [
        'Coral Springs, Florida',
        26.271192,
        -80.2706044,
        'Florida',
        'United_States',
        'Coral_Springs'
    ],
    [
        'Crawfordville, Florida',
        30.1944839,
        -84.3711207,
        'Florida',
        'United_States',
        'Crawfordville'
    ],
    [
        'Crescent City, Florida',
        29.4302514,
        -81.5106288,
        'Florida',
        'United_States',
        'Crescent_City'
    ],
    [
        'Crestview, Florida',
        30.7541808,
        -86.5727995,
        'Florida',
        'United_States',
        'Crestview'
    ],
    [
        'Cross City, Florida',
        29.6343977,
        -83.1251306,
        'Florida',
        'United_States',
        'Cross_City'
    ],
    [
        'Dade City, Florida',
        28.3647248,
        -82.1959178,
        'Florida',
        'United_States',
        'Dade_City'
    ],
    [
        'Daytona Beach, Florida',
        29.2108147,
        -81.0228331,
        'Florida',
        'United_States',
        'Daytona_Beach'
    ],
    [
        'DeFuniak Springs, Florida',
        30.7210227,
        -86.1152184,
        'Florida',
        'United_States',
        'DeFuniak_Springs'
    ],
    [
        'Delray Beach, Florida',
        26.4614625,
        -80.0728201,
        'Florida',
        'United_States',
        'Delray_Beach'
    ],
    [
        'Deltona, Florida',
        28.9005446,
        -81.2636738,
        'Florida',
        'United_States',
        'Deltona'
    ],
    [
        'Destin, Florida',
        30.3935337,
        -86.4957833,
        'Florida',
        'United_States',
        'Destin'
    ],
    [
        'De Land, Florida',
        29.028318,
        -81.3031179,
        'Florida',
        'United_States',
        'De_Land'
    ],
    [
        'De Soto National Memorial, Florida',
        27.6648274,
        -81.5157535,
        'Florida',
        'United_States',
        'De_Soto_National_Memorial'
    ],
    [
        'Dry Tortugas National Park, Florida',
        24.628477,
        -82.8731874,
        'Florida',
        'United_States',
        'Dry_Tortugas_National_Park'
    ],
    [
        'Dunedin, Florida',
        28.0197404,
        -82.7717684,
        'Florida',
        'United_States',
        'Dunedin'
    ],
    [
        'Englewood, Florida',
        26.9620053,
        -82.3525952,
        'Florida',
        'United_States',
        'Englewood'
    ],
    [
        'Everglades National Park, Florida',
        25.2866155,
        -80.8986509,
        'Florida',
        'United_States',
        'Everglades_National_Park'
    ],
    [
        'Fernandina Beach, Florida',
        30.6696818,
        -81.4625919,
        'Florida',
        'United_States',
        'Fernandina_Beach'
    ],
    [
        'Fort Caroline National Memorial, Florida',
        30.3853866,
        -81.4973666,
        'Florida',
        'United_States',
        'Fort_Caroline_National_Memorial'
    ],
    [
        'Fort Lauderdale, Florida',
        26.1224386,
        -80.1373174,
        'Florida',
        'United_States',
        'Fort_Lauderdale'
    ],
    [
        'Fort Matanzas National Monument, Florida',
        29.7107744,
        -81.2346621,
        'Florida',
        'United_States',
        'Fort_Matanzas_National_Monument'
    ],
    [
        'Fort Myers, Florida',
        26.640628,
        -81.8723084,
        'Florida',
        'United_States',
        'Fort_Myers'
    ],
    [
        'Fort Pierce, Florida',
        27.4467056,
        -80.3256056,
        'Florida',
        'United_States',
        'Fort_Pierce'
    ],
    [
        'Fort Walton Beach, Florida',
        30.4200708,
        -86.6170308,
        'Florida',
        'United_States',
        'Fort_Walton_Beach'
    ],
    [
        'Gainesville, Florida',
        29.6516344,
        -82.3248262,
        'Florida',
        'United_States',
        'Gainesville'
    ],
    [
        'Green Cove Springs, Florida',
        29.9919085,
        -81.6781467,
        'Florida',
        'United_States',
        'Green_Cove_Springs'
    ],
    [
        'Gulf Breeze, Florida',
        30.3571438,
        -87.1638574,
        'Florida',
        'United_States',
        'Gulf_Breeze'
    ],
    [
        'Gulf Islands National Seashore, Florida',
        30.336,
        -87.143,
        'Florida',
        'United_States',
        'Gulf_Islands_National_Seashore'
    ],
    [
        'Hernando, Florida',
        28.8999815,
        -82.3745401,
        'Florida',
        'United_States',
        'Hernando'
    ],
    [
        'Hialeah, Florida',
        25.8575963,
        -80.2781057,
        'Florida',
        'United_States',
        'Hialeah'
    ],
    [
        'Hobe Sound, Florida',
        27.059498,
        -80.1364323,
        'Florida',
        'United_States',
        'Hobe_Sound'
    ],
    [
        'Hollywood, Florida',
        26.0112014,
        -80.1494901,
        'Florida',
        'United_States',
        'Hollywood'
    ],
    [
        'Inglis, Florida',
        29.0302514,
        -82.6687161,
        'Florida',
        'United_States',
        'Inglis'
    ],
    [
        'Inverness, Florida',
        28.8354507,
        -82.3313955,
        'Florida',
        'United_States',
        'Inverness'
    ],
    [
        'Jacksonville, Florida',
        30.3321838,
        -81.655651,
        'Florida',
        'United_States',
        'Jacksonville'
    ],
    [
        'Jasper, Florida',
        30.5182727,
        -82.94819,
        'Florida',
        'United_States',
        'Jasper'
    ],
    [
        'Jensen Beach, Florida',
        27.2544906,
        -80.2297697,
        'Florida',
        'United_States',
        'Jensen_Beach'
    ],
    [
        'Jupiter, Florida',
        26.9342246,
        -80.0942087,
        'Florida',
        'United_States',
        'Jupiter'
    ],
    [
        'Kennedy Space Center, Florida',
        28.5728722,
        -80.6489808,
        'Florida',
        'United_States',
        'Kennedy_Space_Center'
    ],
    [
        'Key Largo, Florida',
        25.0865151,
        -80.4472802,
        'Florida',
        'United_States',
        'Key_Largo'
    ],
    [
        'Key West, Florida',
        24.5550593,
        -81.7799871,
        'Florida',
        'United_States',
        'Key_West'
    ],
    [
        'Kissimmee, Florida',
        28.2919557,
        -81.407571,
        'Florida',
        'United_States',
        'Kissimmee'
    ],
    [
        'Lakeland, Florida',
        28.0394654,
        -81.9498042,
        'Florida',
        'United_States',
        'Lakeland'
    ],
    [
        'LAke Butler, Florida',
        30.0227391,
        -82.3395574,
        'Florida',
        'United_States',
        'LAke_Butler'
    ],
    [
        'Lake City, Florida',
        30.1896756,
        -82.6392899,
        'Florida',
        'United_States',
        'Lake_City'
    ],
    [
        'Lake Wales, Florida',
        27.9014133,
        -81.5859099,
        'Florida',
        'United_States',
        'Lake_Wales'
    ],
    [
        'Land O Lakes, Florida',
        28.2188992,
        -82.4575938,
        'Florida',
        'United_States',
        'Land_O_Lakes'
    ],
    [
        'La Belle, Florida',
        26.7617322,
        -81.4384092,
        'Florida',
        'United_States',
        'La_Belle'
    ],
    [
        'Lehigh Acres, Florida',
        26.6253497,
        -81.6248026,
        'Florida',
        'United_States',
        'Lehigh_Acres'
    ],
    [
        'Live Oak, Florida',
        30.2949457,
        -82.98402,
        'Florida',
        'United_States',
        'Live_Oak'
    ],
    [
        'Lorida, Florida',
        27.4433705,
        -81.2536807,
        'Florida',
        'United_States',
        'Lorida'
    ],
    [
        'Loxahatchee, Florida',
        26.771624,
        -80.238888,
        'Florida',
        'United_States',
        'Loxahatchee'
    ],
    [
        'Lutz, Florida',
        28.1511243,
        -82.4614831,
        'Florida',
        'United_States',
        'Lutz'
    ],
    [
        'Macclenny, Florida',
        30.2821807,
        -82.1220569,
        'Florida',
        'United_States',
        'Macclenny'
    ],
    [
        'Madison, Florida',
        30.4693772,
        -83.4129254,
        'Florida',
        'United_States',
        'Madison'
    ],
    [
        'Marianna, Florida',
        30.7743596,
        -85.2268735,
        'Florida',
        'United_States',
        'Marianna'
    ],
    [
        'Mayo, Florida',
        30.053001,
        -83.1748578,
        'Florida',
        'United_States',
        'Mayo'
    ],
    [
        'Melbourne, Florida',
        28.0836269,
        -80.6081089,
        'Florida',
        'United_States',
        'Melbourne'
    ],
    [
        'Merritt Island, Florida',
        28.3180688,
        -80.6659842,
        'Florida',
        'United_States',
        'Merritt_Island'
    ],
    [
        'Miami, Florida',
        25.7616798,
        -80.1917902,
        'Florida',
        'United_States',
        'Miami'
    ],
    [
        'Milton, Florida',
        30.6324149,
        -87.0396881,
        'Florida',
        'United_States',
        'Milton'
    ],
    [
        'Monticello, Florida',
        30.5452022,
        -83.8701636,
        'Florida',
        'United_States',
        'Monticello'
    ],
    [
        'Moore Haven, Florida',
        26.8331174,
        -81.0931234,
        'Florida',
        'United_States',
        'Moore_Haven'
    ],
    [
        'Naples, Florida',
        26.1420358,
        -81.7948103,
        'Florida',
        'United_States',
        'Naples'
    ],
    [
        'New Port Richey, Florida',
        28.2441768,
        -82.7192671,
        'Florida',
        'United_States',
        'New_Port_Richey'
    ],
    [
        'New Smyrna Beach, Florida',
        29.0258191,
        -80.9269984,
        'Florida',
        'United_States',
        'New_Smyrna_Beach'
    ],
    [
        'Niceville, Florida',
        30.5168639,
        -86.482172,
        'Florida',
        'United_States',
        'Niceville'
    ],
    [
        'North Palm Beach, Florida',
        26.8171165,
        -80.0590804,
        'Florida',
        'United_States',
        'North_Palm_Beach'
    ],
    [
        'North Port, Florida',
        27.044224,
        -82.2359254,
        'Florida',
        'United_States',
        'North_Port'
    ],
    [
        'Ocala, Florida',
        29.1871986,
        -82.1400923,
        'Florida',
        'United_States',
        'Ocala'
    ],
    [
        'Ocklawaha, Florida',
        29.0427592,
        -81.9292505,
        'Florida',
        'United_States',
        'Ocklawaha'
    ],
    [
        'Okeechobee, Florida',
        27.2439349,
        -80.8297828,
        'Florida',
        'United_States',
        'Okeechobee'
    ],
    [
        'Orange City, Florida',
        28.9488761,
        -81.2986741,
        'Florida',
        'United_States',
        'Orange_City'
    ],
    [
        'Orlando, Florida',
        28.5383355,
        -81.3792365,
        'Florida',
        'United_States',
        'Orlando'
    ],
    [
        'Palatka, Florida',
        29.6485801,
        -81.6375819,
        'Florida',
        'United_States',
        'Palatka'
    ],
    [
        'Palm Bay, Florida',
        28.0344621,
        -80.5886646,
        'Florida',
        'United_States',
        'Palm_Bay'
    ],
    [
        'Palm Beach Gardens, Florida',
        26.8233946,
        -80.1386547,
        'Florida',
        'United_States',
        'Palm_Beach_Gardens'
    ],
    [
        'Palm Coast, Florida',
        29.5844524,
        -81.2078699,
        'Florida',
        'United_States',
        'Palm_Coast'
    ],
    [
        'Panama City, Florida',
        30.1588129,
        -85.6602058,
        'Florida',
        'United_States',
        'Panama_City'
    ],
    [
        'Pembroke Pines, Florida',
        26.007765,
        -80.2962555,
        'Florida',
        'United_States',
        'Pembroke_Pines'
    ],
    [
        'Pensacola, Florida',
        30.421309,
        -87.2169149,
        'Florida',
        'United_States',
        'Pensacola'
    ],
    [
        'Perry, Florida',
        30.1174351,
        -83.5818147,
        'Florida',
        'United_States',
        'Perry'
    ],
    [
        'Plantation, Florida',
        26.1275862,
        -80.2331036,
        'Florida',
        'United_States',
        'Plantation'
    ],
    [
        'Polk City, Florida',
        28.1825147,
        -81.8239676,
        'Florida',
        'United_States',
        'Polk_City'
    ],
    [
        'Ponte Vedra, Florida',
        30.2400058,
        -81.3852595,
        'Florida',
        'United_States',
        'Ponte_Vedra'
    ],
    [
        'Port Charlotte, Florida',
        26.9761707,
        -82.0906448,
        'Florida',
        'United_States',
        'Port_Charlotte'
    ],
    [
        'Port Richey, Florida',
        28.2716755,
        -82.7195451,
        'Florida',
        'United_States',
        'Port_Richey'
    ],
    [
        'Port Saint Lucie, Florida',
        27.2730492,
        -80.3582261,
        'Florida',
        'United_States',
        'Port_Saint_Lucie'
    ],
    [
        'Port St. Joe, Florida',
        29.8118757,
        -85.302974,
        'Florida',
        'United_States',
        'Port_St._Joe'
    ],
    [
        'Punta Gorda, Florida',
        26.9297836,
        -82.0453664,
        'Florida',
        'United_States',
        'Punta_Gorda'
    ],
    [
        'Quincy, Florida',
        30.5871392,
        -84.5832453,
        'Florida',
        'United_States',
        'Quincy'
    ],
    [
        'Saint Augustine, Florida',
        29.9012437,
        -81.3124341,
        'Florida',
        'United_States',
        'Saint_Augustine'
    ],
    [
        'Saint Petersburg, Florida',
        27.7518284,
        -82.6267345,
        'Florida',
        'United_States',
        'Saint_Petersburg'
    ],
    [
        'Sanford, Florida',
        28.8028612,
        -81.269453,
        'Florida',
        'United_States',
        'Sanford'
    ],
    [
        'Sarasota, Florida',
        27.3364347,
        -82.5306527,
        'Florida',
        'United_States',
        'Sarasota'
    ],
    [
        'Sebastian, Florida',
        27.816415,
        -80.4706078,
        'Florida',
        'United_States',
        'Sebastian'
    ],
    [
        'Sebring, Florida',
        27.495592,
        -81.440907,
        'Florida',
        'United_States',
        'Sebring'
    ],
    [
        'Spring Hill, Florida',
        28.4831682,
        -82.5369872,
        'Florida',
        'United_States',
        'Spring_Hill'
    ],
    [
        'Starke, Florida',
        29.9441298,
        -82.1098275,
        'Florida',
        'United_States',
        'Starke'
    ],
    [
        'Stuart, Florida',
        27.197548,
        -80.2528257,
        'Florida',
        'United_States',
        'Stuart'
    ],
    [
        'Tallahassee, Florida',
        30.4382559,
        -84.2807329,
        'Florida',
        'United_States',
        'Tallahassee'
    ],
    [
        'Tampa, Florida',
        27.950575,
        -82.4571776,
        'Florida',
        'United_States',
        'Tampa'
    ],
    [
        'Tavares, Florida',
        28.8041579,
        -81.725632,
        'Florida',
        'United_States',
        'Tavares'
    ],
    [
        'Timucaun Ecological and Historical Preserve, Florida',
        30.4544578,
        -81.4498717,
        'Florida',
        'United_States',
        'Timucaun_Ecological_and_Historical_Preserve'
    ],
    [
        'Titusville, Florida',
        28.6122187,
        -80.8075537,
        'Florida',
        'United_States',
        'Titusville'
    ],
    [
        'Trenton, Florida',
        29.6132942,
        -82.8176203,
        'Florida',
        'United_States',
        'Trenton'
    ],
    [
        'Venice, Florida',
        27.0997775,
        -82.4542632,
        'Florida',
        'United_States',
        'Venice'
    ],
    [
        'Vero Beach, Florida',
        27.6386434,
        -80.3972736,
        'Florida',
        'United_States',
        'Vero_Beach'
    ],
    [
        'Wauchula, Florida',
        27.5472589,
        -81.8114715,
        'Florida',
        'United_States',
        'Wauchula'
    ],
    [
        'Wellborn, Florida',
        30.2304453,
        -82.8192807,
        'Florida',
        'United_States',
        'Wellborn'
    ],
    [
        'West Palm Beach, Florida',
        26.7153424,
        -80.0533746,
        'Florida',
        'United_States',
        'West_Palm_Beach'
    ],
    [
        'Wilton Manors, Florida',
        26.1603626,
        -80.138934,
        'Florida',
        'United_States',
        'Wilton_Manors'
    ],
    [
        'Winter Haven, Florida',
        28.0222435,
        -81.7328567,
        'Florida',
        'United_States',
        'Winter_Haven'
    ],
    [
        'Zephyrhills, Florida',
        28.2336196,
        -82.1811947,
        'Florida',
        'United_States',
        'Zephyrhills'
    ],
    [
        'Abbeville, Georgia',
        31.9921223,
        -83.3068243,
        'Georgia',
        'United_States',
        'Abbeville'
    ],
    [
        'Acworth, Georgia',
        34.0659329,
        -84.6768796,
        'Georgia',
        'United_States',
        'Acworth'
    ],
    [
        'Adel, Georgia',
        31.1371358,
        -83.4234936,
        'Georgia',
        'United_States',
        'Adel'
    ],
    [
        'Alamo, Georgia',
        32.1471202,
        -82.7779171,
        'Georgia',
        'United_States',
        'Alamo'
    ],
    [
        'Albany, Georgia',
        31.5785074,
        -84.155741,
        'Georgia',
        'United_States',
        'Albany'
    ],
    [
        'Alma, Georgia',
        31.5393701,
        -82.4623557,
        'Georgia',
        'United_States',
        'Alma'
    ],
    [
        'Americus, Georgia',
        32.0723861,
        -84.2326876,
        'Georgia',
        'United_States',
        'Americus'
    ],
    [
        'Andersonville National Historical Site, Georgia',
        32.2002948,
        -84.1303207,
        'Georgia',
        'United_States',
        'Andersonville_National_Historical_Site'
    ],
    [
        'Appling, Georgia',
        33.54609,
        -82.3163154,
        'Georgia',
        'United_States',
        'Appling'
    ],
    [
        'Ashburn, Georgia',
        31.7060134,
        -83.653224,
        'Georgia',
        'United_States',
        'Ashburn'
    ],
    [
        'Athens, Georgia',
        33.9519347,
        -83.357567,
        'Georgia',
        'United_States',
        'Athens'
    ],
    [
        'Atlanta, Georgia',
        33.7489954,
        -84.3879824,
        'Georgia',
        'United_States',
        'Atlanta'
    ],
    [
        'Augusta, Georgia',
        33.4734978,
        -82.0105148,
        'Georgia',
        'United_States',
        'Augusta'
    ],
    [
        'Bainbridge, Georgia',
        30.9037995,
        -84.5754699,
        'Georgia',
        'United_States',
        'Bainbridge'
    ],
    [
        'Barnesville, Georgia',
        33.0545709,
        -84.1557495,
        'Georgia',
        'United_States',
        'Barnesville'
    ],
    [
        'Baxley, Georgia',
        31.7782514,
        -82.3484618,
        'Georgia',
        'United_States',
        'Baxley'
    ],
    [
        'Blackshear, Georgia',
        31.3060513,
        -82.2420661,
        'Georgia',
        'United_States',
        'Blackshear'
    ],
    [
        'Blairsville, Georgia',
        34.8761989,
        -83.9582412,
        'Georgia',
        'United_States',
        'Blairsville'
    ],
    [
        'Blakely, Georgia',
        31.3776754,
        -84.934092,
        'Georgia',
        'United_States',
        'Blakely'
    ],
    [
        'Blue Ridge, Georgia',
        34.8639719,
        -84.324087,
        'Georgia',
        'United_States',
        'Blue_Ridge'
    ],
    [
        'Bowman, Georgia',
        34.2048295,
        -83.0307002,
        'Georgia',
        'United_States',
        'Bowman'
    ],
    [
        'Brunswick, Georgia',
        31.1499528,
        -81.4914894,
        'Georgia',
        'United_States',
        'Brunswick'
    ],
    [
        'Buchanan, Georgia',
        33.8021734,
        -85.1900624,
        'Georgia',
        'United_States',
        'Buchanan'
    ],
    [
        'Buena Vista, Georgia',
        32.3190398,
        -84.5171411,
        'Georgia',
        'United_States',
        'Buena_Vista'
    ],
    [
        'Butler, Georgia',
        32.5570898,
        -84.2382482,
        'Georgia',
        'United_States',
        'Butler'
    ],
    [
        'Cairo, Georgia',
        30.8774132,
        -84.2012897,
        'Georgia',
        'United_States',
        'Cairo'
    ],
    [
        'Calhoun, Georgia',
        34.502587,
        -84.9510542,
        'Georgia',
        'United_States',
        'Calhoun'
    ],
    [
        'Camilla, Georgia',
        31.2312933,
        -84.2104611,
        'Georgia',
        'United_States',
        'Camilla'
    ],
    [
        'Canton, Georgia',
        34.2367621,
        -84.4907621,
        'Georgia',
        'United_States',
        'Canton'
    ],
    [
        'Carnesville, Georgia',
        34.3698266,
        -83.235155,
        'Georgia',
        'United_States',
        'Carnesville'
    ],
    [
        'Carrollton, Georgia',
        33.5801103,
        -85.0766113,
        'Georgia',
        'United_States',
        'Carrollton'
    ],
    [
        'Catersville, Georgia',
        34.1650972,
        -84.7999382,
        'Georgia',
        'United_States',
        'Catersville'
    ],
    [
        'Cedartown, Georgia',
        34.0112715,
        -85.2565823,
        'Georgia',
        'United_States',
        'Cedartown'
    ],
    [
        'Chatsworth, Georgia',
        34.7659145,
        -84.7699385,
        'Georgia',
        'United_States',
        'Chatsworth'
    ],
    [
        'Chattahoochee River National Recreation Area, Georgia',
        33.9724,
        -84.2668,
        'Georgia',
        'United_States',
        'Chattahoochee_River_National_Recreation_Area'
    ],
    [
        'Chickamauga and Chattanooga National Military Park, Georgia',
        34.9405063,
        -85.2599781,
        'Georgia',
        'United_States',
        'Chickamauga_and_Chattanooga_National_Military_Park'
    ],
    [
        'Clarkesville, Georgia',
        34.6125971,
        -83.5248933,
        'Georgia',
        'United_States',
        'Clarkesville'
    ],
    [
        'Claxton, Georgia',
        32.1615814,
        -81.9040047,
        'Georgia',
        'United_States',
        'Claxton'
    ],
    [
        'Clayton, Georgia',
        34.8781479,
        -83.4009933,
        'Georgia',
        'United_States',
        'Clayton'
    ],
    [
        'Cleveland, Georgia',
        34.5970402,
        -83.7632366,
        'Georgia',
        'United_States',
        'Cleveland'
    ],
    [
        'Cochran, Georgia',
        32.3868278,
        -83.3546098,
        'Georgia',
        'United_States',
        'Cochran'
    ],
    [
        'Colquitt, Georgia',
        31.1712935,
        -84.7332527,
        'Georgia',
        'United_States',
        'Colquitt'
    ],
    [
        'Columbus, Georgia',
        32.4609764,
        -84.9877094,
        'Georgia',
        'United_States',
        'Columbus'
    ],
    [
        'Conyers, Georgia',
        33.6676103,
        -84.0176904,
        'Georgia',
        'United_States',
        'Conyers'
    ],
    [
        'Cordele, Georgia',
        31.9635074,
        -83.7823938,
        'Georgia',
        'United_States',
        'Cordele'
    ],
    [
        'Cornelia, Georgia',
        34.5114883,
        -83.5271166,
        'Georgia',
        'United_States',
        'Cornelia'
    ],
    [
        'Covington, Georgia',
        33.5967815,
        -83.8601827,
        'Georgia',
        'United_States',
        'Covington'
    ],
    [
        'Crawfordville, Georgia',
        33.5540209,
        -82.8959785,
        'Georgia',
        'United_States',
        'Crawfordville'
    ],
    [
        'Cumberland Island National Seashore, Georgia',
        30.7206514,
        -81.5502114,
        'Georgia',
        'United_States',
        'Cumberland_Island_National_Seashore'
    ],
    [
        'Cumming, Georgia',
        34.2073196,
        -84.1401926,
        'Georgia',
        'United_States',
        'Cumming'
    ],
    [
        'Cusseta, Georgia',
        32.3061354,
        -84.7770485,
        'Georgia',
        'United_States',
        'Cusseta'
    ],
    [
        'Cuthbert, Georgia',
        31.7712748,
        -84.7893658,
        'Georgia',
        'United_States',
        'Cuthbert'
    ],
    [
        'Dacula, Georgia',
        33.9887165,
        -83.8979573,
        'Georgia',
        'United_States',
        'Dacula'
    ],
    [
        'Dahlonega, Georgia',
        34.5261465,
        -83.9843953,
        'Georgia',
        'United_States',
        'Dahlonega'
    ],
    [
        'Dallas, Georgia',
        33.9244531,
        -84.8413056,
        'Georgia',
        'United_States',
        'Dallas'
    ],
    [
        'Dalton, Georgia',
        34.7698021,
        -84.9702228,
        'Georgia',
        'United_States',
        'Dalton'
    ],
    [
        'Danielsville, Georgia',
        34.1242771,
        -83.2212629,
        'Georgia',
        'United_States',
        'Danielsville'
    ],
    [
        'Darien, Georgia',
        31.3702255,
        -81.4339903,
        'Georgia',
        'United_States',
        'Darien'
    ],
    [
        'Dawson, Georgia',
        31.7735001,
        -84.4465826,
        'Georgia',
        'United_States',
        'Dawson'
    ],
    [
        'Dawsonville, Georgia',
        34.4212052,
        -84.1190804,
        'Georgia',
        'United_States',
        'Dawsonville'
    ],
    [
        'Decatur, Georgia',
        33.7748275,
        -84.2963123,
        'Georgia',
        'United_States',
        'Decatur'
    ],
    [
        'Donalsonville, Georgia',
        31.0404625,
        -84.8790911,
        'Georgia',
        'United_States',
        'Donalsonville'
    ],
    [
        'Douglas, Georgia',
        31.5088073,
        -82.8498654,
        'Georgia',
        'United_States',
        'Douglas'
    ],
    [
        'Douglasville, Georgia',
        33.7514966,
        -84.7477136,
        'Georgia',
        'United_States',
        'Douglasville'
    ],
    [
        'Dublin, Georgia',
        32.5404447,
        -82.903754,
        'Georgia',
        'United_States',
        'Dublin'
    ],
    [
        'Duluth, Georgia',
        34.0028786,
        -84.1446376,
        'Georgia',
        'United_States',
        'Duluth'
    ],
    [
        'Eastman, Georgia',
        32.1976729,
        -83.1776514,
        'Georgia',
        'United_States',
        'Eastman'
    ],
    [
        'Eatonton, Georgia',
        33.3267997,
        -83.3884961,
        'Georgia',
        'United_States',
        'Eatonton'
    ],
    [
        'Elberton, Georgia',
        34.1112226,
        -82.8670839,
        'Georgia',
        'United_States',
        'Elberton'
    ],
    [
        'Ellaville, Georgia',
        32.2382139,
        -84.3090798,
        'Georgia',
        'United_States',
        'Ellaville'
    ],
    [
        'Ellijay, Georgia',
        34.6948076,
        -84.4821498,
        'Georgia',
        'United_States',
        'Ellijay'
    ],
    [
        'Fayetteville, Georgia',
        33.4487257,
        -84.4549262,
        'Georgia',
        'United_States',
        'Fayetteville'
    ],
    [
        'Fitzgerald, Georgia',
        31.7149082,
        -83.2526545,
        'Georgia',
        'United_States',
        'Fitzgerald'
    ],
    [
        'Folkston, Georgia',
        30.8305102,
        -82.0098375,
        'Georgia',
        'United_States',
        'Folkston'
    ],
    [
        'Forsyth, Georgia',
        33.0342974,
        -83.938242,
        'Georgia',
        'United_States',
        'Forsyth'
    ],
    [
        'Fort Frederica National Monument, Georgia',
        31.2230803,
        -81.3892757,
        'Georgia',
        'United_States',
        'Fort_Frederica_National_Monument'
    ],
    [
        'Fort Gaines, Georgia',
        31.6090569,
        -85.0471505,
        'Georgia',
        'United_States',
        'Fort_Gaines'
    ],
    [
        'Fort Pulaski National Monument, Georgia',
        32.02706,
        -80.8904868,
        'Georgia',
        'United_States',
        'Fort_Pulaski_National_Monument'
    ],
    [
        'Fort Valley, Georgia',
        32.5537585,
        -83.8874084,
        'Georgia',
        'United_States',
        'Fort_Valley'
    ],
    [
        'Franklin, Georgia',
        33.2776182,
        -85.0979973,
        'Georgia',
        'United_States',
        'Franklin'
    ],
    [
        'Gainesville, Georgia',
        34.2978794,
        -83.8240663,
        'Georgia',
        'United_States',
        'Gainesville'
    ],
    [
        'Georgetown, Georgia',
        31.9832644,
        -81.2273334,
        'Georgia',
        'United_States',
        'Georgetown'
    ],
    [
        'Gibson, Georgia',
        33.2334789,
        -82.5954083,
        'Georgia',
        'United_States',
        'Gibson'
    ],
    [
        'Gray, Georgia',
        33.0095802,
        -83.5337816,
        'Georgia',
        'United_States',
        'Gray'
    ],
    [
        'Greensboro, Georgia',
        33.5756831,
        -83.1823789,
        'Georgia',
        'United_States',
        'Greensboro'
    ],
    [
        'Greenville, Georgia',
        33.0287373,
        -84.7129848,
        'Georgia',
        'United_States',
        'Greenville'
    ],
    [
        'Griffin, Georgia',
        33.2467807,
        -84.2640904,
        'Georgia',
        'United_States',
        'Griffin'
    ],
    [
        'Hamilton, Georgia',
        32.7579106,
        -84.8749311,
        'Georgia',
        'United_States',
        'Hamilton'
    ],
    [
        'Hartwell, Georgia',
        34.3528825,
        -82.932087,
        'Georgia',
        'United_States',
        'Hartwell'
    ],
    [
        'Hawkinsville, Georgia',
        32.2837731,
        -83.4721177,
        'Georgia',
        'United_States',
        'Hawkinsville'
    ],
    [
        'Hazlehurst, Georgia',
        31.8696309,
        -82.5943026,
        'Georgia',
        'United_States',
        'Hazlehurst'
    ],
    [
        'Hiawwassee, Georgia',
        34.9492586,
        -83.7573948,
        'Georgia',
        'United_States',
        'Hiawwassee'
    ],
    [
        'Hinesville, Georgia',
        31.846877,
        -81.5959453,
        'Georgia',
        'United_States',
        'Hinesville'
    ],
    [
        'Homer, Georgia',
        34.3337156,
        -83.499055,
        'Georgia',
        'United_States',
        'Homer'
    ],
    [
        'Homerville, Georgia',
        31.0365983,
        -82.7470849,
        'Georgia',
        'United_States',
        'Homerville'
    ],
    [
        'Irwinton, Georgia',
        32.8112594,
        -83.1726541,
        'Georgia',
        'United_States',
        'Irwinton'
    ],
    [
        'Jackson, Georgia',
        33.2945651,
        -83.9660209,
        'Georgia',
        'United_States',
        'Jackson'
    ],
    [
        'Jasper, Georgia',
        34.4695524,
        -84.4289888,
        'Georgia',
        'United_States',
        'Jasper'
    ],
    [
        'Jefferson, Georgia',
        34.1170537,
        -83.5723876,
        'Georgia',
        'United_States',
        'Jefferson'
    ],
    [
        'Jeffersonville, Georgia',
        32.687646,
        -83.3465561,
        'Georgia',
        'United_States',
        'Jeffersonville'
    ],
    [
        'Jesup, Georgia',
        31.6074365,
        -81.8853924,
        'Georgia',
        'United_States',
        'Jesup'
    ],
    [
        'Jimmy Carter National Historic Site, Georgia',
        32.0365107,
        -84.3925979,
        'Georgia',
        'United_States',
        'Jimmy_Carter_National_Historic_Site'
    ],
    [
        'Jonesboro, Georgia',
        33.5215013,
        -84.3538128,
        'Georgia',
        'United_States',
        'Jonesboro'
    ],
    [
        'Kennesaw Mountain National Battlefield Park, Georgia',
        33.9507855,
        -84.5974549,
        'Georgia',
        'United_States',
        'Kennesaw_Mountain_National_Battlefield_Park'
    ],
    [
        'Knoxville, Georgia',
        32.7243072,
        -83.9976875,
        'Georgia',
        'United_States',
        'Knoxville'
    ],
    [
        'LaFayette, Georgia',
        34.7048022,
        -85.2818998,
        'Georgia',
        'United_States',
        'LaFayette'
    ],
    [
        'Lagrange, Georgia',
        33.0362218,
        -85.0322444,
        'Georgia',
        'United_States',
        'Lagrange'
    ],
    [
        'Lakeland, Georgia',
        31.0410373,
        -83.0751471,
        'Georgia',
        'United_States',
        'Lakeland'
    ],
    [
        'Lawrenceville, Georgia',
        33.9562149,
        -83.9879625,
        'Georgia',
        'United_States',
        'Lawrenceville'
    ],
    [
        'Leesburg, Georgia',
        31.7321156,
        -84.1707423,
        'Georgia',
        'United_States',
        'Leesburg'
    ],
    [
        'Lexington, Georgia',
        33.8698404,
        -83.111817,
        'Georgia',
        'United_States',
        'Lexington'
    ],
    [
        'Lincolnton, Georgia',
        33.7923477,
        -82.479018,
        'Georgia',
        'United_States',
        'Lincolnton'
    ],
    [
        'Louisville, Georgia',
        33.0015407,
        -82.4112377,
        'Georgia',
        'United_States',
        'Louisville'
    ],
    [
        'Ludowici, Georgia',
        31.7079919,
        -81.7423357,
        'Georgia',
        'United_States',
        'Ludowici'
    ],
    [
        'Lumpkin, Georgia',
        32.0509895,
        -84.7990901,
        'Georgia',
        'United_States',
        'Lumpkin'
    ],
    [
        'Lyons, Georgia',
        32.2043546,
        -82.321791,
        'Georgia',
        'United_States',
        'Lyons'
    ],
    [
        'Macon, Georgia',
        32.8406946,
        -83.6324022,
        'Georgia',
        'United_States',
        'Macon'
    ],
    [
        'Madison, Georgia',
        33.5956813,
        -83.467944,
        'Georgia',
        'United_States',
        'Madison'
    ],
    [
        'Marietta, Georgia',
        33.952602,
        -84.5499327,
        'Georgia',
        'United_States',
        'Marietta'
    ],
    [
        'Martin Luther King Jr National Historic Site, Georgia',
        33.7563179,
        -84.3734515,
        'Georgia',
        'United_States',
        'Martin_Luther_King_Jr_National_Historic_Site'
    ],
    [
        'McCaysville, Georgia',
        34.9861914,
        -84.3713117,
        'Georgia',
        'United_States',
        'McCaysville'
    ],
    [
        'McDonough, Georgia',
        33.4473361,
        -84.1468616,
        'Georgia',
        'United_States',
        'McDonough'
    ],
    [
        'McRae, Georgia',
        32.0679541,
        -82.9006993,
        'Georgia',
        'United_States',
        'McRae'
    ],
    [
        'Metter, Georgia',
        32.397118,
        -82.0601195,
        'Georgia',
        'United_States',
        'Metter'
    ],
    [
        'Midway, Georgia',
        31.805769,
        -81.4306642,
        'Georgia',
        'United_States',
        'Midway'
    ],
    [
        'Milledgeville, Georgia',
        33.0801429,
        -83.2320991,
        'Georgia',
        'United_States',
        'Milledgeville'
    ],
    [
        'Millen, Georgia',
        32.8040512,
        -81.9492812,
        'Georgia',
        'United_States',
        'Millen'
    ],
    [
        'Monroe, Georgia',
        33.7948364,
        -83.713229,
        'Georgia',
        'United_States',
        'Monroe'
    ],
    [
        'Monticello, Georgia',
        33.3048479,
        -83.6832289,
        'Georgia',
        'United_States',
        'Monticello'
    ],
    [
        'Morgan, Georgia',
        31.5376731,
        -84.5993601,
        'Georgia',
        'United_States',
        'Morgan'
    ],
    [
        'Moultrie, Georgia',
        31.1799407,
        -83.7888387,
        'Georgia',
        'United_States',
        'Moultrie'
    ],
    [
        'Mount Vernon, Georgia',
        32.1785145,
        -82.5945783,
        'Georgia',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Nahunta, Georgia',
        31.20439,
        -81.981226,
        'Georgia',
        'United_States',
        'Nahunta'
    ],
    [
        'Nashville, Georgia',
        31.2074197,
        -83.2501548,
        'Georgia',
        'United_States',
        'Nashville'
    ],
    [
        'Newnan, Georgia',
        33.3806716,
        -84.7996573,
        'Georgia',
        'United_States',
        'Newnan'
    ],
    [
        'Newton, Georgia',
        31.3129575,
        -84.3357424,
        'Georgia',
        'United_States',
        'Newton'
    ],
    [
        'Norcross, Georgia',
        33.9412127,
        -84.2135309,
        'Georgia',
        'United_States',
        'Norcross'
    ],
    [
        'Ocilla, Georgia',
        31.5943567,
        -83.2504328,
        'Georgia',
        'United_States',
        'Ocilla'
    ],
    [
        'Ocmulgee National Monument, Georgia',
        32.8396494,
        -83.603366,
        'Georgia',
        'United_States',
        'Ocmulgee_National_Monument'
    ],
    [
        'Oglethorpe, Georgia',
        32.293769,
        -84.0610191,
        'Georgia',
        'United_States',
        'Oglethorpe'
    ],
    [
        'Peachtree City, Georgia',
        33.3968557,
        -84.5963432,
        'Georgia',
        'United_States',
        'Peachtree_City'
    ],
    [
        'Pearson, Georgia',
        31.297703,
        -82.8523668,
        'Georgia',
        'United_States',
        'Pearson'
    ],
    [
        'Pembroke, Georgia',
        32.1360332,
        -81.6220565,
        'Georgia',
        'United_States',
        'Pembroke'
    ],
    [
        'Perry, Georgia',
        32.4582065,
        -83.7315723,
        'Georgia',
        'United_States',
        'Perry'
    ],
    [
        'Preston, Georgia',
        32.0659918,
        -84.537417,
        'Georgia',
        'United_States',
        'Preston'
    ],
    [
        'Quitman, Georgia',
        30.7849191,
        -83.5598811,
        'Georgia',
        'United_States',
        'Quitman'
    ],
    [
        'Reidsville, Georgia',
        32.0868611,
        -82.1178978,
        'Georgia',
        'United_States',
        'Reidsville'
    ],
    [
        'Ringgold, Georgia',
        34.9159099,
        -85.1091173,
        'Georgia',
        'United_States',
        'Ringgold'
    ],
    [
        'Rome, Georgia',
        34.257038,
        -85.1646726,
        'Georgia',
        'United_States',
        'Rome'
    ],
    [
        'Roswell, Georgia',
        34.0232431,
        -84.3615555,
        'Georgia',
        'United_States',
        'Roswell'
    ],
    [
        'Saint Simons Island, Georgia',
        31.1595905,
        -81.3885517,
        'Georgia',
        'United_States',
        'Saint_Simons_Island'
    ],
    [
        'Sandersville, Georgia',
        32.9815431,
        -82.810138,
        'Georgia',
        'United_States',
        'Sandersville'
    ],
    [
        'Savannah, Georgia',
        32.0835407,
        -81.0998342,
        'Georgia',
        'United_States',
        'Savannah'
    ],
    [
        'Snellville, Georgia',
        33.857328,
        -84.0199108,
        'Georgia',
        'United_States',
        'Snellville'
    ],
    [
        'Soperton, Georgia',
        32.3771182,
        -82.5923554,
        'Georgia',
        'United_States',
        'Soperton'
    ],
    [
        'Sparta, Georgia',
        33.2757006,
        -82.9762589,
        'Georgia',
        'United_States',
        'Sparta'
    ],
    [
        'Springfield, Georgia',
        32.3724131,
        -81.3114988,
        'Georgia',
        'United_States',
        'Springfield'
    ],
    [
        'Statenville, Georgia',
        30.7034299,
        -83.0280613,
        'Georgia',
        'United_States',
        'Statenville'
    ],
    [
        'Statesboro, Georgia',
        32.4487876,
        -81.7831674,
        'Georgia',
        'United_States',
        'Statesboro'
    ],
    [
        'Stone Mountain, Georgia',
        33.8081608,
        -84.170196,
        'Georgia',
        'United_States',
        'Stone_Mountain'
    ],
    [
        'Summerville, Georgia',
        34.480642,
        -85.3477343,
        'Georgia',
        'United_States',
        'Summerville'
    ],
    [
        'Swainsboro, Georgia',
        32.5973856,
        -82.3337376,
        'Georgia',
        'United_States',
        'Swainsboro'
    ],
    [
        'Sylvania, Georgia',
        32.7504441,
        -81.636776,
        'Georgia',
        'United_States',
        'Sylvania'
    ],
    [
        'Sylvester, Georgia',
        31.5307349,
        -83.8354542,
        'Georgia',
        'United_States',
        'Sylvester'
    ],
    [
        'Talbotton, Georgia',
        32.6776372,
        -84.5393664,
        'Georgia',
        'United_States',
        'Talbotton'
    ],
    [
        'Thomaston, Georgia',
        32.8881879,
        -84.3265854,
        'Georgia',
        'United_States',
        'Thomaston'
    ],
    [
        'Thomasville, Georgia',
        30.8365815,
        -83.9787808,
        'Georgia',
        'United_States',
        'Thomasville'
    ],
    [
        'Thomson, Georgia',
        33.4706927,
        -82.5045733,
        'Georgia',
        'United_States',
        'Thomson'
    ],
    [
        'Tifton, Georgia',
        31.4504629,
        -83.5084973,
        'Georgia',
        'United_States',
        'Tifton'
    ],
    [
        'Toccoa, Georgia',
        34.5773206,
        -83.3323851,
        'Georgia',
        'United_States',
        'Toccoa'
    ],
    [
        'Trenton, Georgia',
        34.8720222,
        -85.50913,
        'Georgia',
        'United_States',
        'Trenton'
    ],
    [
        'Tybee Island, Georgia',
        32.0002152,
        -80.845666,
        'Georgia',
        'United_States',
        'Tybee_Island'
    ],
    [
        'Valdosta, Georgia',
        30.8327022,
        -83.2784851,
        'Georgia',
        'United_States',
        'Valdosta'
    ],
    [
        'Vidalia, Georgia',
        32.2176855,
        -82.4134614,
        'Georgia',
        'United_States',
        'Vidalia'
    ],
    [
        'Vienna, Georgia',
        32.0915577,
        -83.7954518,
        'Georgia',
        'United_States',
        'Vienna'
    ],
    [
        'Warner Robins, Georgia',
        32.6130007,
        -83.624201,
        'Georgia',
        'United_States',
        'Warner_Robins'
    ],
    [
        'Warrenton, Georgia',
        33.4070837,
        -82.6620781,
        'Georgia',
        'United_States',
        'Warrenton'
    ],
    [
        'Washington, Georgia',
        33.7367948,
        -82.7393089,
        'Georgia',
        'United_States',
        'Washington'
    ],
    [
        'Watkinsville, Georgia',
        33.8628959,
        -83.4087708,
        'Georgia',
        'United_States',
        'Watkinsville'
    ],
    [
        'Waycross, Georgia',
        31.2135511,
        -82.3540178,
        'Georgia',
        'United_States',
        'Waycross'
    ],
    [
        'Waynesboro, Georgia',
        33.0898731,
        -82.0156736,
        'Georgia',
        'United_States',
        'Waynesboro'
    ],
    [
        'West Point, Georgia',
        32.8779056,
        -85.1832746,
        'Georgia',
        'United_States',
        'West_Point'
    ],
    [
        'Winder, Georgia',
        33.9926097,
        -83.7201709,
        'Georgia',
        'United_States',
        'Winder'
    ],
    [
        'Woodbine, Georgia',
        30.9638429,
        -81.7226063,
        'Georgia',
        'United_States',
        'Woodbine'
    ],
    [
        'Woodstock, Georgia',
        34.1014873,
        -84.5193754,
        'Georgia',
        'United_States',
        'Woodstock'
    ],
    [
        'Wrightsville, Georgia',
        32.7293279,
        -82.719859,
        'Georgia',
        'United_States',
        'Wrightsville'
    ],
    [
        'Zebulon, Georgia',
        33.1023454,
        -84.3426997,
        'Georgia',
        'United_States',
        'Zebulon'
    ],
    ['Agana, Guam', 13.4762824, 144.7502228, 'Guam', 'United_States', 'Agana'],
    [
        'Andersen AFB, Guam',
        13.5875,
        144.924438,
        'Guam',
        'United_States',
        'Andersen_AFB'
    ],
    ['Dededo, Guam', 13.5452512, 144.851121, 'Guam', 'United_States', 'Dededo'],
    [
        'War in the Pacific National Historical Park, Guam',
        13.3896,
        144.6534,
        'Guam',
        'United_States',
        'War_in_the_Pacific_National_Historical_Park'
    ],
    [
        'Haleakala, Hawaii',
        20.7096921,
        -156.2535147,
        'Hawaii',
        'United_States',
        'Haleakala'
    ],
    ['Hana, Hawaii', 20.757508, -155.988407, 'Hawaii', 'United_States', 'Hana'],
    [
        'Hawaii Volcanoes National Park, Hawaii',
        19.3833355,
        -155.2000045,
        'Hawaii',
        'United_States',
        'Hawaii_Volcanoes_National_Park'
    ],
    [
        'Hilo, Hawaii',
        19.7070942,
        -155.0884869,
        'Hawaii',
        'United_States',
        'Hilo'
    ],
    [
        'Honokaa, Hawaii',
        20.0789707,
        -155.4727661,
        'Hawaii',
        'United_States',
        'Honokaa'
    ],
    [
        'Honolulu, Hawaii',
        21.3069444,
        -157.8583333,
        'Hawaii',
        'United_States',
        'Honolulu'
    ],
    [
        'Kalaupapa National Historical Park, Hawaii',
        21.1546,
        -156.9246,
        'Hawaii',
        'United_States',
        'Kalaupapa_National_Historical_Park'
    ],
    [
        'Kaloko Honokohau National Historical Park, Hawaii',
        19.6774239,
        -156.0250009,
        'Hawaii',
        'United_States',
        'Kaloko_Honokohau_National_Historical_Park'
    ],
    [
        'Kaunakakai, Hawaii',
        21.0933333,
        -157.0238889,
        'Hawaii',
        'United_States',
        'Kaunakakai'
    ],
    [
        'Kihei, Hawaii',
        20.7644275,
        -156.4450063,
        'Hawaii',
        'United_States',
        'Kihei'
    ],
    [
        'Kona, Hawaii',
        19.639994,
        -155.9969261,
        'Hawaii',
        'United_States',
        'Kona'
    ],
    [
        'Lahaina, Hawaii',
        20.8783333,
        -156.6825,
        'Hawaii',
        'United_States',
        'Lahaina'
    ],
    [
        'Lihue, Hawaii',
        21.9811111,
        -159.3711111,
        'Hawaii',
        'United_States',
        'Lihue'
    ],
    [
        'Paia, Hawaii',
        20.9033333,
        -156.3694444,
        'Hawaii',
        'United_States',
        'Paia'
    ],
    [
        'Puuhonua o Honaunau National Historical Park, Hawaii',
        19.4215385,
        -155.9105253,
        'Hawaii',
        'United_States',
        'Puuhonua_o_Honaunau_National_Historical_Park'
    ],
    [
        'Puukohola Heiau National Historic Site, Hawaii',
        20.0256181,
        -155.8217812,
        'Hawaii',
        'United_States',
        'Puukohola_Heiau_National_Historic_Site'
    ],
    [
        'Wailuku, Hawaii',
        20.8911111,
        -156.5047222,
        'Hawaii',
        'United_States',
        'Wailuku'
    ],
    [
        'American Falls, Idaho',
        42.7860226,
        -112.8544377,
        'Idaho',
        'United_States',
        'American_Falls'
    ],
    ['Arco, Idaho', 43.6365693, -113.3002844, 'Idaho', 'United_States', 'Arco'],
    [
        'Blackfoot, Idaho',
        43.1904709,
        -112.3449773,
        'Idaho',
        'United_States',
        'Blackfoot'
    ],
    [
        'Boise, Idaho',
        43.6187102,
        -116.2146068,
        'Idaho',
        'United_States',
        'Boise'
    ],
    [
        'Bonners Ferry, Idaho',
        48.6913257,
        -116.3163092,
        'Idaho',
        'United_States',
        'Bonners_Ferry'
    ],
    [
        'Burley, Idaho',
        42.5357428,
        -113.7927948,
        'Idaho',
        'United_States',
        'Burley'
    ],
    [
        'Caldwell, Idaho',
        43.6629384,
        -116.6873596,
        'Idaho',
        'United_States',
        'Caldwell'
    ],
    [
        'Cascade, Idaho',
        44.5162821,
        -116.0417983,
        'Idaho',
        'United_States',
        'Cascade'
    ],
    [
        'Challis, Idaho',
        44.5046445,
        -114.2317308,
        'Idaho',
        'United_States',
        'Challis'
    ],
    [
        'City of Rocks National Reserve, Idaho',
        42.0774026,
        -113.7037797,
        'Idaho',
        'United_States',
        'City_of_Rocks_National_Reserve'
    ],
    [
        'Coeur d Alene, Idaho',
        47.6776832,
        -116.7804664,
        'Idaho',
        'United_States',
        'Coeur_d_Alene'
    ],
    [
        'Council, Idaho',
        44.7298876,
        -116.4381985,
        'Idaho',
        'United_States',
        'Council'
    ],
    [
        'Craters of the Moon National Monument, Idaho',
        43.2058067,
        -113.5001702,
        'Idaho',
        'United_States',
        'Craters_of_the_Moon_National_Monument'
    ],
    [
        'Driggs, Idaho',
        43.7232522,
        -111.1113326,
        'Idaho',
        'United_States',
        'Driggs'
    ],
    [
        'Dubois, Idaho',
        44.1762984,
        -112.2308197,
        'Idaho',
        'United_States',
        'Dubois'
    ],
    [
        'Emmett, Idaho',
        43.8734978,
        -116.4993012,
        'Idaho',
        'United_States',
        'Emmett'
    ],
    [
        'Fairfield, Idaho',
        43.3465675,
        -114.7917279,
        'Idaho',
        'United_States',
        'Fairfield'
    ],
    [
        'Gooding, Idaho',
        42.9387917,
        -114.7131081,
        'Idaho',
        'United_States',
        'Gooding'
    ],
    [
        'Grangeville, Idaho',
        45.926552,
        -116.1223654,
        'Idaho',
        'United_States',
        'Grangeville'
    ],
    [
        'Hagerman Fossil Beds National Monument, Idaho',
        42.7816632,
        -114.9521998,
        'Idaho',
        'United_States',
        'Hagerman_Fossil_Beds_National_Monument'
    ],
    [
        'Hailey, Idaho',
        43.5196288,
        -114.3153245,
        'Idaho',
        'United_States',
        'Hailey'
    ],
    [
        'Idago City, Idaho',
        43.8285046,
        -115.8345537,
        'Idaho',
        'United_States',
        'Idago_City'
    ],
    [
        'Idaho Falls, Idaho',
        43.4916514,
        -112.0339645,
        'Idaho',
        'United_States',
        'Idaho_Falls'
    ],
    [
        'Jerome, Idaho',
        42.7240732,
        -114.5186534,
        'Idaho',
        'United_States',
        'Jerome'
    ],
    [
        'Lewiston, Idaho',
        46.4004089,
        -117.0011889,
        'Idaho',
        'United_States',
        'Lewiston'
    ],
    [
        'Malad City, Idaho',
        42.1915872,
        -112.2507986,
        'Idaho',
        'United_States',
        'Malad_City'
    ],
    [
        'Minidoka Internment National Monument, Idaho',
        42.7537967,
        -113.4902829,
        'Idaho',
        'United_States',
        'Minidoka_Internment_National_Monument'
    ],
    [
        'Moscow, Idaho',
        46.7323875,
        -117.0001651,
        'Idaho',
        'United_States',
        'Moscow'
    ],
    [
        'Mountain Home, Idaho',
        43.1329504,
        -115.6911975,
        'Idaho',
        'United_States',
        'Mountain_Home'
    ],
    [
        'Murphy, Idaho',
        43.2162359,
        -116.5510588,
        'Idaho',
        'United_States',
        'Murphy'
    ],
    [
        'Nezperce, Idaho',
        46.2348914,
        -116.2406974,
        'Idaho',
        'United_States',
        'Nezperce'
    ],
    [
        'Nez Perce National Historical Park, Idaho',
        46.213273,
        -116.0058946,
        'Idaho',
        'United_States',
        'Nez_Perce_National_Historical_Park'
    ],
    [
        'Orofino, Idaho',
        46.479347,
        -116.2551395,
        'Idaho',
        'United_States',
        'Orofino'
    ],
    [
        'Paris, Idaho',
        42.2271494,
        -111.4010403,
        'Idaho',
        'United_States',
        'Paris'
    ],
    [
        'Payette, Idaho',
        44.0782195,
        -116.9337711,
        'Idaho',
        'United_States',
        'Payette'
    ],
    [
        'Pocatello, Idaho',
        42.8713032,
        -112.4455344,
        'Idaho',
        'United_States',
        'Pocatello'
    ],
    [
        'Preston, Idaho',
        42.0963133,
        -111.8766173,
        'Idaho',
        'United_States',
        'Preston'
    ],
    [
        'Rexburg, Idaho',
        43.8231096,
        -111.7924237,
        'Idaho',
        'United_States',
        'Rexburg'
    ],
    [
        'Rigby, Idaho',
        43.6724119,
        -111.9149681,
        'Idaho',
        'United_States',
        'Rigby'
    ],
    [
        'Rupert, Idaho',
        42.6190756,
        -113.6772348,
        'Idaho',
        'United_States',
        'Rupert'
    ],
    [
        'Salmon, Idaho',
        45.1757547,
        -113.8959008,
        'Idaho',
        'United_States',
        'Salmon'
    ],
    [
        'Sandpoint, Idaho',
        48.276577,
        -116.553465,
        'Idaho',
        'United_States',
        'Sandpoint'
    ],
    [
        'Shoshone, Idaho',
        42.9360165,
        -114.4058752,
        'Idaho',
        'United_States',
        'Shoshone'
    ],
    [
        'Soda Springs, Idaho',
        42.6543652,
        -111.6046687,
        'Idaho',
        'United_States',
        'Soda_Springs'
    ],
    [
        'St. Anthony, Idaho',
        43.9663008,
        -111.6821847,
        'Idaho',
        'United_States',
        'St._Anthony'
    ],
    [
        'St. Maries, Idaho',
        47.3143541,
        -116.5626675,
        'Idaho',
        'United_States',
        'St._Maries'
    ],
    [
        'Twin Falls, Idaho',
        42.5629668,
        -114.4608711,
        'Idaho',
        'United_States',
        'Twin_Falls'
    ],
    ['Ucon, Idaho', 43.5963015, -111.9638582, 'Idaho', 'United_States', 'Ucon'],
    [
        'Wallace, Idaho',
        47.4740945,
        -115.9279387,
        'Idaho',
        'United_States',
        'Wallace'
    ],
    [
        'Weiser, Idaho',
        44.2509976,
        -116.9693327,
        'Idaho',
        'United_States',
        'Weiser'
    ],
    [
        'Albion, Illinois',
        38.3775484,
        -88.0561465,
        'Illinois',
        'United_States',
        'Albion'
    ],
    [
        'Aledo, Illinois',
        41.1997568,
        -90.7493063,
        'Illinois',
        'United_States',
        'Aledo'
    ],
    [
        'Alton, Illinois',
        38.8906038,
        -90.1842764,
        'Illinois',
        'United_States',
        'Alton'
    ],
    [
        'Amboy, Illinois',
        41.7141997,
        -89.3287061,
        'Illinois',
        'United_States',
        'Amboy'
    ],
    [
        'Anna, Illinois',
        37.4603274,
        -89.2470282,
        'Illinois',
        'United_States',
        'Anna'
    ],
    [
        'Arcola, Illinois',
        39.684755,
        -88.3064367,
        'Illinois',
        'United_States',
        'Arcola'
    ],
    [
        'Atkinson, Illinois',
        41.4208678,
        -90.0151121,
        'Illinois',
        'United_States',
        'Atkinson'
    ],
    [
        'Aurora, Illinois',
        41.7605849,
        -88.3200715,
        'Illinois',
        'United_States',
        'Aurora'
    ],
    [
        'Belleville, Illinois',
        38.5200504,
        -89.9839935,
        'Illinois',
        'United_States',
        'Belleville'
    ],
    [
        'Belvidere, Illinois',
        42.2639098,
        -88.8442674,
        'Illinois',
        'United_States',
        'Belvidere'
    ],
    [
        'Benton, Illinois',
        37.9967163,
        -88.9200685,
        'Illinois',
        'United_States',
        'Benton'
    ],
    [
        'Bloomington, Illinois',
        40.4842027,
        -88.9936873,
        'Illinois',
        'United_States',
        'Bloomington'
    ],
    [
        'Bolingbrook, Illinois',
        41.6986416,
        -88.0683955,
        'Illinois',
        'United_States',
        'Bolingbrook'
    ],
    [
        'Breese, Illinois',
        38.6106042,
        -89.5270306,
        'Illinois',
        'United_States',
        'Breese'
    ],
    [
        'Bridgeview, Illinois',
        41.7500323,
        -87.8042216,
        'Illinois',
        'United_States',
        'Bridgeview'
    ],
    [
        'Buffalo Grove, Illinois',
        42.1662831,
        -87.9631308,
        'Illinois',
        'United_States',
        'Buffalo_Grove'
    ],
    [
        'Cairo, Illinois',
        37.0053293,
        -89.1764608,
        'Illinois',
        'United_States',
        'Cairo'
    ],
    [
        'Cambridge, Illinois',
        41.3036472,
        -90.1928971,
        'Illinois',
        'United_States',
        'Cambridge'
    ],
    [
        'Canton, Illinois',
        40.5580945,
        -90.0351167,
        'Illinois',
        'United_States',
        'Canton'
    ],
    [
        'Carbondale, Illinois',
        37.7272727,
        -89.2167501,
        'Illinois',
        'United_States',
        'Carbondale'
    ],
    [
        'Carlinville, Illinois',
        39.2797699,
        -89.8817662,
        'Illinois',
        'United_States',
        'Carlinville'
    ],
    [
        'Carlyle, Illinois',
        38.6103264,
        -89.3725796,
        'Illinois',
        'United_States',
        'Carlyle'
    ],
    [
        'Carmi, Illinois',
        38.0908796,
        -88.1586488,
        'Illinois',
        'United_States',
        'Carmi'
    ],
    [
        'Carol Stream, Illinois',
        41.9125286,
        -88.1347927,
        'Illinois',
        'United_States',
        'Carol_Stream'
    ],
    [
        'Carrollton, Illinois',
        39.3022693,
        -90.4070632,
        'Illinois',
        'United_States',
        'Carrollton'
    ],
    [
        'Carterville, Illinois',
        37.7600501,
        -89.0772991,
        'Illinois',
        'United_States',
        'Carterville'
    ],
    [
        'Carthage, Illinois',
        40.416433,
        -91.1362537,
        'Illinois',
        'United_States',
        'Carthage'
    ],
    [
        'Centralia, Illinois',
        38.5285169,
        -89.1316944,
        'Illinois',
        'United_States',
        'Centralia'
    ],
    [
        'Champaign-Urbana, Illinois',
        40.1106,
        -88.2073,
        'Illinois',
        'United_States',
        'Champaign-Urbana'
    ],
    [
        'Charleston, Illinois',
        39.4961458,
        -88.1761521,
        'Illinois',
        'United_States',
        'Charleston'
    ],
    [
        'Chester, Illinois',
        37.9136628,
        -89.8220505,
        'Illinois',
        'United_States',
        'Chester'
    ],
    [
        'Chicago, Illinois',
        41.8781136,
        -87.6297982,
        'Illinois',
        'United_States',
        'Chicago'
    ],
    [
        'Clinton, Illinois',
        40.1536479,
        -88.9645253,
        'Illinois',
        'United_States',
        'Clinton'
    ],
    [
        'Columbia, Illinois',
        38.4436637,
        -90.2012239,
        'Illinois',
        'United_States',
        'Columbia'
    ],
    [
        'Danville, Illinois',
        40.124481,
        -87.6300207,
        'Illinois',
        'United_States',
        'Danville'
    ],
    [
        'Decatur, Illinois',
        39.8403147,
        -88.9548001,
        'Illinois',
        'United_States',
        'Decatur'
    ],
    [
        'DeKalb, Illinois',
        41.9294736,
        -88.7503647,
        'Illinois',
        'United_States',
        'DeKalb'
    ],
    [
        'Des Plaines, Illinois',
        42.0333623,
        -87.8833991,
        'Illinois',
        'United_States',
        'Des_Plaines'
    ],
    [
        'Dixon, Illinois',
        41.8389213,
        -89.4795478,
        'Illinois',
        'United_States',
        'Dixon'
    ],
    [
        'Downers Grove, Illinois',
        41.8089191,
        -88.0111746,
        'Illinois',
        'United_States',
        'Downers_Grove'
    ],
    [
        'Edwardsville, Illinois',
        38.8114364,
        -89.953157,
        'Illinois',
        'United_States',
        'Edwardsville'
    ],
    [
        'Effingham, Illinois',
        39.1200418,
        -88.5433829,
        'Illinois',
        'United_States',
        'Effingham'
    ],
    [
        'Elgin, Illinois',
        42.0354084,
        -88.2825668,
        'Illinois',
        'United_States',
        'Elgin'
    ],
    [
        'Elizabethtown, Illinois',
        37.4458846,
        -88.3050357,
        'Illinois',
        'United_States',
        'Elizabethtown'
    ],
    [
        'Elmhurst, Illinois',
        41.8994744,
        -87.9403418,
        'Illinois',
        'United_States',
        'Elmhurst'
    ],
    [
        'Eureka, Illinois',
        40.7214251,
        -89.2728627,
        'Illinois',
        'United_States',
        'Eureka'
    ],
    [
        'Fairfield, Illinois',
        38.378937,
        -88.3597683,
        'Illinois',
        'United_States',
        'Fairfield'
    ],
    [
        'Frankfort, Illinois',
        41.4958665,
        -87.8486613,
        'Illinois',
        'United_States',
        'Frankfort'
    ],
    [
        'Franklin Grove, Illinois',
        41.8416982,
        -89.3003765,
        'Illinois',
        'United_States',
        'Franklin_Grove'
    ],
    [
        'Freeport, Illinois',
        42.2966861,
        -89.6212271,
        'Illinois',
        'United_States',
        'Freeport'
    ],
    [
        'Galena, Illinois',
        42.4166744,
        -90.4290168,
        'Illinois',
        'United_States',
        'Galena'
    ],
    [
        'Galesburg, Illinois',
        40.9478158,
        -90.3712395,
        'Illinois',
        'United_States',
        'Galesburg'
    ],
    [
        'Geneva, Illinois',
        41.8875281,
        -88.3053525,
        'Illinois',
        'United_States',
        'Geneva'
    ],
    [
        'Gilman, Illinois',
        40.7667015,
        -87.992262,
        'Illinois',
        'United_States',
        'Gilman'
    ],
    [
        'Glenview, Illinois',
        42.0697509,
        -87.7878408,
        'Illinois',
        'United_States',
        'Glenview'
    ],
    [
        'Glen Carbon, Illinois',
        38.7483814,
        -89.983158,
        'Illinois',
        'United_States',
        'Glen_Carbon'
    ],
    [
        'Glen Ellyn, Illinois',
        41.8775293,
        -88.0670118,
        'Illinois',
        'United_States',
        'Glen_Ellyn'
    ],
    [
        'Golconda, Illinois',
        37.3672744,
        -88.4864316,
        'Illinois',
        'United_States',
        'Golconda'
    ],
    [
        'Goreville, Illinois',
        37.5544953,
        -88.9722932,
        'Illinois',
        'United_States',
        'Goreville'
    ],
    [
        'Grayslake, Illinois',
        42.3444664,
        -88.041746,
        'Illinois',
        'United_States',
        'Grayslake'
    ],
    [
        'Greenville, Illinois',
        38.8922687,
        -89.4131356,
        'Illinois',
        'United_States',
        'Greenville'
    ],
    [
        'Hardin, Illinois',
        39.1567149,
        -90.6178994,
        'Illinois',
        'United_States',
        'Hardin'
    ],
    [
        'Harrisburg, Illinois',
        37.7383812,
        -88.540607,
        'Illinois',
        'United_States',
        'Harrisburg'
    ],
    [
        'Havana, Illinois',
        40.3000428,
        -90.0609506,
        'Illinois',
        'United_States',
        'Havana'
    ],
    [
        'Hennepin, Illinois',
        41.2542033,
        -89.3423112,
        'Illinois',
        'United_States',
        'Hennepin'
    ],
    [
        'Herrin, Illinois',
        37.8031056,
        -89.0275744,
        'Illinois',
        'United_States',
        'Herrin'
    ],
    [
        'Highland, Illinois',
        38.7394918,
        -89.6712008,
        'Illinois',
        'United_States',
        'Highland'
    ],
    [
        'Hillsboro, Illinois',
        39.1611586,
        -89.4936989,
        'Illinois',
        'United_States',
        'Hillsboro'
    ],
    [
        'Illinois and Michigan Canal National Heritage Corridor, Illinois',
        41.3904234,
        -88.278891,
        'Illinois',
        'United_States',
        'Illinois_and_Michigan_Canal_National_Heritage_Corridor'
    ],
    [
        'Irving, Illinois',
        39.2058801,
        -89.4045304,
        'Illinois',
        'United_States',
        'Irving'
    ],
    [
        'Jacksonville, Illinois',
        39.733936,
        -90.2290098,
        'Illinois',
        'United_States',
        'Jacksonville'
    ],
    [
        'Jerseyville, Illinois',
        39.1200471,
        -90.3284479,
        'Illinois',
        'United_States',
        'Jerseyville'
    ],
    [
        'Joliet, Illinois',
        41.525031,
        -88.0817251,
        'Illinois',
        'United_States',
        'Joliet'
    ],
    [
        'Jonesboro, Illinois',
        37.4517163,
        -89.2681402,
        'Illinois',
        'United_States',
        'Jonesboro'
    ],
    [
        'Kankakee, Illinois',
        41.1200325,
        -87.8611531,
        'Illinois',
        'United_States',
        'Kankakee'
    ],
    [
        'Lacon, Illinois',
        41.0247583,
        -89.4112007,
        'Illinois',
        'United_States',
        'Lacon'
    ],
    [
        'Lakemoor, Illinois',
        42.3286331,
        -88.1989732,
        'Illinois',
        'United_States',
        'Lakemoor'
    ],
    [
        'Lake Bluff, Illinois',
        42.2791365,
        -87.8443151,
        'Illinois',
        'United_States',
        'Lake_Bluff'
    ],
    [
        'Lansing, Illinois',
        41.5647575,
        -87.538931,
        'Illinois',
        'United_States',
        'Lansing'
    ],
    [
        'LaSalle, Illinois',
        41.3621503,
        -89.0418249,
        'Illinois',
        'United_States',
        'LaSalle'
    ],
    [
        'Lawrenceville, Illinois',
        38.7292137,
        -87.6816927,
        'Illinois',
        'United_States',
        'Lawrenceville'
    ],
    [
        'Lewistown, Illinois',
        40.3930973,
        -90.1548421,
        'Illinois',
        'United_States',
        'Lewistown'
    ],
    [
        'Libertyville, Illinois',
        42.2830786,
        -87.9531303,
        'Illinois',
        'United_States',
        'Libertyville'
    ],
    [
        'Lincoln, Illinois',
        40.1483768,
        -89.3648183,
        'Illinois',
        'United_States',
        'Lincoln'
    ],
    [
        'Lincoln Home National Historic Site, Illinois',
        39.7974,
        -89.6449,
        'Illinois',
        'United_States',
        'Lincoln_Home_National_Historic_Site'
    ],
    [
        'Lisle, Illinois',
        41.801141,
        -88.0747875,
        'Illinois',
        'United_States',
        'Lisle'
    ],
    [
        'Lockport, Illinois',
        41.5894752,
        -88.057837,
        'Illinois',
        'United_States',
        'Lockport'
    ],
    [
        'Lombard, Illinois',
        41.8800296,
        -88.0078435,
        'Illinois',
        'United_States',
        'Lombard'
    ],
    [
        'Louisville, Illinois',
        38.772269,
        -88.5025485,
        'Illinois',
        'United_States',
        'Louisville'
    ],
    [
        'Macomb, Illinois',
        40.4592076,
        -90.6717971,
        'Illinois',
        'United_States',
        'Macomb'
    ],
    [
        'Marion, Illinois',
        37.7306054,
        -88.9331256,
        'Illinois',
        'United_States',
        'Marion'
    ],
    [
        'Marissa, Illinois',
        38.2500481,
        -89.7500988,
        'Illinois',
        'United_States',
        'Marissa'
    ],
    [
        'Marseilles, Illinois',
        41.3308666,
        -88.7081293,
        'Illinois',
        'United_States',
        'Marseilles'
    ],
    [
        'Marshall, Illinois',
        39.3914252,
        -87.6936384,
        'Illinois',
        'United_States',
        'Marshall'
    ],
    [
        'McHenry, Illinois',
        42.333355,
        -88.2667534,
        'Illinois',
        'United_States',
        'McHenry'
    ],
    [
        'McLeansboro, Illinois',
        38.0933811,
        -88.5356076,
        'Illinois',
        'United_States',
        'McLeansboro'
    ],
    [
        'Metropolis, Illinois',
        37.1511655,
        -88.7319979,
        'Illinois',
        'United_States',
        'Metropolis'
    ],
    [
        'Milledgeville, Illinois',
        41.9633615,
        -89.7745604,
        'Illinois',
        'United_States',
        'Milledgeville'
    ],
    [
        'Minooka, Illinois',
        41.4553084,
        -88.2617305,
        'Illinois',
        'United_States',
        'Minooka'
    ],
    [
        'Moline, Illinois',
        41.5067003,
        -90.5151342,
        'Illinois',
        'United_States',
        'Moline'
    ],
    [
        'Monmouth, Illinois',
        40.9114271,
        -90.6473576,
        'Illinois',
        'United_States',
        'Monmouth'
    ],
    [
        'Monticello, Illinois',
        40.0278116,
        -88.5733979,
        'Illinois',
        'United_States',
        'Monticello'
    ],
    [
        'Morris, Illinois',
        41.357254,
        -88.4211785,
        'Illinois',
        'United_States',
        'Morris'
    ],
    [
        'Morrison, Illinois',
        41.809751,
        -89.9651186,
        'Illinois',
        'United_States',
        'Morrison'
    ],
    [
        'Mound City, Illinois',
        37.0853291,
        -89.1625731,
        'Illinois',
        'United_States',
        'Mound_City'
    ],
    [
        'Mount Carmel, Illinois',
        38.4108801,
        -87.7614174,
        'Illinois',
        'United_States',
        'Mount_Carmel'
    ],
    [
        'Mount Carroll, Illinois',
        42.0950233,
        -89.9781797,
        'Illinois',
        'United_States',
        'Mount_Carroll'
    ],
    [
        'Mount Sterling, Illinois',
        39.9872707,
        -90.763463,
        'Illinois',
        'United_States',
        'Mount_Sterling'
    ],
    [
        'Mount Vernon, Illinois',
        38.3172714,
        -88.9031201,
        'Illinois',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Murphysboro, Illinois',
        37.7644952,
        -89.3350888,
        'Illinois',
        'United_States',
        'Murphysboro'
    ],
    [
        'Naperville, Illinois',
        41.7508391,
        -88.1535352,
        'Illinois',
        'United_States',
        'Naperville'
    ],
    [
        'Nashville, Illinois',
        38.3436612,
        -89.3806398,
        'Illinois',
        'United_States',
        'Nashville'
    ],
    [
        'Newton, Illinois',
        38.9908766,
        -88.1625389,
        'Illinois',
        'United_States',
        'Newton'
    ],
    [
        'Oak Forest, Illinois',
        41.6028116,
        -87.7439384,
        'Illinois',
        'United_States',
        'Oak_Forest'
    ],
    [
        'Olney, Illinois',
        38.7308811,
        -88.0853154,
        'Illinois',
        'United_States',
        'Olney'
    ],
    [
        'Oquawka, Illinois',
        40.931982,
        -90.9470863,
        'Illinois',
        'United_States',
        'Oquawka'
    ],
    [
        'Oregon, Illinois',
        42.0147513,
        -89.3323279,
        'Illinois',
        'United_States',
        'Oregon'
    ],
    [
        'Ottawa, Illinois',
        41.3455892,
        -88.8425769,
        'Illinois',
        'United_States',
        'Ottawa'
    ],
    [
        'Ozark, Illinois',
        37.5425505,
        -88.7628377,
        'Illinois',
        'United_States',
        'Ozark'
    ],
    [
        'Palatine, Illinois',
        42.1103041,
        -88.03424,
        'Illinois',
        'United_States',
        'Palatine'
    ],
    [
        'Paris, Illinois',
        39.611146,
        -87.6961374,
        'Illinois',
        'United_States',
        'Paris'
    ],
    [
        'Paxton, Illinois',
        40.4603125,
        -88.0953201,
        'Illinois',
        'United_States',
        'Paxton'
    ],
    [
        'Pekin, Illinois',
        40.5675388,
        -89.640658,
        'Illinois',
        'United_States',
        'Pekin'
    ],
    [
        'Peoria, Illinois',
        40.6936488,
        -89.5889864,
        'Illinois',
        'United_States',
        'Peoria'
    ],
    [
        'Peru, Illinois',
        41.3275349,
        -89.1289728,
        'Illinois',
        'United_States',
        'Peru'
    ],
    [
        'Petersburg, Illinois',
        40.0117151,
        -89.8481652,
        'Illinois',
        'United_States',
        'Petersburg'
    ],
    [
        'Pinckneyville, Illinois',
        38.0803286,
        -89.3820321,
        'Illinois',
        'United_States',
        'Pinckneyville'
    ],
    [
        'Pittsfield, Illinois',
        39.6078254,
        -90.8051289,
        'Illinois',
        'United_States',
        'Pittsfield'
    ],
    [
        'Plainfield, Illinois',
        41.632223,
        -88.2120315,
        'Illinois',
        'United_States',
        'Plainfield'
    ],
    [
        'Polo, Illinois',
        41.986141,
        -89.5792782,
        'Illinois',
        'United_States',
        'Polo'
    ],
    [
        'Pontiac, Illinois',
        40.8808666,
        -88.6297839,
        'Illinois',
        'United_States',
        'Pontiac'
    ],
    [
        'Princeton, Illinois',
        41.3680919,
        -89.4648145,
        'Illinois',
        'United_States',
        'Princeton'
    ],
    [
        'Quincy, Illinois',
        39.9356016,
        -91.4098726,
        'Illinois',
        'United_States',
        'Quincy'
    ],
    [
        'Richmond, Illinois',
        42.4758522,
        -88.3059251,
        'Illinois',
        'United_States',
        'Richmond'
    ],
    [
        'Robinson, Illinois',
        39.0053201,
        -87.7391935,
        'Illinois',
        'United_States',
        'Robinson'
    ],
    [
        'Rockford, Illinois',
        42.2711311,
        -89.0939952,
        'Illinois',
        'United_States',
        'Rockford'
    ],
    [
        'Rock Island, Illinois',
        41.5094771,
        -90.5787476,
        'Illinois',
        'United_States',
        'Rock_Island'
    ],
    [
        'Ronald Reagan Boyhood Home National Historic Site, Illinois',
        41.8363176,
        -89.480494,
        'Illinois',
        'United_States',
        'Ronald_Reagan_Boyhood_Home_National_Historic_Site'
    ],
    [
        'Roselle, Illinois',
        41.9847504,
        -88.0797933,
        'Illinois',
        'United_States',
        'Roselle'
    ],
    [
        'Round Lake Beach, Illinois',
        42.3716881,
        -88.0900815,
        'Illinois',
        'United_States',
        'Round_Lake_Beach'
    ],
    [
        'Rushville, Illinois',
        40.1211577,
        -90.5631829,
        'Illinois',
        'United_States',
        'Rushville'
    ],
    [
        'Saint Charles, Illinois',
        41.9141945,
        -88.3086867,
        'Illinois',
        'United_States',
        'Saint_Charles'
    ],
    [
        'Salem, Illinois',
        38.6269929,
        -88.9456158,
        'Illinois',
        'United_States',
        'Salem'
    ],
    [
        'Schaumburg, Illinois',
        42.0333607,
        -88.0834059,
        'Illinois',
        'United_States',
        'Schaumburg'
    ],
    [
        'Shawneetown, Illinois',
        37.713102,
        -88.1867027,
        'Illinois',
        'United_States',
        'Shawneetown'
    ],
    [
        'Shelbyville, Illinois',
        39.4064284,
        -88.7900689,
        'Illinois',
        'United_States',
        'Shelbyville'
    ],
    [
        'Springfield, Illinois',
        39.7817213,
        -89.6501481,
        'Illinois',
        'United_States',
        'Springfield'
    ],
    [
        'Streamwood, Illinois',
        42.0255827,
        -88.1784085,
        'Illinois',
        'United_States',
        'Streamwood'
    ],
    [
        'Sullivan, Illinois',
        39.599479,
        -88.6078392,
        'Illinois',
        'United_States',
        'Sullivan'
    ],
    [
        'Sycamore, Illinois',
        41.9889173,
        -88.6867538,
        'Illinois',
        'United_States',
        'Sycamore'
    ],
    [
        'Taylorville, Illinois',
        39.548935,
        -89.294533,
        'Illinois',
        'United_States',
        'Taylorville'
    ],
    [
        'Tinley Park, Illinois',
        41.5731442,
        -87.7932939,
        'Illinois',
        'United_States',
        'Tinley_Park'
    ],
    [
        'Toledo, Illinois',
        39.2736491,
        -88.2436522,
        'Illinois',
        'United_States',
        'Toledo'
    ],
    [
        'Toulon, Illinois',
        41.0936481,
        -89.8648283,
        'Illinois',
        'United_States',
        'Toulon'
    ],
    [
        'Tower Hill, Illinois',
        39.3878184,
        -88.9606321,
        'Illinois',
        'United_States',
        'Tower_Hill'
    ],
    [
        'Tuscola, Illinois',
        39.7991985,
        -88.2831038,
        'Illinois',
        'United_States',
        'Tuscola'
    ],
    [
        'Urbana, Illinois',
        40.1105875,
        -88.2072697,
        'Illinois',
        'United_States',
        'Urbana'
    ],
    [
        'Vandalia, Illinois',
        38.9606009,
        -89.0936778,
        'Illinois',
        'United_States',
        'Vandalia'
    ],
    [
        'Vienna, Illinois',
        37.4153295,
        -88.8978434,
        'Illinois',
        'United_States',
        'Vienna'
    ],
    [
        'Virginia, Illinois',
        39.9511595,
        -90.2123426,
        'Illinois',
        'United_States',
        'Virginia'
    ],
    [
        'Washington, Illinois',
        40.7036482,
        -89.4073123,
        'Illinois',
        'United_States',
        'Washington'
    ],
    [
        'Waterloo, Illinois',
        38.3358857,
        -90.1498341,
        'Illinois',
        'United_States',
        'Waterloo'
    ],
    [
        'Watseka, Illinois',
        40.7761465,
        -87.7364218,
        'Illinois',
        'United_States',
        'Watseka'
    ],
    [
        'Waukegan, Illinois',
        42.3636331,
        -87.8447938,
        'Illinois',
        'United_States',
        'Waukegan'
    ],
    [
        'Wheaton, Illinois',
        41.8661403,
        -88.1070127,
        'Illinois',
        'United_States',
        'Wheaton'
    ],
    [
        'Williamsville, Illinois',
        39.954216,
        -89.5487126,
        'Illinois',
        'United_States',
        'Williamsville'
    ],
    [
        'Wilmette, Illinois',
        42.0722513,
        -87.7228384,
        'Illinois',
        'United_States',
        'Wilmette'
    ],
    [
        'Winchester, Illinois',
        39.6297689,
        -90.4562355,
        'Illinois',
        'United_States',
        'Winchester'
    ],
    [
        'Winfield, Illinois',
        41.8616956,
        -88.1609031,
        'Illinois',
        'United_States',
        'Winfield'
    ],
    [
        'Woodstock, Illinois',
        42.3147436,
        -88.4487021,
        'Illinois',
        'United_States',
        'Woodstock'
    ],
    [
        'Yorkville, Illinois',
        41.6411409,
        -88.4472948,
        'Illinois',
        'United_States',
        'Yorkville'
    ],
    [
        'Albion, Indiana',
        41.3956043,
        -85.4244241,
        'Indiana',
        'United_States',
        'Albion'
    ],
    [
        'Anderson, Indiana',
        40.1053196,
        -85.6802541,
        'Indiana',
        'United_States',
        'Anderson'
    ],
    [
        'Angola, Indiana',
        41.6347726,
        -84.9994088,
        'Indiana',
        'United_States',
        'Angola'
    ],
    [
        'Auburn, Indiana',
        41.3669942,
        -85.0588575,
        'Indiana',
        'United_States',
        'Auburn'
    ],
    [
        'Batesville, Indiana',
        39.3000511,
        -85.222184,
        'Indiana',
        'United_States',
        'Batesville'
    ],
    [
        'Beanblossom, Indiana',
        39.2669926,
        -86.2491572,
        'Indiana',
        'United_States',
        'Beanblossom'
    ],
    [
        'Bedford, Indiana',
        38.8611619,
        -86.4872149,
        'Indiana',
        'United_States',
        'Bedford'
    ],
    [
        'Bloomfield, Indiana',
        39.0269903,
        -86.9375068,
        'Indiana',
        'United_States',
        'Bloomfield'
    ],
    [
        'Bloomington, Indiana',
        39.165325,
        -86.5263857,
        'Indiana',
        'United_States',
        'Bloomington'
    ],
    [
        'Bluffton, Indiana',
        40.7386579,
        -85.1716368,
        'Indiana',
        'United_States',
        'Bluffton'
    ],
    [
        'Boonville, Indiana',
        38.0492131,
        -87.2741723,
        'Indiana',
        'United_States',
        'Boonville'
    ],
    [
        'Brazil, Indiana',
        39.523652,
        -87.1250154,
        'Indiana',
        'United_States',
        'Brazil'
    ],
    [
        'Brookville, Indiana',
        39.4231065,
        -85.0127376,
        'Indiana',
        'United_States',
        'Brookville'
    ],
    [
        'Brownsburg, Indiana',
        39.8433769,
        -86.3977735,
        'Indiana',
        'United_States',
        'Brownsburg'
    ],
    [
        'Brownstown, Indiana',
        38.8789426,
        -86.0419247,
        'Indiana',
        'United_States',
        'Brownstown'
    ],
    [
        'Chesterton, Indiana',
        41.6105937,
        -87.0641992,
        'Indiana',
        'United_States',
        'Chesterton'
    ],
    [
        'Columbia City, Indiana',
        41.1572686,
        -85.4883127,
        'Indiana',
        'United_States',
        'Columbia_City'
    ],
    [
        'Columbus, Indiana',
        39.2014404,
        -85.9213796,
        'Indiana',
        'United_States',
        'Columbus'
    ],
    [
        'Connersville, Indiana',
        39.6411589,
        -85.1410748,
        'Indiana',
        'United_States',
        'Connersville'
    ],
    [
        'Corydon, Indiana',
        38.2120121,
        -86.1219155,
        'Indiana',
        'United_States',
        'Corydon'
    ],
    [
        'Covington, Indiana',
        40.1417045,
        -87.3947357,
        'Indiana',
        'United_States',
        'Covington'
    ],
    [
        'Crawfordsville, Indiana',
        40.0411536,
        -86.8744516,
        'Indiana',
        'United_States',
        'Crawfordsville'
    ],
    [
        'Cross Plains, Indiana',
        38.9439459,
        -85.2046785,
        'Indiana',
        'United_States',
        'Cross_Plains'
    ],
    [
        'Crown Point, Indiana',
        41.4169806,
        -87.3653135,
        'Indiana',
        'United_States',
        'Crown_Point'
    ],
    [
        'Danville, Indiana',
        39.7606013,
        -86.5263879,
        'Indiana',
        'United_States',
        'Danville'
    ],
    [
        'Decatur, Indiana',
        40.830603,
        -84.9291329,
        'Indiana',
        'United_States',
        'Decatur'
    ],
    [
        'Delphi, Indiana',
        40.5875371,
        -86.6750059,
        'Indiana',
        'United_States',
        'Delphi'
    ],
    [
        'Edinburg, Indiana',
        39.3542176,
        -85.9666577,
        'Indiana',
        'United_States',
        'Edinburg'
    ],
    [
        'Elkhart, Indiana',
        41.6819935,
        -85.9766671,
        'Indiana',
        'United_States',
        'Elkhart'
    ],
    [
        'English, Indiana',
        38.3345045,
        -86.4641498,
        'Indiana',
        'United_States',
        'English'
    ],
    [
        'Evansville, Indiana',
        37.9715592,
        -87.5710898,
        'Indiana',
        'United_States',
        'Evansville'
    ],
    [
        'Fairland, Indiana',
        39.5858806,
        -85.8635919,
        'Indiana',
        'United_States',
        'Fairland'
    ],
    [
        'Fishers, Indiana',
        39.9567548,
        -86.01335,
        'Indiana',
        'United_States',
        'Fishers'
    ],
    [
        'Fort Wayne, Indiana',
        41.079273,
        -85.1393513,
        'Indiana',
        'United_States',
        'Fort_Wayne'
    ],
    [
        'Fowler, Indiana',
        40.6167044,
        -87.3208518,
        'Indiana',
        'United_States',
        'Fowler'
    ],
    [
        'Frankfort, Indiana',
        40.2794809,
        -86.5108355,
        'Indiana',
        'United_States',
        'Frankfort'
    ],
    [
        'Franklin, Indiana',
        39.4806055,
        -86.0549863,
        'Indiana',
        'United_States',
        'Franklin'
    ],
    [
        'Gary, Indiana',
        41.5933696,
        -87.3464271,
        'Indiana',
        'United_States',
        'Gary'
    ],
    [
        'George Rogers Clark National Historical Park, Indiana',
        38.679176,
        -87.535617,
        'Indiana',
        'United_States',
        'George_Rogers_Clark_National_Historical_Park'
    ],
    [
        'Goshen, Indiana',
        41.5822716,
        -85.8344383,
        'Indiana',
        'United_States',
        'Goshen'
    ],
    [
        'Granger, Indiana',
        41.7533819,
        -86.1108377,
        'Indiana',
        'United_States',
        'Granger'
    ],
    [
        'Greencastle, Indiana',
        39.6444898,
        -86.8647316,
        'Indiana',
        'United_States',
        'Greencastle'
    ],
    [
        'Greenfield, Indiana',
        39.785043,
        -85.7694226,
        'Indiana',
        'United_States',
        'Greenfield'
    ],
    [
        'Greensburg, Indiana',
        39.3372722,
        -85.483581,
        'Indiana',
        'United_States',
        'Greensburg'
    ],
    [
        'Greenwood, Indiana',
        39.6136578,
        -86.1066526,
        'Indiana',
        'United_States',
        'Greenwood'
    ],
    [
        'Hartford City, Indiana',
        40.451154,
        -85.369972,
        'Indiana',
        'United_States',
        'Hartford_City'
    ],
    [
        'Highland, Indiana',
        41.5536468,
        -87.451984,
        'Indiana',
        'United_States',
        'Highland'
    ],
    [
        'Huntington, Indiana',
        40.8831011,
        -85.497476,
        'Indiana',
        'United_States',
        'Huntington'
    ],
    [
        'Indianapolis, Indiana',
        39.768403,
        -86.158068,
        'Indiana',
        'United_States',
        'Indianapolis'
    ],
    [
        'Indiana Dunes National Lakeshore, Indiana',
        41.6533144,
        -87.0523721,
        'Indiana',
        'United_States',
        'Indiana_Dunes_National_Lakeshore'
    ],
    [
        'Jasper, Indiana',
        38.3914418,
        -86.9311094,
        'Indiana',
        'United_States',
        'Jasper'
    ],
    [
        'Jeffersonville, Indiana',
        38.2775702,
        -85.7371847,
        'Indiana',
        'United_States',
        'Jeffersonville'
    ],
    [
        'Kentland, Indiana',
        40.7703153,
        -87.4453033,
        'Indiana',
        'United_States',
        'Kentland'
    ],
    [
        'Knox, Indiana',
        41.2958751,
        -86.6250139,
        'Indiana',
        'United_States',
        'Knox'
    ],
    [
        'Kokomo, Indiana',
        40.486427,
        -86.1336033,
        'Indiana',
        'United_States',
        'Kokomo'
    ],
    [
        'Lafayette, Indiana',
        40.4167022,
        -86.8752869,
        'Indiana',
        'United_States',
        'Lafayette'
    ],
    [
        'LaGrange, Indiana',
        41.641717,
        -85.4166467,
        'Indiana',
        'United_States',
        'LaGrange'
    ],
    [
        'Lawrenceburg, Indiana',
        39.090891,
        -84.8499504,
        'Indiana',
        'United_States',
        'Lawrenceburg'
    ],
    [
        'La Porte, Indiana',
        41.611143,
        -86.7227195,
        'Indiana',
        'United_States',
        'La_Porte'
    ],
    [
        'Lebanon, Indiana',
        40.0483744,
        -86.4691677,
        'Indiana',
        'United_States',
        'Lebanon'
    ],
    [
        'Liberty, Indiana',
        39.6356048,
        -84.931071,
        'Indiana',
        'United_States',
        'Liberty'
    ],
    [
        'Lincoln Boyhood National Memorial, Indiana',
        38.1141177,
        -86.9969053,
        'Indiana',
        'United_States',
        'Lincoln_Boyhood_National_Memorial'
    ],
    [
        'Logansport, Indiana',
        40.7544843,
        -86.3566659,
        'Indiana',
        'United_States',
        'Logansport'
    ],
    [
        'Loogootee, Indiana',
        38.6769945,
        -86.9141695,
        'Indiana',
        'United_States',
        'Loogootee'
    ],
    [
        'Madison, Indiana',
        38.7358933,
        -85.3799577,
        'Indiana',
        'United_States',
        'Madison'
    ],
    [
        'Marion, Indiana',
        40.5583739,
        -85.6591442,
        'Indiana',
        'United_States',
        'Marion'
    ],
    [
        'Martinsville, Indiana',
        39.4278253,
        -86.4283279,
        'Indiana',
        'United_States',
        'Martinsville'
    ],
    [
        'Milford, Indiana',
        41.4097696,
        -85.8455482,
        'Indiana',
        'United_States',
        'Milford'
    ],
    [
        'Mishawaka, Indiana',
        41.6619927,
        -86.1586156,
        'Indiana',
        'United_States',
        'Mishawaka'
    ],
    [
        'Mitchell, Indiana',
        38.7328304,
        -86.4736019,
        'Indiana',
        'United_States',
        'Mitchell'
    ],
    [
        'Monticello, Indiana',
        40.7453169,
        -86.7647343,
        'Indiana',
        'United_States',
        'Monticello'
    ],
    [
        'Morristown, Indiana',
        39.6733785,
        -85.6985882,
        'Indiana',
        'United_States',
        'Morristown'
    ],
    [
        'Mount Vernon, Indiana',
        37.9322662,
        -87.8950267,
        'Indiana',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Muncie, Indiana',
        40.1933767,
        -85.3863599,
        'Indiana',
        'United_States',
        'Muncie'
    ],
    [
        'Munster, Indiana',
        41.5644798,
        -87.5125412,
        'Indiana',
        'United_States',
        'Munster'
    ],
    [
        'Nashville, Indiana',
        39.2072501,
        -86.2469535,
        'Indiana',
        'United_States',
        'Nashville'
    ],
    [
        'Newburgh, Indiana',
        37.9444882,
        -87.4052865,
        'Indiana',
        'United_States',
        'Newburgh'
    ],
    [
        'Newport, Indiana',
        39.8842049,
        -87.408627,
        'Indiana',
        'United_States',
        'Newport'
    ],
    [
        'New Albany, Indiana',
        38.2856247,
        -85.8241312,
        'Indiana',
        'United_States',
        'New_Albany'
    ],
    [
        'New Castle, Indiana',
        39.928935,
        -85.3702476,
        'Indiana',
        'United_States',
        'New_Castle'
    ],
    [
        'Noblesville, Indiana',
        40.0455917,
        -86.0085955,
        'Indiana',
        'United_States',
        'Noblesville'
    ],
    [
        'Paoli, Indiana',
        38.5561663,
        -86.468321,
        'Indiana',
        'United_States',
        'Paoli'
    ],
    [
        'Peru, Indiana',
        40.7536528,
        -86.0688811,
        'Indiana',
        'United_States',
        'Peru'
    ],
    [
        'Petersburg, Indiana',
        38.4919935,
        -87.2786244,
        'Indiana',
        'United_States',
        'Petersburg'
    ],
    [
        'Plymouth, Indiana',
        41.3436554,
        -86.3097278,
        'Indiana',
        'United_States',
        'Plymouth'
    ],
    [
        'Portage, Indiana',
        41.5758707,
        -87.1761455,
        'Indiana',
        'United_States',
        'Portage'
    ],
    [
        'Portland, Indiana',
        40.4344895,
        -84.9777455,
        'Indiana',
        'United_States',
        'Portland'
    ],
    [
        'Princeton, Indiana',
        38.3553236,
        -87.5675222,
        'Indiana',
        'United_States',
        'Princeton'
    ],
    [
        'Reelsville, Indiana',
        39.5575439,
        -86.9669567,
        'Indiana',
        'United_States',
        'Reelsville'
    ],
    [
        'Rensselaer, Indiana',
        40.9367045,
        -87.1508562,
        'Indiana',
        'United_States',
        'Rensselaer'
    ],
    [
        'Richmond, Indiana',
        39.8289369,
        -84.8902382,
        'Indiana',
        'United_States',
        'Richmond'
    ],
    [
        'Rising Sun, Indiana',
        38.9495047,
        -84.853838,
        'Indiana',
        'United_States',
        'Rising_Sun'
    ],
    [
        'Rochester, Indiana',
        41.0647645,
        -86.2158331,
        'Indiana',
        'United_States',
        'Rochester'
    ],
    [
        'rockport, Indiana',
        37.8831055,
        -87.0494408,
        'Indiana',
        'United_States',
        'rockport'
    ],
    [
        'Rockville, Indiana',
        39.7625404,
        -87.2291809,
        'Indiana',
        'United_States',
        'Rockville'
    ],
    [
        'Rolling Prairie, Indiana',
        41.6708771,
        -86.6158538,
        'Indiana',
        'United_States',
        'Rolling_Prairie'
    ],
    [
        'Rushville, Indiana',
        39.6092137,
        -85.4463594,
        'Indiana',
        'United_States',
        'Rushville'
    ],
    [
        'Salem, Indiana',
        38.6056131,
        -86.101089,
        'Indiana',
        'United_States',
        'Salem'
    ],
    [
        'Schererville, Indiana',
        41.4789246,
        -87.4547605,
        'Indiana',
        'United_States',
        'Schererville'
    ],
    [
        'Scottsburg, Indiana',
        38.685614,
        -85.7702451,
        'Indiana',
        'United_States',
        'Scottsburg'
    ],
    [
        'Shelbyville, Indiana',
        39.5214373,
        -85.7769238,
        'Indiana',
        'United_States',
        'Shelbyville'
    ],
    [
        'Shoals, Indiana',
        38.6664401,
        -86.7911096,
        'Indiana',
        'United_States',
        'Shoals'
    ],
    [
        'South Bend, Indiana',
        41.6763545,
        -86.2519898,
        'Indiana',
        'United_States',
        'South_Bend'
    ],
    [
        'Spencer, Indiana',
        39.2867117,
        -86.7625058,
        'Indiana',
        'United_States',
        'Spencer'
    ],
    [
        'Sullivan, Indiana',
        39.0953199,
        -87.4058525,
        'Indiana',
        'United_States',
        'Sullivan'
    ],
    [
        'Tell City, Indiana',
        37.9514447,
        -86.7677663,
        'Indiana',
        'United_States',
        'Tell_City'
    ],
    [
        'Terre Haute, Indiana',
        39.4667034,
        -87.4139092,
        'Indiana',
        'United_States',
        'Terre_Haute'
    ],
    [
        'Tipton, Indiana',
        40.2822598,
        -86.041098,
        'Indiana',
        'United_States',
        'Tipton'
    ],
    [
        'Valparaiso, Indiana',
        41.4730948,
        -87.0611412,
        'Indiana',
        'United_States',
        'Valparaiso'
    ],
    [
        'Vernon, Indiana',
        38.9847765,
        -85.609412,
        'Indiana',
        'United_States',
        'Vernon'
    ],
    [
        'Versallies, Indiana',
        39.0719988,
        -85.2519035,
        'Indiana',
        'United_States',
        'Versallies'
    ],
    [
        'Vevay, Indiana',
        38.7478401,
        -85.0671725,
        'Indiana',
        'United_States',
        'Vevay'
    ],
    [
        'Vincennes, Indiana',
        38.677269,
        -87.5286325,
        'Indiana',
        'United_States',
        'Vincennes'
    ],
    [
        'Wabash, Indiana',
        40.797821,
        -85.8205411,
        'Indiana',
        'United_States',
        'Wabash'
    ],
    [
        'Warsaw, Indiana',
        41.2381,
        -85.8530469,
        'Indiana',
        'United_States',
        'Warsaw'
    ],
    [
        'Washington, Indiana',
        38.6592152,
        -87.172789,
        'Indiana',
        'United_States',
        'Washington'
    ],
    [
        'Westport, Indiana',
        39.1758853,
        -85.5730273,
        'Indiana',
        'United_States',
        'Westport'
    ],
    [
        'Westville, Indiana',
        41.5414297,
        -86.9005825,
        'Indiana',
        'United_States',
        'Westville'
    ],
    [
        'West Lafayette, Indiana',
        40.4258686,
        -86.9080655,
        'Indiana',
        'United_States',
        'West_Lafayette'
    ],
    [
        'Williamsport, Indiana',
        40.2883704,
        -87.2938999,
        'Indiana',
        'United_States',
        'Williamsport'
    ],
    [
        'Winamac, Indiana',
        41.0514299,
        -86.6030648,
        'Indiana',
        'United_States',
        'Winamac'
    ],
    [
        'Winchester, Indiana',
        40.1719892,
        -84.9813549,
        'Indiana',
        'United_States',
        'Winchester'
    ],
    ['Adel, Iowa', 41.6144325, -94.017453, 'Iowa', 'United_States', 'Adel'],
    ['Albia, Iowa', 41.0300078, -92.811307, 'Iowa', 'United_States', 'Albia'],
    ['Algona, Iowa', 43.0699663, -94.233019, 'Iowa', 'United_States', 'Algona'],
    [
        'Allison, Iowa',
        42.7535847,
        -92.7952244,
        'Iowa',
        'United_States',
        'Allison'
    ],
    ['Ames, Iowa', 42.0307812, -93.6319131, 'Iowa', 'United_States', 'Ames'],
    [
        'Anamosa, Iowa',
        42.1083371,
        -91.2851594,
        'Iowa',
        'United_States',
        'Anamosa'
    ],
    [
        'Armstrong, Iowa',
        43.3960697,
        -94.4783082,
        'Iowa',
        'United_States',
        'Armstrong'
    ],
    [
        'Atlantic, Iowa',
        41.4036007,
        -95.0138776,
        'Iowa',
        'United_States',
        'Atlantic'
    ],
    [
        'Audubon, Iowa',
        41.7180421,
        -94.9324868,
        'Iowa',
        'United_States',
        'Audubon'
    ],
    [
        'Bedford, Iowa',
        40.666932,
        -94.721358,
        'Iowa',
        'United_States',
        'Bedford'
    ],
    [
        'Bettendorf, Iowa',
        41.56085,
        -90.48344,
        'Iowa',
        'United_States',
        'Bettendorf'
    ],
    [
        'Bloomfield, Iowa',
        40.7516884,
        -92.4149074,
        'Iowa',
        'United_States',
        'Bloomfield'
    ],
    ['Boone, Iowa', 42.0597047, -93.8802273, 'Iowa', 'United_States', 'Boone'],
    [
        'Burlington, Iowa',
        40.8076529,
        -91.1128901,
        'Iowa',
        'United_States',
        'Burlington'
    ],
    [
        'Carroll, Iowa',
        42.0655986,
        -94.8672793,
        'Iowa',
        'United_States',
        'Carroll'
    ],
    [
        'Cedar Falls, Iowa',
        42.5348993,
        -92.4453161,
        'Iowa',
        'United_States',
        'Cedar_Falls'
    ],
    [
        'Cedar Rapids, Iowa',
        41.9778795,
        -91.6656232,
        'Iowa',
        'United_States',
        'Cedar_Rapids'
    ],
    [
        'Centerville, Iowa',
        40.7290565,
        -92.8738196,
        'Iowa',
        'United_States',
        'Centerville'
    ],
    [
        'Chariton, Iowa',
        41.0199996,
        -93.3140985,
        'Iowa',
        'United_States',
        'Chariton'
    ],
    [
        'Charles City, Iowa',
        43.0663612,
        -92.6724112,
        'Iowa',
        'United_States',
        'Charles_City'
    ],
    [
        'Charter Oak, Iowa',
        42.0683221,
        -95.5916693,
        'Iowa',
        'United_States',
        'Charter_Oak'
    ],
    [
        'Cherokee, Iowa',
        42.7496413,
        -95.5515431,
        'Iowa',
        'United_States',
        'Cherokee'
    ],
    [
        'Clarinda, Iowa',
        40.7419352,
        -95.038313,
        'Iowa',
        'United_States',
        'Clarinda'
    ],
    [
        'Clarion, Iowa',
        42.7316387,
        -93.732992,
        'Iowa',
        'United_States',
        'Clarion'
    ],
    [
        'Clear Lake, Iowa',
        43.1435564,
        -93.3788108,
        'Iowa',
        'United_States',
        'Clear_Lake'
    ],
    [
        'Clinton, Iowa',
        41.8444735,
        -90.1887379,
        'Iowa',
        'United_States',
        'Clinton'
    ],
    [
        'Corning, Iowa',
        40.9869306,
        -94.7335843,
        'Iowa',
        'United_States',
        'Corning'
    ],
    [
        'Corydon, Iowa',
        40.7569499,
        -93.3188229,
        'Iowa',
        'United_States',
        'Corydon'
    ],
    [
        'Council Bluffs, Iowa',
        41.2619444,
        -95.8608333,
        'Iowa',
        'United_States',
        'Council_Bluffs'
    ],
    [
        'Cresco, Iowa',
        43.3813568,
        -92.1140547,
        'Iowa',
        'United_States',
        'Cresco'
    ],
    [
        'Creston, Iowa',
        41.0586002,
        -94.3613474,
        'Iowa',
        'United_States',
        'Creston'
    ],
    [
        'Dakota City, Iowa',
        42.7221935,
        -94.1971836,
        'Iowa',
        'United_States',
        'Dakota_City'
    ],
    [
        'Davenport, Iowa',
        41.5236437,
        -90.5776367,
        'Iowa',
        'United_States',
        'Davenport'
    ],
    [
        'Decorah, Iowa',
        43.3033056,
        -91.7857092,
        'Iowa',
        'United_States',
        'Decorah'
    ],
    [
        'Denison, Iowa',
        42.024988,
        -95.3588867,
        'Iowa',
        'United_States',
        'Denison'
    ],
    [
        'Des Moines, Iowa',
        41.6005448,
        -93.6091064,
        'Iowa',
        'United_States',
        'Des_Moines'
    ],
    [
        'Dubuque, Iowa',
        42.5005583,
        -90.6645718,
        'Iowa',
        'United_States',
        'Dubuque'
    ],
    [
        'Effigy Mounds National Monument, Iowa',
        43.0887946,
        -91.1855202,
        'Iowa',
        'United_States',
        'Effigy_Mounds_National_Monument'
    ],
    [
        'Eldora, Iowa',
        42.3680382,
        -93.1057576,
        'Iowa',
        'United_States',
        'Eldora'
    ],
    [
        'Elkader, Iowa',
        42.8538739,
        -91.4054159,
        'Iowa',
        'United_States',
        'Elkader'
    ],
    [
        'Emmetsburg, Iowa',
        43.1127427,
        -94.6830357,
        'Iowa',
        'United_States',
        'Emmetsburg'
    ],
    [
        'Estherville, Iowa',
        43.4013478,
        -94.8391532,
        'Iowa',
        'United_States',
        'Estherville'
    ],
    [
        'Fairfield, Iowa',
        41.0076114,
        -91.9636914,
        'Iowa',
        'United_States',
        'Fairfield'
    ],
    [
        'Forest City, Iowa',
        43.2624685,
        -93.6371937,
        'Iowa',
        'United_States',
        'Forest_City'
    ],
    [
        'Fort Dodge, Iowa',
        42.4974694,
        -94.1680158,
        'Iowa',
        'United_States',
        'Fort_Dodge'
    ],
    [
        'Fort Madison, Iowa',
        40.6297634,
        -91.314535,
        'Iowa',
        'United_States',
        'Fort_Madison'
    ],
    [
        'Garner, Iowa',
        43.1023343,
        -93.6020858,
        'Iowa',
        'United_States',
        'Garner'
    ],
    [
        'Gillett Grove, Iowa',
        43.0158045,
        -95.03749,
        'Iowa',
        'United_States',
        'Gillett_Grove'
    ],
    [
        'Glenwood, Iowa',
        41.0469437,
        -95.7425056,
        'Iowa',
        'United_States',
        'Glenwood'
    ],
    [
        'Greenfield, Iowa',
        41.3052657,
        -94.4613543,
        'Iowa',
        'United_States',
        'Greenfield'
    ],
    [
        'Grinnell, Iowa',
        41.7434092,
        -92.7232456,
        'Iowa',
        'United_States',
        'Grinnell'
    ],
    [
        'Grundy Center, Iowa',
        42.3616501,
        -92.7685327,
        'Iowa',
        'United_States',
        'Grundy_Center'
    ],
    [
        'Guthrie Center, Iowa',
        41.6772087,
        -94.5033044,
        'Iowa',
        'United_States',
        'Guthrie_Center'
    ],
    [
        'Hampton, Iowa',
        42.7425009,
        -93.2103402,
        'Iowa',
        'United_States',
        'Hampton'
    ],
    ['Harlan, Iowa', 41.653044, -95.3255541, 'Iowa', 'United_States', 'Harlan'],
    [
        'Herbert Hoover National Historic Site, Iowa',
        41.6689744,
        -91.3477571,
        'Iowa',
        'United_States',
        'Herbert_Hoover_National_Historic_Site'
    ],
    [
        'Ida Grove, Iowa',
        42.3462987,
        -95.4716235,
        'Iowa',
        'United_States',
        'Ida_Grove'
    ],
    [
        'Independence, Iowa',
        42.4685978,
        -91.8893386,
        'Iowa',
        'United_States',
        'Independence'
    ],
    [
        'Indianola, Iowa',
        41.3580484,
        -93.5574376,
        'Iowa',
        'United_States',
        'Indianola'
    ],
    [
        'Inwood, Iowa',
        43.3072022,
        -96.4319799,
        'Iowa',
        'United_States',
        'Inwood'
    ],
    [
        'Iowa City, Iowa',
        41.6611277,
        -91.5301683,
        'Iowa',
        'United_States',
        'Iowa_City'
    ],
    [
        'Jefferson, Iowa',
        42.0172457,
        -94.3774232,
        'Iowa',
        'United_States',
        'Jefferson'
    ],
    [
        'Keosauqua, Iowa',
        40.7303057,
        -91.9623949,
        'Iowa',
        'United_States',
        'Keosauqua'
    ],
    [
        'Knoxville, Iowa',
        41.320343,
        -93.09967,
        'Iowa',
        'United_States',
        'Knoxville'
    ],
    ['Leon, Iowa', 40.739724, -93.7477217, 'Iowa', 'United_States', 'Leon'],
    [
        'Le Mars, Iowa',
        42.7941567,
        -96.1655778,
        'Iowa',
        'United_States',
        'Le_Mars'
    ],
    ['Logan, Iowa', 41.6430472, -95.7891614, 'Iowa', 'United_States', 'Logan'],
    [
        'Manchester, Iowa',
        42.4857853,
        -91.4579698,
        'Iowa',
        'United_States',
        'Manchester'
    ],
    [
        'Maquoketa, Iowa',
        42.0689088,
        -90.6656914,
        'Iowa',
        'United_States',
        'Maquoketa'
    ],
    [
        'Marengo, Iowa',
        41.7927817,
        -92.0696253,
        'Iowa',
        'United_States',
        'Marengo'
    ],
    [
        'Marshalltown, Iowa',
        42.0494674,
        -92.9080375,
        'Iowa',
        'United_States',
        'Marshalltown'
    ],
    [
        'Mason City, Iowa',
        43.1535728,
        -93.2010367,
        'Iowa',
        'United_States',
        'Mason_City'
    ],
    [
        'Merrill, Iowa',
        42.7197133,
        -96.2486357,
        'Iowa',
        'United_States',
        'Merrill'
    ],
    [
        'Montezuma, Iowa',
        41.585834,
        -92.5274091,
        'Iowa',
        'United_States',
        'Montezuma'
    ],
    [
        'Mount Ayr, Iowa',
        40.7147147,
        -94.235232,
        'Iowa',
        'United_States',
        'Mount_Ayr'
    ],
    [
        'Mount Pleasant, Iowa',
        40.9716959,
        -91.5487714,
        'Iowa',
        'United_States',
        'Mount_Pleasant'
    ],
    [
        'Muscatine, Iowa',
        41.424473,
        -91.0432051,
        'Iowa',
        'United_States',
        'Muscatine'
    ],
    [
        'Nevada, Iowa',
        42.0227184,
        -93.4523014,
        'Iowa',
        'United_States',
        'Nevada'
    ],
    [
        'Newton, Iowa',
        41.7033177,
        -93.0573533,
        'Iowa',
        'United_States',
        'Newton'
    ],
    [
        'New Hampton, Iowa',
        43.0592724,
        -92.317864,
        'Iowa',
        'United_States',
        'New_Hampton'
    ],
    [
        'Northwood, Iowa',
        43.4441245,
        -93.2210371,
        'Iowa',
        'United_States',
        'Northwood'
    ],
    ['Olin, Iowa', 41.9980675, -91.1415456, 'Iowa', 'United_States', 'Olin'],
    ['Onawa, Iowa', 42.0266548, -96.0972376, 'Iowa', 'United_States', 'Onawa'],
    [
        'Orange City, Iowa',
        43.0072087,
        -96.0583523,
        'Iowa',
        'United_States',
        'Orange_City'
    ],
    ['Osage, Iowa', 43.2841382, -92.8190838, 'Iowa', 'United_States', 'Osage'],
    [
        'Osceola, Iowa',
        41.0342618,
        -93.766759,
        'Iowa',
        'United_States',
        'Osceola'
    ],
    [
        'Oskaloosa, Iowa',
        41.2916728,
        -92.6493595,
        'Iowa',
        'United_States',
        'Oskaloosa'
    ],
    [
        'Ottumwa, Iowa',
        41.0160293,
        -92.4083022,
        'Iowa',
        'United_States',
        'Ottumwa'
    ],
    [
        'Pocahontas, Iowa',
        42.7355299,
        -94.6691467,
        'Iowa',
        'United_States',
        'Pocahontas'
    ],
    [
        'Primghar, Iowa',
        43.0869215,
        -95.627232,
        'Iowa',
        'United_States',
        'Primghar'
    ],
    [
        'Red Oak, Iowa',
        41.0170937,
        -95.2214477,
        'Iowa',
        'United_States',
        'Red_Oak'
    ],
    [
        'Reinbeck, Iowa',
        42.323597,
        -92.5993615,
        'Iowa',
        'United_States',
        'Reinbeck'
    ],
    [
        'Riverside, Iowa',
        41.4797413,
        -91.5812759,
        'Iowa',
        'United_States',
        'Riverside'
    ],
    [
        'Rockwell City, Iowa',
        42.3952576,
        -94.6338671,
        'Iowa',
        'United_States',
        'Rockwell_City'
    ],
    [
        'Rock Rapids, Iowa',
        43.4271945,
        -96.1758598,
        'Iowa',
        'United_States',
        'Rock_Rapids'
    ],
    [
        'Sac City, Iowa',
        42.4222033,
        -94.9897109,
        'Iowa',
        'United_States',
        'Sac_City'
    ],
    [
        'Sibley, Iowa',
        43.3999861,
        -95.7516395,
        'Iowa',
        'United_States',
        'Sibley'
    ],
    [
        'Sidney, Iowa',
        40.7483337,
        -95.6474959,
        'Iowa',
        'United_States',
        'Sidney'
    ],
    [
        'Sigourney, Iowa',
        41.3333445,
        -92.2046255,
        'Iowa',
        'United_States',
        'Sigourney'
    ],
    [
        'Sioux Center, Iowa',
        43.0797991,
        -96.1756935,
        'Iowa',
        'United_States',
        'Sioux_Center'
    ],
    [
        'Sioux City, Iowa',
        42.4999942,
        -96.4003069,
        'Iowa',
        'United_States',
        'Sioux_City'
    ],
    [
        'Spencer, Iowa',
        43.1450748,
        -95.144318,
        'Iowa',
        'United_States',
        'Spencer'
    ],
    [
        'Spriit Lake, Iowa',
        43.4226192,
        -95.1022313,
        'Iowa',
        'United_States',
        'Spriit_Lake'
    ],
    [
        'Storm Lake, Iowa',
        42.6430359,
        -95.2019399,
        'Iowa',
        'United_States',
        'Storm_Lake'
    ],
    [
        'Tipton, Iowa',
        41.7697434,
        -91.1279349,
        'Iowa',
        'United_States',
        'Tipton'
    ],
    [
        'Toledo, Iowa',
        41.9972134,
        -92.5835266,
        'Iowa',
        'United_States',
        'Toledo'
    ],
    [
        'Vinton, Iowa',
        42.1646477,
        -92.0185651,
        'Iowa',
        'United_States',
        'Vinton'
    ],
    [
        'Wapello, Iowa',
        41.1814193,
        -91.1854273,
        'Iowa',
        'United_States',
        'Wapello'
    ],
    [
        'Washington, Iowa',
        41.3014077,
        -91.6916417,
        'Iowa',
        'United_States',
        'Washington'
    ],
    [
        'Waterloo, Iowa',
        42.492786,
        -92.3425775,
        'Iowa',
        'United_States',
        'Waterloo'
    ],
    ['Waukon, Iowa', 43.2694208, -91.475695, 'Iowa', 'United_States', 'Waukon'],
    [
        'Waverly, Iowa',
        42.7272032,
        -92.4668511,
        'Iowa',
        'United_States',
        'Waverly'
    ],
    [
        'Webster City, Iowa',
        42.4694321,
        -93.8159149,
        'Iowa',
        'United_States',
        'Webster_City'
    ],
    [
        'West Union, Iowa',
        42.9627564,
        -91.8082167,
        'Iowa',
        'United_States',
        'West_Union'
    ],
    [
        'Winterset, Iowa',
        41.3308237,
        -94.0138393,
        'Iowa',
        'United_States',
        'Winterset'
    ],
    [
        'Abilene, Kansas',
        38.9172216,
        -97.2139094,
        'Kansas',
        'United_States',
        'Abilene'
    ],
    [
        'Alma, Kansas',
        39.0166657,
        -96.2891624,
        'Kansas',
        'United_States',
        'Alma'
    ],
    [
        'Anothony, Kansas',
        37.1533554,
        -98.0311727,
        'Kansas',
        'United_States',
        'Anothony'
    ],
    [
        'Arkansas City, Kansas',
        37.0619736,
        -97.0383712,
        'Kansas',
        'United_States',
        'Arkansas_City'
    ],
    [
        'Ashland, Kansas',
        37.1886376,
        -99.7656834,
        'Kansas',
        'United_States',
        'Ashland'
    ],
    [
        'Atchison, Kansas',
        39.5630521,
        -95.1216356,
        'Kansas',
        'United_States',
        'Atchison'
    ],
    [
        'Atwood, Kansas',
        39.806668,
        -101.0421012,
        'Kansas',
        'United_States',
        'Atwood'
    ],
    [
        'Augusta, Kansas',
        37.6866844,
        -96.9767023,
        'Kansas',
        'United_States',
        'Augusta'
    ],
    [
        'Belleville, Kansas',
        39.8244501,
        -97.6325415,
        'Kansas',
        'United_States',
        'Belleville'
    ],
    [
        'Beloit, Kansas',
        39.4561178,
        -98.1061595,
        'Kansas',
        'United_States',
        'Beloit'
    ],
    [
        'Brown v Board of Education National Historic Site, Kansas',
        39.0379273,
        -95.6764669,
        'Kansas',
        'United_States',
        'Brown_v_Board_of_Education_National_Historic_Site'
    ],
    [
        'Burlington, Kansas',
        38.1944667,
        -95.7427641,
        'Kansas',
        'United_States',
        'Burlington'
    ],
    [
        'Cimarron, Kansas',
        37.8066882,
        -100.3482003,
        'Kansas',
        'United_States',
        'Cimarron'
    ],
    [
        'Clay Center, Kansas',
        39.3769407,
        -97.1247428,
        'Kansas',
        'United_States',
        'Clay_Center'
    ],
    [
        'Colby, Kansas',
        39.3958369,
        -101.0523773,
        'Kansas',
        'United_States',
        'Colby'
    ],
    [
        'Coldwater, Kansas',
        37.2689131,
        -99.3267808,
        'Kansas',
        'United_States',
        'Coldwater'
    ],
    [
        'Columbus, Kansas',
        37.1692278,
        -94.8441239,
        'Kansas',
        'United_States',
        'Columbus'
    ],
    [
        'Concordia, Kansas',
        39.5708354,
        -97.6625396,
        'Kansas',
        'United_States',
        'Concordia'
    ],
    [
        'Cottonwood Falls, Kansas',
        38.3722364,
        -96.5427845,
        'Kansas',
        'United_States',
        'Cottonwood_Falls'
    ],
    [
        'Council Grove, Kansas',
        38.6611187,
        -96.4919473,
        'Kansas',
        'United_States',
        'Council_Grove'
    ],
    [
        'Delphos, Kansas',
        39.2738894,
        -97.7719828,
        'Kansas',
        'United_States',
        'Delphos'
    ],
    [
        'Dighton, Kansas',
        38.4819612,
        -100.4670844,
        'Kansas',
        'United_States',
        'Dighton'
    ],
    [
        'Dodge City, Kansas',
        37.7527982,
        -100.0170787,
        'Kansas',
        'United_States',
        'Dodge_City'
    ],
    [
        'Elkhart, Kansas',
        37.0080792,
        -101.8901664,
        'Kansas',
        'United_States',
        'Elkhart'
    ],
    [
        'Ellsworth, Kansas',
        38.7305648,
        -98.2281126,
        'Kansas',
        'United_States',
        'Ellsworth'
    ],
    [
        'El Dorado, Kansas',
        37.81724,
        -96.8622524,
        'Kansas',
        'United_States',
        'El_Dorado'
    ],
    [
        'Emporia, Kansas',
        38.403903,
        -96.1816626,
        'Kansas',
        'United_States',
        'Emporia'
    ],
    [
        'Erie, Kansas',
        37.5681066,
        -95.2433113,
        'Kansas',
        'United_States',
        'Erie'
    ],
    [
        'Eureka, Kansas',
        37.8239167,
        -96.2891703,
        'Kansas',
        'United_States',
        'Eureka'
    ],
    [
        'Fort Larned National Historic Site, Kansas',
        38.1830716,
        -99.2180641,
        'Kansas',
        'United_States',
        'Fort_Larned_National_Historic_Site'
    ],
    [
        'Fort Riley, Kansas',
        39.088346,
        -96.813939,
        'Kansas',
        'United_States',
        'Fort_Riley'
    ],
    [
        'Fort Scott, Kansas',
        37.8397626,
        -94.7082951,
        'Kansas',
        'United_States',
        'Fort_Scott'
    ],
    [
        'Fowler, Kansas',
        37.3855792,
        -100.1956967,
        'Kansas',
        'United_States',
        'Fowler'
    ],
    [
        'Fredonia, Kansas',
        37.5339386,
        -95.8266483,
        'Kansas',
        'United_States',
        'Fredonia'
    ],
    [
        'Garden City, Kansas',
        37.9716898,
        -100.8726618,
        'Kansas',
        'United_States',
        'Garden_City'
    ],
    [
        'Garden Plain, Kansas',
        37.6583471,
        -97.6836603,
        'Kansas',
        'United_States',
        'Garden_Plain'
    ],
    [
        'Garnett, Kansas',
        38.2805772,
        -95.2419192,
        'Kansas',
        'United_States',
        'Garnett'
    ],
    [
        'Girard, Kansas',
        37.5111596,
        -94.8380215,
        'Kansas',
        'United_States',
        'Girard'
    ],
    [
        'Goodland, Kansas',
        39.350833,
        -101.7101722,
        'Kansas',
        'United_States',
        'Goodland'
    ],
    [
        'Gove City, Kansas',
        38.9590176,
        -100.4877663,
        'Kansas',
        'United_States',
        'Gove_City'
    ],
    [
        'Great Bend, Kansas',
        38.3644567,
        -98.7648073,
        'Kansas',
        'United_States',
        'Great_Bend'
    ],
    [
        'Greensburg, Kansas',
        37.6027963,
        -99.2926131,
        'Kansas',
        'United_States',
        'Greensburg'
    ],
    [
        'Hays, Kansas',
        38.8791783,
        -99.3267702,
        'Kansas',
        'United_States',
        'Hays'
    ],
    [
        'Hiawatha, Kansas',
        39.8525033,
        -95.5358156,
        'Kansas',
        'United_States',
        'Hiawatha'
    ],
    [
        'Hill City, Kansas',
        39.3647281,
        -99.8420649,
        'Kansas',
        'United_States',
        'Hill_City'
    ],
    [
        'Holton, Kansas',
        39.4652724,
        -95.7363723,
        'Kansas',
        'United_States',
        'Holton'
    ],
    [
        'Howard, Kansas',
        37.4703117,
        -96.2636066,
        'Kansas',
        'United_States',
        'Howard'
    ],
    [
        'Hoxie, Kansas',
        39.3575049,
        -100.441807,
        'Kansas',
        'United_States',
        'Hoxie'
    ],
    [
        'Hugoton, Kansas',
        37.1753025,
        -101.3496025,
        'Kansas',
        'United_States',
        'Hugoton'
    ],
    [
        'Hutchinson, Kansas',
        38.0608445,
        -97.9297743,
        'Kansas',
        'United_States',
        'Hutchinson'
    ],
    [
        'Independence, Kansas',
        37.2242358,
        -95.7083131,
        'Kansas',
        'United_States',
        'Independence'
    ],
    [
        'Iola, Kansas',
        37.9244799,
        -95.3999814,
        'Kansas',
        'United_States',
        'Iola'
    ],
    [
        'Jetmore, Kansas',
        38.0844625,
        -99.8934619,
        'Kansas',
        'United_States',
        'Jetmore'
    ],
    [
        'Johnson City, Kansas',
        37.5703377,
        -101.7506777,
        'Kansas',
        'United_States',
        'Johnson_City'
    ],
    [
        'Junction City, Kansas',
        39.0286093,
        -96.8313978,
        'Kansas',
        'United_States',
        'Junction_City'
    ],
    [
        'Kansas City, Kansas',
        39.114053,
        -94.6274636,
        'Kansas',
        'United_States',
        'Kansas_City'
    ],
    [
        'Kingman, Kansas',
        37.6458491,
        -98.1136734,
        'Kansas',
        'United_States',
        'Kingman'
    ],
    [
        'Kinsley, Kansas',
        37.9230724,
        -99.4098384,
        'Kansas',
        'United_States',
        'Kinsley'
    ],
    [
        'Lakin, Kansas',
        37.9405752,
        -101.254892,
        'Kansas',
        'United_States',
        'Lakin'
    ],
    [
        'Lansing, Kansas',
        39.2486126,
        -94.9002413,
        'Kansas',
        'United_States',
        'Lansing'
    ],
    [
        'Larned, Kansas',
        38.1805693,
        -99.098713,
        'Kansas',
        'United_States',
        'Larned'
    ],
    [
        'Lawrence, Kansas',
        38.9716689,
        -95.2352501,
        'Kansas',
        'United_States',
        'Lawrence'
    ],
    [
        'La Crosse, Kansas',
        38.5314022,
        -99.3087154,
        'Kansas',
        'United_States',
        'La_Crosse'
    ],
    [
        'Leavenworth, Kansas',
        39.3111112,
        -94.9224637,
        'Kansas',
        'United_States',
        'Leavenworth'
    ],
    [
        'Leoti, Kansas',
        38.479741,
        -101.3587713,
        'Kansas',
        'United_States',
        'Leoti'
    ],
    [
        'Liberal, Kansas',
        37.0430812,
        -100.920999,
        'Kansas',
        'United_States',
        'Liberal'
    ],
    [
        'Lincoln, Kansas',
        39.0403293,
        -98.1476965,
        'Kansas',
        'United_States',
        'Lincoln'
    ],
    [
        'Lyndon, Kansas',
        38.6100099,
        -95.684429,
        'Kansas',
        'United_States',
        'Lyndon'
    ],
    [
        'Lyons, Kansas',
        38.3450104,
        -98.2017268,
        'Kansas',
        'United_States',
        'Lyons'
    ],
    [
        'Manhattan, Kansas',
        39.1836082,
        -96.5716694,
        'Kansas',
        'United_States',
        'Manhattan'
    ],
    [
        'Mankato, Kansas',
        39.7872343,
        -98.2100511,
        'Kansas',
        'United_States',
        'Mankato'
    ],
    [
        'Marion, Kansas',
        38.3483493,
        -97.017245,
        'Kansas',
        'United_States',
        'Marion'
    ],
    [
        'Marysville, Kansas',
        39.8411129,
        -96.647242,
        'Kansas',
        'United_States',
        'Marysville'
    ],
    [
        'McPherson, Kansas',
        38.3708415,
        -97.6642087,
        'Kansas',
        'United_States',
        'McPherson'
    ],
    [
        'Meade, Kansas',
        37.2855796,
        -100.3401456,
        'Kansas',
        'United_States',
        'Meade'
    ],
    [
        'Medicine Lodge, Kansas',
        37.2811339,
        -98.580361,
        'Kansas',
        'United_States',
        'Medicine_Lodge'
    ],
    [
        'Minneapolis, Kansas',
        39.1219448,
        -97.7067028,
        'Kansas',
        'United_States',
        'Minneapolis'
    ],
    [
        'Montezuma, Kansas',
        37.5958564,
        -100.4432047,
        'Kansas',
        'United_States',
        'Montezuma'
    ],
    [
        'Mound City, Kansas',
        38.1428068,
        -94.8135731,
        'Kansas',
        'United_States',
        'Mound_City'
    ],
    [
        'Mulvane, Kansas',
        37.474464,
        -97.2439325,
        'Kansas',
        'United_States',
        'Mulvane'
    ],
    [
        'Newton, Kansas',
        38.0466779,
        -97.3450365,
        'Kansas',
        'United_States',
        'Newton'
    ],
    [
        'Nicodemus National Historic Site, Kansas',
        39.3905896,
        -99.6179551,
        'Kansas',
        'United_States',
        'Nicodemus_National_Historic_Site'
    ],
    [
        'Norton, Kansas',
        39.8338946,
        -99.8915113,
        'Kansas',
        'United_States',
        'Norton'
    ],
    [
        'Oakley, Kansas',
        39.1270975,
        -100.8479688,
        'Kansas',
        'United_States',
        'Oakley'
    ],
    [
        'Oberlin, Kansas',
        39.8183384,
        -100.528201,
        'Kansas',
        'United_States',
        'Oberlin'
    ],
    [
        'Olathe, Kansas',
        38.8813958,
        -94.8191285,
        'Kansas',
        'United_States',
        'Olathe'
    ],
    [
        'Osborne, Kansas',
        39.4388993,
        -98.6947949,
        'Kansas',
        'United_States',
        'Osborne'
    ],
    [
        'Oskaloosa, Kansas',
        39.215277,
        -95.3127498,
        'Kansas',
        'United_States',
        'Oskaloosa'
    ],
    [
        'Oswego, Kansas',
        37.1675652,
        -95.1099645,
        'Kansas',
        'United_States',
        'Oswego'
    ],
    [
        'Ottawa, Kansas',
        38.615768,
        -95.2686366,
        'Kansas',
        'United_States',
        'Ottawa'
    ],
    [
        'Paola, Kansas',
        38.5722353,
        -94.8791294,
        'Kansas',
        'United_States',
        'Paola'
    ],
    [
        'Phillipsburg, Kansas',
        39.7561206,
        -99.3239853,
        'Kansas',
        'United_States',
        'Phillipsburg'
    ],
    [
        'Pittsburg, Kansas',
        37.410884,
        -94.70496,
        'Kansas',
        'United_States',
        'Pittsburg'
    ],
    [
        'Pratt, Kansas',
        37.6439071,
        -98.7375911,
        'Kansas',
        'United_States',
        'Pratt'
    ],
    [
        'Russell, Kansas',
        38.8952893,
        -98.8598061,
        'Kansas',
        'United_States',
        'Russell'
    ],
    [
        'Saint Francis, Kansas',
        39.7741861,
        -101.8009427,
        'Kansas',
        'United_States',
        'Saint_Francis'
    ],
    [
        'Saint John, Kansas',
        38.0022371,
        -98.7600887,
        'Kansas',
        'United_States',
        'Saint_John'
    ],
    [
        'Salina, Kansas',
        38.8402805,
        -97.6114237,
        'Kansas',
        'United_States',
        'Salina'
    ],
    [
        'Scott City, Kansas',
        38.4825192,
        -100.9070949,
        'Kansas',
        'United_States',
        'Scott_City'
    ],
    [
        'Sedan, Kansas',
        37.1267196,
        -96.1869361,
        'Kansas',
        'United_States',
        'Sedan'
    ],
    [
        'Seneca, Kansas',
        39.834165,
        -96.0641676,
        'Kansas',
        'United_States',
        'Seneca'
    ],
    [
        'Sharon Springs, Kansas',
        38.8977867,
        -101.7521158,
        'Kansas',
        'United_States',
        'Sharon_Springs'
    ],
    [
        'Smith Center, Kansas',
        39.7791786,
        -98.7850749,
        'Kansas',
        'United_States',
        'Smith_Center'
    ],
    [
        'Sterling, Kansas',
        38.2100111,
        -98.2070059,
        'Kansas',
        'United_States',
        'Sterling'
    ],
    [
        'Stockton, Kansas',
        39.4380656,
        -99.2650967,
        'Kansas',
        'United_States',
        'Stockton'
    ],
    [
        'Sublette, Kansas',
        37.4816911,
        -100.8437736,
        'Kansas',
        'United_States',
        'Sublette'
    ],
    [
        'Syracuse, Kansas',
        37.9805686,
        -101.7526718,
        'Kansas',
        'United_States',
        'Syracuse'
    ],
    [
        'Tallgrass Prairie National Preserve, Kansas',
        38.4426255,
        -96.5730004,
        'Kansas',
        'United_States',
        'Tallgrass_Prairie_National_Preserve'
    ],
    [
        'Topeka, Kansas',
        39.0558235,
        -95.6890185,
        'Kansas',
        'United_States',
        'Topeka'
    ],
    [
        'Tribune, Kansas',
        38.4697378,
        -101.7526723,
        'Kansas',
        'United_States',
        'Tribune'
    ],
    [
        'Troy, Kansas',
        39.7888604,
        -95.0924081,
        'Kansas',
        'United_States',
        'Troy'
    ],
    [
        'Ulysses, Kansas',
        37.5814095,
        -101.3551696,
        'Kansas',
        'United_States',
        'Ulysses'
    ],
    [
        'WaKeeny, Kansas',
        39.0250082,
        -99.8795656,
        'Kansas',
        'United_States',
        'WaKeeny'
    ],
    [
        'Washington, Kansas',
        39.8180592,
        -97.0508605,
        'Kansas',
        'United_States',
        'Washington'
    ],
    [
        'Wellington, Kansas',
        37.2653004,
        -97.3717118,
        'Kansas',
        'United_States',
        'Wellington'
    ],
    [
        'Westmoreland, Kansas',
        39.3938853,
        -96.4136137,
        'Kansas',
        'United_States',
        'Westmoreland'
    ],
    [
        'Wichita, Kansas',
        37.6871761,
        -97.330053,
        'Kansas',
        'United_States',
        'Wichita'
    ],
    [
        'Winfield, Kansas',
        37.2397486,
        -96.9955918,
        'Kansas',
        'United_States',
        'Winfield'
    ],
    [
        'Yates Center, Kansas',
        37.8811472,
        -95.7333175,
        'Kansas',
        'United_States',
        'Yates_Center'
    ],
    [
        'Abraham Lincoln Birthplace National Historic Site, Kentucky',
        37.531124,
        -85.7375098,
        'Kentucky',
        'United_States',
        'Abraham_Lincoln_Birthplace_National_Historic_Site'
    ],
    [
        'Albany, Kentucky',
        36.6908991,
        -85.1346776,
        'Kentucky',
        'United_States',
        'Albany'
    ],
    [
        'Alexandria, Kentucky',
        38.9595078,
        -84.3879946,
        'Kentucky',
        'United_States',
        'Alexandria'
    ],
    [
        'Ashland, Kentucky',
        38.4784144,
        -82.6379387,
        'Kentucky',
        'United_States',
        'Ashland'
    ],
    [
        'Barbourville, Kentucky',
        36.8664765,
        -83.8888138,
        'Kentucky',
        'United_States',
        'Barbourville'
    ],
    [
        'Bardstown, Kentucky',
        37.8092279,
        -85.4669025,
        'Kentucky',
        'United_States',
        'Bardstown'
    ],
    [
        'Bardwell, Kentucky',
        36.8706111,
        -89.0097869,
        'Kentucky',
        'United_States',
        'Bardwell'
    ],
    [
        'Beattyville, Kentucky',
        37.5717532,
        -83.7068597,
        'Kentucky',
        'United_States',
        'Beattyville'
    ],
    [
        'Bedford, Kentucky',
        38.592563,
        -85.3177344,
        'Kentucky',
        'United_States',
        'Bedford'
    ],
    [
        'Benton, Kentucky',
        36.8572781,
        -88.350315,
        'Kentucky',
        'United_States',
        'Benton'
    ],
    [
        'Berea, Kentucky',
        37.568694,
        -84.2963223,
        'Kentucky',
        'United_States',
        'Berea'
    ],
    [
        'Booneville, Kentucky',
        37.4761991,
        -83.6749145,
        'Kentucky',
        'United_States',
        'Booneville'
    ],
    [
        'Bowling Green, Kentucky',
        36.9685219,
        -86.4808043,
        'Kentucky',
        'United_States',
        'Bowling_Green'
    ],
    [
        'Brandenburg, Kentucky',
        37.9989592,
        -86.1694143,
        'Kentucky',
        'United_States',
        'Brandenburg'
    ],
    [
        'Brooksville, Kentucky',
        38.6825719,
        -84.0657632,
        'Kentucky',
        'United_States',
        'Brooksville'
    ],
    [
        'Brownsville, Kentucky',
        37.1925472,
        -86.2677545,
        'Kentucky',
        'United_States',
        'Brownsville'
    ],
    [
        'Burkesville, Kentucky',
        36.7903399,
        -85.3705186,
        'Kentucky',
        'United_States',
        'Burkesville'
    ],
    [
        'Burlington, Kentucky',
        39.02756,
        -84.7241133,
        'Kentucky',
        'United_States',
        'Burlington'
    ],
    [
        'Cadiz, Kentucky',
        36.8650496,
        -87.835295,
        'Kentucky',
        'United_States',
        'Cadiz'
    ],
    [
        'Calhoun, Kentucky',
        37.5389351,
        -87.2583316,
        'Kentucky',
        'United_States',
        'Calhoun'
    ],
    [
        'Campbellsville, Kentucky',
        37.3433974,
        -85.3419069,
        'Kentucky',
        'United_States',
        'Campbellsville'
    ],
    [
        'Campton, Kentucky',
        37.7342526,
        -83.547409,
        'Kentucky',
        'United_States',
        'Campton'
    ],
    [
        'Carlisle, Kentucky',
        38.3120197,
        -84.027427,
        'Kentucky',
        'United_States',
        'Carlisle'
    ],
    [
        'Carrollton, Kentucky',
        38.6808958,
        -85.1793979,
        'Kentucky',
        'United_States',
        'Carrollton'
    ],
    [
        'Catlettsburg, Kentucky',
        38.4048042,
        -82.6004369,
        'Kentucky',
        'United_States',
        'Catlettsburg'
    ],
    [
        'Clinton, Kentucky',
        36.6672813,
        -88.9933965,
        'Kentucky',
        'United_States',
        'Clinton'
    ],
    [
        'Columbia, Kentucky',
        37.102841,
        -85.3063504,
        'Kentucky',
        'United_States',
        'Columbia'
    ],
    [
        'Covington, Kentucky',
        39.0836712,
        -84.5085536,
        'Kentucky',
        'United_States',
        'Covington'
    ],
    [
        'Cynthiana, Kentucky',
        38.3903526,
        -84.2941013,
        'Kentucky',
        'United_States',
        'Cynthiana'
    ],
    [
        'Danville, Kentucky',
        37.6456329,
        -84.7721702,
        'Kentucky',
        'United_States',
        'Danville'
    ],
    [
        'Dixon, Kentucky',
        37.5178218,
        -87.6902886,
        'Kentucky',
        'United_States',
        'Dixon'
    ],
    [
        'Eddyville, Kentucky',
        37.0944971,
        -88.080301,
        'Kentucky',
        'United_States',
        'Eddyville'
    ],
    [
        'Edmonton, Kentucky',
        36.9800563,
        -85.6121906,
        'Kentucky',
        'United_States',
        'Edmonton'
    ],
    [
        'Elizabethtown, Kentucky',
        37.7030646,
        -85.8649408,
        'Kentucky',
        'United_States',
        'Elizabethtown'
    ],
    [
        'Elkton, Kentucky',
        36.8100425,
        -87.1541675,
        'Kentucky',
        'United_States',
        'Elkton'
    ],
    [
        'Falmouth, Kentucky',
        38.6767372,
        -84.3302142,
        'Kentucky',
        'United_States',
        'Falmouth'
    ],
    [
        'Flemmingsburg, Kentucky',
        38.4222995,
        -83.7338076,
        'Kentucky',
        'United_States',
        'Flemmingsburg'
    ],
    [
        'Fort Knox, Kentucky',
        37.8836637,
        -85.9652686,
        'Kentucky',
        'United_States',
        'Fort_Knox'
    ],
    [
        'Frankfort, Kentucky',
        38.2009055,
        -84.8732835,
        'Kentucky',
        'United_States',
        'Frankfort'
    ],
    [
        'Franklin, Kentucky',
        36.722263,
        -86.5772177,
        'Kentucky',
        'United_States',
        'Franklin'
    ],
    [
        'Frenchburg, Kentucky',
        37.950916,
        -83.6257452,
        'Kentucky',
        'United_States',
        'Frenchburg'
    ],
    [
        'Georgetown, Kentucky',
        38.2097967,
        -84.5588311,
        'Kentucky',
        'United_States',
        'Georgetown'
    ],
    [
        'Gilbertsville, Kentucky',
        37.0244948,
        -88.3024934,
        'Kentucky',
        'United_States',
        'Gilbertsville'
    ],
    [
        'Glasgow, Kentucky',
        36.9958839,
        -85.9119215,
        'Kentucky',
        'United_States',
        'Glasgow'
    ],
    [
        'Grayson, Kentucky',
        38.3325812,
        -82.9485023,
        'Kentucky',
        'United_States',
        'Grayson'
    ],
    [
        'Greensburg, Kentucky',
        37.2608936,
        -85.4988548,
        'Kentucky',
        'United_States',
        'Greensburg'
    ],
    [
        'Greenup, Kentucky',
        38.5731349,
        -82.8301677,
        'Kentucky',
        'United_States',
        'Greenup'
    ],
    [
        'Greenville, Kentucky',
        37.2011539,
        -87.1788854,
        'Kentucky',
        'United_States',
        'Greenville'
    ],
    [
        'Hardinsburg, Kentucky',
        37.7800591,
        -86.4605337,
        'Kentucky',
        'United_States',
        'Hardinsburg'
    ],
    [
        'Harlan, Kentucky',
        36.8431441,
        -83.321848,
        'Kentucky',
        'United_States',
        'Harlan'
    ],
    [
        'Harrodsburg, Kentucky',
        37.762298,
        -84.8432852,
        'Kentucky',
        'United_States',
        'Harrodsburg'
    ],
    [
        'Hartford, Kentucky',
        37.4511591,
        -86.9091596,
        'Kentucky',
        'United_States',
        'Hartford'
    ],
    [
        'Hawesville, Kentucky',
        37.9000554,
        -86.754988,
        'Kentucky',
        'United_States',
        'Hawesville'
    ],
    [
        'Hazard, Kentucky',
        37.24954,
        -83.1932284,
        'Kentucky',
        'United_States',
        'Hazard'
    ],
    [
        'Henderson, Kentucky',
        37.8361538,
        -87.5900134,
        'Kentucky',
        'United_States',
        'Henderson'
    ],
    [
        'Hickman, Kentucky',
        36.5711721,
        -89.1861791,
        'Kentucky',
        'United_States',
        'Hickman'
    ],
    [
        'Hindman, Kentucky',
        37.3359313,
        -82.9804414,
        'Kentucky',
        'United_States',
        'Hindman'
    ],
    [
        'Hodgenville, Kentucky',
        37.5739497,
        -85.7399606,
        'Kentucky',
        'United_States',
        'Hodgenville'
    ],
    [
        'Hopkinsville, Kentucky',
        36.8656008,
        -87.4886186,
        'Kentucky',
        'United_States',
        'Hopkinsville'
    ],
    [
        'Hyden, Kentucky',
        37.1609254,
        -83.3732373,
        'Kentucky',
        'United_States',
        'Hyden'
    ],
    [
        'Inez, Kentucky',
        37.8664833,
        -82.5387633,
        'Kentucky',
        'United_States',
        'Inez'
    ],
    [
        'Irvine, Kentucky',
        37.700638,
        -83.973813,
        'Kentucky',
        'United_States',
        'Irvine'
    ],
    [
        'Jackson, Kentucky',
        37.5531457,
        -83.3835135,
        'Kentucky',
        'United_States',
        'Jackson'
    ],
    [
        'Jamestown, Kentucky',
        36.9847899,
        -85.06301,
        'Kentucky',
        'United_States',
        'Jamestown'
    ],
    [
        'Lancaster, Kentucky',
        37.6195246,
        -84.5779957,
        'Kentucky',
        'United_States',
        'Lancaster'
    ],
    [
        'Lawrenceburg, Kentucky',
        38.0372967,
        -84.8966171,
        'Kentucky',
        'United_States',
        'Lawrenceburg'
    ],
    [
        'La Grange, Kentucky',
        38.4075666,
        -85.3788468,
        'Kentucky',
        'United_States',
        'La_Grange'
    ],
    [
        'Lebanon, Kentucky',
        37.5697868,
        -85.2527381,
        'Kentucky',
        'United_States',
        'Lebanon'
    ],
    [
        'Leitchfield, Kentucky',
        37.4800544,
        -86.2938637,
        'Kentucky',
        'United_States',
        'Leitchfield'
    ],
    [
        'Lexington, Kentucky',
        38.0405837,
        -84.5037164,
        'Kentucky',
        'United_States',
        'Lexington'
    ],
    [
        'Liberty, Kentucky',
        37.3184064,
        -84.9393979,
        'Kentucky',
        'United_States',
        'Liberty'
    ],
    [
        'London, Kentucky',
        37.1289771,
        -84.0832646,
        'Kentucky',
        'United_States',
        'London'
    ],
    [
        'Louisa, Kentucky',
        38.1142544,
        -82.6032119,
        'Kentucky',
        'United_States',
        'Louisa'
    ],
    [
        'Louisville, Kentucky',
        38.2526647,
        -85.7584557,
        'Kentucky',
        'United_States',
        'Louisville'
    ],
    [
        'Madisonville, Kentucky',
        37.3281005,
        -87.4988882,
        'Kentucky',
        'United_States',
        'Madisonville'
    ],
    [
        'Mammoth Cave National Park, Kentucky',
        37.1861597,
        -86.0999753,
        'Kentucky',
        'United_States',
        'Mammoth_Cave_National_Park'
    ],
    [
        'Manchester, Kentucky',
        37.1537007,
        -83.7618641,
        'Kentucky',
        'United_States',
        'Manchester'
    ],
    [
        'Marion, Kentucky',
        37.3328286,
        -88.0811349,
        'Kentucky',
        'United_States',
        'Marion'
    ],
    [
        'Mayfield, Kentucky',
        36.7417235,
        -88.6367154,
        'Kentucky',
        'United_States',
        'Mayfield'
    ],
    [
        'Maysville, Kentucky',
        38.6411854,
        -83.744365,
        'Kentucky',
        'United_States',
        'Maysville'
    ],
    [
        'McKee, Kentucky',
        37.430364,
        -83.9979834,
        'Kentucky',
        'United_States',
        'McKee'
    ],
    [
        'Monticello, Kentucky',
        36.8297937,
        -84.8491126,
        'Kentucky',
        'United_States',
        'Monticello'
    ],
    [
        'Morehead, Kentucky',
        38.1839705,
        -83.4326841,
        'Kentucky',
        'United_States',
        'Morehead'
    ],
    [
        'Morganfield, Kentucky',
        37.6833776,
        -87.9166915,
        'Kentucky',
        'United_States',
        'Morganfield'
    ],
    [
        'Morgantown, Kentucky',
        37.2256023,
        -86.6835998,
        'Kentucky',
        'United_States',
        'Morgantown'
    ],
    [
        'Mount Olivet, Kentucky',
        38.531463,
        -84.036872,
        'Kentucky',
        'United_States',
        'Mount_Olivet'
    ],
    [
        'Mount Sterling, Kentucky',
        38.0564679,
        -83.9432556,
        'Kentucky',
        'United_States',
        'Mount_Sterling'
    ],
    [
        'Mount Vernon, Kentucky',
        37.3528615,
        -84.3404919,
        'Kentucky',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Munfordville, Kentucky',
        37.2722751,
        -85.8910819,
        'Kentucky',
        'United_States',
        'Munfordville'
    ],
    [
        'Murray, Kentucky',
        36.6103334,
        -88.314761,
        'Kentucky',
        'United_States',
        'Murray'
    ],
    [
        'New Castle, Kentucky',
        38.4334003,
        -85.1696768,
        'Kentucky',
        'United_States',
        'New_Castle'
    ],
    [
        'Nicholasville, Kentucky',
        37.8806341,
        -84.5729961,
        'Kentucky',
        'United_States',
        'Nicholasville'
    ],
    [
        'Owensboro, Kentucky',
        37.7719074,
        -87.1111676,
        'Kentucky',
        'United_States',
        'Owensboro'
    ],
    [
        'Owenton, Kentucky',
        38.536456,
        -84.8418926,
        'Kentucky',
        'United_States',
        'Owenton'
    ],
    [
        'Owingsville, Kentucky',
        38.1448015,
        -83.7640847,
        'Kentucky',
        'United_States',
        'Owingsville'
    ],
    [
        'Paducah, Kentucky',
        37.0833893,
        -88.6000478,
        'Kentucky',
        'United_States',
        'Paducah'
    ],
    [
        'Paintsville, Kentucky',
        37.8145384,
        -82.8071054,
        'Kentucky',
        'United_States',
        'Paintsville'
    ],
    [
        'Paris, Kentucky',
        38.2097987,
        -84.2529869,
        'Kentucky',
        'United_States',
        'Paris'
    ],
    [
        'Pembroke, Kentucky',
        36.775878,
        -87.3555622,
        'Kentucky',
        'United_States',
        'Pembroke'
    ],
    [
        'Pikeville, Kentucky',
        37.4792672,
        -82.5187629,
        'Kentucky',
        'United_States',
        'Pikeville'
    ],
    [
        'Pineville, Kentucky',
        36.76203,
        -83.6949176,
        'Kentucky',
        'United_States',
        'Pineville'
    ],
    [
        'Prestonburg, Kentucky',
        37.6656527,
        -82.7715486,
        'Kentucky',
        'United_States',
        'Prestonburg'
    ],
    [
        'Princeton, Kentucky',
        37.1092162,
        -87.8819594,
        'Kentucky',
        'United_States',
        'Princeton'
    ],
    [
        'Richmond, Kentucky',
        37.7478572,
        -84.2946539,
        'Kentucky',
        'United_States',
        'Richmond'
    ],
    [
        'Russellville, Kentucky',
        36.8453199,
        -86.887219,
        'Kentucky',
        'United_States',
        'Russellville'
    ],
    [
        'Salyersville, Kentucky',
        37.7525922,
        -83.0687816,
        'Kentucky',
        'United_States',
        'Salyersville'
    ],
    [
        'Sandy Hook, Kentucky',
        38.0864739,
        -83.1262839,
        'Kentucky',
        'United_States',
        'Sandy_Hook'
    ],
    [
        'Scottsville, Kentucky',
        36.7533781,
        -86.1905424,
        'Kentucky',
        'United_States',
        'Scottsville'
    ],
    [
        'Shelbyville, Kentucky',
        38.2120144,
        -85.2235666,
        'Kentucky',
        'United_States',
        'Shelbyville'
    ],
    [
        'Shepherdsville, Kentucky',
        37.9883991,
        -85.7157924,
        'Kentucky',
        'United_States',
        'Shepherdsville'
    ],
    [
        'Smithland, Kentucky',
        37.1389445,
        -88.4033716,
        'Kentucky',
        'United_States',
        'Smithland'
    ],
    [
        'Somerset, Kentucky',
        37.0920222,
        -84.6041084,
        'Kentucky',
        'United_States',
        'Somerset'
    ],
    [
        'Springfield, Kentucky',
        37.6853413,
        -85.2221819,
        'Kentucky',
        'United_States',
        'Springfield'
    ],
    [
        'Stanford, Kentucky',
        37.5311901,
        -84.6618876,
        'Kentucky',
        'United_States',
        'Stanford'
    ],
    [
        'Stanton, Kentucky',
        37.8456373,
        -83.8582525,
        'Kentucky',
        'United_States',
        'Stanton'
    ],
    [
        'Sturgis, Kentucky',
        37.5467135,
        -87.983914,
        'Kentucky',
        'United_States',
        'Sturgis'
    ],
    [
        'Taylorsville, Kentucky',
        38.0317304,
        -85.3424533,
        'Kentucky',
        'United_States',
        'Taylorsville'
    ],
    [
        'Tompkinsville, Kentucky',
        36.7022797,
        -85.6916396,
        'Kentucky',
        'United_States',
        'Tompkinsville'
    ],
    [
        'Vanceburg, Kentucky',
        38.599243,
        -83.3187952,
        'Kentucky',
        'United_States',
        'Vanceburg'
    ],
    [
        'Versailles, Kentucky',
        38.052576,
        -84.7299464,
        'Kentucky',
        'United_States',
        'Versailles'
    ],
    [
        'Warsaw, Kentucky',
        38.7833963,
        -84.9016151,
        'Kentucky',
        'United_States',
        'Warsaw'
    ],
    [
        'West Liberty, Kentucky',
        37.9214758,
        -83.2596216,
        'Kentucky',
        'United_States',
        'West_Liberty'
    ],
    [
        'Whitesburg, Kentucky',
        37.1184318,
        -82.8268265,
        'Kentucky',
        'United_States',
        'Whitesburg'
    ],
    [
        'Whitley City, Kentucky',
        36.7234118,
        -84.4704942,
        'Kentucky',
        'United_States',
        'Whitley_City'
    ],
    [
        'Wickliffe, Kentucky',
        36.9647754,
        -89.0892348,
        'Kentucky',
        'United_States',
        'Wickliffe'
    ],
    [
        'Williamsburg, Kentucky',
        36.7434169,
        -84.1596561,
        'Kentucky',
        'United_States',
        'Williamsburg'
    ],
    [
        'Williamstown, Kentucky',
        38.6381245,
        -84.5604977,
        'Kentucky',
        'United_States',
        'Williamstown'
    ],
    [
        'Winchester, Kentucky',
        37.990079,
        -84.1796503,
        'Kentucky',
        'United_States',
        'Winchester'
    ],
    [
        'Abbeville, Louisiana',
        29.9746502,
        -92.1342921,
        'Louisiana',
        'United_States',
        'Abbeville'
    ],
    [
        'Alexandria, Louisiana',
        31.3112936,
        -92.4451371,
        'Louisiana',
        'United_States',
        'Alexandria'
    ],
    [
        'Amite, Louisiana',
        30.7265747,
        -90.5089815,
        'Louisiana',
        'United_States',
        'Amite'
    ],
    [
        'Arcadia, Louisiana',
        32.5490406,
        -92.920158,
        'Louisiana',
        'United_States',
        'Arcadia'
    ],
    [
        'Bastrop, Louisiana',
        32.7562463,
        -91.8723497,
        'Louisiana',
        'United_States',
        'Bastrop'
    ],
    [
        'Baton Rouge, Louisiana',
        30.4582829,
        -91.1403196,
        'Louisiana',
        'United_States',
        'Baton_Rouge'
    ],
    [
        'Benton, Louisiana',
        32.6948677,
        -93.7418454,
        'Louisiana',
        'United_States',
        'Benton'
    ],
    [
        'Cameron, Louisiana',
        29.7977212,
        -93.3251535,
        'Louisiana',
        'United_States',
        'Cameron'
    ],
    [
        'Cane River Creole National Historical Park, Louisiana',
        31.6652693,
        -93.0033638,
        'Louisiana',
        'United_States',
        'Cane_River_Creole_National_Historical_Park'
    ],
    [
        'Chalmette, Louisiana',
        29.942783,
        -89.9635162,
        'Louisiana',
        'United_States',
        'Chalmette'
    ],
    [
        'Choudrant, Louisiana',
        32.5301484,
        -92.5143122,
        'Louisiana',
        'United_States',
        'Choudrant'
    ],
    [
        'Clinton, Louisiana',
        30.8657362,
        -91.0156594,
        'Louisiana',
        'United_States',
        'Clinton'
    ],
    [
        'Colfax, Louisiana',
        31.5190623,
        -92.706816,
        'Louisiana',
        'United_States',
        'Colfax'
    ],
    [
        'Columbia, Louisiana',
        32.1051567,
        -92.0779129,
        'Louisiana',
        'United_States',
        'Columbia'
    ],
    [
        'Convent, Louisiana',
        30.0207933,
        -90.8300269,
        'Louisiana',
        'United_States',
        'Convent'
    ],
    [
        'Coushatta, Louisiana',
        32.0148834,
        -93.3421165,
        'Louisiana',
        'United_States',
        'Coushatta'
    ],
    [
        'Covington, Louisiana',
        30.4754702,
        -90.1009108,
        'Louisiana',
        'United_States',
        'Covington'
    ],
    [
        'Crowley, Louisiana',
        30.2140928,
        -92.3745761,
        'Louisiana',
        'United_States',
        'Crowley'
    ],
    [
        'Dequincy, Louisiana',
        30.4504779,
        -93.4332189,
        'Louisiana',
        'United_States',
        'Dequincy'
    ],
    [
        'DeRidder, Louisiana',
        30.8463055,
        -93.2890527,
        'Louisiana',
        'United_States',
        'DeRidder'
    ],
    [
        'Donaldsonville, Louisiana',
        30.1010323,
        -90.9928773,
        'Louisiana',
        'United_States',
        'Donaldsonville'
    ],
    [
        'Downsville, Louisiana',
        32.6268108,
        -92.4143096,
        'Louisiana',
        'United_States',
        'Downsville'
    ],
    [
        'Edgard, Louisiana',
        30.0432578,
        -90.5600869,
        'Louisiana',
        'United_States',
        'Edgard'
    ],
    [
        'Farmerville, Louisiana',
        32.7734728,
        -92.4056985,
        'Louisiana',
        'United_States',
        'Farmerville'
    ],
    [
        'Fort Polk, Louisiana',
        31.0567117,
        -93.2131232,
        'Louisiana',
        'United_States',
        'Fort_Polk'
    ],
    [
        'Franklin, Louisiana',
        29.7960399,
        -91.5015002,
        'Louisiana',
        'United_States',
        'Franklin'
    ],
    [
        'Franklinton, Louisiana',
        30.8471283,
        -90.153141,
        'Louisiana',
        'United_States',
        'Franklinton'
    ],
    [
        'Greensburg, Louisiana',
        30.8307379,
        -90.6717642,
        'Louisiana',
        'United_States',
        'Greensburg'
    ],
    [
        'Gretna, Louisiana',
        29.9146493,
        -90.0539603,
        'Louisiana',
        'United_States',
        'Gretna'
    ],
    [
        'Hahnville, Louisiana',
        29.9765931,
        -90.4089708,
        'Louisiana',
        'United_States',
        'Hahnville'
    ],
    [
        'Hammond, Louisiana',
        30.5043583,
        -90.4611995,
        'Louisiana',
        'United_States',
        'Hammond'
    ],
    [
        'Harrisonburg, Louisiana',
        31.7721106,
        -91.8215177,
        'Louisiana',
        'United_States',
        'Harrisonburg'
    ],
    [
        'Homer, Louisiana',
        32.7918133,
        -93.055718,
        'Louisiana',
        'United_States',
        'Homer'
    ],
    [
        'Houma, Louisiana',
        29.5957696,
        -90.7195348,
        'Louisiana',
        'United_States',
        'Houma'
    ],
    [
        'Jean Lafitte National Historical Park and Preserve, Louisiana',
        29.8235815,
        -90.1401381,
        'Louisiana',
        'United_States',
        'Jean_Lafitte_National_Historical_Park_and_Preserve'
    ],
    [
        'Jena, Louisiana',
        31.6832271,
        -92.1337448,
        'Louisiana',
        'United_States',
        'Jena'
    ],
    [
        'Jennings, Louisiana',
        30.2224284,
        -92.657085,
        'Louisiana',
        'United_States',
        'Jennings'
    ],
    [
        'Jonesboro, Louisiana',
        32.2412672,
        -92.7159853,
        'Louisiana',
        'United_States',
        'Jonesboro'
    ],
    [
        'Lafayette, Louisiana',
        30.2240897,
        -92.0198427,
        'Louisiana',
        'United_States',
        'Lafayette'
    ],
    [
        'Lake Charles, Louisiana',
        30.2265949,
        -93.2173758,
        'Louisiana',
        'United_States',
        'Lake_Charles'
    ],
    [
        'Lake Providence, Louisiana',
        32.8042966,
        -91.170109,
        'Louisiana',
        'United_States',
        'Lake_Providence'
    ],
    [
        'Leesville, Louisiana',
        31.1435194,
        -93.260998,
        'Louisiana',
        'United_States',
        'Leesville'
    ],
    [
        'Livingston, Louisiana',
        30.5021345,
        -90.7478737,
        'Louisiana',
        'United_States',
        'Livingston'
    ],
    [
        'Mandeville, Louisiana',
        30.3582506,
        -90.0656311,
        'Louisiana',
        'United_States',
        'Mandeville'
    ],
    [
        'Mansfield, Louisiana',
        32.0376629,
        -93.7001819,
        'Louisiana',
        'United_States',
        'Mansfield'
    ],
    [
        'Many, Louisiana',
        31.5687848,
        -93.4840645,
        'Louisiana',
        'United_States',
        'Many'
    ],
    [
        'Marksville, Louisiana',
        31.1279652,
        -92.0662356,
        'Louisiana',
        'United_States',
        'Marksville'
    ],
    [
        'Metairie, Louisiana',
        29.9840922,
        -90.1528519,
        'Louisiana',
        'United_States',
        'Metairie'
    ],
    [
        'Minden, Louisiana',
        32.6154278,
        -93.2868354,
        'Louisiana',
        'United_States',
        'Minden'
    ],
    [
        'Monroe, Louisiana',
        32.5093109,
        -92.1193012,
        'Louisiana',
        'United_States',
        'Monroe'
    ],
    [
        'Morganza, Louisiana',
        30.738518,
        -91.5942819,
        'Louisiana',
        'United_States',
        'Morganza'
    ],
    [
        'Morgan City, Louisiana',
        29.6993748,
        -91.20677,
        'Louisiana',
        'United_States',
        'Morgan_City'
    ],
    [
        'Napoleonville, Louisiana',
        29.9404803,
        -91.0248213,
        'Louisiana',
        'United_States',
        'Napoleonville'
    ],
    [
        'Natchitoches, Louisiana',
        31.7607195,
        -93.0862749,
        'Louisiana',
        'United_States',
        'Natchitoches'
    ],
    [
        'New Iberia, Louisiana',
        30.0035365,
        -91.8187285,
        'Louisiana',
        'United_States',
        'New_Iberia'
    ],
    [
        'New Orleans, Louisiana',
        29.9510658,
        -90.0715323,
        'Louisiana',
        'United_States',
        'New_Orleans'
    ],
    [
        'New Roads, Louisiana',
        30.7015741,
        -91.4362242,
        'Louisiana',
        'United_States',
        'New_Roads'
    ],
    [
        'Oak Grove, Louisiana',
        32.8609625,
        -91.3884482,
        'Louisiana',
        'United_States',
        'Oak_Grove'
    ],
    [
        'Oberlin, Louisiana',
        30.6201984,
        -92.7626462,
        'Louisiana',
        'United_States',
        'Oberlin'
    ],
    [
        'Opelousas, Louisiana',
        30.5335302,
        -92.081509,
        'Louisiana',
        'United_States',
        'Opelousas'
    ],
    [
        'Plaquermine, Louisiana',
        30.2890833,
        -91.2342744,
        'Louisiana',
        'United_States',
        'Plaquermine'
    ],
    [
        'Pointe a la Hache, Louisiana',
        29.5763259,
        -89.7917328,
        'Louisiana',
        'United_States',
        'Pointe_a_la_Hache'
    ],
    [
        'Port Allen, Louisiana',
        30.4474878,
        -91.2073261,
        'Louisiana',
        'United_States',
        'Port_Allen'
    ],
    [
        'Poverty Point National Monument, Louisiana',
        32.636667,
        -91.411389,
        'Louisiana',
        'United_States',
        'Poverty_Point_National_Monument'
    ],
    [
        'Rayville, Louisiana',
        32.4773643,
        -91.7548473,
        'Louisiana',
        'United_States',
        'Rayville'
    ],
    [
        'Ruston, Louisiana',
        32.5232053,
        -92.637927,
        'Louisiana',
        'United_States',
        'Ruston'
    ],
    [
        'Saint Francisville, Louisiana',
        30.7880721,
        -91.3768479,
        'Louisiana',
        'United_States',
        'Saint_Francisville'
    ],
    [
        'Saint Joseph, Louisiana',
        31.9183685,
        -91.2334884,
        'Louisiana',
        'United_States',
        'Saint_Joseph'
    ],
    [
        'Saint Martinville, Louisiana',
        30.1231441,
        -91.8294817,
        'Louisiana',
        'United_States',
        'Saint_Martinville'
    ],
    [
        'Shreveport, Louisiana',
        32.5251516,
        -93.7501789,
        'Louisiana',
        'United_States',
        'Shreveport'
    ],
    [
        'Slidell, Louisiana',
        30.2751945,
        -89.7811745,
        'Louisiana',
        'United_States',
        'Slidell'
    ],
    [
        'Sulphur, Louisiana',
        30.2365943,
        -93.3773783,
        'Louisiana',
        'United_States',
        'Sulphur'
    ],
    [
        'Tallulah, Louisiana',
        32.4084765,
        -91.1867771,
        'Louisiana',
        'United_States',
        'Tallulah'
    ],
    [
        'Thibodaux, Louisiana',
        29.7957633,
        -90.822871,
        'Louisiana',
        'United_States',
        'Thibodaux'
    ],
    [
        'Vidalia, Louisiana',
        31.5654441,
        -91.4259495,
        'Louisiana',
        'United_States',
        'Vidalia'
    ],
    [
        'Ville Platte, Louisiana',
        30.6879749,
        -92.2715157,
        'Louisiana',
        'United_States',
        'Ville_Platte'
    ],
    [
        'West Monroe, Louisiana',
        32.5184775,
        -92.1476353,
        'Louisiana',
        'United_States',
        'West_Monroe'
    ],
    [
        'Winnfield, Louisiana',
        31.9254413,
        -92.6395931,
        'Louisiana',
        'United_States',
        'Winnfield'
    ],
    [
        'Winnsboro, Louisiana',
        32.1632079,
        -91.720681,
        'Louisiana',
        'United_States',
        'Winnsboro'
    ],
    [
        'Acadia National Park, Maine',
        44.3385559,
        -68.2733346,
        'Maine',
        'United_States',
        'Acadia_National_Park'
    ],
    [
        'Alfred, Maine',
        43.4764994,
        -70.7161687,
        'Maine',
        'United_States',
        'Alfred'
    ],
    [
        'Auburn, Maine',
        44.0978509,
        -70.2311655,
        'Maine',
        'United_States',
        'Auburn'
    ],
    [
        'Augusta, Maine',
        44.3106241,
        -69.7794897,
        'Maine',
        'United_States',
        'Augusta'
    ],
    [
        'Bangor, Maine',
        44.8011821,
        -68.7778138,
        'Maine',
        'United_States',
        'Bangor'
    ],
    ['Bath, Maine', 43.9106353, -69.8206023, 'Maine', 'United_States', 'Bath'],
    [
        'Belfast, Maine',
        44.4259092,
        -69.0064234,
        'Maine',
        'United_States',
        'Belfast'
    ],
    [
        'Biddeford, Maine',
        43.4925843,
        -70.4533844,
        'Maine',
        'United_States',
        'Biddeford'
    ],
    [
        'Brunswick, Maine',
        43.9140162,
        -69.9669961,
        'Maine',
        'United_States',
        'Brunswick'
    ],
    [
        'Caribou, Maine',
        46.8639995,
        -67.9980365,
        'Maine',
        'United_States',
        'Caribou'
    ],
    [
        'Dover-Foxcroft, Maine',
        45.1833421,
        -69.2270821,
        'Maine',
        'United_States',
        'Dover-Foxcroft'
    ],
    [
        'Eastport, Maine',
        44.9061906,
        -66.9899785,
        'Maine',
        'United_States',
        'Eastport'
    ],
    [
        'Ellsworth, Maine',
        44.5434095,
        -68.4194641,
        'Maine',
        'United_States',
        'Ellsworth'
    ],
    [
        'Farmington, Maine',
        44.6704998,
        -70.1512169,
        'Maine',
        'United_States',
        'Farmington'
    ],
    [
        'Fort Kent, Maine',
        47.2586714,
        -68.5894662,
        'Maine',
        'United_States',
        'Fort_Kent'
    ],
    [
        'Fryeburg, Maine',
        44.0164329,
        -70.9806357,
        'Maine',
        'United_States',
        'Fryeburg'
    ],
    [
        'Gardiner, Maine',
        44.2300698,
        -69.7753222,
        'Maine',
        'United_States',
        'Gardiner'
    ],
    [
        'Houlton, Maine',
        46.1261806,
        -67.8402316,
        'Maine',
        'United_States',
        'Houlton'
    ],
    [
        'Kennebunk, Maine',
        43.3845306,
        -70.54399,
        'Maine',
        'United_States',
        'Kennebunk'
    ],
    [
        'Lewiston, Maine',
        44.100351,
        -70.2147764,
        'Maine',
        'United_States',
        'Lewiston'
    ],
    [
        'Lincoln, Maine',
        45.3622301,
        -68.5050006,
        'Maine',
        'United_States',
        'Lincoln'
    ],
    [
        'Machias, Maine',
        44.7150789,
        -67.461376,
        'Maine',
        'United_States',
        'Machias'
    ],
    [
        'Millinocket, Maine',
        45.6572639,
        -68.7098119,
        'Maine',
        'United_States',
        'Millinocket'
    ],
    [
        'Newry, Maine',
        44.4884245,
        -70.7885765,
        'Maine',
        'United_States',
        'Newry'
    ],
    [
        'Norway, Maine',
        44.2139566,
        -70.5448096,
        'Maine',
        'United_States',
        'Norway'
    ],
    [
        'Paris, Maine',
        44.2597917,
        -70.5006152,
        'Maine',
        'United_States',
        'Paris'
    ],
    [
        'Portland, Maine',
        43.661471,
        -70.2553259,
        'Maine',
        'United_States',
        'Portland'
    ],
    [
        'Presque Isle, Maine',
        46.681153,
        -68.0158615,
        'Maine',
        'United_States',
        'Presque_Isle'
    ],
    [
        'Rockland, Maine',
        44.1036914,
        -69.1089293,
        'Maine',
        'United_States',
        'Rockland'
    ],
    ['Saco, Maine', 43.5009176, -70.4428286, 'Maine', 'United_States', 'Saco'],
    [
        'Saint Croix Island International Historic Site, Maine',
        45.1289091,
        -67.1339603,
        'Maine',
        'United_States',
        'Saint_Croix_Island_International_Historic_Site'
    ],
    [
        'Skowhegan, Maine',
        44.7650366,
        -69.7193803,
        'Maine',
        'United_States',
        'Skowhegan'
    ],
    [
        'Waterville, Maine',
        44.5520105,
        -69.6317121,
        'Maine',
        'United_States',
        'Waterville'
    ],
    [
        'Wiscasset, Maine',
        44.0028921,
        -69.665583,
        'Maine',
        'United_States',
        'Wiscasset'
    ],
    [
        'American Memorial Park Saipan, Mariana Islands',
        15.177801,
        145.750967,
        'Mariana_Islands',
        'United_States',
        'American_Memorial_Park_Saipan'
    ],
    [
        'Rota, Mariana Islands',
        16.616667,
        145.616667,
        'Mariana_Islands',
        'United_States',
        'Rota'
    ],
    [
        'Saipan, Mariana Islands',
        15.1850483,
        145.7467259,
        'Mariana_Islands',
        'United_States',
        'Saipan'
    ],
    [
        'Tinian, Mariana Islands',
        14.9625,
        145.880278,
        'Mariana_Islands',
        'United_States',
        'Tinian'
    ],
    [
        'Annapolis, Maryland',
        38.9784453,
        -76.4921829,
        'Maryland',
        'United_States',
        'Annapolis'
    ],
    [
        'Antietam National Battlefield, Maryland',
        39.4600471,
        -77.7409958,
        'Maryland',
        'United_States',
        'Antietam_National_Battlefield'
    ],
    [
        'Assateague Island National Seashore, Maryland',
        38.0607973,
        -75.2362382,
        'Maryland',
        'United_States',
        'Assateague_Island_National_Seashore'
    ],
    [
        'Baltimore, Maryland',
        39.2903848,
        -76.6121893,
        'Maryland',
        'United_States',
        'Baltimore'
    ],
    [
        'Baltimore Washington Parkway, Maryland',
        39.0938991,
        -76.8042963,
        'Maryland',
        'United_States',
        'Baltimore_Washington_Parkway'
    ],
    [
        'Bel Air, Maryland',
        39.5359406,
        -76.3482931,
        'Maryland',
        'United_States',
        'Bel_Air'
    ],
    [
        'Bethesda, Maryland',
        38.984652,
        -77.0947092,
        'Maryland',
        'United_States',
        'Bethesda'
    ],
    [
        'Bowie, Maryland',
        39.0067768,
        -76.7791365,
        'Maryland',
        'United_States',
        'Bowie'
    ],
    [
        'Cambridge, Maryland',
        38.5631744,
        -76.0788292,
        'Maryland',
        'United_States',
        'Cambridge'
    ],
    [
        'Catoctin Mountain Park, Maryland',
        39.6530454,
        -77.4644334,
        'Maryland',
        'United_States',
        'Catoctin_Mountain_Park'
    ],
    [
        'Centreville, Maryland',
        39.0417785,
        -76.0663334,
        'Maryland',
        'United_States',
        'Centreville'
    ],
    [
        'Chesapeake and Ohio Canal National Historic Park, Maryland',
        39.5084918,
        -77.835547,
        'Maryland',
        'United_States',
        'Chesapeake_and_Ohio_Canal_National_Historic_Park'
    ],
    [
        'Chestertwon, Maryland',
        39.2188663,
        -76.0690036,
        'Maryland',
        'United_States',
        'Chestertwon'
    ],
    [
        'Clara Barton National Historic Site, Maryland',
        38.967741,
        -77.140885,
        'Maryland',
        'United_States',
        'Clara_Barton_National_Historic_Site'
    ],
    [
        'Clarksville, Maryland',
        39.2061962,
        -76.9455664,
        'Maryland',
        'United_States',
        'Clarksville'
    ],
    [
        'College Park, Maryland',
        38.9896967,
        -76.93776,
        'Maryland',
        'United_States',
        'College_Park'
    ],
    [
        'Columbia, Maryland',
        39.2037144,
        -76.8610462,
        'Maryland',
        'United_States',
        'Columbia'
    ],
    [
        'Cumberland, Maryland',
        39.6528654,
        -78.7625185,
        'Maryland',
        'United_States',
        'Cumberland'
    ],
    [
        'Denton, Maryland',
        38.8845582,
        -75.8271563,
        'Maryland',
        'United_States',
        'Denton'
    ],
    [
        'Easton, Maryland',
        38.7742826,
        -76.0763305,
        'Maryland',
        'United_States',
        'Easton'
    ],
    [
        'Edgewood, Maryland',
        39.4187194,
        -76.2944016,
        'Maryland',
        'United_States',
        'Edgewood'
    ],
    [
        'Elkton, Maryland',
        39.6067789,
        -75.8332718,
        'Maryland',
        'United_States',
        'Elkton'
    ],
    [
        'Ellicott City, Maryland',
        39.2673283,
        -76.7983067,
        'Maryland',
        'United_States',
        'Ellicott_City'
    ],
    [
        'Fort McHenry National Monument and Historic Shrine, Maryland',
        39.263298,
        -76.579923,
        'Maryland',
        'United_States',
        'Fort_McHenry_National_Monument_and_Historic_Shrine'
    ],
    [
        'Fort Washington Park, Maryland',
        38.7129562,
        -77.0243096,
        'Maryland',
        'United_States',
        'Fort_Washington_Park'
    ],
    [
        'Frederick, Maryland',
        39.4142688,
        -77.4105409,
        'Maryland',
        'United_States',
        'Frederick'
    ],
    [
        'Gaithersburg, Maryland',
        39.1434406,
        -77.2013705,
        'Maryland',
        'United_States',
        'Gaithersburg'
    ],
    [
        'Goddard Space Flight Center, Maryland',
        38.9895547,
        -76.8533053,
        'Maryland',
        'United_States',
        'Goddard_Space_Flight_Center'
    ],
    [
        'Greenbelt Park, Maryland',
        38.9834164,
        -76.8972147,
        'Maryland',
        'United_States',
        'Greenbelt_Park'
    ],
    [
        'Hagerstown, Maryland',
        39.6417629,
        -77.7199932,
        'Maryland',
        'United_States',
        'Hagerstown'
    ],
    [
        'Hampstead, Maryland',
        39.6048253,
        -76.8499774,
        'Maryland',
        'United_States',
        'Hampstead'
    ],
    [
        'Hampton National Historic Site, Maryland',
        39.416721,
        -76.588555,
        'Maryland',
        'United_States',
        'Hampton_National_Historic_Site'
    ],
    [
        'Laurel, Maryland',
        39.0992752,
        -76.8483061,
        'Maryland',
        'United_States',
        'Laurel'
    ],
    [
        'La Plata, Maryland',
        38.5292877,
        -76.9752514,
        'Maryland',
        'United_States',
        'La_Plata'
    ],
    [
        'Leonardtown, Maryland',
        38.291238,
        -76.6357942,
        'Maryland',
        'United_States',
        'Leonardtown'
    ],
    [
        'Lexington Park, Maryland',
        38.2575517,
        -76.4620928,
        'Maryland',
        'United_States',
        'Lexington_Park'
    ],
    [
        'Middletown, Maryland',
        39.4437123,
        -77.5447102,
        'Maryland',
        'United_States',
        'Middletown'
    ],
    [
        'Monocacy National Battlefield, Maryland',
        39.3772046,
        -77.3955938,
        'Maryland',
        'United_States',
        'Monocacy_National_Battlefield'
    ],
    [
        'National Capital Parks, Maryland',
        38.8342,
        -76.9142,
        'Maryland',
        'United_States',
        'National_Capital_Parks'
    ],
    [
        'North East, Maryland',
        39.6001132,
        -75.9413327,
        'Maryland',
        'United_States',
        'North_East'
    ],
    [
        'Oakland, Maryland',
        39.4078747,
        -79.4067116,
        'Maryland',
        'United_States',
        'Oakland'
    ],
    [
        'Oak Forest Lane, Maryland',
        39.00396,
        -77.144734,
        'Maryland',
        'United_States',
        'Oak_Forest_Lane'
    ],
    [
        'Ocean City, Maryland',
        38.3365032,
        -75.0849058,
        'Maryland',
        'United_States',
        'Ocean_City'
    ],
    [
        'Odenton, Maryland',
        39.0839981,
        -76.7002462,
        'Maryland',
        'United_States',
        'Odenton'
    ],
    [
        'Patuxent River NAS, Maryland',
        38.285981,
        -76.411781,
        'Maryland',
        'United_States',
        'Patuxent_River_NAS'
    ],
    [
        'Piscataway Park, Maryland',
        38.6930433,
        -77.0653282,
        'Maryland',
        'United_States',
        'Piscataway_Park'
    ],
    [
        'Port Deposit, Maryland',
        39.6048327,
        -76.1152289,
        'Maryland',
        'United_States',
        'Port_Deposit'
    ],
    [
        'Princess Ann, Maryland',
        38.2028993,
        -75.692427,
        'Maryland',
        'United_States',
        'Princess_Ann'
    ],
    [
        'Prince Frederick, Maryland',
        38.5403996,
        -76.5844017,
        'Maryland',
        'United_States',
        'Prince_Frederick'
    ],
    [
        'Rockville, Maryland',
        39.0839973,
        -77.1527578,
        'Maryland',
        'United_States',
        'Rockville'
    ],
    [
        'Salisbury, Maryland',
        38.3606736,
        -75.5993692,
        'Maryland',
        'United_States',
        'Salisbury'
    ],
    [
        'Silver Spring, Maryland',
        38.9906657,
        -77.026088,
        'Maryland',
        'United_States',
        'Silver_Spring'
    ],
    [
        'Snow Hill, Maryland',
        38.1770634,
        -75.3926959,
        'Maryland',
        'United_States',
        'Snow_Hill'
    ],
    [
        'Taylors Island, Maryland',
        38.469011,
        -76.299113,
        'Maryland',
        'United_States',
        'Taylors_Island'
    ],
    [
        'Thomas Stone National Historic Site, Maryland',
        38.5276895,
        -77.0362967,
        'Maryland',
        'United_States',
        'Thomas_Stone_National_Historic_Site'
    ],
    [
        'Towson, Maryland',
        39.4014955,
        -76.6019125,
        'Maryland',
        'United_States',
        'Towson'
    ],
    [
        'Upper Marlboro, Maryland',
        38.8159473,
        -76.7496909,
        'Maryland',
        'United_States',
        'Upper_Marlboro'
    ],
    [
        'Waldorf, Maryland',
        38.6265124,
        -76.9105483,
        'Maryland',
        'United_States',
        'Waldorf'
    ],
    [
        'Westminster, Maryland',
        39.5753791,
        -76.9958149,
        'Maryland',
        'United_States',
        'Westminster'
    ],
    [
        'Abington, Massachusetts',
        42.1048228,
        -70.9453218,
        'Massachusetts',
        'United_States',
        'Abington'
    ],
    [
        'Acton, Massachusetts',
        42.4850931,
        -71.43284,
        'Massachusetts',
        'United_States',
        'Acton'
    ],
    [
        'Adams, Massachusetts',
        42.6242251,
        -73.1174344,
        'Massachusetts',
        'United_States',
        'Adams'
    ],
    [
        'Adams National Historical Park, Massachusetts',
        42.2522083,
        -71.0037847,
        'Massachusetts',
        'United_States',
        'Adams_National_Historical_Park'
    ],
    [
        'Amesbury, Massachusetts',
        42.8583925,
        -70.9300376,
        'Massachusetts',
        'United_States',
        'Amesbury'
    ],
    [
        'Amherst, Massachusetts',
        42.3732216,
        -72.5198537,
        'Massachusetts',
        'United_States',
        'Amherst'
    ],
    [
        'Andover, Massachusetts',
        42.6583356,
        -71.1367953,
        'Massachusetts',
        'United_States',
        'Andover'
    ],
    [
        'Arlington, Massachusetts',
        42.4153925,
        -71.1564729,
        'Massachusetts',
        'United_States',
        'Arlington'
    ],
    [
        'Attleboro, Massachusetts',
        41.9445441,
        -71.2856082,
        'Massachusetts',
        'United_States',
        'Attleboro'
    ],
    [
        'Barnstable, Massachusetts',
        41.7003208,
        -70.3002024,
        'Massachusetts',
        'United_States',
        'Barnstable'
    ],
    [
        'Becket, Massachusetts',
        42.3319904,
        -73.0829366,
        'Massachusetts',
        'United_States',
        'Becket'
    ],
    [
        'Bedford, Massachusetts',
        42.4906231,
        -71.2760089,
        'Massachusetts',
        'United_States',
        'Bedford'
    ],
    [
        'Belchertown, Massachusetts',
        42.2770346,
        -72.4008884,
        'Massachusetts',
        'United_States',
        'Belchertown'
    ],
    [
        'Berkley, Massachusetts',
        41.8459347,
        -71.0828222,
        'Massachusetts',
        'United_States',
        'Berkley'
    ],
    [
        'Billerica, Massachusetts',
        42.5584218,
        -71.2689461,
        'Massachusetts',
        'United_States',
        'Billerica'
    ],
    [
        'Boston, Massachusetts',
        42.3600825,
        -71.0588801,
        'Massachusetts',
        'United_States',
        'Boston'
    ],
    [
        'Boston African American National Historic Site, Massachusetts',
        42.3599803,
        -71.0652188,
        'Massachusetts',
        'United_States',
        'Boston_African_American_National_Historic_Site'
    ],
    [
        'Boston Harbor Islands National Recreation Area, Massachusetts',
        42.3005287,
        -70.9294163,
        'Massachusetts',
        'United_States',
        'Boston_Harbor_Islands_National_Recreation_Area'
    ],
    [
        'Boston National Historical Park, Massachusetts',
        42.3731622,
        -71.0568339,
        'Massachusetts',
        'United_States',
        'Boston_National_Historical_Park'
    ],
    [
        'Boxford, Massachusetts',
        42.6611604,
        -70.996726,
        'Massachusetts',
        'United_States',
        'Boxford'
    ],
    [
        'Brockton, Massachusetts',
        42.0834335,
        -71.0183787,
        'Massachusetts',
        'United_States',
        'Brockton'
    ],
    [
        'Cambridge, Massachusetts',
        42.3736158,
        -71.1097335,
        'Massachusetts',
        'United_States',
        'Cambridge'
    ],
    [
        'Cape Cod National Seashore, Massachusetts',
        41.9591,
        -70.0053,
        'Massachusetts',
        'United_States',
        'Cape_Cod_National_Seashore'
    ],
    [
        'Carlisle, Massachusetts',
        42.5292597,
        -71.3495046,
        'Massachusetts',
        'United_States',
        'Carlisle'
    ],
    [
        'Chatham, Massachusetts',
        41.6820897,
        -69.9597664,
        'Massachusetts',
        'United_States',
        'Chatham'
    ],
    [
        'Chicopee, Massachusetts',
        42.1487043,
        -72.6078672,
        'Massachusetts',
        'United_States',
        'Chicopee'
    ],
    [
        'Colrain, Massachusetts',
        42.6731396,
        -72.6967587,
        'Massachusetts',
        'United_States',
        'Colrain'
    ],
    [
        'Danvers, Massachusetts',
        42.5750009,
        -70.932122,
        'Massachusetts',
        'United_States',
        'Danvers'
    ],
    [
        'Dedham, Massachusetts',
        42.2436085,
        -71.1676536,
        'Massachusetts',
        'United_States',
        'Dedham'
    ],
    [
        'Dennis Port, Massachusetts',
        41.658445,
        -70.1286293,
        'Massachusetts',
        'United_States',
        'Dennis_Port'
    ],
    [
        'Duxbury, Massachusetts',
        42.0417525,
        -70.6722767,
        'Massachusetts',
        'United_States',
        'Duxbury'
    ],
    [
        'Edgartown, Massachusetts',
        41.3890052,
        -70.5133599,
        'Massachusetts',
        'United_States',
        'Edgartown'
    ],
    [
        'Fall River, Massachusetts',
        41.7014912,
        -71.1550451,
        'Massachusetts',
        'United_States',
        'Fall_River'
    ],
    [
        'Fitchburg, Massachusetts',
        42.5834228,
        -71.8022955,
        'Massachusetts',
        'United_States',
        'Fitchburg'
    ],
    [
        'Framingham, Massachusetts',
        42.279286,
        -71.4161565,
        'Massachusetts',
        'United_States',
        'Framingham'
    ],
    [
        'Gardner, Massachusetts',
        42.5750883,
        -71.998133,
        'Massachusetts',
        'United_States',
        'Gardner'
    ],
    [
        'Gloucester, Massachusetts',
        42.6159285,
        -70.6619888,
        'Massachusetts',
        'United_States',
        'Gloucester'
    ],
    [
        'Greenfield, Massachusetts',
        42.587915,
        -72.5994104,
        'Massachusetts',
        'United_States',
        'Greenfield'
    ],
    [
        'Haverhill, Massachusetts',
        42.7762015,
        -71.0772796,
        'Massachusetts',
        'United_States',
        'Haverhill'
    ],
    [
        'Holbrook, Massachusetts',
        42.144846,
        -71.014118,
        'Massachusetts',
        'United_States',
        'Holbrook'
    ],
    [
        'Holyoke, Massachusetts',
        42.2042586,
        -72.6162009,
        'Massachusetts',
        'United_States',
        'Holyoke'
    ],
    [
        'Hyannis, Massachusetts',
        41.6524911,
        -70.2881124,
        'Massachusetts',
        'United_States',
        'Hyannis'
    ],
    [
        'John Fitzgerald Kennedy National Historic Site, Massachusetts',
        42.346965,
        -71.123267,
        'Massachusetts',
        'United_States',
        'John_Fitzgerald_Kennedy_National_Historic_Site'
    ],
    [
        'Lawrence, Massachusetts',
        42.7070354,
        -71.1631137,
        'Massachusetts',
        'United_States',
        'Lawrence'
    ],
    [
        'Lenox, Massachusetts',
        42.3564609,
        -73.2848762,
        'Massachusetts',
        'United_States',
        'Lenox'
    ],
    [
        'Lowell, Massachusetts',
        42.6334247,
        -71.3161718,
        'Massachusetts',
        'United_States',
        'Lowell'
    ],
    [
        'Mansfield, Massachusetts',
        42.0334565,
        -71.2190578,
        'Massachusetts',
        'United_States',
        'Mansfield'
    ],
    [
        'Marlborough, Massachusetts',
        42.3459271,
        -71.5522874,
        'Massachusetts',
        'United_States',
        'Marlborough'
    ],
    [
        'Marshfield, Massachusetts',
        42.0917453,
        -70.7055871,
        'Massachusetts',
        'United_States',
        'Marshfield'
    ],
    [
        'Marthas Vineyard, Massachusetts',
        41.3804981,
        -70.645473,
        'Massachusetts',
        'United_States',
        'Marthas_Vineyard'
    ],
    [
        'Mashpee, Massachusetts',
        41.647872,
        -70.4819674,
        'Massachusetts',
        'United_States',
        'Mashpee'
    ],
    [
        'Medway, Massachusetts',
        42.1417641,
        -71.3967256,
        'Massachusetts',
        'United_States',
        'Medway'
    ],
    [
        'Methuen, Massachusetts',
        42.7262016,
        -71.1908924,
        'Massachusetts',
        'United_States',
        'Methuen'
    ],
    [
        'Milford, Massachusetts',
        42.1398577,
        -71.5163049,
        'Massachusetts',
        'United_States',
        'Milford'
    ],
    [
        'Millis, Massachusetts',
        42.1669661,
        -71.351738,
        'Massachusetts',
        'United_States',
        'Millis'
    ],
    [
        'Minute Man National Historical Park, Massachusetts',
        42.4713747,
        -71.3520276,
        'Massachusetts',
        'United_States',
        'Minute_Man_National_Historical_Park'
    ],
    [
        'Monterey, Massachusetts',
        42.1792563,
        -73.2120526,
        'Massachusetts',
        'United_States',
        'Monterey'
    ],
    [
        'Munroe Park, Massachusetts',
        42.39561,
        -71.13051,
        'Massachusetts',
        'United_States',
        'Munroe_Park'
    ],
    [
        'Nantucket, Massachusetts',
        41.2834704,
        -70.099451,
        'Massachusetts',
        'United_States',
        'Nantucket'
    ],
    [
        'Natick, Massachusetts',
        42.2775281,
        -71.3468091,
        'Massachusetts',
        'United_States',
        'Natick'
    ],
    [
        'Needham, Massachusetts',
        42.2809285,
        -71.2377548,
        'Massachusetts',
        'United_States',
        'Needham'
    ],
    [
        'New Bedford, Massachusetts',
        41.6362152,
        -70.934205,
        'Massachusetts',
        'United_States',
        'New_Bedford'
    ],
    [
        'New Bedford Whaling National Historical Park, Massachusetts',
        41.6357086,
        -70.923929,
        'Massachusetts',
        'United_States',
        'New_Bedford_Whaling_National_Historical_Park'
    ],
    [
        'Northampton, Massachusetts',
        42.3250896,
        -72.6412013,
        'Massachusetts',
        'United_States',
        'Northampton'
    ],
    [
        'North Attleboro, Massachusetts',
        41.9695516,
        -71.3565439,
        'Massachusetts',
        'United_States',
        'North_Attleboro'
    ],
    [
        'Otis, Massachusetts',
        42.1930224,
        -73.0919689,
        'Massachusetts',
        'United_States',
        'Otis'
    ],
    [
        'Peabody, Massachusetts',
        42.5278731,
        -70.9286609,
        'Massachusetts',
        'United_States',
        'Peabody'
    ],
    [
        'Pembroke, Massachusetts',
        42.0714925,
        -70.8092,
        'Massachusetts',
        'United_States',
        'Pembroke'
    ],
    [
        'Pittsfield, Massachusetts',
        42.4500845,
        -73.2453824,
        'Massachusetts',
        'United_States',
        'Pittsfield'
    ],
    [
        'Plymouth, Massachusetts',
        41.9584457,
        -70.6672621,
        'Massachusetts',
        'United_States',
        'Plymouth'
    ],
    [
        'Rockport, Massachusetts',
        42.6556505,
        -70.620363,
        'Massachusetts',
        'United_States',
        'Rockport'
    ],
    [
        'Rowley, Massachusetts',
        42.7167483,
        -70.8787277,
        'Massachusetts',
        'United_States',
        'Rowley'
    ],
    [
        'Salem, Massachusetts',
        42.51954,
        -70.8967155,
        'Massachusetts',
        'United_States',
        'Salem'
    ],
    [
        'Salem Maritime National Historic Site, Massachusetts',
        42.5213163,
        -70.8866429,
        'Massachusetts',
        'United_States',
        'Salem_Maritime_National_Historic_Site'
    ],
    [
        'Sandwich, Massachusetts',
        41.7589615,
        -70.4939317,
        'Massachusetts',
        'United_States',
        'Sandwich'
    ],
    [
        'Saugus Iron Works National Historic Site, Massachusetts',
        42.4651421,
        -71.0110473,
        'Massachusetts',
        'United_States',
        'Saugus_Iron_Works_National_Historic_Site'
    ],
    [
        'Shrewsbury, Massachusetts',
        42.2959267,
        -71.7128471,
        'Massachusetts',
        'United_States',
        'Shrewsbury'
    ],
    [
        'Southfield, Massachusetts',
        42.1011014,
        -73.2337433,
        'Massachusetts',
        'United_States',
        'Southfield'
    ],
    [
        'South Hadley, Massachusetts',
        42.2591729,
        -72.5747934,
        'Massachusetts',
        'United_States',
        'South_Hadley'
    ],
    [
        'Springfield, Massachusetts',
        42.1014831,
        -72.589811,
        'Massachusetts',
        'United_States',
        'Springfield'
    ],
    [
        'Springfield Armory National Historic Site, Massachusetts',
        42.4072107,
        -71.3824374,
        'Massachusetts',
        'United_States',
        'Springfield_Armory_National_Historic_Site'
    ],
    [
        'Stoughton, Massachusetts',
        42.1229099,
        -71.1092012,
        'Massachusetts',
        'United_States',
        'Stoughton'
    ],
    [
        'Sudbury, Massachusetts',
        42.3834278,
        -71.4161725,
        'Massachusetts',
        'United_States',
        'Sudbury'
    ],
    [
        'Taunton, Massachusetts',
        41.900101,
        -71.0897674,
        'Massachusetts',
        'United_States',
        'Taunton'
    ],
    [
        'Townsend, Massachusetts',
        42.6667718,
        -71.7051265,
        'Massachusetts',
        'United_States',
        'Townsend'
    ],
    [
        'Turners Falls, Massachusetts',
        42.6042523,
        -72.5564777,
        'Massachusetts',
        'United_States',
        'Turners_Falls'
    ],
    [
        'Tyngsboro, Massachusetts',
        42.6766696,
        -71.4244224,
        'Massachusetts',
        'United_States',
        'Tyngsboro'
    ],
    [
        'Watertown, Massachusetts',
        42.3709299,
        -71.1828321,
        'Massachusetts',
        'United_States',
        'Watertown'
    ],
    [
        'Wellfleet, Massachusetts',
        41.9305468,
        -70.0309753,
        'Massachusetts',
        'United_States',
        'Wellfleet'
    ],
    [
        'Weymouth, Massachusetts',
        42.2180724,
        -70.9410356,
        'Massachusetts',
        'United_States',
        'Weymouth'
    ],
    [
        'Wilbraham, Massachusetts',
        42.1237206,
        -72.431586,
        'Massachusetts',
        'United_States',
        'Wilbraham'
    ],
    [
        'Williamstown, Massachusetts',
        42.7120196,
        -73.2036898,
        'Massachusetts',
        'United_States',
        'Williamstown'
    ],
    [
        'Worcester, Massachusetts',
        42.2625932,
        -71.8022934,
        'Massachusetts',
        'United_States',
        'Worcester'
    ],
    [
        'Wrentham, Massachusetts',
        42.0667652,
        -71.3281114,
        'Massachusetts',
        'United_States',
        'Wrentham'
    ],
    [
        'Adrian, Michigan',
        41.8975471,
        -84.0371659,
        'Michigan',
        'United_States',
        'Adrian'
    ],
    [
        'Allegan, Michigan',
        42.5291989,
        -85.8553031,
        'Michigan',
        'United_States',
        'Allegan'
    ],
    [
        'Allen Park, Michigan',
        42.2575385,
        -83.2110375,
        'Michigan',
        'United_States',
        'Allen_Park'
    ],
    [
        'Alpena, Michigan',
        45.0616794,
        -83.4327528,
        'Michigan',
        'United_States',
        'Alpena'
    ],
    [
        'Ann Arbor, Michigan',
        42.2808256,
        -83.7430378,
        'Michigan',
        'United_States',
        'Ann_Arbor'
    ],
    [
        'Atlanta, Michigan',
        45.0047306,
        -84.1438927,
        'Michigan',
        'United_States',
        'Atlanta'
    ],
    [
        'Bad Axe, Michigan',
        43.8019592,
        -83.0007774,
        'Michigan',
        'United_States',
        'Bad_Axe'
    ],
    [
        'Baldwin, Michigan',
        43.9011229,
        -85.8517287,
        'Michigan',
        'United_States',
        'Baldwin'
    ],
    [
        'Barton City, Michigan',
        44.6839498,
        -83.6060424,
        'Michigan',
        'United_States',
        'Barton_City'
    ],
    [
        'Battle Creek, Michigan',
        42.3211522,
        -85.1797142,
        'Michigan',
        'United_States',
        'Battle_Creek'
    ],
    [
        'Bay City, Michigan',
        43.5944677,
        -83.8888647,
        'Michigan',
        'United_States',
        'Bay_City'
    ],
    [
        'Beaverton, Michigan',
        43.8822464,
        -84.4847316,
        'Michigan',
        'United_States',
        'Beaverton'
    ],
    [
        'Bellaire, Michigan',
        44.9802822,
        -85.2111728,
        'Michigan',
        'United_States',
        'Bellaire'
    ],
    [
        'Benton Harbor, Michigan',
        42.1167065,
        -86.4541894,
        'Michigan',
        'United_States',
        'Benton_Harbor'
    ],
    [
        'Berkley, Michigan',
        42.5030908,
        -83.1835389,
        'Michigan',
        'United_States',
        'Berkley'
    ],
    [
        'Bessermer, Michigan',
        46.4813363,
        -90.0529504,
        'Michigan',
        'United_States',
        'Bessermer'
    ],
    [
        'Beulah, Michigan',
        44.631944,
        -86.0909242,
        'Michigan',
        'United_States',
        'Beulah'
    ],
    [
        'Big Rapids, Michigan',
        43.6980782,
        -85.4836557,
        'Michigan',
        'United_States',
        'Big_Rapids'
    ],
    [
        'Birmingham, Michigan',
        42.5467012,
        -83.2113192,
        'Michigan',
        'United_States',
        'Birmingham'
    ],
    [
        'Boyne City, Michigan',
        45.2166751,
        -85.0139419,
        'Michigan',
        'United_States',
        'Boyne_City'
    ],
    [
        'Breckenridge, Michigan',
        43.4080849,
        -84.4749978,
        'Michigan',
        'United_States',
        'Breckenridge'
    ],
    [
        'Breedsville, Michigan',
        42.3464239,
        -86.0730801,
        'Michigan',
        'United_States',
        'Breedsville'
    ],
    [
        'Bridgman, Michigan',
        41.9430986,
        -86.5569659,
        'Michigan',
        'United_States',
        'Bridgman'
    ],
    [
        'Brighton, Michigan',
        42.5294773,
        -83.7802214,
        'Michigan',
        'United_States',
        'Brighton'
    ],
    [
        'Bronson, Michigan',
        41.8722716,
        -85.1946963,
        'Michigan',
        'United_States',
        'Bronson'
    ],
    [
        'Brooklyn, Michigan',
        42.105874,
        -84.2482819,
        'Michigan',
        'United_States',
        'Brooklyn'
    ],
    [
        'Byron Center, Michigan',
        42.8122508,
        -85.7228061,
        'Michigan',
        'United_States',
        'Byron_Center'
    ],
    [
        'Cadillac, Michigan',
        44.2519526,
        -85.4011619,
        'Michigan',
        'United_States',
        'Cadillac'
    ],
    [
        'Capac, Michigan',
        43.0125509,
        -82.9344791,
        'Michigan',
        'United_States',
        'Capac'
    ],
    [
        'Caro, Michigan',
        43.4911322,
        -83.396897,
        'Michigan',
        'United_States',
        'Caro'
    ],
    [
        'Cassopolis, Michigan',
        41.9117133,
        -86.0100068,
        'Michigan',
        'United_States',
        'Cassopolis'
    ],
    [
        'Cedar Springs, Michigan',
        43.2233604,
        -85.5514237,
        'Michigan',
        'United_States',
        'Cedar_Springs'
    ],
    [
        'Centreville, Michigan',
        41.9233827,
        -85.5283225,
        'Michigan',
        'United_States',
        'Centreville'
    ],
    [
        'Charlevoix, Michigan',
        45.3180632,
        -85.2584004,
        'Michigan',
        'United_States',
        'Charlevoix'
    ],
    [
        'Charlotte, Michigan',
        42.5636478,
        -84.8358211,
        'Michigan',
        'United_States',
        'Charlotte'
    ],
    [
        'Cheboygan, Michigan',
        45.6469563,
        -84.4744795,
        'Michigan',
        'United_States',
        'Cheboygan'
    ],
    [
        'Chelsea, Michigan',
        42.3180919,
        -84.0205029,
        'Michigan',
        'United_States',
        'Chelsea'
    ],
    [
        'Clare, Michigan',
        43.8194703,
        -84.7686281,
        'Michigan',
        'United_States',
        'Clare'
    ],
    [
        'Clinton, Michigan',
        42.5868882,
        -82.9195514,
        'Michigan',
        'United_States',
        'Clinton'
    ],
    [
        'Coldwater, Michigan',
        41.9403263,
        -85.0005215,
        'Michigan',
        'United_States',
        'Coldwater'
    ],
    [
        'Colon, Michigan',
        41.9583822,
        -85.3249817,
        'Michigan',
        'United_States',
        'Colon'
    ],
    [
        'Corunna, Michigan',
        42.9819728,
        -84.117745,
        'Michigan',
        'United_States',
        'Corunna'
    ],
    [
        'Crystal Falls, Michigan',
        46.0980066,
        -88.3340242,
        'Michigan',
        'United_States',
        'Crystal_Falls'
    ],
    [
        'Dearborn, Michigan',
        42.3222599,
        -83.1763145,
        'Michigan',
        'United_States',
        'Dearborn'
    ],
    [
        'Detroit, Michigan',
        42.331427,
        -83.0457538,
        'Michigan',
        'United_States',
        'Detroit'
    ],
    [
        'Dexter, Michigan',
        42.3383697,
        -83.8885552,
        'Michigan',
        'United_States',
        'Dexter'
    ],
    [
        'Eagle River, Michigan',
        47.4138051,
        -88.2956606,
        'Michigan',
        'United_States',
        'Eagle_River'
    ],
    [
        'Elk Rapids, Michigan',
        44.8955578,
        -85.4164605,
        'Michigan',
        'United_States',
        'Elk_Rapids'
    ],
    [
        'Escanaba, Michigan',
        45.7452466,
        -87.0645801,
        'Michigan',
        'United_States',
        'Escanaba'
    ],
    [
        'Essexville, Michigan',
        43.6153004,
        -83.8419193,
        'Michigan',
        'United_States',
        'Essexville'
    ],
    [
        'Farmington Hills, Michigan',
        42.4989936,
        -83.3677168,
        'Michigan',
        'United_States',
        'Farmington_Hills'
    ],
    [
        'Fenton, Michigan',
        42.7978061,
        -83.7049498,
        'Michigan',
        'United_States',
        'Fenton'
    ],
    [
        'Flint, Michigan',
        43.0125274,
        -83.6874562,
        'Michigan',
        'United_States',
        'Flint'
    ],
    [
        'Frankfort, Michigan',
        44.6336096,
        -86.2345396,
        'Michigan',
        'United_States',
        'Frankfort'
    ],
    [
        'Fraser, Michigan',
        42.539202,
        -82.9493652,
        'Michigan',
        'United_States',
        'Fraser'
    ],
    [
        'Garden City, Michigan',
        42.3255928,
        -83.3310422,
        'Michigan',
        'United_States',
        'Garden_City'
    ],
    [
        'Gaylord, Michigan',
        45.0275126,
        -84.6747523,
        'Michigan',
        'United_States',
        'Gaylord'
    ],
    [
        'Gladwin, Michigan',
        43.9808549,
        -84.4864007,
        'Michigan',
        'United_States',
        'Gladwin'
    ],
    [
        'Grand Blanc, Michigan',
        42.9275277,
        -83.6299518,
        'Michigan',
        'United_States',
        'Grand_Blanc'
    ],
    [
        'Grand Haven, Michigan',
        43.0630734,
        -86.2283864,
        'Michigan',
        'United_States',
        'Grand_Haven'
    ],
    [
        'Grand Rapids, Michigan',
        42.9633599,
        -85.6680863,
        'Michigan',
        'United_States',
        'Grand_Rapids'
    ],
    [
        'Grayling, Michigan',
        44.6614039,
        -84.7147512,
        'Michigan',
        'United_States',
        'Grayling'
    ],
    [
        'Hamburg, Michigan',
        42.4486456,
        -83.8016097,
        'Michigan',
        'United_States',
        'Hamburg'
    ],
    [
        'Hamilton, Michigan',
        42.6673526,
        -86.0019515,
        'Michigan',
        'United_States',
        'Hamilton'
    ],
    [
        'Harrison, Michigan',
        44.0191862,
        -84.7994675,
        'Michigan',
        'United_States',
        'Harrison'
    ],
    [
        'Harrisville, Michigan',
        44.6564022,
        -83.2946891,
        'Michigan',
        'United_States',
        'Harrisville'
    ],
    [
        'Hart, Michigan',
        43.6983407,
        -86.3639652,
        'Michigan',
        'United_States',
        'Hart'
    ],
    [
        'Hartland, Michigan',
        42.6568196,
        -83.754382,
        'Michigan',
        'United_States',
        'Hartland'
    ],
    [
        'Hastings, Michigan',
        42.6458682,
        -85.2908403,
        'Michigan',
        'United_States',
        'Hastings'
    ],
    [
        'Hemlock, Michigan',
        43.4147488,
        -84.2305398,
        'Michigan',
        'United_States',
        'Hemlock'
    ],
    [
        'Hillsdale, Michigan',
        41.9200472,
        -84.6305101,
        'Michigan',
        'United_States',
        'Hillsdale'
    ],
    [
        'Holland, Michigan',
        42.7875235,
        -86.1089301,
        'Michigan',
        'United_States',
        'Holland'
    ],
    [
        'Houghton, Michigan',
        47.1211331,
        -88.5694182,
        'Michigan',
        'United_States',
        'Houghton'
    ],
    [
        'Howell, Michigan',
        42.6072552,
        -83.9293952,
        'Michigan',
        'United_States',
        'Howell'
    ],
    [
        'Ionia, Michigan',
        42.9872547,
        -85.0711174,
        'Michigan',
        'United_States',
        'Ionia'
    ],
    [
        'Ironwood, Michigan',
        46.4546698,
        -90.1710081,
        'Michigan',
        'United_States',
        'Ironwood'
    ],
    [
        'Iron Mountain, Michigan',
        45.8202334,
        -88.0659603,
        'Michigan',
        'United_States',
        'Iron_Mountain'
    ],
    [
        'Ishpeming, Michigan',
        46.4885469,
        -87.6676358,
        'Michigan',
        'United_States',
        'Ishpeming'
    ],
    [
        'Isle Royale National Park, Michigan',
        47.9958654,
        -88.9092899,
        'Michigan',
        'United_States',
        'Isle_Royale_National_Park'
    ],
    [
        'Ithaca, Michigan',
        43.2916975,
        -84.6075004,
        'Michigan',
        'United_States',
        'Ithaca'
    ],
    [
        'Jackson, Michigan',
        42.245869,
        -84.4013462,
        'Michigan',
        'United_States',
        'Jackson'
    ],
    [
        'Kalamazoo, Michigan',
        42.2917069,
        -85.5872286,
        'Michigan',
        'United_States',
        'Kalamazoo'
    ],
    [
        'Kalkaska, Michigan',
        44.7352042,
        -85.1842227,
        'Michigan',
        'United_States',
        'Kalkaska'
    ],
    [
        'Kenton, Michigan',
        46.4854993,
        -88.8940283,
        'Michigan',
        'United_States',
        'Kenton'
    ],
    [
        'Keweenaw National Historical Park, Michigan',
        47.2397213,
        -88.4538322,
        'Michigan',
        'United_States',
        'Keweenaw_National_Historical_Park'
    ],
    [
        'Lake City, Michigan',
        44.3352872,
        -85.2150455,
        'Michigan',
        'United_States',
        'Lake_City'
    ],
    [
        'Lake Orion, Michigan',
        42.7844752,
        -83.2396612,
        'Michigan',
        'United_States',
        'Lake_Orion'
    ],
    [
        'Lansing, Michigan',
        42.732535,
        -84.5555347,
        'Michigan',
        'United_States',
        'Lansing'
    ],
    [
        'Lapeer, Michigan',
        43.0514161,
        -83.3188341,
        'Michigan',
        'United_States',
        'Lapeer'
    ],
    [
        'Lawton, Michigan',
        42.1672629,
        -85.8469539,
        'Michigan',
        'United_States',
        'Lawton'
    ],
    [
        'Lennon, Michigan',
        42.985585,
        -83.9282955,
        'Michigan',
        'United_States',
        'Lennon'
    ],
    [
        'Livonia, Michigan',
        42.36837,
        -83.3527097,
        'Michigan',
        'United_States',
        'Livonia'
    ],
    [
        'Ludington, Michigan',
        43.9552825,
        -86.4525831,
        'Michigan',
        'United_States',
        'Ludington'
    ],
    [
        'L Anse, Michigan',
        46.7565991,
        -88.4529085,
        'Michigan',
        'United_States',
        'L_Anse'
    ],
    [
        'Manistee, Michigan',
        44.2444473,
        -86.324253,
        'Michigan',
        'United_States',
        'Manistee'
    ],
    [
        'Manistique, Michigan',
        45.9577506,
        -86.2462523,
        'Michigan',
        'United_States',
        'Manistique'
    ],
    [
        'Marlette, Michigan',
        43.3269685,
        -83.08022,
        'Michigan',
        'United_States',
        'Marlette'
    ],
    [
        'Marquette, Michigan',
        46.5475825,
        -87.3955954,
        'Michigan',
        'United_States',
        'Marquette'
    ],
    [
        'Marshall, Michigan',
        42.2722641,
        -84.9633148,
        'Michigan',
        'United_States',
        'Marshall'
    ],
    [
        'Mason, Michigan',
        42.5792027,
        -84.4435845,
        'Michigan',
        'United_States',
        'Mason'
    ],
    [
        'Menominee, Michigan',
        45.1077627,
        -87.6142737,
        'Michigan',
        'United_States',
        'Menominee'
    ],
    [
        'Middleville, Michigan',
        42.7130889,
        -85.4619599,
        'Michigan',
        'United_States',
        'Middleville'
    ],
    [
        'Midland, Michigan',
        43.6155825,
        -84.2472116,
        'Michigan',
        'United_States',
        'Midland'
    ],
    [
        'Milan, Michigan',
        42.0853204,
        -83.6824384,
        'Michigan',
        'United_States',
        'Milan'
    ],
    [
        'Mio, Michigan',
        44.6522362,
        -84.1297276,
        'Michigan',
        'United_States',
        'Mio'
    ],
    [
        'Monroe, Michigan',
        41.9164343,
        -83.3977101,
        'Michigan',
        'United_States',
        'Monroe'
    ],
    [
        'Mount Clemens, Michigan',
        42.5972563,
        -82.8779754,
        'Michigan',
        'United_States',
        'Mount_Clemens'
    ],
    [
        'Mount Pleasant, Michigan',
        43.5978075,
        -84.7675139,
        'Michigan',
        'United_States',
        'Mount_Pleasant'
    ],
    [
        'Munising, Michigan',
        46.4110574,
        -86.6479361,
        'Michigan',
        'United_States',
        'Munising'
    ],
    [
        'Muskegon, Michigan',
        43.2341813,
        -86.2483921,
        'Michigan',
        'United_States',
        'Muskegon'
    ],
    [
        'Newberry, Michigan',
        46.3549984,
        -85.5095586,
        'Michigan',
        'United_States',
        'Newberry'
    ],
    [
        'Niles, Michigan',
        41.8297694,
        -86.2541768,
        'Michigan',
        'United_States',
        'Niles'
    ],
    [
        'Ontonagon, Michigan',
        46.8710525,
        -89.3140302,
        'Michigan',
        'United_States',
        'Ontonagon'
    ],
    [
        'Ovid, Michigan',
        43.0058618,
        -84.3716438,
        'Michigan',
        'United_States',
        'Ovid'
    ],
    [
        'Owosso, Michigan',
        42.9978049,
        -84.1766358,
        'Michigan',
        'United_States',
        'Owosso'
    ],
    [
        'Oxford, Michigan',
        42.8247293,
        -83.2652254,
        'Michigan',
        'United_States',
        'Oxford'
    ],
    [
        'Paw Paw, Michigan',
        42.2178171,
        -85.8911246,
        'Michigan',
        'United_States',
        'Paw_Paw'
    ],
    [
        'Petoskey, Michigan',
        45.3733428,
        -84.9553296,
        'Michigan',
        'United_States',
        'Petoskey'
    ],
    [
        'Pictured Rocks National Lakeshore, Michigan',
        46.5614384,
        -86.3213064,
        'Michigan',
        'United_States',
        'Pictured_Rocks_National_Lakeshore'
    ],
    [
        'Pinckney, Michigan',
        42.4567013,
        -83.9463358,
        'Michigan',
        'United_States',
        'Pinckney'
    ],
    [
        'Pontiac, Michigan',
        42.6389216,
        -83.2910468,
        'Michigan',
        'United_States',
        'Pontiac'
    ],
    [
        'Port Huron, Michigan',
        42.9708634,
        -82.4249142,
        'Michigan',
        'United_States',
        'Port_Huron'
    ],
    [
        'Reed City, Michigan',
        43.8750174,
        -85.5100498,
        'Michigan',
        'United_States',
        'Reed_City'
    ],
    [
        'Rochester Hills, Michigan',
        42.6583661,
        -83.1499322,
        'Michigan',
        'United_States',
        'Rochester_Hills'
    ],
    [
        'Rogers City, Michigan',
        45.4214024,
        -83.8183303,
        'Michigan',
        'United_States',
        'Rogers_City'
    ],
    [
        'Romeo, Michigan',
        42.802808,
        -83.0129874,
        'Michigan',
        'United_States',
        'Romeo'
    ],
    [
        'Roscommon, Michigan',
        44.4983504,
        -84.5919682,
        'Michigan',
        'United_States',
        'Roscommon'
    ],
    [
        'Saginaw, Michigan',
        43.4194699,
        -83.9508068,
        'Michigan',
        'United_States',
        'Saginaw'
    ],
    [
        'Saint Charles, Michigan',
        43.2994596,
        -84.1428734,
        'Michigan',
        'United_States',
        'Saint_Charles'
    ],
    [
        'Saint Clair, Michigan',
        42.8208653,
        -82.486024,
        'Michigan',
        'United_States',
        'Saint_Clair'
    ],
    [
        'Saint Ignace, Michigan',
        45.8755685,
        -84.7322959,
        'Michigan',
        'United_States',
        'Saint_Ignace'
    ],
    [
        'Saint Johns, Michigan',
        43.001143,
        -84.5591521,
        'Michigan',
        'United_States',
        'Saint_Johns'
    ],
    [
        'Saint Joseph, Michigan',
        42.0938577,
        -86.4895463,
        'Michigan',
        'United_States',
        'Saint_Joseph'
    ],
    [
        'Sandusky, Michigan',
        43.4202989,
        -82.8296572,
        'Michigan',
        'United_States',
        'Sandusky'
    ],
    [
        'Sault Ste Marie, Michigan',
        46.4952996,
        -84.3453169,
        'Michigan',
        'United_States',
        'Sault_Ste_Marie'
    ],
    [
        'Scottville, Michigan',
        43.9547284,
        -86.2800787,
        'Michigan',
        'United_States',
        'Scottville'
    ],
    [
        'Sleeping Bear Dunes National Lakeshore, Michigan',
        45.0986209,
        -86.0092802,
        'Michigan',
        'United_States',
        'Sleeping_Bear_Dunes_National_Lakeshore'
    ],
    [
        'Southfield, Michigan',
        42.4733688,
        -83.2218731,
        'Michigan',
        'United_States',
        'Southfield'
    ],
    [
        'Standish, Michigan',
        43.9830762,
        -83.9588803,
        'Michigan',
        'United_States',
        'Standish'
    ],
    [
        'Stanton, Michigan',
        43.2925317,
        -85.0814074,
        'Michigan',
        'United_States',
        'Stanton'
    ],
    [
        'Suttons Bay Township, Michigan',
        45.0091271,
        -85.6086994,
        'Michigan',
        'United_States',
        'Suttons_Bay_Township'
    ],
    [
        'Traverse City, Michigan',
        44.7630567,
        -85.6206317,
        'Michigan',
        'United_States',
        'Traverse_City'
    ],
    [
        'Troy, Michigan',
        42.6064095,
        -83.1497751,
        'Michigan',
        'United_States',
        'Troy'
    ],
    [
        'Walled Lake, Michigan',
        42.537811,
        -83.4810481,
        'Michigan',
        'United_States',
        'Walled_Lake'
    ],
    [
        'Warren, Michigan',
        42.5144566,
        -83.0146526,
        'Michigan',
        'United_States',
        'Warren'
    ],
    [
        'Waterford, Michigan',
        42.6907443,
        -83.4066132,
        'Michigan',
        'United_States',
        'Waterford'
    ],
    [
        'White Lake, Michigan',
        42.6592995,
        -83.4856913,
        'Michigan',
        'United_States',
        'White_Lake'
    ],
    [
        'Whitmore Lake, Michigan',
        42.439479,
        -83.7438303,
        'Michigan',
        'United_States',
        'Whitmore_Lake'
    ],
    [
        'Ypsilanti, Michigan',
        42.2411499,
        -83.6129939,
        'Michigan',
        'United_States',
        'Ypsilanti'
    ],
    [
        'Zeeland, Michigan',
        42.8125246,
        -86.018651,
        'Michigan',
        'United_States',
        'Zeeland'
    ],
    [
        'Alexandria, Minnesota',
        45.8848164,
        -95.3776663,
        'Minnesota',
        'United_States',
        'Alexandria'
    ],
    [
        'Annandale, Minnesota',
        45.2611111,
        -94.1241667,
        'Minnesota',
        'United_States',
        'Annandale'
    ],
    [
        'Austin, Minnesota',
        43.6666296,
        -92.9746367,
        'Minnesota',
        'United_States',
        'Austin'
    ],
    [
        'Bemidji, Minnesota',
        47.4875361,
        -94.8858492,
        'Minnesota',
        'United_States',
        'Bemidji'
    ],
    [
        'Bloomington, Minnesota',
        44.840798,
        -93.2982799,
        'Minnesota',
        'United_States',
        'Bloomington'
    ],
    [
        'Brooten, Minnesota',
        45.5008614,
        -95.1247422,
        'Minnesota',
        'United_States',
        'Brooten'
    ],
    [
        'Buffalo, Minnesota',
        45.1717846,
        -93.8747929,
        'Minnesota',
        'United_States',
        'Buffalo'
    ],
    [
        'Canby, Minnesota',
        44.7088525,
        -96.2764335,
        'Minnesota',
        'United_States',
        'Canby'
    ],
    [
        'Duluth, Minnesota',
        46.7866719,
        -92.1004852,
        'Minnesota',
        'United_States',
        'Duluth'
    ],
    [
        'Gilbert, Minnesota',
        47.4888156,
        -92.4649052,
        'Minnesota',
        'United_States',
        'Gilbert'
    ],
    [
        'Glenwood, Minnesota',
        45.6502392,
        -95.3900419,
        'Minnesota',
        'United_States',
        'Glenwood'
    ],
    [
        'Grand Portage National Monument, Minnesota',
        47.9606509,
        -89.6865941,
        'Minnesota',
        'United_States',
        'Grand_Portage_National_Monument'
    ],
    [
        'Grand Rapids, Minnesota',
        47.2371658,
        -93.5302142,
        'Minnesota',
        'United_States',
        'Grand_Rapids'
    ],
    [
        'International Falls, Minnesota',
        48.6023149,
        -93.4040679,
        'Minnesota',
        'United_States',
        'International_Falls'
    ],
    [
        'Lake Benton, Minnesota',
        44.2630235,
        -96.285039,
        'Minnesota',
        'United_States',
        'Lake_Benton'
    ],
    [
        'Lake Park, Minnesota',
        46.8863481,
        -96.0945002,
        'Minnesota',
        'United_States',
        'Lake_Park'
    ],
    [
        'La Crescent, Minnesota',
        43.8264695,
        -91.3035514,
        'Minnesota',
        'United_States',
        'La_Crescent'
    ],
    [
        'Lewiston, Minnesota',
        43.9844072,
        -91.8693205,
        'Minnesota',
        'United_States',
        'Lewiston'
    ],
    [
        'Little Falls, Minnesota',
        45.9805556,
        -94.3694444,
        'Minnesota',
        'United_States',
        'Little_Falls'
    ],
    [
        'Mankato, Minnesota',
        44.1635775,
        -93.9993996,
        'Minnesota',
        'United_States',
        'Mankato'
    ],
    [
        'Maplewood, Minnesota',
        44.9530215,
        -92.9952153,
        'Minnesota',
        'United_States',
        'Maplewood'
    ],
    [
        'Minneapolis, Minnesota',
        44.977753,
        -93.2650108,
        'Minnesota',
        'United_States',
        'Minneapolis'
    ],
    [
        'Mississippi National River and Recreation Area, Minnesota',
        44.92604,
        -93.1181859,
        'Minnesota',
        'United_States',
        'Mississippi_National_River_and_Recreation_Area'
    ],
    [
        'Mountain Lake, Minnesota',
        43.938846,
        -94.9297089,
        'Minnesota',
        'United_States',
        'Mountain_Lake'
    ],
    [
        'Northome, Minnesota',
        47.872456,
        -94.2805032,
        'Minnesota',
        'United_States',
        'Northome'
    ],
    [
        'Olivia, Minnesota',
        44.7764314,
        -94.9956593,
        'Minnesota',
        'United_States',
        'Olivia'
    ],
    [
        'Owatonna, Minnesota',
        44.0855572,
        -93.2259349,
        'Minnesota',
        'United_States',
        'Owatonna'
    ],
    [
        'Pipestone National Monument, Minnesota',
        44.0133131,
        -96.325318,
        'Minnesota',
        'United_States',
        'Pipestone_National_Monument'
    ],
    [
        'Prior Lake, Minnesota',
        44.7132969,
        -93.4227274,
        'Minnesota',
        'United_States',
        'Prior_Lake'
    ],
    [
        'Red Wing, Minnesota',
        44.5660691,
        -92.5369563,
        'Minnesota',
        'United_States',
        'Red_Wing'
    ],
    [
        'Rochester, Minnesota',
        44.0121221,
        -92.4801989,
        'Minnesota',
        'United_States',
        'Rochester'
    ],
    [
        'Saint Cloud, Minnesota',
        45.5579451,
        -94.1632404,
        'Minnesota',
        'United_States',
        'Saint_Cloud'
    ],
    [
        'Saint Paul, Minnesota',
        44.9537029,
        -93.0899578,
        'Minnesota',
        'United_States',
        'Saint_Paul'
    ],
    [
        'Saint Peter, Minnesota',
        44.3258932,
        -93.955691,
        'Minnesota',
        'United_States',
        'Saint_Peter'
    ],
    [
        'Tower, Minnesota',
        47.8054749,
        -92.2746054,
        'Minnesota',
        'United_States',
        'Tower'
    ],
    [
        'Virginia, Minnesota',
        47.5232596,
        -92.5365713,
        'Minnesota',
        'United_States',
        'Virginia'
    ],
    [
        'Voyageurs National Park, Minnesota',
        48.4268554,
        -92.8465541,
        'Minnesota',
        'United_States',
        'Voyageurs_National_Park'
    ],
    [
        'Warroad, Minnesota',
        48.9052657,
        -95.3144041,
        'Minnesota',
        'United_States',
        'Warroad'
    ],
    [
        'Willmar, Minnesota',
        45.1223711,
        -95.048659,
        'Minnesota',
        'United_States',
        'Willmar'
    ],
    [
        'Winona, Minnesota',
        44.0553908,
        -91.6663523,
        'Minnesota',
        'United_States',
        'Winona'
    ],
    [
        'Wiscasset, Minnesota',
        46.729553,
        -94.6858998,
        'Minnesota',
        'United_States',
        'Wiscasset'
    ],
    [
        'Wykoff, Minnesota',
        43.7071862,
        -92.268221,
        'Minnesota',
        'United_States',
        'Wykoff'
    ],
    [
        'Batesville, Mississippi',
        34.3114982,
        -89.9442567,
        'Mississippi',
        'United_States',
        'Batesville'
    ],
    [
        'Bay Saint Louis, Mississippi',
        30.3088076,
        -89.3300461,
        'Mississippi',
        'United_States',
        'Bay_Saint_Louis'
    ],
    [
        'Biloxi, Mississippi',
        30.3960318,
        -88.8853078,
        'Mississippi',
        'United_States',
        'Biloxi'
    ],
    [
        'Brices Cross Roads National Battlefield Site, Mississippi',
        34.506111,
        -88.728889,
        'Mississippi',
        'United_States',
        'Brices_Cross_Roads_National_Battlefield_Site'
    ],
    [
        'Columbus, Mississippi',
        33.4956744,
        -88.4272627,
        'Mississippi',
        'United_States',
        'Columbus'
    ],
    [
        'Corinth, Mississippi',
        34.9342548,
        -88.5222702,
        'Mississippi',
        'United_States',
        'Corinth'
    ],
    [
        'Foxworth, Mississippi',
        31.2338839,
        -89.8676377,
        'Mississippi',
        'United_States',
        'Foxworth'
    ],
    [
        'Gulfport, Mississippi',
        30.3674198,
        -89.0928155,
        'Mississippi',
        'United_States',
        'Gulfport'
    ],
    [
        'Gulf Islands National Seashore, Mississippi',
        30.3913896,
        -88.7910023,
        'Mississippi',
        'United_States',
        'Gulf_Islands_National_Seashore'
    ],
    [
        'Hattiesburg, Mississippi',
        31.3271189,
        -89.2903392,
        'Mississippi',
        'United_States',
        'Hattiesburg'
    ],
    [
        'Hernando, Mississippi',
        34.823987,
        -89.9937018,
        'Mississippi',
        'United_States',
        'Hernando'
    ],
    [
        'Jackson, Mississippi',
        32.2987573,
        -90.1848103,
        'Mississippi',
        'United_States',
        'Jackson'
    ],
    [
        'Leland, Mississippi',
        33.4053949,
        -90.8976007,
        'Mississippi',
        'United_States',
        'Leland'
    ],
    [
        'McComb, Mississippi',
        31.2437872,
        -90.4531535,
        'Mississippi',
        'United_States',
        'McComb'
    ],
    [
        'Meridian, Mississippi',
        32.3643098,
        -88.703656,
        'Mississippi',
        'United_States',
        'Meridian'
    ],
    [
        'Natchez, Mississippi',
        31.5604442,
        -91.403171,
        'Mississippi',
        'United_States',
        'Natchez'
    ],
    [
        'Natchez National Historical Park, Mississippi',
        31.543,
        -91.3824,
        'Mississippi',
        'United_States',
        'Natchez_National_Historical_Park'
    ],
    [
        'Natchez Trace Parkway and National Scenic Trail, Mississippi',
        31.941715,
        -90.970567,
        'Mississippi',
        'United_States',
        'Natchez_Trace_Parkway_and_National_Scenic_Trail'
    ],
    [
        'Ocean Springs, Mississippi',
        30.4113097,
        -88.8278057,
        'Mississippi',
        'United_States',
        'Ocean_Springs'
    ],
    [
        'Oxford, Mississippi',
        34.3664951,
        -89.5192484,
        'Mississippi',
        'United_States',
        'Oxford'
    ],
    [
        'Petal, Mississippi',
        31.3465627,
        -89.2600605,
        'Mississippi',
        'United_States',
        'Petal'
    ],
    [
        'Picayune, Mississippi',
        30.5254692,
        -89.6795084,
        'Mississippi',
        'United_States',
        'Picayune'
    ],
    [
        'Starkville, Mississippi',
        33.4503998,
        -88.8183872,
        'Mississippi',
        'United_States',
        'Starkville'
    ],
    [
        'Stennis Space Center, Mississippi',
        30.3619837,
        -89.5994225,
        'Mississippi',
        'United_States',
        'Stennis_Space_Center'
    ],
    [
        'Tupelo, Mississippi',
        34.2576066,
        -88.7033859,
        'Mississippi',
        'United_States',
        'Tupelo'
    ],
    [
        'Tupelo National Battlefield, Mississippi',
        34.2556,
        -88.7371,
        'Mississippi',
        'United_States',
        'Tupelo_National_Battlefield'
    ],
    [
        'Vicksburg, Mississippi',
        32.3526456,
        -90.877882,
        'Mississippi',
        'United_States',
        'Vicksburg'
    ],
    [
        'Vicksburg National Military Park, Mississippi',
        32.3436914,
        -90.8510716,
        'Mississippi',
        'United_States',
        'Vicksburg_National_Military_Park'
    ],
    [
        'Yazoo City, Mississippi',
        32.8551326,
        -90.4056468,
        'Mississippi',
        'United_States',
        'Yazoo_City'
    ],
    [
        'Bonne Terre, Missouri',
        37.9231069,
        -90.5554039,
        'Missouri',
        'United_States',
        'Bonne_Terre'
    ],
    [
        'Branson, Missouri',
        36.6436731,
        -93.2185144,
        'Missouri',
        'United_States',
        'Branson'
    ],
    [
        'Cape Girardeau, Missouri',
        37.3058839,
        -89.5181476,
        'Missouri',
        'United_States',
        'Cape_Girardeau'
    ],
    [
        'Cassville, Missouri',
        36.6770111,
        -93.8688109,
        'Missouri',
        'United_States',
        'Cassville'
    ],
    [
        'Chillicothe, Missouri',
        39.7952946,
        -93.5524358,
        'Missouri',
        'United_States',
        'Chillicothe'
    ],
    [
        'Columbia, Missouri',
        38.9517053,
        -92.3340724,
        'Missouri',
        'United_States',
        'Columbia'
    ],
    [
        'Dexter, Missouri',
        36.7958866,
        -89.9578688,
        'Missouri',
        'United_States',
        'Dexter'
    ],
    [
        'Fulton, Missouri',
        38.8467082,
        -91.9479586,
        'Missouri',
        'United_States',
        'Fulton'
    ],
    [
        'George Washington Carver National Monument, Missouri',
        36.9873287,
        -94.3556725,
        'Missouri',
        'United_States',
        'George_Washington_Carver_National_Monument'
    ],
    [
        'Hannibal, Missouri',
        39.7083789,
        -91.3584816,
        'Missouri',
        'United_States',
        'Hannibal'
    ],
    [
        'Harry S Truman National Historic Site, Missouri',
        39.0936971,
        -94.423273,
        'Missouri',
        'United_States',
        'Harry_S_Truman_National_Historic_Site'
    ],
    [
        'Hermann, Missouri',
        38.7042119,
        -91.4373844,
        'Missouri',
        'United_States',
        'Hermann'
    ],
    [
        'Jackson, Missouri',
        37.3822732,
        -89.6662063,
        'Missouri',
        'United_States',
        'Jackson'
    ],
    [
        'Jefferson City, Missouri',
        38.5767017,
        -92.1735164,
        'Missouri',
        'United_States',
        'Jefferson_City'
    ],
    [
        'Jefferson National Expansion Memorial, Missouri',
        38.6247884,
        -90.1855351,
        'Missouri',
        'United_States',
        'Jefferson_National_Expansion_Memorial'
    ],
    [
        'Joplin, Missouri',
        37.0842271,
        -94.513281,
        'Missouri',
        'United_States',
        'Joplin'
    ],
    [
        'Kansas City, Missouri',
        39.0997265,
        -94.5785667,
        'Missouri',
        'United_States',
        'Kansas_City'
    ],
    [
        'Lamar, Missouri',
        37.4950478,
        -94.2766148,
        'Missouri',
        'United_States',
        'Lamar'
    ],
    [
        'La Grange, Missouri',
        40.0428236,
        -91.4976544,
        'Missouri',
        'United_States',
        'La_Grange'
    ],
    [
        'Lees Summit, Missouri',
        38.9108408,
        -94.3821724,
        'Missouri',
        'United_States',
        'Lees_Summit'
    ],
    [
        'Liberty, Missouri',
        39.2461138,
        -94.4191177,
        'Missouri',
        'United_States',
        'Liberty'
    ],
    [
        'Moberly, Missouri',
        39.4183689,
        -92.4382367,
        'Missouri',
        'United_States',
        'Moberly'
    ],
    [
        'Mountain Grove, Missouri',
        37.1306078,
        -92.2634942,
        'Missouri',
        'United_States',
        'Mountain_Grove'
    ],
    [
        'Nevada, Missouri',
        37.8392052,
        -94.3546719,
        'Missouri',
        'United_States',
        'Nevada'
    ],
    [
        'New Haven, Missouri',
        38.6083822,
        -91.2190416,
        'Missouri',
        'United_States',
        'New_Haven'
    ],
    [
        'Osage Beach, Missouri',
        38.1503113,
        -92.6179621,
        'Missouri',
        'United_States',
        'Osage_Beach'
    ],
    [
        'Ozark, Missouri',
        37.0208865,
        -93.2060163,
        'Missouri',
        'United_States',
        'Ozark'
    ],
    [
        'Ozark National Scenic Riverway, Missouri',
        36.9238678,
        -90.9070354,
        'Missouri',
        'United_States',
        'Ozark_National_Scenic_Riverway'
    ],
    [
        'Pacific, Missouri',
        38.4819976,
        -90.7415194,
        'Missouri',
        'United_States',
        'Pacific'
    ],
    [
        'Poplar Bluff, Missouri',
        36.7569994,
        -90.392888,
        'Missouri',
        'United_States',
        'Poplar_Bluff'
    ],
    [
        'Rolla, Missouri',
        37.948544,
        -91.7715303,
        'Missouri',
        'United_States',
        'Rolla'
    ],
    [
        'Saint Charles, Missouri',
        38.7881062,
        -90.4974359,
        'Missouri',
        'United_States',
        'Saint_Charles'
    ],
    [
        'Saint Joseph, Missouri',
        39.7674578,
        -94.846681,
        'Missouri',
        'United_States',
        'Saint_Joseph'
    ],
    [
        'Saint Louis, Missouri',
        38.6270025,
        -90.1994042,
        'Missouri',
        'United_States',
        'Saint_Louis'
    ],
    [
        'Sedalia, Missouri',
        38.7044609,
        -93.2282613,
        'Missouri',
        'United_States',
        'Sedalia'
    ],
    [
        'Springfield, Missouri',
        37.2089572,
        -93.2922989,
        'Missouri',
        'United_States',
        'Springfield'
    ],
    [
        'Sullivan, Missouri',
        38.2081045,
        -91.1604207,
        'Missouri',
        'United_States',
        'Sullivan'
    ],
    [
        'Ulysses S Grant National Historic Site, Missouri',
        38.5512142,
        -90.3519379,
        'Missouri',
        'United_States',
        'Ulysses_S_Grant_National_Historic_Site'
    ],
    [
        'Warrensburg, Missouri',
        38.7627893,
        -93.7360498,
        'Missouri',
        'United_States',
        'Warrensburg'
    ],
    [
        'Washington, Missouri',
        38.5581072,
        -91.0120878,
        'Missouri',
        'United_States',
        'Washington'
    ],
    [
        'West Plains, Missouri',
        36.7281154,
        -91.8523711,
        'Missouri',
        'United_States',
        'West_Plains'
    ],
    [
        'Wilsons Creek National Battlefield, Missouri',
        37.1157835,
        -93.4190375,
        'Missouri',
        'United_States',
        'Wilsons_Creek_National_Battlefield'
    ],
    [
        'Anaconda, Montana',
        46.1262998,
        -112.9478359,
        'Montana',
        'United_States',
        'Anaconda'
    ],
    [
        'Bighorn Canyon National Recreation Area, Montana',
        46.1616535,
        -107.4486813,
        'Montana',
        'United_States',
        'Bighorn_Canyon_National_Recreation_Area'
    ],
    [
        'Big Hole National Battlefield, Montana',
        45.6448164,
        -113.6533068,
        'Montana',
        'United_States',
        'Big_Hole_National_Battlefield'
    ],
    [
        'Billings, Montana',
        45.7832856,
        -108.5006904,
        'Montana',
        'United_States',
        'Billings'
    ],
    [
        'Bozeman, Montana',
        45.6769979,
        -111.0429339,
        'Montana',
        'United_States',
        'Bozeman'
    ],
    [
        'Butte, Montana',
        46.0038232,
        -112.5347776,
        'Montana',
        'United_States',
        'Butte'
    ],
    [
        'Chinook, Montana',
        48.5899222,
        -109.2312312,
        'Montana',
        'United_States',
        'Chinook'
    ],
    [
        'Crow Agency, Montana',
        45.6041414,
        -107.4645278,
        'Montana',
        'United_States',
        'Crow_Agency'
    ],
    [
        'Glacier National Park, Montana',
        48.7596128,
        -113.7870225,
        'Montana',
        'United_States',
        'Glacier_National_Park'
    ],
    [
        'Grant Kohrs Ranch National Historic Site, Montana',
        46.406069,
        -112.736682,
        'Montana',
        'United_States',
        'Grant_Kohrs_Ranch_National_Historic_Site'
    ],
    [
        'Great Falls, Montana',
        47.4941836,
        -111.2833449,
        'Montana',
        'United_States',
        'Great_Falls'
    ],
    [
        'Havre, Montana',
        48.549999,
        -109.6840887,
        'Montana',
        'United_States',
        'Havre'
    ],
    [
        'Helena, Montana',
        46.5883707,
        -112.0245054,
        'Montana',
        'United_States',
        'Helena'
    ],
    [
        'Kalispell, Montana',
        48.1919889,
        -114.3168131,
        'Montana',
        'United_States',
        'Kalispell'
    ],
    [
        'Lewistown, Montana',
        47.0624732,
        -109.428238,
        'Montana',
        'United_States',
        'Lewistown'
    ],
    [
        'Libby, Montana',
        48.3882861,
        -115.5559988,
        'Montana',
        'United_States',
        'Libby'
    ],
    [
        'Little Bighorn Battlefield National Monument, Montana',
        46.8796822,
        -110.3625658,
        'Montana',
        'United_States',
        'Little_Bighorn_Battlefield_National_Monument'
    ],
    [
        'Livingston, Montana',
        45.6614105,
        -110.5599556,
        'Montana',
        'United_States',
        'Livingston'
    ],
    [
        'Missoula, Montana',
        46.8787176,
        -113.996586,
        'Montana',
        'United_States',
        'Missoula'
    ],
    [
        'Sidney, Montana',
        47.7166836,
        -104.1563253,
        'Montana',
        'United_States',
        'Sidney'
    ],
    [
        'Whitefish, Montana',
        48.4106373,
        -114.3352652,
        'Montana',
        'United_States',
        'Whitefish'
    ],
    [
        'American Memorial Park, National Parks',
        62.7470279,
        -150.1303742,
        'National_Parks',
        'United_States',
        'American_Memorial_Park'
    ],
    [
        'Amistad National Recreation Area, National Parks',
        29.43661,
        -101.0501,
        'National_Parks',
        'United_States',
        'Amistad_National_Recreation_Area'
    ],
    [
        'Baltimore Washington Parkway, National Parks',
        39.1022636,
        -76.7936109,
        'National_Parks',
        'United_States',
        'Baltimore_Washington_Parkway'
    ],
    [
        'Barnard Hill, National Parks',
        39.4944921,
        -86.4074942,
        'National_Parks',
        'United_States',
        'Barnard_Hill'
    ],
    [
        'Battery Ricketts, National Parks',
        42.1269332,
        -95.5750019,
        'National_Parks',
        'United_States',
        'Battery_Ricketts'
    ],
    [
        'Beach Parkway, National Parks',
        39.8729953,
        -75.1864071,
        'National_Parks',
        'United_States',
        'Beach_Parkway'
    ],
    [
        'Bighorn Canyon National Recreation Area, National Parks',
        44.838611,
        -108.3775,
        'National_Parks',
        'United_States',
        'Bighorn_Canyon_National_Recreation_Area'
    ],
    [
        'Big Cypress National Preserve, National Parks',
        26.0483179,
        -81.0758665,
        'National_Parks',
        'United_States',
        'Big_Cypress_National_Preserve'
    ],
    [
        'Blue Ridge Parkway, National Parks',
        34.4714814,
        -93.0319871,
        'National_Parks',
        'United_States',
        'Blue_Ridge_Parkway'
    ],
    [
        'Booker T Washington National Monument, National Parks',
        37.1153,
        -79.732,
        'National_Parks',
        'United_States',
        'Booker_T_Washington_National_Monument'
    ],
    [
        'Boston Harbor Islands National Recreation Area, National Parks',
        42.2624,
        -70.8721,
        'National_Parks',
        'United_States',
        'Boston_Harbor_Islands_National_Recreation_Area'
    ],
    [
        'Boston National Historical Park, National Parks',
        42.3732,
        -71.0554,
        'National_Parks',
        'United_States',
        'Boston_National_Historical_Park'
    ],
    [
        'Brices Cross Roads National Battlefield Site, National Parks',
        34.5059,
        -88.7292,
        'National_Parks',
        'United_States',
        'Brices_Cross_Roads_National_Battlefield_Site'
    ],
    [
        'Brown v Board of Education National Historic Site, National Parks',
        39.0379,
        -95.6764,
        'National_Parks',
        'United_States',
        'Brown_v_Board_of_Education_National_Historic_Site'
    ],
    [
        'Bryce Park, National Parks',
        37.6283,
        -112.16766,
        'National_Parks',
        'United_States',
        'Bryce_Park'
    ],
    [
        'Buffalo National River, National Parks',
        35.9686,
        -92.9181,
        'National_Parks',
        'United_States',
        'Buffalo_National_River'
    ],
    [
        'Canaveral National Seashore, National Parks',
        28.7862,
        -80.7541,
        'National_Parks',
        'United_States',
        'Canaveral_National_Seashore'
    ],
    [
        'Cane River Creole National Historical Park, National Parks',
        31.6654,
        -93.0044,
        'National_Parks',
        'United_States',
        'Cane_River_Creole_National_Historical_Park'
    ],
    [
        'Canyonlands National Park, National Parks',
        38.2718,
        -109.884,
        'National_Parks',
        'United_States',
        'Canyonlands_National_Park'
    ],
    [
        'Canyon de Chelly National Monument, National Parks',
        36.0943,
        -109.3404,
        'National_Parks',
        'United_States',
        'Canyon_de_Chelly_National_Monument'
    ],
    [
        'Capulin Volcano National Monument, National Parks',
        36.7817,
        -103.971,
        'National_Parks',
        'United_States',
        'Capulin_Volcano_National_Monument'
    ],
    [
        'Casa Grande Ruins National Monument, National Parks',
        32.9972,
        -111.5333,
        'National_Parks',
        'United_States',
        'Casa_Grande_Ruins_National_Monument'
    ],
    [
        'Castillo de San Marcos National Monument, National Parks',
        29.8979,
        -81.3124,
        'National_Parks',
        'United_States',
        'Castillo_de_San_Marcos_National_Monument'
    ],
    [
        'Catoctin Mountain Park, National Parks',
        39.6503,
        -77.4641,
        'National_Parks',
        'United_States',
        'Catoctin_Mountain_Park'
    ],
    [
        'Cedar Breaks National Monument, National Parks',
        37.6355,
        -112.8453,
        'National_Parks',
        'United_States',
        'Cedar_Breaks_National_Monument'
    ],
    [
        'Cedar Creek and Belle Grove Historical Park, National Parks',
        38.9937,
        -78.3142,
        'National_Parks',
        'United_States',
        'Cedar_Creek_and_Belle_Grove_Historical_Park'
    ],
    [
        'Center Parking, National Parks',
        45.4284524,
        -75.6163172,
        'National_Parks',
        'United_States',
        'Center_Parking'
    ],
    [
        'Chaco Culture National Historical Park, National Parks',
        36.0528,
        -107.9587,
        'National_Parks',
        'United_States',
        'Chaco_Culture_National_Historical_Park'
    ],
    [
        'Chamizal National Memorial, National Parks',
        31.7671438,
        -106.4542166,
        'National_Parks',
        'United_States',
        'Chamizal_National_Memorial'
    ],
    [
        'Charles Pinckney National Historic Site, National Parks',
        32.8458,
        -79.8249,
        'National_Parks',
        'United_States',
        'Charles_Pinckney_National_Historic_Site'
    ],
    [
        'Chesapeake and Ohio Canal National Historic Park, National Parks',
        39.6311,
        -78.3599,
        'National_Parks',
        'United_States',
        'Chesapeake_and_Ohio_Canal_National_Historic_Park'
    ],
    [
        'Chickasaw National Recreation Area, National Parks',
        34.4605,
        -97.0072,
        'National_Parks',
        'United_States',
        'Chickasaw_National_Recreation_Area'
    ],
    [
        'Chimney Rock National Historical Park, National Parks',
        41.7024,
        -103.348,
        'National_Parks',
        'United_States',
        'Chimney_Rock_National_Historical_Park'
    ],
    [
        'Chiricahua National Monument, National Parks',
        32.011,
        -109.3454,
        'National_Parks',
        'United_States',
        'Chiricahua_National_Monument'
    ],
    [
        'City of Rocks National Reserve, National Parks',
        42.0697,
        -113.7132,
        'National_Parks',
        'United_States',
        'City_of_Rocks_National_Reserve'
    ],
    [
        'Clara Barton National Historic Site, National Parks',
        38.9676,
        -77.1401,
        'National_Parks',
        'United_States',
        'Clara_Barton_National_Historic_Site'
    ],
    [
        'Colorado National Monument, National Parks',
        39.0504,
        -108.692,
        'National_Parks',
        'United_States',
        'Colorado_National_Monument'
    ],
    [
        'Cowpens National Battlefield, National Parks',
        35.1315,
        -81.8093,
        'National_Parks',
        'United_States',
        'Cowpens_National_Battlefield'
    ],
    [
        'Craters of the Moon National Monument, National Parks',
        43.2829,
        -113.4416,
        'National_Parks',
        'United_States',
        'Craters_of_the_Moon_National_Monument'
    ],
    [
        'Crater Lake National Park, National Parks',
        42.9405,
        -122.1338,
        'National_Parks',
        'United_States',
        'Crater_Lake_National_Park'
    ],
    [
        'Cumberland Island National Seashore, National Parks',
        30.8585,
        -81.4525,
        'National_Parks',
        'United_States',
        'Cumberland_Island_National_Seashore'
    ],
    [
        'Curecanti National Recreation Area, National Parks',
        38.4628,
        -107.1679,
        'National_Parks',
        'United_States',
        'Curecanti_National_Recreation_Area'
    ],
    [
        'Death Valley National Park, National Parks',
        36.5676,
        -117.139,
        'National_Parks',
        'United_States',
        'Death_Valley_National_Park'
    ],
    [
        'Delaware Water Gap National Recreation Area, National Parks',
        41.1003,
        -74.9569,
        'National_Parks',
        'United_States',
        'Delaware_Water_Gap_National_Recreation_Area'
    ],
    [
        'Denali Park and Wilderness, National Parks',
        63.1694,
        -151.3619,
        'National_Parks',
        'United_States',
        'Denali_Park_and_Wilderness'
    ],
    [
        'Devils Tower National Monument, National Parks',
        44.5902,
        -104.7075,
        'National_Parks',
        'United_States',
        'Devils_Tower_National_Monument'
    ],
    [
        'De Soto National Memorial, National Parks',
        27.5228,
        -82.6434,
        'National_Parks',
        'United_States',
        'De_Soto_National_Memorial'
    ],
    [
        'Dinosaur National Monument, National Parks',
        40.4606,
        -108.5906,
        'National_Parks',
        'United_States',
        'Dinosaur_National_Monument'
    ],
    [
        'Dry Tortugas National Park, National Parks',
        24.6544,
        -82.8666,
        'National_Parks',
        'United_States',
        'Dry_Tortugas_National_Park'
    ],
    [
        'Dupont Circle, National Parks',
        41.2382735,
        -96.1323167,
        'National_Parks',
        'United_States',
        'Dupont_Circle'
    ],
    [
        'Ebeys Landing National Historical Reserve, National Parks',
        48.2135,
        -122.689,
        'National_Parks',
        'United_States',
        'Ebeys_Landing_National_Historical_Reserve'
    ],
    [
        'Edison National Historic Site, National Parks',
        40.786,
        -74.2398,
        'National_Parks',
        'United_States',
        'Edison_National_Historic_Site'
    ],
    [
        'Effigy Mounds National Monument, National Parks',
        43.0857,
        -91.194,
        'National_Parks',
        'United_States',
        'Effigy_Mounds_National_Monument'
    ],
    [
        'Eisenhower National Historic Site, National Parks',
        39.7946,
        -77.2675,
        'National_Parks',
        'United_States',
        'Eisenhower_National_Historic_Site'
    ],
    [
        'Eleanor Roosevelt National Historic Site, National Parks',
        41.7639,
        -73.9046,
        'National_Parks',
        'United_States',
        'Eleanor_Roosevelt_National_Historic_Site'
    ],
    [
        'El Malpais National Monument, National Parks',
        34.9149,
        -107.8903,
        'National_Parks',
        'United_States',
        'El_Malpais_National_Monument'
    ],
    [
        'El Morro National Monument, National Parks',
        35.039,
        -108.3552,
        'National_Parks',
        'United_States',
        'El_Morro_National_Monument'
    ],
    [
        'Eugene ONeill National Historic Site, National Parks',
        37.8262,
        -122.0276,
        'National_Parks',
        'United_States',
        'Eugene_ONeill_National_Historic_Site'
    ],
    [
        'Everglades National Park, National Parks',
        25.3722,
        -80.8818,
        'National_Parks',
        'United_States',
        'Everglades_National_Park'
    ],
    [
        'Farragut Square, National Parks',
        39.8925898,
        -75.1761817,
        'National_Parks',
        'United_States',
        'Farragut_Square'
    ],
    [
        'Fire Island National Seashore, National Parks',
        40.6918,
        -72.9944,
        'National_Parks',
        'United_States',
        'Fire_Island_National_Seashore'
    ],
    [
        'First Ladies National Historic Site, National Parks',
        40.7966,
        -81.376,
        'National_Parks',
        'United_States',
        'First_Ladies_National_Historic_Site'
    ],
    [
        'Flight 93 National Memorial, National Parks',
        40.0576,
        -78.8927,
        'National_Parks',
        'United_States',
        'Flight_93_National_Memorial'
    ],
    [
        'Fort Bowie National Historic Site, National Parks',
        32.1516,
        -109.4562,
        'National_Parks',
        'United_States',
        'Fort_Bowie_National_Historic_Site'
    ],
    [
        'Fort Donelson National Battlefield, National Parks',
        36.487,
        -87.8611,
        'National_Parks',
        'United_States',
        'Fort_Donelson_National_Battlefield'
    ],
    [
        'Fort Laramie National Historic Site, National Parks',
        42.2043,
        -104.5464,
        'National_Parks',
        'United_States',
        'Fort_Laramie_National_Historic_Site'
    ],
    [
        'Fort Larned National Historic Site, National Parks',
        38.1844,
        -99.2173,
        'National_Parks',
        'United_States',
        'Fort_Larned_National_Historic_Site'
    ],
    [
        'Fort McHenry National Monument and Historic Shrine, National Parks',
        39.2619,
        -76.5804,
        'National_Parks',
        'United_States',
        'Fort_McHenry_National_Monument_and_Historic_Shrine'
    ],
    [
        'Fort Necessity National Battlefield, National Parks',
        39.8112,
        -79.5884,
        'National_Parks',
        'United_States',
        'Fort_Necessity_National_Battlefield'
    ],
    [
        'Fort Smith National Historic Site, National Parks',
        35.3886,
        -94.4311,
        'National_Parks',
        'United_States',
        'Fort_Smith_National_Historic_Site'
    ],
    [
        'Franklins Square, National Parks',
        38.7300384,
        -76.9952672,
        'National_Parks',
        'United_States',
        'Franklins_Square'
    ],
    [
        'Fredericksburg and Spotsylvania National Military Park, National Parks',
        38.3031,
        -77.7408,
        'National_Parks',
        'United_States',
        'Fredericksburg_and_Spotsylvania_National_Military_Park'
    ],
    [
        'Frederick Law Olmsted National Historic Site, National Parks',
        42.325,
        -71.132222,
        'National_Parks',
        'United_States',
        'Frederick_Law_Olmsted_National_Historic_Site'
    ],
    [
        'Friendship Hill National Historic Site, National Parks',
        39.7754,
        -79.925,
        'National_Parks',
        'United_States',
        'Friendship_Hill_National_Historic_Site'
    ],
    [
        'Gateway National Recreation Area, National Parks',
        40.6187,
        -73.8609,
        'National_Parks',
        'United_States',
        'Gateway_National_Recreation_Area'
    ],
    [
        'George Washington Birthplace National Monument, National Parks',
        38.1979,
        -76.9291,
        'National_Parks',
        'United_States',
        'George_Washington_Birthplace_National_Monument'
    ],
    [
        'George Washington Carver National Monument, National Parks',
        36.9871,
        -94.3552,
        'National_Parks',
        'United_States',
        'George_Washington_Carver_National_Monument'
    ],
    [
        'George Washington Memorial Parkway, National Parks',
        38.7164,
        -77.077,
        'National_Parks',
        'United_States',
        'George_Washington_Memorial_Parkway'
    ],
    [
        'Gettysburg National Military Park, National Parks',
        39.8045,
        -77.2383,
        'National_Parks',
        'United_States',
        'Gettysburg_National_Military_Park'
    ],
    [
        'Glacier Bay National Park, National Parks',
        58.4473,
        -135.8387,
        'National_Parks',
        'United_States',
        'Glacier_Bay_National_Park'
    ],
    [
        'Glacier Bay National Preserve, National Parks',
        59.1302,
        -138.3733,
        'National_Parks',
        'United_States',
        'Glacier_Bay_National_Preserve'
    ],
    [
        'Glacier Bay Park and Water, National Parks',
        58.5282,
        -137.5035,
        'National_Parks',
        'United_States',
        'Glacier_Bay_Park_and_Water'
    ],
    [
        'Glacier Bay Park and Wilderness, National Parks',
        58.4107,
        -136.0911,
        'National_Parks',
        'United_States',
        'Glacier_Bay_Park_and_Wilderness'
    ],
    [
        'Glen Canyon National Recreation Area, National Parks',
        37.3976,
        -110.8036,
        'National_Parks',
        'United_States',
        'Glen_Canyon_National_Recreation_Area'
    ],
    [
        'Golden Gate National Recreation Area, National Parks',
        37.8626,
        -122.5515,
        'National_Parks',
        'United_States',
        'Golden_Gate_National_Recreation_Area'
    ],
    [
        'Golden Spike National Historic Site, National Parks',
        41.6307,
        -112.4949,
        'National_Parks',
        'United_States',
        'Golden_Spike_National_Historic_Site'
    ],
    [
        'Grand Canyon National Park, National Parks',
        36.1865,
        -112.1959,
        'National_Parks',
        'United_States',
        'Grand_Canyon_National_Park'
    ],
    [
        'Grant Circle, National Parks',
        41.2803776,
        -96.1565815,
        'National_Parks',
        'United_States',
        'Grant_Circle'
    ],
    [
        'Great Basin National Park, National Parks',
        38.9271,
        -114.2443,
        'National_Parks',
        'United_States',
        'Great_Basin_National_Park'
    ],
    [
        'Great Sand Dunes National Preserve, National Parks',
        37.864,
        -105.5434,
        'National_Parks',
        'United_States',
        'Great_Sand_Dunes_National_Preserve'
    ],
    [
        'Green Springs National Historic Landmark District, National Parks',
        38.0239,
        -78.1673,
        'National_Parks',
        'United_States',
        'Green_Springs_National_Historic_Landmark_District'
    ],
    [
        'Guilford Courthouse National Military Park, National Parks',
        36.133,
        -79.8415,
        'National_Parks',
        'United_States',
        'Guilford_Courthouse_National_Military_Park'
    ],
    [
        'Gulf Islands National Seashore, National Parks',
        30.2208,
        -88.5384,
        'National_Parks',
        'United_States',
        'Gulf_Islands_National_Seashore'
    ],
    [
        'Haleakala, National Parks',
        20.7203826,
        -156.1551524,
        'National_Parks',
        'United_States',
        'Haleakala'
    ],
    [
        'Hamilton Grange National Memorial, National Parks',
        40.8213,
        -73.9473,
        'National_Parks',
        'United_States',
        'Hamilton_Grange_National_Memorial'
    ],
    [
        'Harpers Ferry National Historical Park, National Parks',
        39.3129,
        -77.742,
        'National_Parks',
        'United_States',
        'Harpers_Ferry_National_Historical_Park'
    ],
    [
        'Harry S Truman National Historic Site, National Parks',
        38.9012,
        -94.5305,
        'National_Parks',
        'United_States',
        'Harry_S_Truman_National_Historic_Site'
    ],
    [
        'Hawaii Volcanoes National Park, National Parks',
        19.3261,
        -155.2118,
        'National_Parks',
        'United_States',
        'Hawaii_Volcanoes_National_Park'
    ],
    [
        'Homestead National Monument, National Parks',
        40.288,
        -96.8339,
        'National_Parks',
        'United_States',
        'Homestead_National_Monument'
    ],
    [
        'Home of Franklin D Roosevelt National Historic Site, National Parks',
        41.768,
        -73.9267,
        'National_Parks',
        'United_States',
        'Home_of_Franklin_D_Roosevelt_National_Historic_Site'
    ],
    [
        'Hopewell Culture National Historical Park, National Parks',
        39.3835,
        -82.9881,
        'National_Parks',
        'United_States',
        'Hopewell_Culture_National_Historical_Park'
    ],
    [
        'Hopewell Furnace National Historic Site, National Parks',
        40.2041,
        -75.7714,
        'National_Parks',
        'United_States',
        'Hopewell_Furnace_National_Historic_Site'
    ],
    [
        'Hot Springs National Park, National Parks',
        34.5111,
        -93.0897,
        'National_Parks',
        'United_States',
        'Hot_Springs_National_Park'
    ],
    [
        'Hovenweep National Monument, National Parks',
        37.3854,
        -109.073,
        'National_Parks',
        'United_States',
        'Hovenweep_National_Monument'
    ],
    [
        'Hubbell Trading Post National Historic Site, National Parks',
        35.7073,
        -109.56,
        'National_Parks',
        'United_States',
        'Hubbell_Trading_Post_National_Historic_Site'
    ],
    [
        'Ice Age National Scenic Trail, National Parks',
        43.0776,
        -89.6169,
        'National_Parks',
        'United_States',
        'Ice_Age_National_Scenic_Trail'
    ],
    [
        'Illinois and Michigan Canal National Heritage Corridor, National Parks',
        41.3286,
        -88.8224,
        'National_Parks',
        'United_States',
        'Illinois_and_Michigan_Canal_National_Heritage_Corridor'
    ],
    [
        'Indiana Dunes National Lakeshore, National Parks',
        41.6614,
        -87.0324,
        'National_Parks',
        'United_States',
        'Indiana_Dunes_National_Lakeshore'
    ],
    [
        'Isle Royale National Park, National Parks',
        47.9007,
        -89.1044,
        'National_Parks',
        'United_States',
        'Isle_Royale_National_Park'
    ],
    [
        'James A Garfield National Historic Site, National Parks',
        41.6649,
        -81.3508,
        'National_Parks',
        'United_States',
        'James_A_Garfield_National_Historic_Site'
    ],
    [
        'Jefferson National Expansion Memorial, National Parks',
        38.6225,
        -90.186,
        'National_Parks',
        'United_States',
        'Jefferson_National_Expansion_Memorial'
    ],
    [
        'Jewel Cave National Monument, National Parks',
        43.7308,
        -103.8305,
        'National_Parks',
        'United_States',
        'Jewel_Cave_National_Monument'
    ],
    [
        'Johnstown Flood National Memorial, National Parks',
        40.3449,
        -78.777,
        'National_Parks',
        'United_States',
        'Johnstown_Flood_National_Memorial'
    ],
    [
        'John Fitzgerald Kennedy National Historic Site, National Parks',
        42.3466,
        -71.123,
        'National_Parks',
        'United_States',
        'John_Fitzgerald_Kennedy_National_Historic_Site'
    ],
    [
        'Katmai National Park, National Parks',
        58.7035,
        -156.2294,
        'National_Parks',
        'United_States',
        'Katmai_National_Park'
    ],
    [
        'Katmai National Preserve, National Parks',
        59.1307,
        -155.2331,
        'National_Parks',
        'United_States',
        'Katmai_National_Preserve'
    ],
    [
        'Katmai Park and Wilderness, National Parks',
        58.5312,
        -154.9347,
        'National_Parks',
        'United_States',
        'Katmai_Park_and_Wilderness'
    ],
    [
        'Katmai Preserve and Wilderness, National Parks',
        58.9444,
        -155.9066,
        'National_Parks',
        'United_States',
        'Katmai_Preserve_and_Wilderness'
    ],
    [
        'Kennesaw Mountain National Battlefield Park, National Parks',
        33.9773,
        -84.5789,
        'National_Parks',
        'United_States',
        'Kennesaw_Mountain_National_Battlefield_Park'
    ],
    [
        'Klondike Gold Rush National Historical Park, National Parks',
        59.6754,
        -135.2568,
        'National_Parks',
        'United_States',
        'Klondike_Gold_Rush_National_Historical_Park'
    ],
    [
        'Knife River Indian Villages National Historic Site, National Parks',
        47.3685,
        -101.3923,
        'National_Parks',
        'United_States',
        'Knife_River_Indian_Villages_National_Historic_Site'
    ],
    [
        'Kobuk Valley National Park, National Parks',
        67.4157,
        -159.6797,
        'National_Parks',
        'United_States',
        'Kobuk_Valley_National_Park'
    ],
    [
        'Kobuk Valley Park and Wilderness, National Parks',
        67.0298,
        -159.0365,
        'National_Parks',
        'United_States',
        'Kobuk_Valley_Park_and_Wilderness'
    ],
    [
        'Lafayette Square, National Parks',
        39.8562235,
        -75.14506,
        'National_Parks',
        'United_States',
        'Lafayette_Square'
    ],
    [
        'Lake Chelan National Recreation Area, National Parks',
        48.3823,
        -120.7006,
        'National_Parks',
        'United_States',
        'Lake_Chelan_National_Recreation_Area'
    ],
    [
        'Lake Clark National Park, National Parks',
        60.0441,
        -152.7485,
        'National_Parks',
        'United_States',
        'Lake_Clark_National_Park'
    ],
    [
        'Lake Clark Park and Wilderness, National Parks',
        60.5132,
        -153.3746,
        'National_Parks',
        'United_States',
        'Lake_Clark_Park_and_Wilderness'
    ],
    [
        'Lake Clark Preserve and Wilderness, National Parks',
        61.0539,
        -153.6307,
        'National_Parks',
        'United_States',
        'Lake_Clark_Preserve_and_Wilderness'
    ],
    [
        'Lake Mead National Recreation Area, National Parks',
        36.009722,
        -114.796667,
        'National_Parks',
        'United_States',
        'Lake_Mead_National_Recreation_Area'
    ],
    [
        'Lake Roosevelt National Recreation Area, National Parks',
        47.909,
        -118.7214,
        'National_Parks',
        'United_States',
        'Lake_Roosevelt_National_Recreation_Area'
    ],
    [
        'Lewis and Clark National Historical Park, National Parks',
        46.2862,
        -124.0676,
        'National_Parks',
        'United_States',
        'Lewis_and_Clark_National_Historical_Park'
    ],
    [
        'Lewis and Clark National Historic Trail, National Parks',
        40.6632,
        -95.8338,
        'National_Parks',
        'United_States',
        'Lewis_and_Clark_National_Historic_Trail'
    ],
    [
        'Lincoln Home National Historic Site, National Parks',
        39.7972,
        -89.6451,
        'National_Parks',
        'United_States',
        'Lincoln_Home_National_Historic_Site'
    ],
    [
        'Little Bighorn Battlefield  National Monument, National Parks',
        45.570278,
        -107.4275,
        'National_Parks',
        'United_States',
        'Little_Bighorn_Battlefield__National_Monument'
    ],
    [
        'Longfellow National Historic Site, National Parks',
        42.377,
        -71.1259,
        'National_Parks',
        'United_States',
        'Longfellow_National_Historic_Site'
    ],
    [
        'Lyndon B Johnson National Historic Park, National Parks',
        30.2512,
        -98.622,
        'National_Parks',
        'United_States',
        'Lyndon_B_Johnson_National_Historic_Park'
    ],
    [
        'Manzanar National Historic Site, National Parks',
        36.7256,
        -118.1547,
        'National_Parks',
        'United_States',
        'Manzanar_National_Historic_Site'
    ],
    [
        'Martin Van Buren National Historic Site, National Parks',
        42.37,
        -73.7052,
        'National_Parks',
        'United_States',
        'Martin_Van_Buren_National_Historic_Site'
    ],
    [
        'Minidoka Internment National Monument, National Parks',
        42.6783,
        -114.2495,
        'National_Parks',
        'United_States',
        'Minidoka_Internment_National_Monument'
    ],
    [
        'Minuteman Missile National Historic Site, National Parks',
        43.8776,
        -101.9611,
        'National_Parks',
        'United_States',
        'Minuteman_Missile_National_Historic_Site'
    ],
    [
        'Minute Man National Historical Park, National Parks',
        42.4534,
        -71.296,
        'National_Parks',
        'United_States',
        'Minute_Man_National_Historical_Park'
    ],
    [
        'Mississippi National River and Recreation Area, National Parks',
        44.7722,
        -92.9301,
        'National_Parks',
        'United_States',
        'Mississippi_National_River_and_Recreation_Area'
    ],
    [
        'Missouri National Recreation River, National Parks',
        42.8567,
        -97.266,
        'National_Parks',
        'United_States',
        'Missouri_National_Recreation_River'
    ],
    [
        'Monocacy National Battlefield, National Parks',
        39.3577,
        -77.4025,
        'National_Parks',
        'United_States',
        'Monocacy_National_Battlefield'
    ],
    [
        'Montezuma Castle National Monument, National Parks',
        34.6124,
        -111.8421,
        'National_Parks',
        'United_States',
        'Montezuma_Castle_National_Monument'
    ],
    [
        'Moores Creek National Battlefield, National Parks',
        34.4582,
        -78.1103,
        'National_Parks',
        'United_States',
        'Moores_Creek_National_Battlefield'
    ],
    [
        'Morristown National Historical Park, National Parks',
        40.7681,
        -74.5318,
        'National_Parks',
        'United_States',
        'Morristown_National_Historical_Park'
    ],
    [
        'Mount Rushmore National Memorial, National Parks',
        43.8803,
        -103.459,
        'National_Parks',
        'United_States',
        'Mount_Rushmore_National_Memorial'
    ],
    [
        'Natchez Trace Parkway and National Scenic Trail, National Parks',
        32.2557,
        -90.5122,
        'National_Parks',
        'United_States',
        'Natchez_Trace_Parkway_and_National_Scenic_Trail'
    ],
    [
        'National Mall, National Parks',
        46.7582961,
        -122.0504571,
        'National_Parks',
        'United_States',
        'National_Mall'
    ],
    [
        'Natural Bridges National Monument, National Parks',
        37.5989,
        -110.0072,
        'National_Parks',
        'United_States',
        'Natural_Bridges_National_Monument'
    ],
    [
        'Navajo National Monument, National Parks',
        36.6855,
        -110.5363,
        'National_Parks',
        'United_States',
        'Navajo_National_Monument'
    ],
    [
        'New River Gorge National River, National Parks',
        37.767,
        -80.9228,
        'National_Parks',
        'United_States',
        'New_River_Gorge_National_River'
    ],
    [
        'Nez Perce National Historical Park, National Parks',
        45.7943,
        -116.278,
        'National_Parks',
        'United_States',
        'Nez_Perce_National_Historical_Park'
    ],
    [
        'Nicodemus National Historic Site, National Parks',
        39.3903,
        -99.6179,
        'National_Parks',
        'United_States',
        'Nicodemus_National_Historic_Site'
    ],
    [
        'Niobrara National Scenic River, National Parks',
        42.7259,
        -99.6319,
        'National_Parks',
        'United_States',
        'Niobrara_National_Scenic_River'
    ],
    [
        'Noatak National Preserve, National Parks',
        67.6391,
        -161.6522,
        'National_Parks',
        'United_States',
        'Noatak_National_Preserve'
    ],
    [
        'Noatak Preserve and Wilderness, National Parks',
        68.0913,
        -161.0734,
        'National_Parks',
        'United_States',
        'Noatak_Preserve_and_Wilderness'
    ],
    [
        'Obed Wild and Scenic River, National Parks',
        36.1061518,
        -84.5984422,
        'National_Parks',
        'United_States',
        'Obed_Wild_and_Scenic_River'
    ],
    [
        'Olympic National Park, National Parks',
        47.7802,
        -123.4106,
        'National_Parks',
        'United_States',
        'Olympic_National_Park'
    ],
    [
        'Ozark National Scenic Riverway, National Parks',
        37.1472,
        -91.196,
        'National_Parks',
        'United_States',
        'Ozark_National_Scenic_Riverway'
    ],
    [
        'Padre Island National Seashore, National Parks',
        26.7037,
        -97.3407,
        'National_Parks',
        'United_States',
        'Padre_Island_National_Seashore'
    ],
    [
        'Pennsylvania Avenue NHS, National Parks',
        40.4597938,
        -78.5916836,
        'National_Parks',
        'United_States',
        'Pennsylvania_Avenue_NHS'
    ],
    [
        'Petersburg National Battlefield, National Parks',
        37.1399,
        -77.6274,
        'National_Parks',
        'United_States',
        'Petersburg_National_Battlefield'
    ],
    [
        'Petrified Forest National Park, National Parks',
        34.8806,
        -109.8707,
        'National_Parks',
        'United_States',
        'Petrified_Forest_National_Park'
    ],
    [
        'Petroglyph National Monument, National Parks',
        35.137,
        -106.75,
        'National_Parks',
        'United_States',
        'Petroglyph_National_Monument'
    ],
    [
        'Pinehurst Parkway, National Parks',
        34.4301783,
        -92.9629985,
        'National_Parks',
        'United_States',
        'Pinehurst_Parkway'
    ],
    [
        'Pinnacles National Monument, National Parks',
        36.4901,
        -121.1808,
        'National_Parks',
        'United_States',
        'Pinnacles_National_Monument'
    ],
    [
        'Pipe Spring National Monument, National Parks',
        36.8628,
        -112.7399,
        'National_Parks',
        'United_States',
        'Pipe_Spring_National_Monument'
    ],
    [
        'Rainbow Bridge National Monument, National Parks',
        37.078,
        -110.9663,
        'National_Parks',
        'United_States',
        'Rainbow_Bridge_National_Monument'
    ],
    [
        'Randle Circle, National Parks',
        34.4232328,
        -93.142626,
        'National_Parks',
        'United_States',
        'Randle_Circle'
    ],
    [
        'Richmond National Battlefield Park, National Parks',
        37.4179,
        -77.2514,
        'National_Parks',
        'United_States',
        'Richmond_National_Battlefield_Park'
    ],
    [
        'Ronald Reagan Boyhood Home National Historic Site, National Parks',
        41.8362,
        -89.4799,
        'National_Parks',
        'United_States',
        'Ronald_Reagan_Boyhood_Home_National_Historic_Site'
    ],
    [
        'Ross Lake National Recreation Area, National Parks',
        48.6522,
        -121.2843,
        'National_Parks',
        'United_States',
        'Ross_Lake_National_Recreation_Area'
    ],
    [
        'Sagamore Hill National Historic Site, National Parks',
        40.8856,
        -73.4962,
        'National_Parks',
        'United_States',
        'Sagamore_Hill_National_Historic_Site'
    ],
    [
        'Saguaro National Park, National Parks',
        32.1786,
        -110.6788,
        'National_Parks',
        'United_States',
        'Saguaro_National_Park'
    ],
    [
        'Saint Croix National Scenic River, National Parks',
        45.9802,
        -91.5787,
        'National_Parks',
        'United_States',
        'Saint_Croix_National_Scenic_River'
    ],
    [
        'Saint Gaudens National Historic Site, National Parks',
        43.5005,
        -72.374,
        'National_Parks',
        'United_States',
        'Saint_Gaudens_National_Historic_Site'
    ],
    [
        'Saint Pauls Church National Historic Site, National Parks',
        40.8927,
        -73.8262,
        'National_Parks',
        'United_States',
        'Saint_Pauls_Church_National_Historic_Site'
    ],
    [
        'Sand Creek Massacre National Historic Site, National Parks',
        38.5559,
        -102.496,
        'National_Parks',
        'United_States',
        'Sand_Creek_Massacre_National_Historic_Site'
    ],
    [
        'Santa Monica Mountains National Recreation Area, National Parks',
        34.0803,
        -118.7203,
        'National_Parks',
        'United_States',
        'Santa_Monica_Mountains_National_Recreation_Area'
    ],
    [
        'San Antonio Missions National Historic Park, National Parks',
        29.3323,
        -98.4542,
        'National_Parks',
        'United_States',
        'San_Antonio_Missions_National_Historic_Park'
    ],
    [
        'Saratoga National Historical Park, National Parks',
        43.0019,
        -73.614,
        'National_Parks',
        'United_States',
        'Saratoga_National_Historical_Park'
    ],
    [
        'Saugus Iron Works National Historic Site, National Parks',
        42.4685,
        -71.0072,
        'National_Parks',
        'United_States',
        'Saugus_Iron_Works_National_Historic_Site'
    ],
    [
        'Scotts Bluff National Monument, National Parks',
        41.835,
        -103.7071,
        'National_Parks',
        'United_States',
        'Scotts_Bluff_National_Monument'
    ],
    [
        'Scott Circle, National Parks',
        43.019054,
        -87.9502733,
        'National_Parks',
        'United_States',
        'Scott_Circle'
    ],
    [
        'Sherman Circle, National Parks',
        43.0587276,
        -87.9676551,
        'National_Parks',
        'United_States',
        'Sherman_Circle'
    ],
    [
        'Shiloh National Battlefield, National Parks',
        35.1431,
        -88.3395,
        'National_Parks',
        'United_States',
        'Shiloh_National_Battlefield'
    ],
    [
        'Steamtown National Historic Site, National Parks',
        41.4091,
        -75.6726,
        'National_Parks',
        'United_States',
        'Steamtown_National_Historic_Site'
    ],
    [
        'Sunset Crater Volcano National Monument, National Parks',
        35.3711,
        -111.5104,
        'National_Parks',
        'United_States',
        'Sunset_Crater_Volcano_National_Monument'
    ],
    [
        'Tallgrass Prairie National Preserve, National Parks',
        38.4514,
        -96.5739,
        'National_Parks',
        'United_States',
        'Tallgrass_Prairie_National_Preserve'
    ],
    [
        'Theodore Roosevelt Birthplace National Historic Site, National Parks',
        40.7385,
        -73.9888,
        'National_Parks',
        'United_States',
        'Theodore_Roosevelt_Birthplace_National_Historic_Site'
    ],
    [
        'Thomas Circle, National Parks',
        34.4402412,
        -92.9501401,
        'National_Parks',
        'United_States',
        'Thomas_Circle'
    ],
    [
        'Timpanogos Cave National Monument, National Parks',
        40.4404,
        -111.7094,
        'National_Parks',
        'United_States',
        'Timpanogos_Cave_National_Monument'
    ],
    [
        'Tonto National Monument, National Parks',
        33.6521,
        -111.107,
        'National_Parks',
        'United_States',
        'Tonto_National_Monument'
    ],
    [
        'Tuskegee Airmen National Historic Site, National Parks',
        32.4555,
        -85.6801,
        'National_Parks',
        'United_States',
        'Tuskegee_Airmen_National_Historic_Site'
    ],
    [
        'Tuzigoot National Monument, National Parks',
        34.772,
        -112.032,
        'National_Parks',
        'United_States',
        'Tuzigoot_National_Monument'
    ],
    [
        'Twining Park, National Parks',
        35.1233068,
        -77.0508694,
        'National_Parks',
        'United_States',
        'Twining_Park'
    ],
    [
        'Ulysses S Grant National Historic Site, National Parks',
        38.5518,
        -90.3517,
        'National_Parks',
        'United_States',
        'Ulysses_S_Grant_National_Historic_Site'
    ],
    [
        'Upper Delaware Scenic and Recreational River, National Parks',
        41.441,
        -74.8687,
        'National_Parks',
        'United_States',
        'Upper_Delaware_Scenic_and_Recreational_River'
    ],
    [
        'Vanderbilt Mansion National Historic Site, National Parks',
        41.7944,
        -73.9419,
        'National_Parks',
        'United_States',
        'Vanderbilt_Mansion_National_Historic_Site'
    ],
    [
        'Voyageurs National Park, National Parks',
        48.4834,
        -92.837,
        'National_Parks',
        'United_States',
        'Voyageurs_National_Park'
    ],
    [
        'Walnut Canyon National Monument, National Parks',
        35.1612,
        -111.495,
        'National_Parks',
        'United_States',
        'Walnut_Canyon_National_Monument'
    ],
    [
        'Washington Monument, National Parks',
        38.889469,
        -77.035258,
        'National_Parks',
        'United_States',
        'Washington_Monument'
    ],
    [
        'Weir Farm National Historic Site, National Parks',
        41.2574,
        -73.4558,
        'National_Parks',
        'United_States',
        'Weir_Farm_National_Historic_Site'
    ],
    [
        'White Sands National Monument, National Parks',
        32.7751,
        -106.3162,
        'National_Parks',
        'United_States',
        'White_Sands_National_Monument'
    ],
    [
        'Wind Cave National Park, National Parks',
        43.5972,
        -103.3828,
        'National_Parks',
        'United_States',
        'Wind_Cave_National_Park'
    ],
    [
        'Wrangell St Elias National Park, National Parks',
        62.4422,
        -143.4985,
        'National_Parks',
        'United_States',
        'Wrangell_St_Elias_National_Park'
    ],
    [
        'Wrangell St Elias National Preserve, National Parks',
        62.2723,
        -141.9873,
        'National_Parks',
        'United_States',
        'Wrangell_St_Elias_National_Preserve'
    ],
    [
        'Wrangell St Elias Park and Wilderness, National Parks',
        60.9892,
        -143.4434,
        'National_Parks',
        'United_States',
        'Wrangell_St_Elias_Park_and_Wilderness'
    ],
    [
        'Wrangell St Elias Preserve and Wilderness, National Parks',
        61.9284,
        -141.9244,
        'National_Parks',
        'United_States',
        'Wrangell_St_Elias_Preserve_and_Wilderness'
    ],
    [
        'Wupatki National Monument, National Parks',
        35.5467,
        -111.3371,
        'National_Parks',
        'United_States',
        'Wupatki_National_Monument'
    ],
    [
        'Yellowstone National Park, National Parks',
        44.4279684,
        -110.5884542,
        'National_Parks',
        'United_States',
        'Yellowstone_National_Park'
    ],
    [
        'Yucca House National Monument, National Parks',
        37.249,
        -108.686,
        'National_Parks',
        'United_States',
        'Yucca_House_National_Monument'
    ],
    [
        'Zion National Park, National Parks',
        37.2983,
        -113.0264,
        'National_Parks',
        'United_States',
        'Zion_National_Park'
    ],
    [
        'Agate Fossil Beds National Monument, Nebraska',
        42.4252103,
        -103.7342402,
        'Nebraska',
        'United_States',
        'Agate_Fossil_Beds_National_Monument'
    ],
    [
        'Arlington, Nebraska',
        41.4550118,
        -96.3578639,
        'Nebraska',
        'United_States',
        'Arlington'
    ],
    [
        'Beaver Crossing, Nebraska',
        40.7786191,
        -97.2822684,
        'Nebraska',
        'United_States',
        'Beaver_Crossing'
    ],
    [
        'Broken Bow, Nebraska',
        41.401787,
        -99.6412243,
        'Nebraska',
        'United_States',
        'Broken_Bow'
    ],
    [
        'Chimney Rock National Historical Park, Nebraska',
        41.4925374,
        -99.9018131,
        'Nebraska',
        'United_States',
        'Chimney_Rock_National_Historical_Park'
    ],
    [
        'Columbus, Nebraska',
        41.4302973,
        -97.3593904,
        'Nebraska',
        'United_States',
        'Columbus'
    ],
    [
        'Fremont, Nebraska',
        41.4333909,
        -96.4981467,
        'Nebraska',
        'United_States',
        'Fremont'
    ],
    [
        'Grand Island, Nebraska',
        40.9263957,
        -98.3420118,
        'Nebraska',
        'United_States',
        'Grand_Island'
    ],
    [
        'Hastings, Nebraska',
        40.5862583,
        -98.3898726,
        'Nebraska',
        'United_States',
        'Hastings'
    ],
    [
        'Homestead National Monument, Nebraska',
        40.2874177,
        -96.8336414,
        'Nebraska',
        'United_States',
        'Homestead_National_Monument'
    ],
    [
        'Imperial, Nebraska',
        40.5169402,
        -101.6432253,
        'Nebraska',
        'United_States',
        'Imperial'
    ],
    [
        'Jansen, Nebraska',
        40.1853674,
        -97.0835134,
        'Nebraska',
        'United_States',
        'Jansen'
    ],
    [
        'Kearney, Nebraska',
        40.6993303,
        -99.0816784,
        'Nebraska',
        'United_States',
        'Kearney'
    ],
    [
        'Lewis and Clark National Historic Trail, Nebraska',
        40.5710475,
        -97.991986,
        'Nebraska',
        'United_States',
        'Lewis_and_Clark_National_Historic_Trail'
    ],
    [
        'Lincoln, Nebraska',
        40.8257625,
        -96.6851982,
        'Nebraska',
        'United_States',
        'Lincoln'
    ],
    [
        'McCook, Nebraska',
        40.1966701,
        -100.6248741,
        'Nebraska',
        'United_States',
        'McCook'
    ],
    [
        'Niobrara National Scenic River, Nebraska',
        42.7868014,
        -100.0415603,
        'Nebraska',
        'United_States',
        'Niobrara_National_Scenic_River'
    ],
    [
        'Norfolk, Nebraska',
        42.0327234,
        -97.4137553,
        'Nebraska',
        'United_States',
        'Norfolk'
    ],
    [
        'North Platte, Nebraska',
        41.1402759,
        -100.7601454,
        'Nebraska',
        'United_States',
        'North_Platte'
    ],
    [
        'Ogallala, Nebraska',
        41.1282178,
        -101.7203993,
        'Nebraska',
        'United_States',
        'Ogallala'
    ],
    [
        'Omaha, Nebraska',
        41.2523634,
        -95.9979883,
        'Nebraska',
        'United_States',
        'Omaha'
    ],
    [
        'Plattsmouth, Nebraska',
        41.0111103,
        -95.8808424,
        'Nebraska',
        'United_States',
        'Plattsmouth'
    ],
    [
        'Scottsbluff, Nebraska',
        41.8666341,
        -103.6671662,
        'Nebraska',
        'United_States',
        'Scottsbluff'
    ],
    [
        'Scotts Bluff National Monument, Nebraska',
        41.8359046,
        -103.7081075,
        'Nebraska',
        'United_States',
        'Scotts_Bluff_National_Monument'
    ],
    [
        'York, Nebraska',
        40.8673915,
        -97.5920867,
        'Nebraska',
        'United_States',
        'York'
    ],
    [
        'Carson City, Nevada',
        39.1637984,
        -119.7674034,
        'Nevada',
        'United_States',
        'Carson_City'
    ],
    [
        'Elko, Nevada',
        40.8324211,
        -115.7631232,
        'Nevada',
        'United_States',
        'Elko'
    ],
    ['Ely, Nevada', 39.2474393, -114.8886296, 'Nevada', 'United_States', 'Ely'],
    [
        'Fallon, Nevada',
        39.4748693,
        -118.7770407,
        'Nevada',
        'United_States',
        'Fallon'
    ],
    [
        'Great Basin National Park, Nevada',
        38.983333,
        -114.3,
        'Nevada',
        'United_States',
        'Great_Basin_National_Park'
    ],
    [
        'Las Vegas, Nevada',
        36.1699412,
        -115.1398296,
        'Nevada',
        'United_States',
        'Las_Vegas'
    ],
    [
        'Mesquite, Nevada',
        36.805531,
        -114.06719,
        'Nevada',
        'United_States',
        'Mesquite'
    ],
    [
        'Reno, Nevada',
        39.5296329,
        -119.8138027,
        'Nevada',
        'United_States',
        'Reno'
    ],
    [
        'Silver Springs, Nevada',
        39.4154714,
        -119.2246073,
        'Nevada',
        'United_States',
        'Silver_Springs'
    ],
    [
        'Tonopah, Nevada',
        38.069211,
        -117.2305861,
        'Nevada',
        'United_States',
        'Tonopah'
    ],
    [
        'Winnemucca, Nevada',
        40.9729584,
        -117.7356849,
        'Nevada',
        'United_States',
        'Winnemucca'
    ],
    [
        'Berlin, New Hampshire',
        44.4686696,
        -71.1850768,
        'New_Hampshire',
        'United_States',
        'Berlin'
    ],
    [
        'Bethlehem, New Hampshire',
        44.2803843,
        -71.6875364,
        'New_Hampshire',
        'United_States',
        'Bethlehem'
    ],
    [
        'Claremont, New Hampshire',
        43.3728635,
        -72.3378744,
        'New_Hampshire',
        'United_States',
        'Claremont'
    ],
    [
        'Concord, New Hampshire',
        43.2081366,
        -71.5375718,
        'New_Hampshire',
        'United_States',
        'Concord'
    ],
    [
        'Derry, New Hampshire',
        42.8806437,
        -71.3273346,
        'New_Hampshire',
        'United_States',
        'Derry'
    ],
    [
        'Durham, New Hampshire',
        43.1339545,
        -70.9264393,
        'New_Hampshire',
        'United_States',
        'Durham'
    ],
    [
        'Hanover-Lebanon, New Hampshire',
        43.6934369,
        -72.2779245,
        'New_Hampshire',
        'United_States',
        'Hanover-Lebanon'
    ],
    [
        'Keene, New Hampshire',
        42.933692,
        -72.2781409,
        'New_Hampshire',
        'United_States',
        'Keene'
    ],
    [
        'Lebanon, New Hampshire',
        43.6422934,
        -72.2517569,
        'New_Hampshire',
        'United_States',
        'Lebanon'
    ],
    [
        'Littleton, New Hampshire',
        44.3061628,
        -71.7701237,
        'New_Hampshire',
        'United_States',
        'Littleton'
    ],
    [
        'Londonderry, New Hampshire',
        42.8651298,
        -71.3739272,
        'New_Hampshire',
        'United_States',
        'Londonderry'
    ],
    [
        'Manchester, New Hampshire',
        42.9956397,
        -71.4547891,
        'New_Hampshire',
        'United_States',
        'Manchester'
    ],
    [
        'Meredith, New Hampshire',
        43.6575331,
        -71.500317,
        'New_Hampshire',
        'United_States',
        'Meredith'
    ],
    [
        'Nashua, New Hampshire',
        42.7653662,
        -71.467566,
        'New_Hampshire',
        'United_States',
        'Nashua'
    ],
    [
        'Ossipee, New Hampshire',
        43.6853516,
        -71.1166556,
        'New_Hampshire',
        'United_States',
        'Ossipee'
    ],
    [
        'Plymouth, New Hampshire',
        43.7570196,
        -71.6881528,
        'New_Hampshire',
        'United_States',
        'Plymouth'
    ],
    [
        'Portsmouth, New Hampshire',
        43.0717552,
        -70.7625532,
        'New_Hampshire',
        'United_States',
        'Portsmouth'
    ],
    [
        'Raymond, New Hampshire',
        43.0362094,
        -71.1833857,
        'New_Hampshire',
        'United_States',
        'Raymond'
    ],
    [
        'Rindge, New Hampshire',
        42.7511964,
        -72.0098021,
        'New_Hampshire',
        'United_States',
        'Rindge'
    ],
    [
        'Rochester, New Hampshire',
        43.304526,
        -70.9756186,
        'New_Hampshire',
        'United_States',
        'Rochester'
    ],
    [
        'Saint Gaudens National Historic Site, New Hampshire',
        43.5006126,
        -72.3740287,
        'New_Hampshire',
        'United_States',
        'Saint_Gaudens_National_Historic_Site'
    ],
    [
        'Salem, New Hampshire',
        42.7885553,
        -71.2008912,
        'New_Hampshire',
        'United_States',
        'Salem'
    ],
    [
        'Somersworth, New Hampshire',
        43.2617503,
        -70.8653372,
        'New_Hampshire',
        'United_States',
        'Somersworth'
    ],
    [
        'Warren, New Hampshire',
        43.9231239,
        -71.8920283,
        'New_Hampshire',
        'United_States',
        'Warren'
    ],
    [
        'Wonalancet, New Hampshire',
        43.9072939,
        -71.3506284,
        'New_Hampshire',
        'United_States',
        'Wonalancet'
    ],
    [
        'Atlantic City, New Jersey',
        39.3642834,
        -74.4229266,
        'New_Jersey',
        'United_States',
        'Atlantic_City'
    ],
    [
        'Barnegat, New Jersey',
        39.7649223,
        -74.2693297,
        'New_Jersey',
        'United_States',
        'Barnegat'
    ],
    [
        'Belle Mead, New Jersey',
        40.4675835,
        -74.6628114,
        'New_Jersey',
        'United_States',
        'Belle_Mead'
    ],
    [
        'Blairstown, New Jersey',
        40.9831018,
        -74.9589405,
        'New_Jersey',
        'United_States',
        'Blairstown'
    ],
    [
        'Bordentown, New Jersey',
        40.1480827,
        -74.6945737,
        'New_Jersey',
        'United_States',
        'Bordentown'
    ],
    [
        'Bound Brook, New Jersey',
        40.5684363,
        -74.5384889,
        'New_Jersey',
        'United_States',
        'Bound_Brook'
    ],
    [
        'Brick, New Jersey',
        40.0578384,
        -74.1371832,
        'New_Jersey',
        'United_States',
        'Brick'
    ],
    [
        'Bridgeton, New Jersey',
        39.427337,
        -75.2340768,
        'New_Jersey',
        'United_States',
        'Bridgeton'
    ],
    [
        'Brown Mills, New Jersey',
        39.9726147,
        -74.5829331,
        'New_Jersey',
        'United_States',
        'Brown_Mills'
    ],
    [
        'Delaware Water Gap National Recreation Area, New Jersey',
        40.8929459,
        -75.0661347,
        'New_Jersey',
        'United_States',
        'Delaware_Water_Gap_National_Recreation_Area'
    ],
    [
        'Delran, New Jersey',
        40.0158918,
        -74.9564247,
        'New_Jersey',
        'United_States',
        'Delran'
    ],
    [
        'East Brunswick, New Jersey',
        40.4316955,
        -74.4049778,
        'New_Jersey',
        'United_States',
        'East_Brunswick'
    ],
    [
        'Edison National Historic Site, New Jersey',
        40.78652,
        -74.240552,
        'New_Jersey',
        'United_States',
        'Edison_National_Historic_Site'
    ],
    [
        'Elizabeth, New Jersey',
        40.6639916,
        -74.2107006,
        'New_Jersey',
        'United_States',
        'Elizabeth'
    ],
    [
        'Englishtown, New Jersey',
        40.2973319,
        -74.3582041,
        'New_Jersey',
        'United_States',
        'Englishtown'
    ],
    [
        'Farmingdale, New Jersey',
        40.1965018,
        -74.1684757,
        'New_Jersey',
        'United_States',
        'Farmingdale'
    ],
    [
        'Flemington, New Jersey',
        40.5123258,
        -74.8593318,
        'New_Jersey',
        'United_States',
        'Flemington'
    ],
    [
        'Forked River, New Jersey',
        39.825278,
        -74.160556,
        'New_Jersey',
        'United_States',
        'Forked_River'
    ],
    [
        'Freehold, New Jersey',
        40.2136754,
        -74.3000878,
        'New_Jersey',
        'United_States',
        'Freehold'
    ],
    [
        'Green Creek, New Jersey',
        39.0462242,
        -74.9012826,
        'New_Jersey',
        'United_States',
        'Green_Creek'
    ],
    [
        'Hackensack, New Jersey',
        40.8859325,
        -74.0434736,
        'New_Jersey',
        'United_States',
        'Hackensack'
    ],
    [
        'Hackettstown, New Jersey',
        40.8539879,
        -74.8290555,
        'New_Jersey',
        'United_States',
        'Hackettstown'
    ],
    [
        'Hasbrouck Heights, New Jersey',
        40.8581553,
        -74.0806971,
        'New_Jersey',
        'United_States',
        'Hasbrouck_Heights'
    ],
    [
        'Hawthorne, New Jersey',
        40.9492649,
        -74.1537549,
        'New_Jersey',
        'United_States',
        'Hawthorne'
    ],
    [
        'Jefferson Township, New Jersey',
        41.0029893,
        -74.5580454,
        'New_Jersey',
        'United_States',
        'Jefferson_Township'
    ],
    [
        'Jersey City, New Jersey',
        40.7281575,
        -74.0776417,
        'New_Jersey',
        'United_States',
        'Jersey_City'
    ],
    [
        'Lakewood, New Jersey',
        40.082129,
        -74.2097014,
        'New_Jersey',
        'United_States',
        'Lakewood'
    ],
    [
        'Linwood, New Jersey',
        39.3398382,
        -74.5751557,
        'New_Jersey',
        'United_States',
        'Linwood'
    ],
    [
        'Livingston, New Jersey',
        40.7862871,
        -74.3300842,
        'New_Jersey',
        'United_States',
        'Livingston'
    ],
    [
        'Long Branch, New Jersey',
        40.3042778,
        -73.9923596,
        'New_Jersey',
        'United_States',
        'Long_Branch'
    ],
    [
        'Marlton, New Jersey',
        39.8912248,
        -74.9218324,
        'New_Jersey',
        'United_States',
        'Marlton'
    ],
    [
        'Mays Landing, New Jersey',
        39.4523385,
        -74.7276626,
        'New_Jersey',
        'United_States',
        'Mays_Landing'
    ],
    [
        'Medford, New Jersey',
        39.8661826,
        -74.8390162,
        'New_Jersey',
        'United_States',
        'Medford'
    ],
    [
        'Middletown, New Jersey',
        40.3968012,
        -74.0915982,
        'New_Jersey',
        'United_States',
        'Middletown'
    ],
    [
        'Midland Park, New Jersey',
        40.9892643,
        -74.1406988,
        'New_Jersey',
        'United_States',
        'Midland_Park'
    ],
    [
        'Monmouth Junction, New Jersey',
        40.3789957,
        -74.5465436,
        'New_Jersey',
        'United_States',
        'Monmouth_Junction'
    ],
    [
        'Montclair, New Jersey',
        40.8259007,
        -74.2090053,
        'New_Jersey',
        'United_States',
        'Montclair'
    ],
    [
        'Moorestown, New Jersey',
        39.9688817,
        -74.948886,
        'New_Jersey',
        'United_States',
        'Moorestown'
    ],
    [
        'Morristown, New Jersey',
        40.7967667,
        -74.4815438,
        'New_Jersey',
        'United_States',
        'Morristown'
    ],
    [
        'Morristown National Historical Park, New Jersey',
        40.7648452,
        -74.5316807,
        'New_Jersey',
        'United_States',
        'Morristown_National_Historical_Park'
    ],
    [
        'Mountainside, New Jersey',
        40.6723242,
        -74.3573722,
        'New_Jersey',
        'United_States',
        'Mountainside'
    ],
    [
        'Mount Holly, New Jersey',
        39.9931438,
        -74.7879393,
        'New_Jersey',
        'United_States',
        'Mount_Holly'
    ],
    [
        'Newark, New Jersey',
        40.735657,
        -74.1723667,
        'New_Jersey',
        'United_States',
        'Newark'
    ],
    [
        'New Brunswick, New Jersey',
        40.4862157,
        -74.4518188,
        'New_Jersey',
        'United_States',
        'New_Brunswick'
    ],
    [
        'North Haledon, New Jersey',
        40.9550981,
        -74.1859781,
        'New_Jersey',
        'United_States',
        'North_Haledon'
    ],
    [
        'Oakland, New Jersey',
        41.0131529,
        -74.2643143,
        'New_Jersey',
        'United_States',
        'Oakland'
    ],
    [
        'Oak Ridge, New Jersey',
        41.0463617,
        -74.4856852,
        'New_Jersey',
        'United_States',
        'Oak_Ridge'
    ],
    [
        'Ocean City, New Jersey',
        39.2776156,
        -74.5746001,
        'New_Jersey',
        'United_States',
        'Ocean_City'
    ],
    [
        'Old Tappan, New Jersey',
        41.010653,
        -73.9912493,
        'New_Jersey',
        'United_States',
        'Old_Tappan'
    ],
    [
        'Paramus, New Jersey',
        40.9445428,
        -74.0754189,
        'New_Jersey',
        'United_States',
        'Paramus'
    ],
    [
        'Passaic, New Jersey',
        40.8567662,
        -74.1284764,
        'New_Jersey',
        'United_States',
        'Passaic'
    ],
    [
        'Paterson, New Jersey',
        40.9167654,
        -74.171811,
        'New_Jersey',
        'United_States',
        'Paterson'
    ],
    [
        'Piscataway, New Jersey',
        40.554887,
        -74.4642861,
        'New_Jersey',
        'United_States',
        'Piscataway'
    ],
    [
        'Princeton, New Jersey',
        40.3572976,
        -74.6672226,
        'New_Jersey',
        'United_States',
        'Princeton'
    ],
    [
        'Rahway, New Jersey',
        40.6081591,
        -74.2776468,
        'New_Jersey',
        'United_States',
        'Rahway'
    ],
    [
        'Red Bank, New Jersey',
        40.3470543,
        -74.0643065,
        'New_Jersey',
        'United_States',
        'Red_Bank'
    ],
    [
        'Ridgewood, New Jersey',
        40.9792645,
        -74.1165313,
        'New_Jersey',
        'United_States',
        'Ridgewood'
    ],
    [
        'Ringwood, New Jersey',
        41.1134289,
        -74.2454254,
        'New_Jersey',
        'United_States',
        'Ringwood'
    ],
    [
        'River Edge, New Jersey',
        40.9287098,
        -74.0398622,
        'New_Jersey',
        'United_States',
        'River_Edge'
    ],
    [
        'Rochelle Park, New Jersey',
        40.9073328,
        -74.0751273,
        'New_Jersey',
        'United_States',
        'Rochelle_Park'
    ],
    [
        'Rockaway, New Jersey',
        40.9012101,
        -74.5143232,
        'New_Jersey',
        'United_States',
        'Rockaway'
    ],
    [
        'South Amboy, New Jersey',
        40.4778838,
        -74.290702,
        'New_Jersey',
        'United_States',
        'South_Amboy'
    ],
    [
        'South Plainfield, New Jersey',
        40.5792701,
        -74.4115401,
        'New_Jersey',
        'United_States',
        'South_Plainfield'
    ],
    [
        'Stewartsville, New Jersey',
        40.6939887,
        -75.1110317,
        'New_Jersey',
        'United_States',
        'Stewartsville'
    ],
    [
        'Summit, New Jersey',
        40.7146376,
        -74.3646122,
        'New_Jersey',
        'United_States',
        'Summit'
    ],
    [
        'Toms River, New Jersey',
        39.9537358,
        -74.1979458,
        'New_Jersey',
        'United_States',
        'Toms_River'
    ],
    [
        'Trenton, New Jersey',
        40.2170534,
        -74.7429384,
        'New_Jersey',
        'United_States',
        'Trenton'
    ],
    [
        'Tuckerton, New Jersey',
        39.603174,
        -74.340145,
        'New_Jersey',
        'United_States',
        'Tuckerton'
    ],
    [
        'Vernon, New Jersey',
        41.1947018,
        -74.4937943,
        'New_Jersey',
        'United_States',
        'Vernon'
    ],
    [
        'Vineland, New Jersey',
        39.4863773,
        -75.0259637,
        'New_Jersey',
        'United_States',
        'Vineland'
    ],
    [
        'Waldwick, New Jersey',
        41.0106528,
        -74.1179203,
        'New_Jersey',
        'United_States',
        'Waldwick'
    ],
    [
        'Warren, New Jersey',
        40.6342489,
        -74.5004796,
        'New_Jersey',
        'United_States',
        'Warren'
    ],
    [
        'Washington, New Jersey',
        40.7584326,
        -74.9793378,
        'New_Jersey',
        'United_States',
        'Washington'
    ],
    [
        'Wayne, New Jersey',
        40.9253725,
        -74.2765441,
        'New_Jersey',
        'United_States',
        'Wayne'
    ],
    [
        'Weehawken, New Jersey',
        40.7663711,
        -74.0253715,
        'New_Jersey',
        'United_States',
        'Weehawken'
    ],
    [
        'Westfield, New Jersey',
        40.6589912,
        -74.3473717,
        'New_Jersey',
        'United_States',
        'Westfield'
    ],
    [
        'West Long Branch, New Jersey',
        40.2903891,
        -74.0176381,
        'New_Jersey',
        'United_States',
        'West_Long_Branch'
    ],
    [
        'West Milford, New Jersey',
        41.1311292,
        -74.3673254,
        'New_Jersey',
        'United_States',
        'West_Milford'
    ],
    [
        'Winslow, New Jersey',
        39.6573556,
        -74.8623203,
        'New_Jersey',
        'United_States',
        'Winslow'
    ],
    [
        'Woodbury, New Jersey',
        39.8381691,
        -75.1526774,
        'New_Jersey',
        'United_States',
        'Woodbury'
    ],
    [
        'Alamogordo, New Mexico',
        32.8995325,
        -105.960265,
        'New_Mexico',
        'United_States',
        'Alamogordo'
    ],
    [
        'Albuquerque, New Mexico',
        35.0853336,
        -106.6055534,
        'New_Mexico',
        'United_States',
        'Albuquerque'
    ],
    [
        'Artesia, New Mexico',
        32.8423345,
        -104.4032962,
        'New_Mexico',
        'United_States',
        'Artesia'
    ],
    [
        'Aztec Ruins National Monument, New Mexico',
        36.8372086,
        -108.000093,
        'New_Mexico',
        'United_States',
        'Aztec_Ruins_National_Monument'
    ],
    [
        'Bandelier National Monument, New Mexico',
        35.7682939,
        -106.3132559,
        'New_Mexico',
        'United_States',
        'Bandelier_National_Monument'
    ],
    [
        'Capulin Volcano National Monument, New Mexico',
        36.7810744,
        -103.9695127,
        'New_Mexico',
        'United_States',
        'Capulin_Volcano_National_Monument'
    ],
    [
        'Carlsbad, New Mexico',
        32.4206736,
        -104.2288375,
        'New_Mexico',
        'United_States',
        'Carlsbad'
    ],
    [
        'Carlsbad Caverns National Park, New Mexico',
        32.1478553,
        -104.5567138,
        'New_Mexico',
        'United_States',
        'Carlsbad_Caverns_National_Park'
    ],
    [
        'Chaco Culture National Historical Park, New Mexico',
        36.0529998,
        -107.955924,
        'New_Mexico',
        'United_States',
        'Chaco_Culture_National_Historical_Park'
    ],
    [
        'Cimarron, New Mexico',
        36.5108691,
        -104.9158341,
        'New_Mexico',
        'United_States',
        'Cimarron'
    ],
    [
        'Clovis, New Mexico',
        34.4047987,
        -103.2052272,
        'New_Mexico',
        'United_States',
        'Clovis'
    ],
    [
        'Dexter, New Mexico',
        33.197328,
        -104.3730202,
        'New_Mexico',
        'United_States',
        'Dexter'
    ],
    [
        'El Malpais National Monument, New Mexico',
        34.7607372,
        -107.9563238,
        'New_Mexico',
        'United_States',
        'El_Malpais_National_Monument'
    ],
    [
        'El Morro National Monument, New Mexico',
        35.0396358,
        -108.3450813,
        'New_Mexico',
        'United_States',
        'El_Morro_National_Monument'
    ],
    [
        'Farmington, New Mexico',
        36.7280583,
        -108.2186856,
        'New_Mexico',
        'United_States',
        'Farmington'
    ],
    [
        'Fort Union National Monument, New Mexico',
        35.9074,
        -105.012,
        'New_Mexico',
        'United_States',
        'Fort_Union_National_Monument'
    ],
    [
        'Gallup, New Mexico',
        35.5280783,
        -108.7425843,
        'New_Mexico',
        'United_States',
        'Gallup'
    ],
    [
        'Gila Cliff Dwellings National Monument, New Mexico',
        33.2272903,
        -108.2722727,
        'New_Mexico',
        'United_States',
        'Gila_Cliff_Dwellings_National_Monument'
    ],
    [
        'Grants, New Mexico',
        35.14726,
        -107.8514466,
        'New_Mexico',
        'United_States',
        'Grants'
    ],
    [
        'Las Cruces, New Mexico',
        32.3199396,
        -106.7636538,
        'New_Mexico',
        'United_States',
        'Las_Cruces'
    ],
    [
        'Las Vegas, New Mexico',
        35.5942137,
        -105.2227978,
        'New_Mexico',
        'United_States',
        'Las_Vegas'
    ],
    [
        'Los Alamos, New Mexico',
        35.8800364,
        -106.3031138,
        'New_Mexico',
        'United_States',
        'Los_Alamos'
    ],
    [
        'Moriarty, New Mexico',
        34.9900503,
        -106.0491893,
        'New_Mexico',
        'United_States',
        'Moriarty'
    ],
    [
        'Pecos National Historic Park, New Mexico',
        35.5502861,
        -105.6878211,
        'New_Mexico',
        'United_States',
        'Pecos_National_Historic_Park'
    ],
    [
        'Roswell, New Mexico',
        33.3942655,
        -104.5230242,
        'New_Mexico',
        'United_States',
        'Roswell'
    ],
    [
        'Ruidoso, New Mexico',
        33.3672525,
        -105.6588485,
        'New_Mexico',
        'United_States',
        'Ruidoso'
    ],
    [
        'Salinas Pueblo Missions National Monument, New Mexico',
        34.2600118,
        -106.0915239,
        'New_Mexico',
        'United_States',
        'Salinas_Pueblo_Missions_National_Monument'
    ],
    [
        'Santa Fe, New Mexico',
        35.6869752,
        -105.937799,
        'New_Mexico',
        'United_States',
        'Santa_Fe'
    ],
    [
        'Silver City, New Mexico',
        32.770075,
        -108.280326,
        'New_Mexico',
        'United_States',
        'Silver_City'
    ],
    [
        'Socorro, New Mexico',
        34.0583995,
        -106.8914159,
        'New_Mexico',
        'United_States',
        'Socorro'
    ],
    [
        'Spaceport America, New Mexico',
        32.3959248,
        -106.6838903,
        'New_Mexico',
        'United_States',
        'Spaceport_America'
    ],
    [
        'Thoreau, New Mexico',
        35.4025272,
        -108.2234015,
        'New_Mexico',
        'United_States',
        'Thoreau'
    ],
    [
        'Tucumcari, New Mexico',
        35.171723,
        -103.7249662,
        'New_Mexico',
        'United_States',
        'Tucumcari'
    ],
    [
        'White Sands, New Mexico',
        32.3823687,
        -106.4906526,
        'New_Mexico',
        'United_States',
        'White_Sands'
    ],
    [
        'White Sands National Monument, New Mexico',
        32.7872403,
        -106.3256816,
        'New_Mexico',
        'United_States',
        'White_Sands_National_Monument'
    ],
    [
        'White Sands Test facility, New Mexico',
        32.5057,
        -106.612,
        'New_Mexico',
        'United_States',
        'White_Sands_Test_facility'
    ],
    [
        'African Burial Ground National Monument, New York',
        40.714538,
        -74.0044649,
        'New_York',
        'United_States',
        'African_Burial_Ground_National_Monument'
    ],
    [
        'Albany, New York',
        42.6525793,
        -73.7562317,
        'New_York',
        'United_States',
        'Albany'
    ],
    [
        'Albion, New York',
        43.2464477,
        -78.1936319,
        'New_York',
        'United_States',
        'Albion'
    ],
    [
        'Angelica, New York',
        42.3067345,
        -78.0158388,
        'New_York',
        'United_States',
        'Angelica'
    ],
    [
        'Auburn, New York',
        42.9317335,
        -76.5660529,
        'New_York',
        'United_States',
        'Auburn'
    ],
    [
        'Ballston Spa, New York',
        43.0009086,
        -73.8490111,
        'New_York',
        'United_States',
        'Ballston_Spa'
    ],
    [
        'Batavia, New York',
        42.9981156,
        -78.1875167,
        'New_York',
        'United_States',
        'Batavia'
    ],
    [
        'Bath, New York',
        42.3370164,
        -77.3177577,
        'New_York',
        'United_States',
        'Bath'
    ],
    [
        'Belmont, New York',
        42.2231241,
        -78.0344506,
        'New_York',
        'United_States',
        'Belmont'
    ],
    [
        'Binghamton, New York',
        42.0986867,
        -75.9179738,
        'New_York',
        'United_States',
        'Binghamton'
    ],
    [
        'Bolivar, New York',
        42.0667332,
        -78.1677878,
        'New_York',
        'United_States',
        'Bolivar'
    ],
    [
        'Boston, New York',
        42.6289495,
        -78.7375289,
        'New_York',
        'United_States',
        'Boston'
    ],
    [
        'Brentwood, New York',
        40.7812093,
        -73.2462273,
        'New_York',
        'United_States',
        'Brentwood'
    ],
    [
        'Brewster, New York',
        41.3973163,
        -73.6170721,
        'New_York',
        'United_States',
        'Brewster'
    ],
    [
        'Buffalo, New York',
        42.8864468,
        -78.8783689,
        'New_York',
        'United_States',
        'Buffalo'
    ],
    [
        'Canandaigua, New York',
        42.887535,
        -77.2816984,
        'New_York',
        'United_States',
        'Canandaigua'
    ],
    [
        'Canton, New York',
        44.5956163,
        -75.1690942,
        'New_York',
        'United_States',
        'Canton'
    ],
    [
        'Carle Place, New York',
        40.7526008,
        -73.6104058,
        'New_York',
        'United_States',
        'Carle_Place'
    ],
    [
        'Carmel, New York',
        41.4300937,
        -73.6801297,
        'New_York',
        'United_States',
        'Carmel'
    ],
    [
        'Castle Clinton National Monument, New York',
        40.7034401,
        -74.0168023,
        'New_York',
        'United_States',
        'Castle_Clinton_National_Monument'
    ],
    [
        'Catskill, New York',
        42.2173102,
        -73.8645734,
        'New_York',
        'United_States',
        'Catskill'
    ],
    [
        'Centereach, New York',
        40.8584316,
        -73.0995539,
        'New_York',
        'United_States',
        'Centereach'
    ],
    [
        'Centerport, New York',
        40.8991963,
        -73.3678388,
        'New_York',
        'United_States',
        'Centerport'
    ],
    [
        'Center Moriches, New York',
        40.8003767,
        -72.7898233,
        'New_York',
        'United_States',
        'Center_Moriches'
    ],
    [
        'Cooperstown, New York',
        42.7006303,
        -74.924321,
        'New_York',
        'United_States',
        'Cooperstown'
    ],
    [
        'Corning, New York',
        42.1428521,
        -77.0546903,
        'New_York',
        'United_States',
        'Corning'
    ],
    [
        'Cortland, New York',
        42.6011813,
        -76.1804843,
        'New_York',
        'United_States',
        'Cortland'
    ],
    [
        'Delhi, New York',
        42.2781401,
        -74.9159946,
        'New_York',
        'United_States',
        'Delhi'
    ],
    [
        'Depew, New York',
        42.9039476,
        -78.6922515,
        'New_York',
        'United_States',
        'Depew'
    ],
    [
        'East Aurora, New York',
        42.7678376,
        -78.6133589,
        'New_York',
        'United_States',
        'East_Aurora'
    ],
    [
        'East Islip, New York',
        40.7320429,
        -73.1856703,
        'New_York',
        'United_States',
        'East_Islip'
    ],
    [
        'Eleanor Roosevelt National Historic Site, New York',
        41.7632514,
        -73.9064541,
        'New_York',
        'United_States',
        'Eleanor_Roosevelt_National_Historic_Site'
    ],
    [
        'Elizabethtown, New York',
        44.2163337,
        -73.5904478,
        'New_York',
        'United_States',
        'Elizabethtown'
    ],
    [
        'Elmira, New York',
        42.0897965,
        -76.8077338,
        'New_York',
        'United_States',
        'Elmira'
    ],
    [
        'Farmingdale, New York',
        40.7325997,
        -73.4454009,
        'New_York',
        'United_States',
        'Farmingdale'
    ],
    [
        'Federal Hall National Memorial, New York',
        40.7073993,
        -74.0102088,
        'New_York',
        'United_States',
        'Federal_Hall_National_Memorial'
    ],
    [
        'Fire Island National Seashore, New York',
        40.6553691,
        -73.1034307,
        'New_York',
        'United_States',
        'Fire_Island_National_Seashore'
    ],
    [
        'Flushing, New York',
        40.7674987,
        -73.833079,
        'New_York',
        'United_States',
        'Flushing'
    ],
    [
        'Fonda, New York',
        42.9545179,
        -74.3765241,
        'New_York',
        'United_States',
        'Fonda'
    ],
    [
        'Fort Edward, New York',
        43.2670175,
        -73.5845597,
        'New_York',
        'United_States',
        'Fort_Edward'
    ],
    [
        'Gateway National Recreation Area, New York',
        40.465103,
        -74.0057475,
        'New_York',
        'United_States',
        'Gateway_National_Recreation_Area'
    ],
    [
        'General Grant National Memorial, New York',
        40.8134045,
        -73.9630671,
        'New_York',
        'United_States',
        'General_Grant_National_Memorial'
    ],
    [
        'Geneseo, New York',
        42.795896,
        -77.816947,
        'New_York',
        'United_States',
        'Geneseo'
    ],
    [
        'Germantown, New York',
        42.1345339,
        -73.8917982,
        'New_York',
        'United_States',
        'Germantown'
    ],
    [
        'Glens Falls, New York',
        43.3095164,
        -73.6440058,
        'New_York',
        'United_States',
        'Glens_Falls'
    ],
    [
        'Gloversville, New York',
        43.0528506,
        -74.3437467,
        'New_York',
        'United_States',
        'Gloversville'
    ],
    [
        'Goshen, New York',
        41.4020382,
        -74.3243191,
        'New_York',
        'United_States',
        'Goshen'
    ],
    [
        'Governors Island National Monument, New York',
        40.6904492,
        -74.0163292,
        'New_York',
        'United_States',
        'Governors_Island_National_Monument'
    ],
    [
        'Great Neck, New York',
        40.8006567,
        -73.7284647,
        'New_York',
        'United_States',
        'Great_Neck'
    ],
    [
        'Hamburg, New York',
        42.7158927,
        -78.8294768,
        'New_York',
        'United_States',
        'Hamburg'
    ],
    [
        'Hamilton Grange National Memorial, New York',
        40.8213601,
        -73.94733,
        'New_York',
        'United_States',
        'Hamilton_Grange_National_Memorial'
    ],
    [
        'Hauppauge, New York',
        40.8256536,
        -73.2026138,
        'New_York',
        'United_States',
        'Hauppauge'
    ],
    [
        'Henrietta, New York',
        43.0592452,
        -77.6128039,
        'New_York',
        'United_States',
        'Henrietta'
    ],
    [
        'Herkimer, New York',
        43.0256259,
        -74.9859889,
        'New_York',
        'United_States',
        'Herkimer'
    ],
    [
        'Highland, New York',
        41.7209267,
        -73.9601382,
        'New_York',
        'United_States',
        'Highland'
    ],
    [
        'Highland Falls, New York',
        41.3692605,
        -73.9662504,
        'New_York',
        'United_States',
        'Highland_Falls'
    ],
    [
        'Home of Franklin D Roosevelt National Historic Site, New York',
        41.767208,
        -73.935556,
        'New_York',
        'United_States',
        'Home_of_Franklin_D_Roosevelt_National_Historic_Site'
    ],
    [
        'Hopewell Junction, New York',
        41.5839823,
        -73.8087442,
        'New_York',
        'United_States',
        'Hopewell_Junction'
    ],
    [
        'Hudson, New York',
        42.2528649,
        -73.790959,
        'New_York',
        'United_States',
        'Hudson'
    ],
    [
        'Hudson Falls, New York',
        43.3006281,
        -73.5859487,
        'New_York',
        'United_States',
        'Hudson_Falls'
    ],
    [
        'Islip, New York',
        40.7298207,
        -73.2103934,
        'New_York',
        'United_States',
        'Islip'
    ],
    [
        'Ithaca, New York',
        42.4439614,
        -76.5018807,
        'New_York',
        'United_States',
        'Ithaca'
    ],
    [
        'Jamestown, New York',
        42.0970023,
        -79.2353259,
        'New_York',
        'United_States',
        'Jamestown'
    ],
    [
        'Johnstown, New York',
        43.0067399,
        -74.3676356,
        'New_York',
        'United_States',
        'Johnstown'
    ],
    [
        'Keene Valley, New York',
        44.1899178,
        -73.7866135,
        'New_York',
        'United_States',
        'Keene_Valley'
    ],
    [
        'Kingston, New York',
        41.9270367,
        -73.9973608,
        'New_York',
        'United_States',
        'Kingston'
    ],
    [
        'Lake Pleasant, New York',
        43.4709016,
        -74.4126461,
        'New_York',
        'United_States',
        'Lake_Pleasant'
    ],
    [
        'Little Valley, New York',
        42.2525629,
        -78.8055896,
        'New_York',
        'United_States',
        'Little_Valley'
    ],
    [
        'Livingston Manor, New York',
        41.9003667,
        -74.8282167,
        'New_York',
        'United_States',
        'Livingston_Manor'
    ],
    [
        'Lockport, New York',
        43.1706128,
        -78.6903098,
        'New_York',
        'United_States',
        'Lockport'
    ],
    [
        'Long Beach, New York',
        40.5884373,
        -73.657908,
        'New_York',
        'United_States',
        'Long_Beach'
    ],
    [
        'Lowville, New York',
        43.786736,
        -75.4918505,
        'New_York',
        'United_States',
        'Lowville'
    ],
    [
        'Lynbrook, New York',
        40.6548253,
        -73.6717969,
        'New_York',
        'United_States',
        'Lynbrook'
    ],
    [
        'Lyons, New York',
        43.0642305,
        -76.9902456,
        'New_York',
        'United_States',
        'Lyons'
    ],
    [
        'Malone, New York',
        44.8486596,
        -74.2948983,
        'New_York',
        'United_States',
        'Malone'
    ],
    [
        'Manorville, New York',
        40.8737096,
        -72.807879,
        'New_York',
        'United_States',
        'Manorville'
    ],
    [
        'Martin Van Buren National Historic Site, New York',
        42.3697825,
        -73.7041742,
        'New_York',
        'United_States',
        'Martin_Van_Buren_National_Historic_Site'
    ],
    [
        'Massapequa, New York',
        40.6806563,
        -73.4742914,
        'New_York',
        'United_States',
        'Massapequa'
    ],
    [
        'Massena, New York',
        44.9281049,
        -74.891865,
        'New_York',
        'United_States',
        'Massena'
    ],
    [
        'Mastic, New York',
        40.8020431,
        -72.8409359,
        'New_York',
        'United_States',
        'Mastic'
    ],
    [
        'Mayville, New York',
        42.2539469,
        -79.5044913,
        'New_York',
        'United_States',
        'Mayville'
    ],
    [
        'Middletown, New York',
        41.4459271,
        -74.4229341,
        'New_York',
        'United_States',
        'Middletown'
    ],
    [
        'Middle Village, New York',
        40.717372,
        -73.87425,
        'New_York',
        'United_States',
        'Middle_Village'
    ],
    [
        'Millerton, New York',
        41.9537035,
        -73.5106791,
        'New_York',
        'United_States',
        'Millerton'
    ],
    [
        'Miller Place, New York',
        40.9598212,
        -72.9962148,
        'New_York',
        'United_States',
        'Miller_Place'
    ],
    [
        'Mineola, New York',
        40.7492678,
        -73.6406845,
        'New_York',
        'United_States',
        'Mineola'
    ],
    [
        'Monsey, New York',
        41.1112069,
        -74.0684751,
        'New_York',
        'United_States',
        'Monsey'
    ],
    [
        'Monticello, New York',
        41.6556465,
        -74.6893282,
        'New_York',
        'United_States',
        'Monticello'
    ],
    [
        'Newburgh, New York',
        41.5034271,
        -74.0104178,
        'New_York',
        'United_States',
        'Newburgh'
    ],
    [
        'New City, New York',
        41.1475954,
        -73.989306,
        'New_York',
        'United_States',
        'New_City'
    ],
    [
        'New Hyde Park, New York',
        40.7351018,
        -73.6879082,
        'New_York',
        'United_States',
        'New_Hyde_Park'
    ],
    [
        'New York, New York',
        40.7127837,
        -74.0059413,
        'New_York',
        'United_States',
        'New_York'
    ],
    [
        'North Tonawanda, New York',
        43.038668,
        -78.8642033,
        'New_York',
        'United_States',
        'North_Tonawanda'
    ],
    [
        'Norwich, New York',
        42.531184,
        -75.5235149,
        'New_York',
        'United_States',
        'Norwich'
    ],
    [
        'Oneonta, New York',
        42.4528571,
        -75.0637746,
        'New_York',
        'United_States',
        'Oneonta'
    ],
    [
        'Orchard Park, New York',
        42.7675593,
        -78.7439189,
        'New_York',
        'United_States',
        'Orchard_Park'
    ],
    [
        'Ossining, New York',
        41.1628731,
        -73.8615246,
        'New_York',
        'United_States',
        'Ossining'
    ],
    [
        'Oswego, New York',
        43.4553461,
        -76.5104973,
        'New_York',
        'United_States',
        'Oswego'
    ],
    [
        'Otego, New York',
        42.3973023,
        -75.1735017,
        'New_York',
        'United_States',
        'Otego'
    ],
    [
        'Ovid, New York',
        42.6764593,
        -76.8230111,
        'New_York',
        'United_States',
        'Ovid'
    ],
    [
        'Owego, New York',
        42.1034075,
        -76.2621549,
        'New_York',
        'United_States',
        'Owego'
    ],
    [
        'Oyster Bay, New York',
        40.8656543,
        -73.5320685,
        'New_York',
        'United_States',
        'Oyster_Bay'
    ],
    [
        'Pearl River, New York',
        41.0589855,
        -74.0218063,
        'New_York',
        'United_States',
        'Pearl_River'
    ],
    [
        'Peekskill, New York',
        41.2900939,
        -73.9204158,
        'New_York',
        'United_States',
        'Peekskill'
    ],
    [
        'Penn Yan, New York',
        42.6609026,
        -77.0538577,
        'New_York',
        'United_States',
        'Penn_Yan'
    ],
    [
        'Plattsburgh, New York',
        44.6994873,
        -73.4529124,
        'New_York',
        'United_States',
        'Plattsburgh'
    ],
    [
        'Port Chester, New York',
        41.0017643,
        -73.6656834,
        'New_York',
        'United_States',
        'Port_Chester'
    ],
    [
        'Port Jefferson, New York',
        40.9464875,
        -73.0692732,
        'New_York',
        'United_States',
        'Port_Jefferson'
    ],
    [
        'Port Jervis, New York',
        41.3750937,
        -74.692663,
        'New_York',
        'United_States',
        'Port_Jervis'
    ],
    [
        'Port Washington, New York',
        40.8256561,
        -73.6981858,
        'New_York',
        'United_States',
        'Port_Washington'
    ],
    [
        'Potsdam, New York',
        44.6697805,
        -74.9813084,
        'New_York',
        'United_States',
        'Potsdam'
    ],
    [
        'Poughkeepsie, New York',
        41.7003713,
        -73.9209701,
        'New_York',
        'United_States',
        'Poughkeepsie'
    ],
    [
        'Putnam Valley, New York',
        41.3423559,
        -73.8491353,
        'New_York',
        'United_States',
        'Putnam_Valley'
    ],
    [
        'Queens, New York',
        40.7282239,
        -73.7948516,
        'New_York',
        'United_States',
        'Queens'
    ],
    [
        'Queensbury, New York',
        43.353627,
        -73.6771662,
        'New_York',
        'United_States',
        'Queensbury'
    ],
    [
        'Quogue, New York',
        40.8231553,
        -72.6095384,
        'New_York',
        'United_States',
        'Quogue'
    ],
    [
        'Ridge, New York',
        40.8939875,
        -72.8959364,
        'New_York',
        'United_States',
        'Ridge'
    ],
    [
        'Riverhead, New York',
        40.9170435,
        -72.6620402,
        'New_York',
        'United_States',
        'Riverhead'
    ],
    [
        'Rochester, New York',
        43.16103,
        -77.6109219,
        'New_York',
        'United_States',
        'Rochester'
    ],
    [
        'Rome, New York',
        43.2128473,
        -75.4557303,
        'New_York',
        'United_States',
        'Rome'
    ],
    [
        'Sagamore Hill National Historic Site, New York',
        40.8855293,
        -73.5010296,
        'New_York',
        'United_States',
        'Sagamore_Hill_National_Historic_Site'
    ],
    [
        'Saint Pauls Church National Historic Site, New York',
        40.8933998,
        -73.825727,
        'New_York',
        'United_States',
        'Saint_Pauls_Church_National_Historic_Site'
    ],
    [
        'Sanborn, New York',
        43.1371937,
        -78.8848068,
        'New_York',
        'United_States',
        'Sanborn'
    ],
    [
        'Saratoga National Historical Park, New York',
        43.0123082,
        -73.6488883,
        'New_York',
        'United_States',
        'Saratoga_National_Historical_Park'
    ],
    [
        'Saratoga Springs, New York',
        43.0831301,
        -73.7845651,
        'New_York',
        'United_States',
        'Saratoga_Springs'
    ],
    [
        'Schenectady, New York',
        42.8142432,
        -73.9395687,
        'New_York',
        'United_States',
        'Schenectady'
    ],
    [
        'Schoharie, New York',
        42.6659087,
        -74.3095787,
        'New_York',
        'United_States',
        'Schoharie'
    ],
    [
        'Schroon Lake, New York',
        43.8383684,
        -73.7618292,
        'New_York',
        'United_States',
        'Schroon_Lake'
    ],
    [
        'Selden, New York',
        40.8664873,
        -73.0356625,
        'New_York',
        'United_States',
        'Selden'
    ],
    [
        'Seneca Falls, New York',
        42.9106219,
        -76.7966215,
        'New_York',
        'United_States',
        'Seneca_Falls'
    ],
    [
        'Southold, New York',
        41.0648222,
        -72.4261962,
        'New_York',
        'United_States',
        'Southold'
    ],
    [
        'Spring Valley, New York',
        41.1131514,
        -74.0437521,
        'New_York',
        'United_States',
        'Spring_Valley'
    ],
    [
        'Staten Island, New York',
        40.5795317,
        -74.1502007,
        'New_York',
        'United_States',
        'Staten_Island'
    ],
    [
        'Statue Of Liberty National Monument, New York',
        40.6892494,
        -74.0445004,
        'New_York',
        'United_States',
        'Statue_Of_Liberty_National_Monument'
    ],
    [
        'Stephentown, New York',
        42.5486929,
        -73.3739973,
        'New_York',
        'United_States',
        'Stephentown'
    ],
    [
        'Syracuse, New York',
        43.0481221,
        -76.1474244,
        'New_York',
        'United_States',
        'Syracuse'
    ],
    [
        'Theodore Roosevelt Birthplace National Historic Site, New York',
        40.7384812,
        -73.988719,
        'New_York',
        'United_States',
        'Theodore_Roosevelt_Birthplace_National_Historic_Site'
    ],
    [
        'Theodore Roosevelt Inaugural National Historic Site, New York',
        42.9015649,
        -78.8727423,
        'New_York',
        'United_States',
        'Theodore_Roosevelt_Inaugural_National_Historic_Site'
    ],
    [
        'Ticonderoga, New York',
        43.8486707,
        -73.4234531,
        'New_York',
        'United_States',
        'Ticonderoga'
    ],
    [
        'Troy, New York',
        42.7284117,
        -73.6917851,
        'New_York',
        'United_States',
        'Troy'
    ],
    [
        'Utica, New York',
        43.100903,
        -75.232664,
        'New_York',
        'United_States',
        'Utica'
    ],
    [
        'Vanderbilt Mansion National Historic Site, New York',
        41.7963461,
        -73.9423869,
        'New_York',
        'United_States',
        'Vanderbilt_Mansion_National_Historic_Site'
    ],
    [
        'Waddington, New York',
        44.8644999,
        -75.2041019,
        'New_York',
        'United_States',
        'Waddington'
    ],
    [
        'Wampsville, New York',
        43.0753457,
        -75.7068507,
        'New_York',
        'United_States',
        'Wampsville'
    ],
    [
        'Wantagh, New York',
        40.6837121,
        -73.5101258,
        'New_York',
        'United_States',
        'Wantagh'
    ],
    [
        'Wappingers Falls, New York',
        41.5964825,
        -73.91097,
        'New_York',
        'United_States',
        'Wappingers_Falls'
    ],
    [
        'Warsaw, New York',
        42.740061,
        -78.1327881,
        'New_York',
        'United_States',
        'Warsaw'
    ],
    [
        'Watertown, New York',
        43.9747838,
        -75.9107565,
        'New_York',
        'United_States',
        'Watertown'
    ],
    [
        'Watkins Glen, New York',
        42.3806287,
        -76.8732921,
        'New_York',
        'United_States',
        'Watkins_Glen'
    ],
    [
        'Waverly, New York',
        42.0103519,
        -76.5271659,
        'New_York',
        'United_States',
        'Waverly'
    ],
    [
        'West Hempstead, New York',
        40.7048242,
        -73.6501295,
        'New_York',
        'United_States',
        'West_Hempstead'
    ],
    [
        'West Sand Lake, New York',
        42.6434128,
        -73.6087274,
        'New_York',
        'United_States',
        'West_Sand_Lake'
    ],
    [
        'White Plains, New York',
        41.0339862,
        -73.7629097,
        'New_York',
        'United_States',
        'White_Plains'
    ],
    [
        'Woodhull, New York',
        42.0803496,
        -77.4085938,
        'New_York',
        'United_States',
        'Woodhull'
    ],
    [
        'Yonkers, New York',
        40.9312099,
        -73.8987469,
        'New_York',
        'United_States',
        'Yonkers'
    ],
    [
        'Yorktown Heights, New York',
        41.2709274,
        -73.7776336,
        'New_York',
        'United_States',
        'Yorktown_Heights'
    ],
    [
        'Aberdeen, North Carolina',
        35.131547,
        -79.4294789,
        'North_Carolina',
        'United_States',
        'Aberdeen'
    ],
    [
        'Albermarle, North Carolina',
        35.3501426,
        -80.2000578,
        'North_Carolina',
        'United_States',
        'Albermarle'
    ],
    [
        'Apex, North Carolina',
        35.732652,
        -78.8502856,
        'North_Carolina',
        'United_States',
        'Apex'
    ],
    [
        'Asheboro, North Carolina',
        35.7079146,
        -79.8136446,
        'North_Carolina',
        'United_States',
        'Asheboro'
    ],
    [
        'Asheville, North Carolina',
        35.5950581,
        -82.5514869,
        'North_Carolina',
        'United_States',
        'Asheville'
    ],
    [
        'Bakersville, North Carolina',
        36.0156735,
        -82.1587351,
        'North_Carolina',
        'United_States',
        'Bakersville'
    ],
    [
        'Banner Elk, North Carolina',
        36.1631817,
        -81.8715019,
        'North_Carolina',
        'United_States',
        'Banner_Elk'
    ],
    [
        'Bayboro, North Carolina',
        35.1429445,
        -76.7702093,
        'North_Carolina',
        'United_States',
        'Bayboro'
    ],
    [
        'Beaufort, North Carolina',
        34.7182174,
        -76.6638186,
        'North_Carolina',
        'United_States',
        'Beaufort'
    ],
    [
        'Beulaville, North Carolina',
        34.9237763,
        -77.7738667,
        'North_Carolina',
        'United_States',
        'Beulaville'
    ],
    [
        'Bladenboro, North Carolina',
        34.5387799,
        -78.7875209,
        'North_Carolina',
        'United_States',
        'Bladenboro'
    ],
    [
        'Blue Ridge Parkway, North Carolina',
        35.6477828,
        -82.4910969,
        'North_Carolina',
        'United_States',
        'Blue_Ridge_Parkway'
    ],
    [
        'Bolivia, North Carolina',
        34.0676715,
        -78.1483283,
        'North_Carolina',
        'United_States',
        'Bolivia'
    ],
    [
        'Boone, North Carolina',
        36.216795,
        -81.6745517,
        'North_Carolina',
        'United_States',
        'Boone'
    ],
    [
        'Brevard, North Carolina',
        35.2334472,
        -82.7342919,
        'North_Carolina',
        'United_States',
        'Brevard'
    ],
    [
        'Bryson City, North Carolina',
        35.4309291,
        -83.4473809,
        'North_Carolina',
        'United_States',
        'Bryson_City'
    ],
    [
        'Burgaw, North Carolina',
        34.5521113,
        -77.926098,
        'North_Carolina',
        'United_States',
        'Burgaw'
    ],
    [
        'Burnsville, North Carolina',
        35.9173357,
        -82.300961,
        'North_Carolina',
        'United_States',
        'Burnsville'
    ],
    [
        'Camden, North Carolina',
        36.3281287,
        -76.1717689,
        'North_Carolina',
        'United_States',
        'Camden'
    ],
    [
        'Cape Hatteras National Seashore, North Carolina',
        35.9056218,
        -75.5983266,
        'North_Carolina',
        'United_States',
        'Cape_Hatteras_National_Seashore'
    ],
    [
        'Cape Lookout National Seashore, North Carolina',
        34.6515,
        -76.5067,
        'North_Carolina',
        'United_States',
        'Cape_Lookout_National_Seashore'
    ],
    [
        'Carl Sandburg Home National Historic Site, North Carolina',
        35.2714404,
        -82.4471894,
        'North_Carolina',
        'United_States',
        'Carl_Sandburg_Home_National_Historic_Site'
    ],
    [
        'Carthage, North Carolina',
        35.3459867,
        -79.4169711,
        'North_Carolina',
        'United_States',
        'Carthage'
    ],
    [
        'Cary, North Carolina',
        35.79154,
        -78.7811169,
        'North_Carolina',
        'United_States',
        'Cary'
    ],
    [
        'Casar, North Carolina',
        35.5123517,
        -81.6173159,
        'North_Carolina',
        'United_States',
        'Casar'
    ],
    [
        'Chapel Hill, North Carolina',
        35.9131996,
        -79.0558445,
        'North_Carolina',
        'United_States',
        'Chapel_Hill'
    ],
    [
        'Charlotte, North Carolina',
        35.2270869,
        -80.8431267,
        'North_Carolina',
        'United_States',
        'Charlotte'
    ],
    [
        'Clinton, North Carolina',
        34.9979453,
        -78.3233325,
        'North_Carolina',
        'United_States',
        'Clinton'
    ],
    [
        'Coats, North Carolina',
        35.4079393,
        -78.6719592,
        'North_Carolina',
        'United_States',
        'Coats'
    ],
    [
        'Columbia, North Carolina',
        35.9176632,
        -76.2521521,
        'North_Carolina',
        'United_States',
        'Columbia'
    ],
    [
        'Columbus, North Carolina',
        35.2531698,
        -82.1970584,
        'North_Carolina',
        'United_States',
        'Columbus'
    ],
    [
        'Concord, North Carolina',
        35.4087517,
        -80.579511,
        'North_Carolina',
        'United_States',
        'Concord'
    ],
    [
        'Conover, North Carolina',
        35.7065217,
        -81.2186933,
        'North_Carolina',
        'United_States',
        'Conover'
    ],
    [
        'Cullowhee, North Carolina',
        35.3137111,
        -83.1765333,
        'North_Carolina',
        'United_States',
        'Cullowhee'
    ],
    [
        'Currituck, North Carolina',
        36.4465659,
        -76.0142968,
        'North_Carolina',
        'United_States',
        'Currituck'
    ],
    [
        'Danbury, North Carolina',
        36.4093047,
        -80.2058831,
        'North_Carolina',
        'United_States',
        'Danbury'
    ],
    [
        'Dobson, North Carolina',
        36.3956891,
        -80.722567,
        'North_Carolina',
        'United_States',
        'Dobson'
    ],
    [
        'Durham, North Carolina',
        35.9940329,
        -78.898619,
        'North_Carolina',
        'United_States',
        'Durham'
    ],
    [
        'Eden, North Carolina',
        36.4884715,
        -79.7667026,
        'North_Carolina',
        'United_States',
        'Eden'
    ],
    [
        'Edenton, North Carolina',
        36.057938,
        -76.6077213,
        'North_Carolina',
        'United_States',
        'Edenton'
    ],
    [
        'Elizabethtown, North Carolina',
        34.6293372,
        -78.6052899,
        'North_Carolina',
        'United_States',
        'Elizabethtown'
    ],
    [
        'Elizabeth City, North Carolina',
        36.2946008,
        -76.2510461,
        'North_Carolina',
        'United_States',
        'Elizabeth_City'
    ],
    [
        'Fayetteville, North Carolina',
        35.0526641,
        -78.8783585,
        'North_Carolina',
        'United_States',
        'Fayetteville'
    ],
    [
        'Fort Raleigh National Historical Site, North Carolina',
        35.9369,
        -75.7121,
        'North_Carolina',
        'United_States',
        'Fort_Raleigh_National_Historical_Site'
    ],
    [
        'Franklin, North Carolina',
        35.1823171,
        -83.3815429,
        'North_Carolina',
        'United_States',
        'Franklin'
    ],
    [
        'Fuquay-Varina, North Carolina',
        35.5843235,
        -78.8000128,
        'North_Carolina',
        'United_States',
        'Fuquay-Varina'
    ],
    [
        'Gastonia, North Carolina',
        35.262082,
        -81.1873005,
        'North_Carolina',
        'United_States',
        'Gastonia'
    ],
    [
        'Gatesville, North Carolina',
        36.4034878,
        -76.7530098,
        'North_Carolina',
        'United_States',
        'Gatesville'
    ],
    [
        'Goldsboro, North Carolina',
        35.3848841,
        -77.9927651,
        'North_Carolina',
        'United_States',
        'Goldsboro'
    ],
    [
        'Graham, North Carolina',
        36.0690258,
        -79.4005756,
        'North_Carolina',
        'United_States',
        'Graham'
    ],
    [
        'Greensboro, North Carolina',
        36.0726354,
        -79.7919754,
        'North_Carolina',
        'United_States',
        'Greensboro'
    ],
    [
        'Greenville, North Carolina',
        35.612661,
        -77.3663538,
        'North_Carolina',
        'United_States',
        'Greenville'
    ],
    [
        'Guilford Courthouse National Military Park, North Carolina',
        36.1332951,
        -79.8403417,
        'North_Carolina',
        'United_States',
        'Guilford_Courthouse_National_Military_Park'
    ],
    [
        'Halifax, North Carolina',
        36.328486,
        -77.5894199,
        'North_Carolina',
        'United_States',
        'Halifax'
    ],
    [
        'Hayesville, North Carolina',
        35.0462003,
        -83.8179527,
        'North_Carolina',
        'United_States',
        'Hayesville'
    ],
    [
        'Henderson, North Carolina',
        36.3295905,
        -78.3991638,
        'North_Carolina',
        'United_States',
        'Henderson'
    ],
    [
        'Hendersonville, North Carolina',
        35.3187279,
        -82.4609528,
        'North_Carolina',
        'United_States',
        'Hendersonville'
    ],
    [
        'Hertford, North Carolina',
        36.1901579,
        -76.4660519,
        'North_Carolina',
        'United_States',
        'Hertford'
    ],
    [
        'Hickory, North Carolina',
        35.7344538,
        -81.3444573,
        'North_Carolina',
        'United_States',
        'Hickory'
    ],
    [
        'High Point, North Carolina',
        35.9556923,
        -80.0053176,
        'North_Carolina',
        'United_States',
        'High_Point'
    ],
    [
        'Hillsborough, North Carolina',
        36.0754183,
        -79.0997347,
        'North_Carolina',
        'United_States',
        'Hillsborough'
    ],
    [
        'Jackson, North Carolina',
        36.3895976,
        -77.4213614,
        'North_Carolina',
        'United_States',
        'Jackson'
    ],
    [
        'Jacksonville, North Carolina',
        34.7540524,
        -77.4302414,
        'North_Carolina',
        'United_States',
        'Jacksonville'
    ],
    [
        'Jefferson, North Carolina',
        36.420403,
        -81.4734376,
        'North_Carolina',
        'United_States',
        'Jefferson'
    ],
    [
        'Kenansville, North Carolina',
        34.9623883,
        -77.9622069,
        'North_Carolina',
        'United_States',
        'Kenansville'
    ],
    [
        'King, North Carolina',
        36.2806939,
        -80.3592197,
        'North_Carolina',
        'United_States',
        'King'
    ],
    [
        'Kinston, North Carolina',
        35.2626635,
        -77.5816353,
        'North_Carolina',
        'United_States',
        'Kinston'
    ],
    [
        'Kitty Hawk, North Carolina',
        36.0646102,
        -75.7057346,
        'North_Carolina',
        'United_States',
        'Kitty_Hawk'
    ],
    [
        'Laurinburg, North Carolina',
        34.7740494,
        -79.4628248,
        'North_Carolina',
        'United_States',
        'Laurinburg'
    ],
    [
        'Lenoir, North Carolina',
        35.9140196,
        -81.5389849,
        'North_Carolina',
        'United_States',
        'Lenoir'
    ],
    [
        'Lexington, North Carolina',
        35.8240265,
        -80.2533838,
        'North_Carolina',
        'United_States',
        'Lexington'
    ],
    [
        'Lillington, North Carolina',
        35.399327,
        -78.8158528,
        'North_Carolina',
        'United_States',
        'Lillington'
    ],
    [
        'Lincolnton, North Carolina',
        35.473745,
        -81.2545251,
        'North_Carolina',
        'United_States',
        'Lincolnton'
    ],
    [
        'Loisburg, North Carolina',
        36.0990393,
        -78.301106,
        'North_Carolina',
        'United_States',
        'Loisburg'
    ],
    [
        'Lumberton, North Carolina',
        34.6182199,
        -79.0086424,
        'North_Carolina',
        'United_States',
        'Lumberton'
    ],
    [
        'Manteo, North Carolina',
        35.9082256,
        -75.6757302,
        'North_Carolina',
        'United_States',
        'Manteo'
    ],
    [
        'Marion, North Carolina',
        35.6840131,
        -82.0092745,
        'North_Carolina',
        'United_States',
        'Marion'
    ],
    [
        'Marshall, North Carolina',
        35.7973284,
        -82.6840251,
        'North_Carolina',
        'United_States',
        'Marshall'
    ],
    [
        'Marshville, North Carolina',
        34.988486,
        -80.3670085,
        'North_Carolina',
        'United_States',
        'Marshville'
    ],
    [
        'Mocksville, North Carolina',
        35.8940263,
        -80.5614494,
        'North_Carolina',
        'United_States',
        'Mocksville'
    ],
    [
        'Monroe, North Carolina',
        34.9854275,
        -80.5495112,
        'North_Carolina',
        'United_States',
        'Monroe'
    ],
    [
        'Moores Creek National Battlefield, North Carolina',
        35.7595731,
        -79.0192997,
        'North_Carolina',
        'United_States',
        'Moores_Creek_National_Battlefield'
    ],
    [
        'Morganton, North Carolina',
        35.7454071,
        -81.6848188,
        'North_Carolina',
        'United_States',
        'Morganton'
    ],
    [
        'Mount Airy, North Carolina',
        36.4993007,
        -80.6072858,
        'North_Carolina',
        'United_States',
        'Mount_Airy'
    ],
    [
        'Mount Pleasant, North Carolina',
        35.399308,
        -80.4358963,
        'North_Carolina',
        'United_States',
        'Mount_Pleasant'
    ],
    [
        'Murphy, North Carolina',
        35.0875836,
        -84.0346315,
        'North_Carolina',
        'United_States',
        'Murphy'
    ],
    [
        'Nashville, North Carolina',
        35.974598,
        -77.9655406,
        'North_Carolina',
        'United_States',
        'Nashville'
    ],
    [
        'Newland, North Carolina',
        36.0873484,
        -81.9273362,
        'North_Carolina',
        'United_States',
        'Newland'
    ],
    [
        'Newton, North Carolina',
        35.6698552,
        -81.2214708,
        'North_Carolina',
        'United_States',
        'Newton'
    ],
    [
        'New Bern, North Carolina',
        35.108493,
        -77.0441143,
        'North_Carolina',
        'United_States',
        'New_Bern'
    ],
    [
        'North Wilkesboro, North Carolina',
        36.1584651,
        -81.1475841,
        'North_Carolina',
        'United_States',
        'North_Wilkesboro'
    ],
    [
        'Norwood, North Carolina',
        35.2195898,
        -80.1189477,
        'North_Carolina',
        'United_States',
        'Norwood'
    ],
    [
        'Oxford, North Carolina',
        36.3107004,
        -78.5908345,
        'North_Carolina',
        'United_States',
        'Oxford'
    ],
    [
        'Pittsboro, North Carolina',
        35.7201463,
        -79.1772371,
        'North_Carolina',
        'United_States',
        'Pittsboro'
    ],
    [
        'Plymouth, North Carolina',
        35.8668281,
        -76.7485555,
        'North_Carolina',
        'United_States',
        'Plymouth'
    ],
    [
        'Raeford, North Carolina',
        34.9809995,
        -79.2241997,
        'North_Carolina',
        'United_States',
        'Raeford'
    ],
    [
        'Raleigh, North Carolina',
        35.7795897,
        -78.6381787,
        'North_Carolina',
        'United_States',
        'Raleigh'
    ],
    [
        'Reidsville, North Carolina',
        36.3548586,
        -79.6644747,
        'North_Carolina',
        'United_States',
        'Reidsville'
    ],
    [
        'Robbinsville, North Carolina',
        35.322866,
        -83.807399,
        'North_Carolina',
        'United_States',
        'Robbinsville'
    ],
    [
        'Rockingham, North Carolina',
        34.9393201,
        -79.7739457,
        'North_Carolina',
        'United_States',
        'Rockingham'
    ],
    [
        'Rocky Mount, North Carolina',
        35.9382103,
        -77.7905339,
        'North_Carolina',
        'United_States',
        'Rocky_Mount'
    ],
    [
        'Rosman, North Carolina',
        35.143721,
        -82.8212432,
        'North_Carolina',
        'United_States',
        'Rosman'
    ],
    [
        'Roxboro, North Carolina',
        36.3937519,
        -78.982788,
        'North_Carolina',
        'United_States',
        'Roxboro'
    ],
    [
        'Rutherfordton, North Carolina',
        35.3692877,
        -81.9567716,
        'North_Carolina',
        'United_States',
        'Rutherfordton'
    ],
    [
        'Salisbury, North Carolina',
        35.6709727,
        -80.4742261,
        'North_Carolina',
        'United_States',
        'Salisbury'
    ],
    [
        'Sanford, North Carolina',
        35.4798757,
        -79.1802994,
        'North_Carolina',
        'United_States',
        'Sanford'
    ],
    [
        'Shelby, North Carolina',
        35.2923513,
        -81.5356463,
        'North_Carolina',
        'United_States',
        'Shelby'
    ],
    [
        'Smithfield, North Carolina',
        35.5084935,
        -78.3394455,
        'North_Carolina',
        'United_States',
        'Smithfield'
    ],
    [
        'Snow Hill, North Carolina',
        35.4515504,
        -77.6810859,
        'North_Carolina',
        'United_States',
        'Snow_Hill'
    ],
    [
        'Southern Pines, North Carolina',
        35.1740471,
        -79.3922539,
        'North_Carolina',
        'United_States',
        'Southern_Pines'
    ],
    [
        'Sparta, North Carolina',
        36.5054071,
        -81.1209189,
        'North_Carolina',
        'United_States',
        'Sparta'
    ],
    [
        'Spruce Pine, North Carolina',
        35.9154007,
        -82.0645611,
        'North_Carolina',
        'United_States',
        'Spruce_Pine'
    ],
    [
        'Statesville, North Carolina',
        35.7826363,
        -80.8872959,
        'North_Carolina',
        'United_States',
        'Statesville'
    ],
    [
        'Stoneville, North Carolina',
        36.4665269,
        -79.9069847,
        'North_Carolina',
        'United_States',
        'Stoneville'
    ],
    [
        'Swansboro, North Carolina',
        34.6876621,
        -77.1191166,
        'North_Carolina',
        'United_States',
        'Swansboro'
    ],
    [
        'Swan Quarter, North Carolina',
        35.4062391,
        -76.3289376,
        'North_Carolina',
        'United_States',
        'Swan_Quarter'
    ],
    [
        'Sylva, North Carolina',
        35.3737111,
        -83.2259803,
        'North_Carolina',
        'United_States',
        'Sylva'
    ],
    [
        'Tarboro, North Carolina',
        35.8968236,
        -77.5358049,
        'North_Carolina',
        'United_States',
        'Tarboro'
    ],
    [
        'Taylorsville, North Carolina',
        35.9216748,
        -81.1768813,
        'North_Carolina',
        'United_States',
        'Taylorsville'
    ],
    [
        'Thomasville, North Carolina',
        35.8826369,
        -80.0819879,
        'North_Carolina',
        'United_States',
        'Thomasville'
    ],
    [
        'Trenton, North Carolina',
        35.0641234,
        -77.3551852,
        'North_Carolina',
        'United_States',
        'Trenton'
    ],
    [
        'Troy, North Carolina',
        35.3584743,
        -79.8944901,
        'North_Carolina',
        'United_States',
        'Troy'
    ],
    [
        'Wadesboro, North Carolina',
        34.9682097,
        -80.0767266,
        'North_Carolina',
        'United_States',
        'Wadesboro'
    ],
    [
        'Warrenton, North Carolina',
        36.3984803,
        -78.1552706,
        'North_Carolina',
        'United_States',
        'Warrenton'
    ],
    [
        'Washington, North Carolina',
        35.5465517,
        -77.0521742,
        'North_Carolina',
        'United_States',
        'Washington'
    ],
    [
        'Waynesville, North Carolina',
        35.4887145,
        -82.9887477,
        'North_Carolina',
        'United_States',
        'Waynesville'
    ],
    [
        'Wendell, North Carolina',
        35.780987,
        -78.3697213,
        'North_Carolina',
        'United_States',
        'Wendell'
    ],
    [
        'Wentowrth, North Carolina',
        36.4001371,
        -79.7744792,
        'North_Carolina',
        'United_States',
        'Wentowrth'
    ],
    [
        'Whiteville, North Carolina',
        34.3387802,
        -78.7030721,
        'North_Carolina',
        'United_States',
        'Whiteville'
    ],
    [
        'Wikesboro, North Carolina',
        36.1459649,
        -81.1606401,
        'North_Carolina',
        'United_States',
        'Wikesboro'
    ],
    [
        'Williamston, North Carolina',
        35.8546039,
        -77.0555114,
        'North_Carolina',
        'United_States',
        'Williamston'
    ],
    [
        'Wilmington, North Carolina',
        34.2257255,
        -77.9447102,
        'North_Carolina',
        'United_States',
        'Wilmington'
    ],
    [
        'Wilson, North Carolina',
        35.7212689,
        -77.9155395,
        'North_Carolina',
        'United_States',
        'Wilson'
    ],
    [
        'Windsor, North Carolina',
        35.9984925,
        -76.9460641,
        'North_Carolina',
        'United_States',
        'Windsor'
    ],
    [
        'Wingate, North Carolina',
        34.9843176,
        -80.4492319,
        'North_Carolina',
        'United_States',
        'Wingate'
    ],
    [
        'Winston-Salem, North Carolina',
        36.0998596,
        -80.244216,
        'North_Carolina',
        'United_States',
        'Winston-Salem'
    ],
    [
        'Winton, North Carolina',
        36.3957098,
        -76.9319035,
        'North_Carolina',
        'United_States',
        'Winton'
    ],
    [
        'Wright Brothers National Memorial, North Carolina',
        36.016,
        -75.6701,
        'North_Carolina',
        'United_States',
        'Wright_Brothers_National_Memorial'
    ],
    [
        'Yadkinville, North Carolina',
        36.1345807,
        -80.6595079,
        'North_Carolina',
        'United_States',
        'Yadkinville'
    ],
    [
        'Yanceyville, North Carolina',
        36.4040273,
        -79.3361314,
        'North_Carolina',
        'United_States',
        'Yanceyville'
    ],
    [
        'Amidon, North Dakota',
        46.4822327,
        -103.3218466,
        'North_Dakota',
        'United_States',
        'Amidon'
    ],
    [
        'Ashley, North Dakota',
        46.0341408,
        -99.3715033,
        'North_Dakota',
        'United_States',
        'Ashley'
    ],
    [
        'Beach, North Dakota',
        46.9180689,
        -104.0043728,
        'North_Dakota',
        'United_States',
        'Beach'
    ],
    [
        'Belcourt, North Dakota',
        48.8391712,
        -99.7448688,
        'North_Dakota',
        'United_States',
        'Belcourt'
    ],
    [
        'Belfield, North Dakota',
        46.8852906,
        -103.1996219,
        'North_Dakota',
        'United_States',
        'Belfield'
    ],
    [
        'Bismarck, North Dakota',
        46.8083268,
        -100.7837392,
        'North_Dakota',
        'United_States',
        'Bismarck'
    ],
    [
        'Bottineau, North Dakota',
        48.8272301,
        -100.4456984,
        'North_Dakota',
        'United_States',
        'Bottineau'
    ],
    [
        'Bowbells, North Dakota',
        48.8030833,
        -102.2460008,
        'North_Dakota',
        'United_States',
        'Bowbells'
    ],
    [
        'Bowman, North Dakota',
        46.1830618,
        -103.3949061,
        'North_Dakota',
        'United_States',
        'Bowman'
    ],
    [
        'Cando, North Dakota',
        48.4866681,
        -99.2098593,
        'North_Dakota',
        'United_States',
        'Cando'
    ],
    [
        'Carrington, North Dakota',
        47.4497201,
        -99.1262234,
        'North_Dakota',
        'United_States',
        'Carrington'
    ],
    [
        'Carson, North Dakota',
        46.4177836,
        -101.5648652,
        'North_Dakota',
        'United_States',
        'Carson'
    ],
    [
        'Cavalier, North Dakota',
        48.7938813,
        -97.6223098,
        'North_Dakota',
        'United_States',
        'Cavalier'
    ],
    [
        'Center, North Dakota',
        47.1163849,
        -101.299594,
        'North_Dakota',
        'United_States',
        'Center'
    ],
    [
        'Cooperstown, North Dakota',
        47.4444384,
        -98.1239843,
        'North_Dakota',
        'United_States',
        'Cooperstown'
    ],
    [
        'Crosby, North Dakota',
        48.9141998,
        -103.2949095,
        'North_Dakota',
        'United_States',
        'Crosby'
    ],
    [
        'Devils Lake, North Dakota',
        48.112779,
        -98.8651202,
        'North_Dakota',
        'United_States',
        'Devils_Lake'
    ],
    [
        'Dickinson, North Dakota',
        46.8791756,
        -102.7896242,
        'North_Dakota',
        'United_States',
        'Dickinson'
    ],
    [
        'Ellendale, North Dakota',
        46.0027502,
        -98.5270458,
        'North_Dakota',
        'United_States',
        'Ellendale'
    ],
    [
        'Fargo, North Dakota',
        46.8771863,
        -96.7898034,
        'North_Dakota',
        'United_States',
        'Fargo'
    ],
    [
        'Fessenden, North Dakota',
        47.6491683,
        -99.629289,
        'North_Dakota',
        'United_States',
        'Fessenden'
    ],
    [
        'Finley, North Dakota',
        47.5141578,
        -97.8359252,
        'North_Dakota',
        'United_States',
        'Finley'
    ],
    [
        'Forman, North Dakota',
        46.1077418,
        -97.6364861,
        'North_Dakota',
        'United_States',
        'Forman'
    ],
    [
        'Fort Union Trading Post National Historic Site, North Dakota',
        48.00016,
        -104.041483,
        'North_Dakota',
        'United_States',
        'Fort_Union_Trading_Post_National_Historic_Site'
    ],
    [
        'Fort Yates, North Dakota',
        46.0869408,
        -100.6301271,
        'North_Dakota',
        'United_States',
        'Fort_Yates'
    ],
    [
        'Grafton, North Dakota',
        48.4122107,
        -97.410634,
        'North_Dakota',
        'United_States',
        'Grafton'
    ],
    [
        'Grand Forks, North Dakota',
        47.9252568,
        -97.0328547,
        'North_Dakota',
        'United_States',
        'Grand_Forks'
    ],
    [
        'Hettinger, North Dakota',
        46.0013946,
        -102.6368239,
        'North_Dakota',
        'United_States',
        'Hettinger'
    ],
    [
        'Hillsboro, North Dakota',
        47.4038683,
        -97.0620308,
        'North_Dakota',
        'United_States',
        'Hillsboro'
    ],
    [
        'International Peace Garden, North Dakota',
        48.9978461,
        -100.0456008,
        'North_Dakota',
        'United_States',
        'International_Peace_Garden'
    ],
    [
        'Jamestown, North Dakota',
        46.9105438,
        -98.7084357,
        'North_Dakota',
        'United_States',
        'Jamestown'
    ],
    [
        'Lakota, North Dakota',
        48.0427767,
        -98.3362149,
        'North_Dakota',
        'United_States',
        'Lakota'
    ],
    [
        'LaMoure, North Dakota',
        46.3571915,
        -98.2945434,
        'North_Dakota',
        'United_States',
        'LaMoure'
    ],
    [
        'Langdon, North Dakota',
        48.7600007,
        -98.3681728,
        'North_Dakota',
        'United_States',
        'Langdon'
    ],
    [
        'Linton, North Dakota',
        46.2666567,
        -100.2328916,
        'North_Dakota',
        'United_States',
        'Linton'
    ],
    [
        'Lisbon, North Dakota',
        46.4416344,
        -97.6812096,
        'North_Dakota',
        'United_States',
        'Lisbon'
    ],
    [
        'Mandan, North Dakota',
        46.8266603,
        -100.8895761,
        'North_Dakota',
        'United_States',
        'Mandan'
    ],
    [
        'Manning, North Dakota',
        47.2300045,
        -102.7703485,
        'North_Dakota',
        'United_States',
        'Manning'
    ],
    [
        'McClusky, North Dakota',
        47.4858309,
        -100.4431838,
        'North_Dakota',
        'United_States',
        'McClusky'
    ],
    [
        'Medora, North Dakota',
        46.9139028,
        -103.5243536,
        'North_Dakota',
        'United_States',
        'Medora'
    ],
    [
        'Minnewaukan, North Dakota',
        48.071388,
        -99.2523572,
        'North_Dakota',
        'United_States',
        'Minnewaukan'
    ],
    [
        'Minot, North Dakota',
        48.2329668,
        -101.2922906,
        'North_Dakota',
        'United_States',
        'Minot'
    ],
    [
        'Mohall, North Dakota',
        48.7633556,
        -101.5132169,
        'North_Dakota',
        'United_States',
        'Mohall'
    ],
    [
        'Mott, North Dakota',
        46.3725031,
        -102.3271061,
        'North_Dakota',
        'United_States',
        'Mott'
    ],
    [
        'Napolean, North Dakota',
        46.5083133,
        -99.7712195,
        'North_Dakota',
        'United_States',
        'Napolean'
    ],
    [
        'New Rockford, North Dakota',
        47.6799985,
        -99.1378952,
        'North_Dakota',
        'United_States',
        'New_Rockford'
    ],
    [
        'Rolla, North Dakota',
        48.8577837,
        -99.6179216,
        'North_Dakota',
        'United_States',
        'Rolla'
    ],
    [
        'Rugby, North Dakota',
        48.3688876,
        -99.9962463,
        'North_Dakota',
        'United_States',
        'Rugby'
    ],
    [
        'Stanley, North Dakota',
        48.3172413,
        -102.3904515,
        'North_Dakota',
        'United_States',
        'Stanley'
    ],
    [
        'Stanton, North Dakota',
        47.3211099,
        -101.3815477,
        'North_Dakota',
        'United_States',
        'Stanton'
    ],
    [
        'Steele, North Dakota',
        46.8547065,
        -99.9159381,
        'North_Dakota',
        'United_States',
        'Steele'
    ],
    [
        'Theodore Roosevelt National Park, North Dakota',
        46.978965,
        -103.5387091,
        'North_Dakota',
        'United_States',
        'Theodore_Roosevelt_National_Park'
    ],
    [
        'Towner, North Dakota',
        48.3458325,
        -100.4054123,
        'North_Dakota',
        'United_States',
        'Towner'
    ],
    [
        'Valley City, North Dakota',
        46.9233129,
        -98.0031547,
        'North_Dakota',
        'United_States',
        'Valley_City'
    ],
    [
        'Wahpeton, North Dakota',
        46.2652367,
        -96.6059072,
        'North_Dakota',
        'United_States',
        'Wahpeton'
    ],
    [
        'Washburn, North Dakota',
        47.28916,
        -101.0290346,
        'North_Dakota',
        'United_States',
        'Washburn'
    ],
    [
        'Watford City, North Dakota',
        47.8022412,
        -103.2832467,
        'North_Dakota',
        'United_States',
        'Watford_City'
    ],
    [
        'West Fargo, North Dakota',
        46.8769487,
        -96.8999057,
        'North_Dakota',
        'United_States',
        'West_Fargo'
    ],
    [
        'Williston, North Dakota',
        48.1469683,
        -103.6179745,
        'North_Dakota',
        'United_States',
        'Williston'
    ],
    ['Akron, Ohio', 41.0814447, -81.5190053, 'Ohio', 'United_States', 'Akron'],
    [
        'Amherst, Ohio',
        41.3978217,
        -82.2223774,
        'Ohio',
        'United_States',
        'Amherst'
    ],
    [
        'Ashland, Ohio',
        40.8686675,
        -82.3182178,
        'Ohio',
        'United_States',
        'Ashland'
    ],
    [
        'Ashtabula, Ohio',
        41.8650534,
        -80.7898089,
        'Ohio',
        'United_States',
        'Ashtabula'
    ],
    [
        'Athens, Ohio',
        39.3292396,
        -82.1012554,
        'Ohio',
        'United_States',
        'Athens'
    ],
    [
        'Batavia, Ohio',
        39.0770072,
        -84.1768795,
        'Ohio',
        'United_States',
        'Batavia'
    ],
    [
        'Bellefontaine, Ohio',
        40.3611643,
        -83.7596557,
        'Ohio',
        'United_States',
        'Bellefontaine'
    ],
    [
        'Boardman, Ohio',
        41.0242256,
        -80.6628528,
        'Ohio',
        'United_States',
        'Boardman'
    ],
    [
        'Bolivar, Ohio',
        40.650061,
        -81.4520613,
        'Ohio',
        'United_States',
        'Bolivar'
    ],
    [
        'Bowling Green, Ohio',
        41.3747744,
        -83.6513229,
        'Ohio',
        'United_States',
        'Bowling_Green'
    ],
    [
        'Bristolville, Ohio',
        41.3873741,
        -80.8691273,
        'Ohio',
        'United_States',
        'Bristolville'
    ],
    ['Bryan, Ohio', 41.4747732, -84.5524508, 'Ohio', 'United_States', 'Bryan'],
    [
        'Bucyrus, Ohio',
        40.8083909,
        -82.9754649,
        'Ohio',
        'United_States',
        'Bucyrus'
    ],
    ['Cadiz, Ohio', 40.2728452, -80.9967628, 'Ohio', 'United_States', 'Cadiz'],
    [
        'Caldwell, Ohio',
        39.7478508,
        -81.5165127,
        'Ohio',
        'United_States',
        'Caldwell'
    ],
    [
        'Cambridge, Ohio',
        40.031183,
        -81.5884561,
        'Ohio',
        'United_States',
        'Cambridge'
    ],
    ['Canton, Ohio', 40.7989473, -81.378447, 'Ohio', 'United_States', 'Canton'],
    [
        'Carrollton, Ohio',
        40.5728403,
        -81.0856532,
        'Ohio',
        'United_States',
        'Carrollton'
    ],
    [
        'Celina, Ohio',
        40.5489358,
        -84.5702338,
        'Ohio',
        'United_States',
        'Celina'
    ],
    [
        'Chardon, Ohio',
        41.5786639,
        -81.2133262,
        'Ohio',
        'United_States',
        'Chardon'
    ],
    [
        'Chillicothe, Ohio',
        39.3331197,
        -82.9824019,
        'Ohio',
        'United_States',
        'Chillicothe'
    ],
    [
        'Cincinnati, Ohio',
        39.1031182,
        -84.5120196,
        'Ohio',
        'United_States',
        'Cincinnati'
    ],
    [
        'Circleville, Ohio',
        39.600618,
        -82.9460133,
        'Ohio',
        'United_States',
        'Circleville'
    ],
    [
        'Cleveland, Ohio',
        41.49932,
        -81.6943605,
        'Ohio',
        'United_States',
        'Cleveland'
    ],
    [
        'Columbus, Ohio',
        39.9611755,
        -82.9987942,
        'Ohio',
        'United_States',
        'Columbus'
    ],
    [
        'Conneaut, Ohio',
        41.9475551,
        -80.5542409,
        'Ohio',
        'United_States',
        'Conneaut'
    ],
    [
        'Coshocton, Ohio',
        40.2720151,
        -81.8595756,
        'Ohio',
        'United_States',
        'Coshocton'
    ],
    [
        'Cuyahoga Valley National Park, Ohio',
        41.2808248,
        -81.567812,
        'Ohio',
        'United_States',
        'Cuyahoga_Valley_National_Park'
    ],
    [
        'Dayton, Ohio',
        39.7589478,
        -84.1916069,
        'Ohio',
        'United_States',
        'Dayton'
    ],
    [
        'Dayton Aviation Heritage National Historical Park, Ohio',
        39.7560598,
        -84.2117892,
        'Ohio',
        'United_States',
        'Dayton_Aviation_Heritage_National_Historical_Park'
    ],
    [
        'Deer Park, Ohio',
        39.2053366,
        -84.3946627,
        'Ohio',
        'United_States',
        'Deer_Park'
    ],
    [
        'Defiance, Ohio',
        41.2844933,
        -84.3557802,
        'Ohio',
        'United_States',
        'Defiance'
    ],
    [
        'Delaware, Ohio',
        40.2986724,
        -83.067965,
        'Ohio',
        'United_States',
        'Delaware'
    ],
    [
        'Dublin, Ohio',
        40.0992294,
        -83.1140771,
        'Ohio',
        'United_States',
        'Dublin'
    ],
    [
        'East Liverpool, Ohio',
        40.6186756,
        -80.5772928,
        'Ohio',
        'United_States',
        'East_Liverpool'
    ],
    ['Eaton, Ohio', 39.7439405, -84.6366201, 'Ohio', 'United_States', 'Eaton'],
    [
        'Elyria, Ohio',
        41.3683798,
        -82.1076486,
        'Ohio',
        'United_States',
        'Elyria'
    ],
    [
        'Fairfield, Ohio',
        39.3454673,
        -84.5603187,
        'Ohio',
        'United_States',
        'Fairfield'
    ],
    [
        'Findlay, Ohio',
        41.04422,
        -83.6499321,
        'Ohio',
        'United_States',
        'Findlay'
    ],
    [
        'First Ladies National Historic Site, Ohio',
        40.4172871,
        -82.907123,
        'Ohio',
        'United_States',
        'First_Ladies_National_Historic_Site'
    ],
    [
        'Fremont, Ohio',
        41.3503303,
        -83.1218634,
        'Ohio',
        'United_States',
        'Fremont'
    ],
    [
        'Galion, Ohio',
        40.7336687,
        -82.7899026,
        'Ohio',
        'United_States',
        'Galion'
    ],
    [
        'Gallipolis, Ohio',
        38.809803,
        -82.2023691,
        'Ohio',
        'United_States',
        'Gallipolis'
    ],
    [
        'Georgetown, Ohio',
        38.8645138,
        -83.9040944,
        'Ohio',
        'United_States',
        'Georgetown'
    ],
    [
        'Gibsonburg, Ohio',
        41.3844964,
        -83.3204807,
        'Ohio',
        'United_States',
        'Gibsonburg'
    ],
    [
        'Glenn Research Center, Ohio',
        41.412843,
        -81.862399,
        'Ohio',
        'United_States',
        'Glenn_Research_Center'
    ],
    ['Gomer, Ohio', 40.8450508, -84.1871708, 'Ohio', 'United_States', 'Gomer'],
    [
        'Grand Rapids, Ohio',
        41.4119963,
        -83.8643852,
        'Ohio',
        'United_States',
        'Grand_Rapids'
    ],
    [
        'Greenville, Ohio',
        40.1028264,
        -84.6330115,
        'Ohio',
        'United_States',
        'Greenville'
    ],
    [
        'Hamilton, Ohio',
        39.3995008,
        -84.5613355,
        'Ohio',
        'United_States',
        'Hamilton'
    ],
    [
        'Harrisville, Ohio',
        40.1814586,
        -80.8875903,
        'Ohio',
        'United_States',
        'Harrisville'
    ],
    ['Heath, Ohio', 40.0228421, -82.4445991, 'Ohio', 'United_States', 'Heath'],
    [
        'Hillsboro, Ohio',
        39.2022866,
        -83.611587,
        'Ohio',
        'United_States',
        'Hillsboro'
    ],
    [
        'Hopewell Culture National Historical Park, Ohio',
        39.3761064,
        -83.0065097,
        'Ohio',
        'United_States',
        'Hopewell_Culture_National_Historical_Park'
    ],
    ['Hudson, Ohio', 41.240056, -81.440667, 'Ohio', 'United_States', 'Hudson'],
    [
        'Ironton, Ohio',
        38.5367471,
        -82.6829406,
        'Ohio',
        'United_States',
        'Ironton'
    ],
    [
        'Jackson, Ohio',
        39.0520169,
        -82.6365536,
        'Ohio',
        'United_States',
        'Jackson'
    ],
    [
        'Jefferson, Ohio',
        41.7386662,
        -80.7698066,
        'Ohio',
        'United_States',
        'Jefferson'
    ],
    [
        'Kenton, Ohio',
        40.6469982,
        -83.6096516,
        'Ohio',
        'United_States',
        'Kenton'
    ],
    [
        'Kirtland, Ohio',
        41.6289365,
        -81.3614985,
        'Ohio',
        'United_States',
        'Kirtland'
    ],
    [
        'Lancaster, Ohio',
        39.7136754,
        -82.5993294,
        'Ohio',
        'United_States',
        'Lancaster'
    ],
    [
        'Lebanon, Ohio',
        39.4353373,
        -84.2029922,
        'Ohio',
        'United_States',
        'Lebanon'
    ],
    ['Lima, Ohio', 40.742551, -84.1052256, 'Ohio', 'United_States', 'Lima'],
    [
        'Lisbon, Ohio',
        40.7720044,
        -80.7681336,
        'Ohio',
        'United_States',
        'Lisbon'
    ],
    ['Logan, Ohio', 39.5400672, -82.4070986, 'Ohio', 'United_States', 'Logan'],
    [
        'London, Ohio',
        39.8864493,
        -83.4482529,
        'Ohio',
        'United_States',
        'London'
    ],
    [
        'Macedonia, Ohio',
        41.3174524,
        -81.5047772,
        'Ohio',
        'United_States',
        'Macedonia'
    ],
    [
        'Mansfield, Ohio',
        40.75839,
        -82.5154471,
        'Ohio',
        'United_States',
        'Mansfield'
    ],
    [
        'Marietta, Ohio',
        39.415352,
        -81.4548436,
        'Ohio',
        'United_States',
        'Marietta'
    ],
    [
        'Marion, Ohio',
        40.5886699,
        -83.1285242,
        'Ohio',
        'United_States',
        'Marion'
    ],
    [
        'Marysville, Ohio',
        40.2364486,
        -83.3671432,
        'Ohio',
        'United_States',
        'Marysville'
    ],
    [
        'Massillon, Ohio',
        40.7967244,
        -81.5215093,
        'Ohio',
        'United_States',
        'Massillon'
    ],
    [
        'McArthur, Ohio',
        39.2464596,
        -82.4784898,
        'Ohio',
        'United_States',
        'McArthur'
    ],
    [
        'McConnelsville, Ohio',
        39.6486822,
        -81.8531912,
        'Ohio',
        'United_States',
        'McConnelsville'
    ],
    ['Medina, Ohio', 41.143245, -81.8552196, 'Ohio', 'United_States', 'Medina'],
    ['Mentor, Ohio', 41.6661573, -81.339552, 'Ohio', 'United_States', 'Mentor'],
    [
        'Millersburg, Ohio',
        40.5545071,
        -81.9179198,
        'Ohio',
        'United_States',
        'Millersburg'
    ],
    [
        'Montpelier, Ohio',
        41.5844951,
        -84.6055076,
        'Ohio',
        'United_States',
        'Montpelier'
    ],
    [
        'Montville Observatory Park, Ohio',
        41.6072757,
        -81.0503741,
        'Ohio',
        'United_States',
        'Montville_Observatory_Park'
    ],
    [
        'Mount Gilead, Ohio',
        40.5492265,
        -82.8274014,
        'Ohio',
        'United_States',
        'Mount_Gilead'
    ],
    [
        'Mount Vernon, Ohio',
        40.3933956,
        -82.4857181,
        'Ohio',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Napolean, Ohio',
        41.3922726,
        -84.1252243,
        'Ohio',
        'United_States',
        'Napolean'
    ],
    [
        'Newark, Ohio',
        40.0581205,
        -82.4012642,
        'Ohio',
        'United_States',
        'Newark'
    ],
    [
        'New Lexington, Ohio',
        39.7139578,
        -82.2084804,
        'Ohio',
        'United_States',
        'New_Lexington'
    ],
    [
        'New Philadelphia, Ohio',
        40.4897871,
        -81.4456706,
        'Ohio',
        'United_States',
        'New_Philadelphia'
    ],
    [
        'Norwalk, Ohio',
        41.2425531,
        -82.6157331,
        'Ohio',
        'United_States',
        'Norwalk'
    ],
    [
        'Oberlin, Ohio',
        41.2939386,
        -82.2173786,
        'Ohio',
        'United_States',
        'Oberlin'
    ],
    [
        'Ottawa, Ohio',
        41.0192185,
        -84.0471666,
        'Ohio',
        'United_States',
        'Ottawa'
    ],
    [
        'Painesville, Ohio',
        41.7244885,
        -81.245657,
        'Ohio',
        'United_States',
        'Painesville'
    ],
    [
        'Paulding, Ohio',
        41.1381051,
        -84.5805082,
        'Ohio',
        'United_States',
        'Paulding'
    ],
    [
        'Perrysburg, Ohio',
        41.556996,
        -83.627157,
        'Ohio',
        'United_States',
        'Perrysburg'
    ],
    [
        'Perrys Victory International Peace Memorial, Ohio',
        41.6541053,
        -82.8112519,
        'Ohio',
        'United_States',
        'Perrys_Victory_International_Peace_Memorial'
    ],
    [
        'Pomeroy, Ohio',
        39.0275781,
        -82.033752,
        'Ohio',
        'United_States',
        'Pomeroy'
    ],
    [
        'Portsmouth, Ohio',
        38.7317431,
        -82.9976742,
        'Ohio',
        'United_States',
        'Portsmouth'
    ],
    [
        'Port Clinton, Ohio',
        41.5119954,
        -82.9376919,
        'Ohio',
        'United_States',
        'Port_Clinton'
    ],
    [
        'Ravenna, Ohio',
        41.1575566,
        -81.2420473,
        'Ohio',
        'United_States',
        'Ravenna'
    ],
    [
        'Richmond Heights, Ohio',
        41.5528288,
        -81.5101208,
        'Ohio',
        'United_States',
        'Richmond_Heights'
    ],
    [
        'Rittman, Ohio',
        40.9781103,
        -81.7820775,
        'Ohio',
        'United_States',
        'Rittman'
    ],
    [
        'Saint Clairsville, Ohio',
        40.0803199,
        -80.90176,
        'Ohio',
        'United_States',
        'Saint_Clairsville'
    ],
    ['Salem, Ohio', 40.9008923, -80.8567501, 'Ohio', 'United_States', 'Salem'],
    [
        'Sandusky, Ohio',
        41.4489396,
        -82.7079605,
        'Ohio',
        'United_States',
        'Sandusky'
    ],
    [
        'Seven Mile, Ohio',
        39.480056,
        -84.5518916,
        'Ohio',
        'United_States',
        'Seven_Mile'
    ],
    [
        'Sidney, Ohio',
        40.2842164,
        -84.1554987,
        'Ohio',
        'United_States',
        'Sidney'
    ],
    [
        'Springfield, Ohio',
        39.9242266,
        -83.8088171,
        'Ohio',
        'United_States',
        'Springfield'
    ],
    [
        'Steubenville, Ohio',
        40.3697905,
        -80.6339638,
        'Ohio',
        'United_States',
        'Steubenville'
    ],
    [
        'Tiffin, Ohio',
        41.1144992,
        -83.1779746,
        'Ohio',
        'United_States',
        'Tiffin'
    ],
    ['Toledo, Ohio', 41.6639383, -83.555212, 'Ohio', 'United_States', 'Toledo'],
    ['Troy, Ohio', 40.0394982, -84.2032767, 'Ohio', 'United_States', 'Troy'],
    [
        'Upper Sandusky, Ohio',
        40.8272785,
        -83.2813089,
        'Ohio',
        'United_States',
        'Upper_Sandusky'
    ],
    [
        'Urbana, Ohio',
        40.1083912,
        -83.7524298,
        'Ohio',
        'United_States',
        'Urbana'
    ],
    [
        'Van Wert, Ohio',
        40.8694927,
        -84.5841223,
        'Ohio',
        'United_States',
        'Van_Wert'
    ],
    [
        'Wapakoneta, Ohio',
        40.5678265,
        -84.1935594,
        'Ohio',
        'United_States',
        'Wapakoneta'
    ],
    [
        'Warren, Ohio',
        41.2375569,
        -80.8184166,
        'Ohio',
        'United_States',
        'Warren'
    ],
    [
        'Washington Court House, Ohio',
        39.5364511,
        -83.4390843,
        'Ohio',
        'United_States',
        'Washington_Court_House'
    ],
    [
        'Wauseon, Ohio',
        41.5492182,
        -84.1416147,
        'Ohio',
        'United_States',
        'Wauseon'
    ],
    [
        'Waverly, Ohio',
        39.1267349,
        -82.9854553,
        'Ohio',
        'United_States',
        'Waverly'
    ],
    [
        'Waynesville, Ohio',
        39.5297824,
        -84.086601,
        'Ohio',
        'United_States',
        'Waynesville'
    ],
    [
        'West Union, Ohio',
        38.7945166,
        -83.5451934,
        'Ohio',
        'United_States',
        'West_Union'
    ],
    [
        'Wilmington, Ohio',
        39.4453393,
        -83.8285375,
        'Ohio',
        'United_States',
        'Wilmington'
    ],
    [
        'Woodsfield, Ohio',
        39.7625729,
        -81.1153842,
        'Ohio',
        'United_States',
        'Woodsfield'
    ],
    [
        'Wooster, Ohio',
        40.8050565,
        -81.935143,
        'Ohio',
        'United_States',
        'Wooster'
    ],
    [
        'Wyoming, Ohio',
        39.2311691,
        -84.4657758,
        'Ohio',
        'United_States',
        'Wyoming'
    ],
    ['Xenia, Ohio', 39.6847822, -83.9296526, 'Ohio', 'United_States', 'Xenia'],
    [
        'Youngstown, Ohio',
        41.0997803,
        -80.6495194,
        'Ohio',
        'United_States',
        'Youngstown'
    ],
    [
        'Zanesville, Ohio',
        39.9403453,
        -82.0131924,
        'Ohio',
        'United_States',
        'Zanesville'
    ],
    [
        'Ada, Oklahoma',
        34.774531,
        -96.6783449,
        'Oklahoma',
        'United_States',
        'Ada'
    ],
    [
        'Altus, Oklahoma',
        34.637765,
        -99.3340442,
        'Oklahoma',
        'United_States',
        'Altus'
    ],
    [
        'Alva, Oklahoma',
        36.8050308,
        -98.6664737,
        'Oklahoma',
        'United_States',
        'Alva'
    ],
    [
        'Anadarko, Oklahoma',
        35.072562,
        -98.2436625,
        'Oklahoma',
        'United_States',
        'Anadarko'
    ],
    [
        'Antlers, Oklahoma',
        34.231212,
        -95.6202476,
        'Oklahoma',
        'United_States',
        'Antlers'
    ],
    [
        'Arapaho, Oklahoma',
        35.5778272,
        -98.9645311,
        'Oklahoma',
        'United_States',
        'Arapaho'
    ],
    [
        'Ardmore, Oklahoma',
        34.1742611,
        -97.1436254,
        'Oklahoma',
        'United_States',
        'Ardmore'
    ],
    [
        'Arnett, Oklahoma',
        36.1350421,
        -99.7748383,
        'Oklahoma',
        'United_States',
        'Arnett'
    ],
    [
        'Atoka, Oklahoma',
        34.3859257,
        -96.1283252,
        'Oklahoma',
        'United_States',
        'Atoka'
    ],
    [
        'Bartlesville, Oklahoma',
        36.7473114,
        -95.9808179,
        'Oklahoma',
        'United_States',
        'Bartlesville'
    ],
    [
        'Beaver, Oklahoma',
        36.8161371,
        -100.5198713,
        'Oklahoma',
        'United_States',
        'Beaver'
    ],
    [
        'Boise City, Oklahoma',
        36.7294675,
        -102.5132419,
        'Oklahoma',
        'United_States',
        'Boise_City'
    ],
    [
        'Buffalo, Oklahoma',
        36.8355869,
        -99.6303972,
        'Oklahoma',
        'United_States',
        'Buffalo'
    ],
    [
        'Burns Flat, Oklahoma',
        35.3489397,
        -99.1703617,
        'Oklahoma',
        'United_States',
        'Burns_Flat'
    ],
    [
        'Canute, Oklahoma',
        35.4219943,
        -99.2795337,
        'Oklahoma',
        'United_States',
        'Canute'
    ],
    [
        'Chandler, Oklahoma',
        35.7017314,
        -96.8808582,
        'Oklahoma',
        'United_States',
        'Chandler'
    ],
    [
        'Cherokee, Oklahoma',
        36.7544746,
        -98.3567403,
        'Oklahoma',
        'United_States',
        'Cherokee'
    ],
    [
        'Cheyenne, Oklahoma',
        35.6139371,
        -99.6714939,
        'Oklahoma',
        'United_States',
        'Cheyenne'
    ],
    [
        'Chickasaw National Recreation Area, Oklahoma',
        34.4549277,
        -97.0124677,
        'Oklahoma',
        'United_States',
        'Chickasaw_National_Recreation_Area'
    ],
    [
        'Claremore, Oklahoma',
        36.3125963,
        -95.61609,
        'Oklahoma',
        'United_States',
        'Claremore'
    ],
    [
        'Coalgate, Oklahoma',
        34.5381481,
        -96.2186092,
        'Oklahoma',
        'United_States',
        'Coalgate'
    ],
    [
        'Cordell, Oklahoma',
        35.291271,
        -98.9876227,
        'Oklahoma',
        'United_States',
        'Cordell'
    ],
    [
        'Duncan, Oklahoma',
        34.5023028,
        -97.9578128,
        'Oklahoma',
        'United_States',
        'Duncan'
    ],
    [
        'Durant, Oklahoma',
        33.9924186,
        -96.3971233,
        'Oklahoma',
        'United_States',
        'Durant'
    ],
    [
        'Edmond, Oklahoma',
        35.6528323,
        -97.4780954,
        'Oklahoma',
        'United_States',
        'Edmond'
    ],
    [
        'El Reno, Oklahoma',
        35.5322741,
        -97.9550493,
        'Oklahoma',
        'United_States',
        'El_Reno'
    ],
    [
        'Enid, Oklahoma',
        36.3955891,
        -97.8783911,
        'Oklahoma',
        'United_States',
        'Enid'
    ],
    [
        'Eufaula, Oklahoma',
        35.2873206,
        -95.5824846,
        'Oklahoma',
        'United_States',
        'Eufaula'
    ],
    [
        'Fairview, Oklahoma',
        36.2689248,
        -98.4798009,
        'Oklahoma',
        'United_States',
        'Fairview'
    ],
    [
        'Frederick, Oklahoma',
        34.3920263,
        -99.0184093,
        'Oklahoma',
        'United_States',
        'Frederick'
    ],
    [
        'Grove, Oklahoma',
        36.5936863,
        -94.7691186,
        'Oklahoma',
        'United_States',
        'Grove'
    ],
    [
        'Guthrie, Oklahoma',
        35.878937,
        -97.4253185,
        'Oklahoma',
        'United_States',
        'Guthrie'
    ],
    [
        'Guymon, Oklahoma',
        36.6828041,
        -101.4815493,
        'Oklahoma',
        'United_States',
        'Guymon'
    ],
    [
        'Hobart, Oklahoma',
        35.0295009,
        -99.0931317,
        'Oklahoma',
        'United_States',
        'Hobart'
    ],
    [
        'Holdenville, Oklahoma',
        35.0803617,
        -96.3991765,
        'Oklahoma',
        'United_States',
        'Holdenville'
    ],
    [
        'Hollis, Oklahoma',
        34.6883948,
        -99.9120456,
        'Oklahoma',
        'United_States',
        'Hollis'
    ],
    [
        'Hugo, Oklahoma',
        34.01066,
        -95.5096821,
        'Oklahoma',
        'United_States',
        'Hugo'
    ],
    [
        'Idabel, Oklahoma',
        33.8956647,
        -94.8263281,
        'Oklahoma',
        'United_States',
        'Idabel'
    ],
    [
        'Jay, Oklahoma',
        36.4211914,
        -94.7968959,
        'Oklahoma',
        'United_States',
        'Jay'
    ],
    [
        'Kingfisher, Oklahoma',
        35.861432,
        -97.9317203,
        'Oklahoma',
        'United_States',
        'Kingfisher'
    ],
    [
        'Lawton, Oklahoma',
        34.6035669,
        -98.3959291,
        'Oklahoma',
        'United_States',
        'Lawton'
    ],
    [
        'Madill, Oklahoma',
        34.0903751,
        -96.7716691,
        'Oklahoma',
        'United_States',
        'Madill'
    ],
    [
        'Mangum, Oklahoma',
        34.8720044,
        -99.5042561,
        'Oklahoma',
        'United_States',
        'Mangum'
    ],
    [
        'Marietta, Oklahoma',
        33.937045,
        -97.1166788,
        'Oklahoma',
        'United_States',
        'Marietta'
    ],
    [
        'McAlester, Oklahoma',
        34.9334298,
        -95.7697131,
        'Oklahoma',
        'United_States',
        'McAlester'
    ],
    [
        'Medford, Oklahoma',
        36.8069729,
        -97.7336636,
        'Oklahoma',
        'United_States',
        'Medford'
    ],
    [
        'Miami, Oklahoma',
        36.8745146,
        -94.8774554,
        'Oklahoma',
        'United_States',
        'Miami'
    ],
    [
        'Midwest City, Oklahoma',
        35.4495065,
        -97.3967019,
        'Oklahoma',
        'United_States',
        'Midwest_City'
    ],
    [
        'Moore, Oklahoma',
        35.3395079,
        -97.4867028,
        'Oklahoma',
        'United_States',
        'Moore'
    ],
    [
        'Muskogee, Oklahoma',
        35.7478769,
        -95.3696909,
        'Oklahoma',
        'United_States',
        'Muskogee'
    ],
    [
        'Newkirk, Oklahoma',
        36.8822549,
        -97.0533717,
        'Oklahoma',
        'United_States',
        'Newkirk'
    ],
    [
        'Norman, Oklahoma',
        35.2225668,
        -97.4394777,
        'Oklahoma',
        'United_States',
        'Norman'
    ],
    [
        'Nowata, Oklahoma',
        36.700645,
        -95.6380341,
        'Oklahoma',
        'United_States',
        'Nowata'
    ],
    [
        'Okemah, Oklahoma',
        35.4325854,
        -96.3050064,
        'Oklahoma',
        'United_States',
        'Okemah'
    ],
    [
        'Oklahoma City, Oklahoma',
        35.4675602,
        -97.5164276,
        'Oklahoma',
        'United_States',
        'Oklahoma_City'
    ],
    [
        'Okmulgee, Oklahoma',
        35.6234367,
        -95.9605502,
        'Oklahoma',
        'United_States',
        'Okmulgee'
    ],
    [
        'Pauls Valley, Oklahoma',
        34.7400809,
        -97.2222451,
        'Oklahoma',
        'United_States',
        'Pauls_Valley'
    ],
    [
        'Pawhuska, Oklahoma',
        36.6678426,
        -96.3372309,
        'Oklahoma',
        'United_States',
        'Pawhuska'
    ],
    [
        'Pawnee, Oklahoma',
        36.3378321,
        -96.8039232,
        'Oklahoma',
        'United_States',
        'Pawnee'
    ],
    [
        'Perry, Oklahoma',
        36.2894855,
        -97.2880983,
        'Oklahoma',
        'United_States',
        'Perry'
    ],
    [
        'Ponca City, Oklahoma',
        36.706981,
        -97.0855948,
        'Oklahoma',
        'United_States',
        'Ponca_City'
    ],
    [
        'Poteau, Oklahoma',
        35.0537094,
        -94.6235579,
        'Oklahoma',
        'United_States',
        'Poteau'
    ],
    [
        'Pryor, Oklahoma',
        36.3084275,
        -95.3169136,
        'Oklahoma',
        'United_States',
        'Pryor'
    ],
    [
        'Purcell, Oklahoma',
        35.0136831,
        -97.3611394,
        'Oklahoma',
        'United_States',
        'Purcell'
    ],
    [
        'Sallisaw, Oklahoma',
        35.4603711,
        -94.7874463,
        'Oklahoma',
        'United_States',
        'Sallisaw'
    ],
    [
        'Sapulpa, Oklahoma',
        35.9987007,
        -96.1141664,
        'Oklahoma',
        'United_States',
        'Sapulpa'
    ],
    [
        'Sayre, Oklahoma',
        35.291162,
        -99.6400969,
        'Oklahoma',
        'United_States',
        'Sayre'
    ],
    [
        'Seminole, Oklahoma',
        35.2245201,
        -96.670573,
        'Oklahoma',
        'United_States',
        'Seminole'
    ],
    [
        'Shawnee, Oklahoma',
        35.3272928,
        -96.9253004,
        'Oklahoma',
        'United_States',
        'Shawnee'
    ],
    [
        'Spiro, Oklahoma',
        35.2412073,
        -94.619944,
        'Oklahoma',
        'United_States',
        'Spiro'
    ],
    [
        'Stigler, Oklahoma',
        35.253708,
        -95.1230169,
        'Oklahoma',
        'United_States',
        'Stigler'
    ],
    [
        'Stillwater, Oklahoma',
        36.1156071,
        -97.0583681,
        'Oklahoma',
        'United_States',
        'Stillwater'
    ],
    [
        'Stilwell, Oklahoma',
        35.81453,
        -94.6285553,
        'Oklahoma',
        'United_States',
        'Stilwell'
    ],
    [
        'Sulphur, Oklahoma',
        34.5078669,
        -96.9683498,
        'Oklahoma',
        'United_States',
        'Sulphur'
    ],
    [
        'Tahlequah, Oklahoma',
        35.91537,
        -94.969956,
        'Oklahoma',
        'United_States',
        'Tahlequah'
    ],
    [
        'Talala, Oklahoma',
        36.5298152,
        -95.7013701,
        'Oklahoma',
        'United_States',
        'Talala'
    ],
    [
        'Taloga, Oklahoma',
        36.0386532,
        -98.9637073,
        'Oklahoma',
        'United_States',
        'Taloga'
    ],
    [
        'Texhoma, Oklahoma',
        36.5050267,
        -101.7829416,
        'Oklahoma',
        'United_States',
        'Texhoma'
    ],
    [
        'Tishomingo, Oklahoma',
        34.2362054,
        -96.6786131,
        'Oklahoma',
        'United_States',
        'Tishomingo'
    ],
    [
        'Tulsa, Oklahoma',
        36.1539816,
        -95.992775,
        'Oklahoma',
        'United_States',
        'Tulsa'
    ],
    [
        'Vici, Oklahoma',
        36.1497642,
        -99.2981612,
        'Oklahoma',
        'United_States',
        'Vici'
    ],
    [
        'Vinita, Oklahoma',
        36.6386937,
        -95.1541339,
        'Oklahoma',
        'United_States',
        'Vinita'
    ],
    [
        'Wagoner, Oklahoma',
        35.9595442,
        -95.3694116,
        'Oklahoma',
        'United_States',
        'Wagoner'
    ],
    [
        'Walters, Oklahoma',
        34.3598075,
        -98.3078258,
        'Oklahoma',
        'United_States',
        'Walters'
    ],
    [
        'Washita Battlefield National Historic Site, Oklahoma',
        35.6199266,
        -99.7051547,
        'Oklahoma',
        'United_States',
        'Washita_Battlefield_National_Historic_Site'
    ],
    [
        'Watonga, Oklahoma',
        35.8447654,
        -98.413128,
        'Oklahoma',
        'United_States',
        'Watonga'
    ],
    [
        'Waurika, Oklahoma',
        34.1670371,
        -97.997536,
        'Oklahoma',
        'United_States',
        'Waurika'
    ],
    [
        'Weatherford, Oklahoma',
        35.5261633,
        -98.7075744,
        'Oklahoma',
        'United_States',
        'Weatherford'
    ],
    [
        'Wewoka, Oklahoma',
        35.1586902,
        -96.4933457,
        'Oklahoma',
        'United_States',
        'Wewoka'
    ],
    [
        'Wilburton, Oklahoma',
        34.91871,
        -95.3091383,
        'Oklahoma',
        'United_States',
        'Wilburton'
    ],
    [
        'Woodward, Oklahoma',
        36.4336481,
        -99.3903862,
        'Oklahoma',
        'United_States',
        'Woodward'
    ],
    [
        'Albany, Oregon',
        44.6365107,
        -123.1059282,
        'Oregon',
        'United_States',
        'Albany'
    ],
    [
        'Astoria, Oregon',
        46.1878841,
        -123.8312534,
        'Oregon',
        'United_States',
        'Astoria'
    ],
    [
        'Baker City, Oregon',
        44.7748748,
        -117.8343848,
        'Oregon',
        'United_States',
        'Baker_City'
    ],
    [
        'Bend, Oregon',
        44.0581728,
        -121.3153096,
        'Oregon',
        'United_States',
        'Bend'
    ],
    [
        'Boardman, Oregon',
        45.839855,
        -119.7005834,
        'Oregon',
        'United_States',
        'Boardman'
    ],
    [
        'Brookings, Oregon',
        42.0526114,
        -124.2839819,
        'Oregon',
        'United_States',
        'Brookings'
    ],
    [
        'Burns, Oregon',
        43.5862606,
        -119.0541032,
        'Oregon',
        'United_States',
        'Burns'
    ],
    [
        'Canyon City, Oregon',
        44.3895995,
        -118.9502315,
        'Oregon',
        'United_States',
        'Canyon_City'
    ],
    [
        'Clatskanie, Oregon',
        46.1012219,
        -123.2067863,
        'Oregon',
        'United_States',
        'Clatskanie'
    ],
    [
        'Condon, Oregon',
        45.2342966,
        -120.1850344,
        'Oregon',
        'United_States',
        'Condon'
    ],
    [
        'Coos Bay, Oregon',
        43.3665007,
        -124.2178903,
        'Oregon',
        'United_States',
        'Coos_Bay'
    ],
    [
        'Coquille, Oregon',
        43.1770544,
        -124.1876075,
        'Oregon',
        'United_States',
        'Coquille'
    ],
    [
        'Corvallis, Oregon',
        44.5645659,
        -123.2620435,
        'Oregon',
        'United_States',
        'Corvallis'
    ],
    [
        'Creswell, Oregon',
        43.9179023,
        -123.0245261,
        'Oregon',
        'United_States',
        'Creswell'
    ],
    [
        'Dallas, Oregon',
        44.9192844,
        -123.3170472,
        'Oregon',
        'United_States',
        'Dallas'
    ],
    [
        'Eagle Creek, Oregon',
        45.3575239,
        -122.3588744,
        'Oregon',
        'United_States',
        'Eagle_Creek'
    ],
    [
        'Enterprise, Oregon',
        45.4262617,
        -117.2787815,
        'Oregon',
        'United_States',
        'Enterprise'
    ],
    [
        'Estacada, Oregon',
        45.2895655,
        -122.3336963,
        'Oregon',
        'United_States',
        'Estacada'
    ],
    [
        'Eugene, Oregon',
        44.0520691,
        -123.0867536,
        'Oregon',
        'United_States',
        'Eugene'
    ],
    [
        'Forest Grove, Oregon',
        45.5198364,
        -123.1106631,
        'Oregon',
        'United_States',
        'Forest_Grove'
    ],
    [
        'Fossil, Oregon',
        44.9981864,
        -120.2161373,
        'Oregon',
        'United_States',
        'Fossil'
    ],
    [
        'Gold Beach, Oregon',
        42.4073334,
        -124.421774,
        'Oregon',
        'United_States',
        'Gold_Beach'
    ],
    [
        'Grants Pass, Oregon',
        42.4390069,
        -123.3283925,
        'Oregon',
        'United_States',
        'Grants_Pass'
    ],
    [
        'Heppner, Oregon',
        45.3531842,
        -119.5577997,
        'Oregon',
        'United_States',
        'Heppner'
    ],
    [
        'Hermiston, Oregon',
        45.8404101,
        -119.2894605,
        'Oregon',
        'United_States',
        'Hermiston'
    ],
    [
        'Hillsboro, Oregon',
        45.5228939,
        -122.989827,
        'Oregon',
        'United_States',
        'Hillsboro'
    ],
    [
        'Hood River, Oregon',
        45.7053966,
        -121.5214623,
        'Oregon',
        'United_States',
        'Hood_River'
    ],
    [
        'John Day Fossil Beds National Monument, Oregon',
        44.5445527,
        -119.6319641,
        'Oregon',
        'United_States',
        'John_Day_Fossil_Beds_National_Monument'
    ],
    [
        'Klamath Falls, Oregon',
        42.224867,
        -121.7816704,
        'Oregon',
        'United_States',
        'Klamath_Falls'
    ],
    [
        'Lakeview, Oregon',
        42.1887721,
        -120.345792,
        'Oregon',
        'United_States',
        'Lakeview'
    ],
    [
        'La Grande, Oregon',
        45.3245771,
        -118.0877188,
        'Oregon',
        'United_States',
        'La_Grande'
    ],
    [
        'Madras, Oregon',
        44.6334544,
        -121.1294872,
        'Oregon',
        'United_States',
        'Madras'
    ],
    [
        'Malin, Oregon',
        42.0126551,
        -121.4086021,
        'Oregon',
        'United_States',
        'Malin'
    ],
    [
        'McLoughlin House National Historical Park, Oregon',
        45.3564481,
        -122.5966942,
        'Oregon',
        'United_States',
        'McLoughlin_House_National_Historical_Park'
    ],
    [
        'McMinnville, Oregon',
        45.2101162,
        -123.1987163,
        'Oregon',
        'United_States',
        'McMinnville'
    ],
    [
        'Medford, Oregon',
        42.3265152,
        -122.8755949,
        'Oregon',
        'United_States',
        'Medford'
    ],
    [
        'Monmouth, Oregon',
        44.8484524,
        -123.2339888,
        'Oregon',
        'United_States',
        'Monmouth'
    ],
    [
        'Moro, Oregon',
        45.4840141,
        -120.731168,
        'Oregon',
        'United_States',
        'Moro'
    ],
    [
        'Newberg, Oregon',
        45.3001178,
        -122.9731565,
        'Oregon',
        'United_States',
        'Newberg'
    ],
    [
        'Newport, Oregon',
        44.6367836,
        -124.0534505,
        'Oregon',
        'United_States',
        'Newport'
    ],
    [
        'Oregon Caves National Monument, Oregon',
        42.095462,
        -123.4042885,
        'Oregon',
        'United_States',
        'Oregon_Caves_National_Monument'
    ],
    [
        'Oregon City, Oregon',
        45.3573429,
        -122.6067583,
        'Oregon',
        'United_States',
        'Oregon_City'
    ],
    [
        'Pendleton, Oregon',
        45.672075,
        -118.7885967,
        'Oregon',
        'United_States',
        'Pendleton'
    ],
    [
        'Portland, Oregon',
        45.5230622,
        -122.6764816,
        'Oregon',
        'United_States',
        'Portland'
    ],
    [
        'Prairie City, Oregon',
        44.4632135,
        -118.7099477,
        'Oregon',
        'United_States',
        'Prairie_City'
    ],
    [
        'Prineville, Oregon',
        44.2998485,
        -120.8344664,
        'Oregon',
        'United_States',
        'Prineville'
    ],
    [
        'Redmond, Oregon',
        44.2726203,
        -121.1739212,
        'Oregon',
        'United_States',
        'Redmond'
    ],
    [
        'Roseburg, Oregon',
        43.216505,
        -123.3417381,
        'Oregon',
        'United_States',
        'Roseburg'
    ],
    [
        'Saint Helens, Oregon',
        45.8590111,
        -122.8158185,
        'Oregon',
        'United_States',
        'Saint_Helens'
    ],
    [
        'Salem, Oregon',
        44.9428975,
        -123.0350963,
        'Oregon',
        'United_States',
        'Salem'
    ],
    [
        'Scappoose, Oregon',
        45.7542809,
        -122.8776039,
        'Oregon',
        'United_States',
        'Scappoose'
    ],
    [
        'Stayton, Oregon',
        44.8006775,
        -122.7945333,
        'Oregon',
        'United_States',
        'Stayton'
    ],
    [
        'The Dalles, Oregon',
        45.5945645,
        -121.1786823,
        'Oregon',
        'United_States',
        'The_Dalles'
    ],
    [
        'Tillamook, Oregon',
        45.4562158,
        -123.8440137,
        'Oregon',
        'United_States',
        'Tillamook'
    ],
    [
        'Vale, Oregon',
        43.9821055,
        -117.2382311,
        'Oregon',
        'United_States',
        'Vale'
    ],
    [
        'Yachats, Oregon',
        44.3112312,
        -124.1048418,
        'Oregon',
        'United_States',
        'Yachats'
    ],
    [
        'Abington, Pennsylvania',
        40.1198332,
        -75.1253492,
        'Pennsylvania',
        'United_States',
        'Abington'
    ],
    [
        'Allegheny Portage Railroad National Historic Site, Pennsylvania',
        40.4573318,
        -78.5491776,
        'Pennsylvania',
        'United_States',
        'Allegheny_Portage_Railroad_National_Historic_Site'
    ],
    [
        'Allentown, Pennsylvania',
        40.6084305,
        -75.4901833,
        'Pennsylvania',
        'United_States',
        'Allentown'
    ],
    [
        'Altoona, Pennsylvania',
        40.5186809,
        -78.3947359,
        'Pennsylvania',
        'United_States',
        'Altoona'
    ],
    [
        'Beaver, Pennsylvania',
        40.6953437,
        -80.3047846,
        'Pennsylvania',
        'United_States',
        'Beaver'
    ],
    [
        'Bedford, Pennsylvania',
        40.0186921,
        -78.5039069,
        'Pennsylvania',
        'United_States',
        'Bedford'
    ],
    [
        'Bellefonte, Pennsylvania',
        40.9133943,
        -77.7783348,
        'Pennsylvania',
        'United_States',
        'Bellefonte'
    ],
    [
        'Benjamin Franklin Naitonal Memorial, Pennsylvania',
        39.9582,
        -75.173,
        'Pennsylvania',
        'United_States',
        'Benjamin_Franklin_Naitonal_Memorial'
    ],
    [
        'Bethlehem, Pennsylvania',
        40.6259316,
        -75.3704579,
        'Pennsylvania',
        'United_States',
        'Bethlehem'
    ],
    [
        'Blakeslee, Pennsylvania',
        41.092586,
        -75.5926886,
        'Pennsylvania',
        'United_States',
        'Blakeslee'
    ],
    [
        'Bloomfield, Pennsylvania',
        40.4197907,
        -77.1872047,
        'Pennsylvania',
        'United_States',
        'Bloomfield'
    ],
    [
        'Bloomsburg, Pennsylvania',
        41.003698,
        -76.4549457,
        'Pennsylvania',
        'United_States',
        'Bloomsburg'
    ],
    [
        'Bradford, Pennsylvania',
        41.9564953,
        -78.649163,
        'Pennsylvania',
        'United_States',
        'Bradford'
    ],
    [
        'Brodheadsville, Pennsylvania',
        40.924537,
        -75.3937949,
        'Pennsylvania',
        'United_States',
        'Brodheadsville'
    ],
    [
        'Brookville, Pennsylvania',
        41.1611746,
        -79.0830924,
        'Pennsylvania',
        'United_States',
        'Brookville'
    ],
    [
        'Butler, Pennsylvania',
        40.8611755,
        -79.8953328,
        'Pennsylvania',
        'United_States',
        'Butler'
    ],
    [
        'Carbondale, Pennsylvania',
        41.5736935,
        -75.5018508,
        'Pennsylvania',
        'United_States',
        'Carbondale'
    ],
    [
        'Carlise, Pennsylvania',
        40.2010241,
        -77.2002745,
        'Pennsylvania',
        'United_States',
        'Carlise'
    ],
    [
        'Chambersburg, Pennsylvania',
        39.9375911,
        -77.6611022,
        'Pennsylvania',
        'United_States',
        'Chambersburg'
    ],
    [
        'Clarion, Pennsylvania',
        41.2147851,
        -79.3853218,
        'Pennsylvania',
        'United_States',
        'Clarion'
    ],
    [
        'Clearfield, Pennsylvania',
        41.0272796,
        -78.4391876,
        'Pennsylvania',
        'United_States',
        'Clearfield'
    ],
    [
        'Conneautville, Pennsylvania',
        41.757833,
        -80.3678424,
        'Pennsylvania',
        'United_States',
        'Conneautville'
    ],
    [
        'Coudersport, Pennsylvania',
        41.7747878,
        -78.0205602,
        'Pennsylvania',
        'United_States',
        'Coudersport'
    ],
    [
        'Covode, Pennsylvania',
        40.8808976,
        -79.0155894,
        'Pennsylvania',
        'United_States',
        'Covode'
    ],
    [
        'Danville, Pennsylvania',
        40.96342,
        -76.6127329,
        'Pennsylvania',
        'United_States',
        'Danville'
    ],
    [
        'Dingmans Ferry, Pennsylvania',
        41.2200946,
        -74.8712799,
        'Pennsylvania',
        'United_States',
        'Dingmans_Ferry'
    ],
    [
        'Doylestown, Pennsylvania',
        40.3101063,
        -75.1298939,
        'Pennsylvania',
        'United_States',
        'Doylestown'
    ],
    [
        'Easton, Pennsylvania',
        40.688432,
        -75.2207323,
        'Pennsylvania',
        'United_States',
        'Easton'
    ],
    [
        'East Stroudsburg, Pennsylvania',
        40.9995386,
        -75.1812913,
        'Pennsylvania',
        'United_States',
        'East_Stroudsburg'
    ],
    [
        'Ebensburg, Pennsylvania',
        40.4850717,
        -78.7247426,
        'Pennsylvania',
        'United_States',
        'Ebensburg'
    ],
    [
        'Eisenhower National Historic Site, Pennsylvania',
        39.7939108,
        -77.2633159,
        'Pennsylvania',
        'United_States',
        'Eisenhower_National_Historic_Site'
    ],
    [
        'Elkland, Pennsylvania',
        41.9861838,
        -77.3108127,
        'Pennsylvania',
        'United_States',
        'Elkland'
    ],
    [
        'Emmaus, Pennsylvania',
        40.5395421,
        -75.4968502,
        'Pennsylvania',
        'United_States',
        'Emmaus'
    ],
    [
        'Emporium, Pennsylvania',
        41.5114521,
        -78.2352872,
        'Pennsylvania',
        'United_States',
        'Emporium'
    ],
    [
        'Erie, Pennsylvania',
        42.1292241,
        -80.085059,
        'Pennsylvania',
        'United_States',
        'Erie'
    ],
    [
        'Flight 93 National Memorial, Pennsylvania',
        40.0562227,
        -78.9074281,
        'Pennsylvania',
        'United_States',
        'Flight_93_National_Memorial'
    ],
    [
        'Fort Necessity National Battlefield, Pennsylvania',
        39.812516,
        -79.5912457,
        'Pennsylvania',
        'United_States',
        'Fort_Necessity_National_Battlefield'
    ],
    [
        'Franklin, Pennsylvania',
        41.3978358,
        -79.8314437,
        'Pennsylvania',
        'United_States',
        'Franklin'
    ],
    [
        'Freeland, Pennsylvania',
        41.0167507,
        -75.897143,
        'Pennsylvania',
        'United_States',
        'Freeland'
    ],
    [
        'Friendship Hill National Historic Site, Pennsylvania',
        39.7761533,
        -79.9276651,
        'Pennsylvania',
        'United_States',
        'Friendship_Hill_National_Historic_Site'
    ],
    [
        'Gettysburg, Pennsylvania',
        39.8309293,
        -77.2310955,
        'Pennsylvania',
        'United_States',
        'Gettysburg'
    ],
    [
        'Gettysburg National Military Park, Pennsylvania',
        39.8106438,
        -77.2271061,
        'Pennsylvania',
        'United_States',
        'Gettysburg_National_Military_Park'
    ],
    [
        'Gloria Dei Church National Historic Site, Pennsylvania',
        39.9344,
        -75.144,
        'Pennsylvania',
        'United_States',
        'Gloria_Dei_Church_National_Historic_Site'
    ],
    [
        'Greensburg, Pennsylvania',
        40.3014581,
        -79.5389289,
        'Pennsylvania',
        'United_States',
        'Greensburg'
    ],
    [
        'Grove, Pennsylvania',
        41.3944739,
        -78.0423683,
        'Pennsylvania',
        'United_States',
        'Grove'
    ],
    [
        'Hanover, Pennsylvania',
        39.8006553,
        -76.9830358,
        'Pennsylvania',
        'United_States',
        'Hanover'
    ],
    [
        'Harmony, Pennsylvania',
        40.801454,
        -80.1272826,
        'Pennsylvania',
        'United_States',
        'Harmony'
    ],
    [
        'Harrisburg, Pennsylvania',
        40.2731911,
        -76.8867008,
        'Pennsylvania',
        'United_States',
        'Harrisburg'
    ],
    [
        'Hazelton, Pennsylvania',
        40.9584181,
        -75.9746472,
        'Pennsylvania',
        'United_States',
        'Hazelton'
    ],
    [
        'Holland, Pennsylvania',
        40.2010288,
        -74.9722322,
        'Pennsylvania',
        'United_States',
        'Holland'
    ],
    [
        'Hollidaysburg, Pennsylvania',
        40.4272949,
        -78.3889024,
        'Pennsylvania',
        'United_States',
        'Hollidaysburg'
    ],
    [
        'Honesdale, Pennsylvania',
        41.5767552,
        -75.2587871,
        'Pennsylvania',
        'United_States',
        'Honesdale'
    ],
    [
        'Hopewell Furnace National Historic Site, Pennsylvania',
        40.2065349,
        -75.7679859,
        'Pennsylvania',
        'United_States',
        'Hopewell_Furnace_National_Historic_Site'
    ],
    [
        'Hulmeville, Pennsylvania',
        40.1431655,
        -74.9109996,
        'Pennsylvania',
        'United_States',
        'Hulmeville'
    ],
    [
        'Huntingdon, Pennsylvania',
        40.4847959,
        -78.0102813,
        'Pennsylvania',
        'United_States',
        'Huntingdon'
    ],
    [
        'Independence National Historical Park, Pennsylvania',
        39.9495312,
        -75.1497319,
        'Pennsylvania',
        'United_States',
        'Independence_National_Historical_Park'
    ],
    [
        'Indiana, Pennsylvania',
        40.6214551,
        -79.1525349,
        'Pennsylvania',
        'United_States',
        'Indiana'
    ],
    [
        'Industry, Pennsylvania',
        40.6445099,
        -80.4161761,
        'Pennsylvania',
        'United_States',
        'Industry'
    ],
    [
        'Jeanette, Pennsylvania',
        40.3281246,
        -79.6153198,
        'Pennsylvania',
        'United_States',
        'Jeanette'
    ],
    [
        'Jersey Shore, Pennsylvania',
        41.2020171,
        -77.2644152,
        'Pennsylvania',
        'United_States',
        'Jersey_Shore'
    ],
    [
        'Jim Thorpe, Pennsylvania',
        40.8759235,
        -75.7324127,
        'Pennsylvania',
        'United_States',
        'Jim_Thorpe'
    ],
    [
        'Johnstown, Pennsylvania',
        40.3267407,
        -78.9219698,
        'Pennsylvania',
        'United_States',
        'Johnstown'
    ],
    [
        'Johnstown Flood National Memorial, Pennsylvania',
        40.3460445,
        -78.7744273,
        'Pennsylvania',
        'United_States',
        'Johnstown_Flood_National_Memorial'
    ],
    [
        'Kane, Pennsylvania',
        41.6628394,
        -78.8111427,
        'Pennsylvania',
        'United_States',
        'Kane'
    ],
    [
        'Kittanning, Pennsylvania',
        40.816453,
        -79.5219893,
        'Pennsylvania',
        'United_States',
        'Kittanning'
    ],
    [
        'Lancaster, Pennsylvania',
        40.0378755,
        -76.3055144,
        'Pennsylvania',
        'United_States',
        'Lancaster'
    ],
    [
        'Landisburg, Pennsylvania',
        40.3425843,
        -77.3072071,
        'Pennsylvania',
        'United_States',
        'Landisburg'
    ],
    [
        'Langhorne, Pennsylvania',
        40.1745538,
        -74.9226665,
        'Pennsylvania',
        'United_States',
        'Langhorne'
    ],
    [
        'Lansdale, Pennsylvania',
        40.2414952,
        -75.2837862,
        'Pennsylvania',
        'United_States',
        'Lansdale'
    ],
    [
        'Laporte, Pennsylvania',
        41.4239666,
        -76.494113,
        'Pennsylvania',
        'United_States',
        'Laporte'
    ],
    [
        'Lebanon, Pennsylvania',
        40.3409251,
        -76.4113497,
        'Pennsylvania',
        'United_States',
        'Lebanon'
    ],
    [
        'Lehighton, Pennsylvania',
        40.8337029,
        -75.7138008,
        'Pennsylvania',
        'United_States',
        'Lehighton'
    ],
    [
        'Lewisburg, Pennsylvania',
        40.9645293,
        -76.8844101,
        'Pennsylvania',
        'United_States',
        'Lewisburg'
    ],
    [
        'Lewistown, Pennsylvania',
        40.5992395,
        -77.571382,
        'Pennsylvania',
        'United_States',
        'Lewistown'
    ],
    [
        'Lock Haven, Pennsylvania',
        41.1370133,
        -77.4469263,
        'Pennsylvania',
        'United_States',
        'Lock_Haven'
    ],
    [
        'Mansfield, Pennsylvania',
        41.8072961,
        -77.077468,
        'Pennsylvania',
        'United_States',
        'Mansfield'
    ],
    [
        'Marienville, Pennsylvania',
        41.4691472,
        -79.1235013,
        'Pennsylvania',
        'United_States',
        'Marienville'
    ],
    [
        'McConnellsburg, Pennsylvania',
        39.932589,
        -77.9988906,
        'Pennsylvania',
        'United_States',
        'McConnellsburg'
    ],
    [
        'Meadville, Pennsylvania',
        41.6414438,
        -80.1514484,
        'Pennsylvania',
        'United_States',
        'Meadville'
    ],
    [
        'Mechanicsburg, Pennsylvania',
        40.2142565,
        -77.0085876,
        'Pennsylvania',
        'United_States',
        'Mechanicsburg'
    ],
    [
        'Media, Pennsylvania',
        39.9167783,
        -75.387693,
        'Pennsylvania',
        'United_States',
        'Media'
    ],
    [
        'Mercer, Pennsylvania',
        41.2270025,
        -80.2397852,
        'Pennsylvania',
        'United_States',
        'Mercer'
    ],
    [
        'Middleburg, Pennsylvania',
        40.7859166,
        -77.0472027,
        'Pennsylvania',
        'United_States',
        'Middleburg'
    ],
    [
        'Mifflintown, Pennsylvania',
        40.5697996,
        -77.3969338,
        'Pennsylvania',
        'United_States',
        'Mifflintown'
    ],
    [
        'Milford, Pennsylvania',
        41.322316,
        -74.8023882,
        'Pennsylvania',
        'United_States',
        'Milford'
    ],
    [
        'Montrose, Pennsylvania',
        41.8339653,
        -75.8771388,
        'Pennsylvania',
        'United_States',
        'Montrose'
    ],
    [
        'Mont Alto, Pennsylvania',
        39.8442593,
        -77.5583232,
        'Pennsylvania',
        'United_States',
        'Mont_Alto'
    ],
    [
        'Morrisville, Pennsylvania',
        40.2114977,
        -74.7879399,
        'Pennsylvania',
        'United_States',
        'Morrisville'
    ],
    [
        'Mountain Top, Pennsylvania',
        41.1695269,
        -75.877419,
        'Pennsylvania',
        'United_States',
        'Mountain_Top'
    ],
    [
        'Murrysville, Pennsylvania',
        40.4284015,
        -79.697545,
        'Pennsylvania',
        'United_States',
        'Murrysville'
    ],
    [
        'Nanticoke, Pennsylvania',
        41.2053599,
        -76.004923,
        'Pennsylvania',
        'United_States',
        'Nanticoke'
    ],
    [
        'Newtown, Pennsylvania',
        40.2283371,
        -74.9322596,
        'Pennsylvania',
        'United_States',
        'Newtown'
    ],
    [
        'New Bethlehem, Pennsylvania',
        41.0017319,
        -79.3314297,
        'Pennsylvania',
        'United_States',
        'New_Bethlehem'
    ],
    [
        'New Castle, Pennsylvania',
        41.0036719,
        -80.347009,
        'Pennsylvania',
        'United_States',
        'New_Castle'
    ],
    [
        'New London, Pennsylvania',
        39.7826095,
        -75.8754973,
        'Pennsylvania',
        'United_States',
        'New_London'
    ],
    [
        'New Tripoli, Pennsylvania',
        40.681007,
        -75.752039,
        'Pennsylvania',
        'United_States',
        'New_Tripoli'
    ],
    [
        'Norristown, Pennsylvania',
        40.121497,
        -75.3399048,
        'Pennsylvania',
        'United_States',
        'Norristown'
    ],
    [
        'Northampton, Pennsylvania',
        40.6862075,
        -75.4968501,
        'Pennsylvania',
        'United_States',
        'Northampton'
    ],
    [
        'North Wales, Pennsylvania',
        40.2109404,
        -75.2782317,
        'Pennsylvania',
        'United_States',
        'North_Wales'
    ],
    [
        'Philadelphia, Pennsylvania',
        39.9525839,
        -75.1652215,
        'Pennsylvania',
        'United_States',
        'Philadelphia'
    ],
    [
        'Phoenixville, Pennsylvania',
        40.1303822,
        -75.5149128,
        'Pennsylvania',
        'United_States',
        'Phoenixville'
    ],
    [
        'Pittsburgh, Pennsylvania',
        40.4406248,
        -79.9958864,
        'Pennsylvania',
        'United_States',
        'Pittsburgh'
    ],
    [
        'Pottstown, Pennsylvania',
        40.2453741,
        -75.6496302,
        'Pennsylvania',
        'United_States',
        'Pottstown'
    ],
    [
        'Pottsville, Pennsylvania',
        40.6856456,
        -76.195499,
        'Pennsylvania',
        'United_States',
        'Pottsville'
    ],
    [
        'Punxsutawney, Pennsylvania',
        40.9436753,
        -78.9708668,
        'Pennsylvania',
        'United_States',
        'Punxsutawney'
    ],
    [
        'Quakertown, Pennsylvania',
        40.4417682,
        -75.3415667,
        'Pennsylvania',
        'United_States',
        'Quakertown'
    ],
    [
        'Reading, Pennsylvania',
        40.3356483,
        -75.9268747,
        'Pennsylvania',
        'United_States',
        'Reading'
    ],
    [
        'Reedsville, Pennsylvania',
        40.6639587,
        -77.595828,
        'Pennsylvania',
        'United_States',
        'Reedsville'
    ],
    [
        'Ridgway, Pennsylvania',
        41.4203391,
        -78.7286388,
        'Pennsylvania',
        'United_States',
        'Ridgway'
    ],
    [
        'Saint Marys, Pennsylvania',
        41.4273738,
        -78.5609398,
        'Pennsylvania',
        'United_States',
        'Saint_Marys'
    ],
    [
        'Scranton, Pennsylvania',
        41.408969,
        -75.6624122,
        'Pennsylvania',
        'United_States',
        'Scranton'
    ],
    [
        'Sharon, Pennsylvania',
        41.2331116,
        -80.4934035,
        'Pennsylvania',
        'United_States',
        'Sharon'
    ],
    [
        'Shippensburg, Pennsylvania',
        40.0506453,
        -77.5202647,
        'Pennsylvania',
        'United_States',
        'Shippensburg'
    ],
    [
        'Slippery Rock, Pennsylvania',
        41.0639506,
        -80.0564468,
        'Pennsylvania',
        'United_States',
        'Slippery_Rock'
    ],
    [
        'Smethport, Pennsylvania',
        41.8111748,
        -78.4447413,
        'Pennsylvania',
        'United_States',
        'Smethport'
    ],
    [
        'Somerset, Pennsylvania',
        40.008411,
        -79.0780831,
        'Pennsylvania',
        'United_States',
        'Somerset'
    ],
    [
        'Stahlstown, Pennsylvania',
        40.1501938,
        -79.3331899,
        'Pennsylvania',
        'United_States',
        'Stahlstown'
    ],
    [
        'State College, Pennsylvania',
        40.7933949,
        -77.8600012,
        'Pennsylvania',
        'United_States',
        'State_College'
    ],
    [
        'Steamtown National Historic Site, Pennsylvania',
        41.410776,
        -75.671335,
        'Pennsylvania',
        'United_States',
        'Steamtown_National_Historic_Site'
    ],
    [
        'Stroudsburg, Pennsylvania',
        40.9867609,
        -75.1946248,
        'Pennsylvania',
        'United_States',
        'Stroudsburg'
    ],
    [
        'Sunbury, Pennsylvania',
        40.862585,
        -76.7944104,
        'Pennsylvania',
        'United_States',
        'Sunbury'
    ],
    [
        'Thaddeus Kosciuszko National Memorial, Pennsylvania',
        39.9434051,
        -75.1472707,
        'Pennsylvania',
        'United_States',
        'Thaddeus_Kosciuszko_National_Memorial'
    ],
    [
        'Tionesta, Pennsylvania',
        41.49534,
        -79.4558798,
        'Pennsylvania',
        'United_States',
        'Tionesta'
    ],
    [
        'Towanda, Pennsylvania',
        41.767575,
        -76.4427188,
        'Pennsylvania',
        'United_States',
        'Towanda'
    ],
    [
        'Tunkhannok, Pennsylvania',
        41.5386878,
        -75.946588,
        'Pennsylvania',
        'United_States',
        'Tunkhannok'
    ],
    [
        'Uniontown, Pennsylvania',
        39.900076,
        -79.7164326,
        'Pennsylvania',
        'United_States',
        'Uniontown'
    ],
    [
        'Upper Delaware Scenic and Recreational River, Pennsylvania',
        41.6192402,
        -75.0513249,
        'Pennsylvania',
        'United_States',
        'Upper_Delaware_Scenic_and_Recreational_River'
    ],
    [
        'Valley Forge, Pennsylvania',
        40.0970506,
        -75.4696358,
        'Pennsylvania',
        'United_States',
        'Valley_Forge'
    ],
    [
        'Valley Forge National Historical Park, Pennsylvania',
        40.100145,
        -75.4301963,
        'Pennsylvania',
        'United_States',
        'Valley_Forge_National_Historical_Park'
    ],
    [
        'Warminster, Pennsylvania',
        40.2067884,
        -75.099807,
        'Pennsylvania',
        'United_States',
        'Warminster'
    ],
    [
        'Warren, Pennsylvania',
        41.8439486,
        -79.1450445,
        'Pennsylvania',
        'United_States',
        'Warren'
    ],
    [
        'Washington, Pennsylvania',
        40.17396,
        -80.2461714,
        'Pennsylvania',
        'United_States',
        'Washington'
    ],
    [
        'Waynesboro, Pennsylvania',
        39.755927,
        -77.5777692,
        'Pennsylvania',
        'United_States',
        'Waynesboro'
    ],
    [
        'Waynesburg, Pennsylvania',
        39.8964641,
        -80.1792299,
        'Pennsylvania',
        'United_States',
        'Waynesburg'
    ],
    [
        'Wellsboro, Pennsylvania',
        41.7486838,
        -77.3005304,
        'Pennsylvania',
        'United_States',
        'Wellsboro'
    ],
    [
        'Westover, Pennsylvania',
        40.7503421,
        -78.6708604,
        'Pennsylvania',
        'United_States',
        'Westover'
    ],
    [
        'West Chester, Pennsylvania',
        39.9606643,
        -75.6054882,
        'Pennsylvania',
        'United_States',
        'West_Chester'
    ],
    [
        'West Springfield, Pennsylvania',
        41.9458892,
        -80.4742366,
        'Pennsylvania',
        'United_States',
        'West_Springfield'
    ],
    [
        'Wilkes-Barre, Pennsylvania',
        41.2459149,
        -75.8813075,
        'Pennsylvania',
        'United_States',
        'Wilkes-Barre'
    ],
    [
        'Williamsport, Pennsylvania',
        41.2411897,
        -77.0010786,
        'Pennsylvania',
        'United_States',
        'Williamsport'
    ],
    [
        'Willow Grove, Pennsylvania',
        40.1439985,
        -75.1157286,
        'Pennsylvania',
        'United_States',
        'Willow_Grove'
    ],
    [
        'Wysox, Pennsylvania',
        41.7745194,
        -76.3993837,
        'Pennsylvania',
        'United_States',
        'Wysox'
    ],
    [
        'York, Pennsylvania',
        39.9625984,
        -76.727745,
        'Pennsylvania',
        'United_States',
        'York'
    ],
    [
        'Arecibo, Puerto Rico',
        18.444247,
        -66.646407,
        'Puerto_Rico',
        'United_States',
        'Arecibo'
    ],
    [
        'Humacao, Puerto Rico',
        18.149683,
        -65.827385,
        'Puerto_Rico',
        'United_States',
        'Humacao'
    ],
    [
        'Mayaguez, Puerto Rico',
        18.201346,
        -67.145152,
        'Puerto_Rico',
        'United_States',
        'Mayaguez'
    ],
    [
        'Ponce, Puerto Rico',
        18.004089,
        -66.5842402,
        'Puerto_Rico',
        'United_States',
        'Ponce'
    ],
    [
        'San Juan, Puerto Rico',
        18.4663338,
        -66.1057217,
        'Puerto_Rico',
        'United_States',
        'San_Juan'
    ],
    [
        'Vega Alta, Puerto Rico',
        18.4121703,
        -66.3312805,
        'Puerto_Rico',
        'United_States',
        'Vega_Alta'
    ],
    [
        'Bristol, Rhode Island',
        41.6771101,
        -71.2662025,
        'Rhode_Island',
        'United_States',
        'Bristol'
    ],
    [
        'Charlestown, Rhode Island',
        41.3832162,
        -71.6418744,
        'Rhode_Island',
        'United_States',
        'Charlestown'
    ],
    [
        'Coventry, Rhode Island',
        41.6885978,
        -71.5642076,
        'Rhode_Island',
        'United_States',
        'Coventry'
    ],
    [
        'East Greenwich, Rhode Island',
        41.6342619,
        -71.5130445,
        'Rhode_Island',
        'United_States',
        'East_Greenwich'
    ],
    [
        'Narragansett, Rhode Island',
        41.4500844,
        -71.449503,
        'Rhode_Island',
        'United_States',
        'Narragansett'
    ],
    [
        'Newport, Rhode Island',
        41.4901024,
        -71.3128285,
        'Rhode_Island',
        'United_States',
        'Newport'
    ],
    [
        'Portsmouth, Rhode Island',
        41.6023245,
        -71.2503257,
        'Rhode_Island',
        'United_States',
        'Portsmouth'
    ],
    [
        'Providence, Rhode Island',
        41.8239891,
        -71.4128343,
        'Rhode_Island',
        'United_States',
        'Providence'
    ],
    [
        'South Kingstown, Rhode Island',
        41.4475686,
        -71.524667,
        'Rhode_Island',
        'United_States',
        'South_Kingstown'
    ],
    [
        'Tiverton, Rhode Island',
        41.6259211,
        -71.2134231,
        'Rhode_Island',
        'United_States',
        'Tiverton'
    ],
    [
        'Abbeville, South Carolina',
        34.1781719,
        -82.3790147,
        'South_Carolina',
        'United_States',
        'Abbeville'
    ],
    [
        'Aiken, South Carolina',
        33.5604168,
        -81.7195533,
        'South_Carolina',
        'United_States',
        'Aiken'
    ],
    [
        'Allendale, South Carolina',
        33.0079345,
        -81.3084405,
        'South_Carolina',
        'United_States',
        'Allendale'
    ],
    [
        'Anderson, South Carolina',
        34.5034394,
        -82.6501332,
        'South_Carolina',
        'United_States',
        'Anderson'
    ],
    [
        'Bamberg, South Carolina',
        33.2971012,
        -81.0348202,
        'South_Carolina',
        'United_States',
        'Bamberg'
    ],
    [
        'Barnwell, South Carolina',
        33.2448733,
        -81.3587177,
        'South_Carolina',
        'United_States',
        'Barnwell'
    ],
    [
        'Beaufort, South Carolina',
        32.4315813,
        -80.6698286,
        'South_Carolina',
        'United_States',
        'Beaufort'
    ],
    [
        'Bennettsville, South Carolina',
        34.6173803,
        -79.6847814,
        'South_Carolina',
        'United_States',
        'Bennettsville'
    ],
    [
        'Bishopville, South Carolina',
        34.2182107,
        -80.2484056,
        'South_Carolina',
        'United_States',
        'Bishopville'
    ],
    [
        'Bluffton, South Carolina',
        32.2371465,
        -80.8603868,
        'South_Carolina',
        'United_States',
        'Bluffton'
    ],
    [
        'Camden, South Carolina',
        34.2465393,
        -80.6070237,
        'South_Carolina',
        'United_States',
        'Camden'
    ],
    [
        'Charleston, South Carolina',
        32.7764749,
        -79.9310512,
        'South_Carolina',
        'United_States',
        'Charleston'
    ],
    [
        'Charles Pinckney National Historic Site, South Carolina',
        32.847027,
        -79.823387,
        'South_Carolina',
        'United_States',
        'Charles_Pinckney_National_Historic_Site'
    ],
    [
        'Chester, South Carolina',
        34.7048613,
        -81.2142561,
        'South_Carolina',
        'United_States',
        'Chester'
    ],
    [
        'Chesterfield, South Carolina',
        34.7359889,
        -80.0881194,
        'South_Carolina',
        'United_States',
        'Chesterfield'
    ],
    [
        'Clemson, South Carolina',
        34.6834382,
        -82.8373654,
        'South_Carolina',
        'United_States',
        'Clemson'
    ],
    [
        'Columbia, South Carolina',
        34.0007104,
        -81.0348144,
        'South_Carolina',
        'United_States',
        'Columbia'
    ],
    [
        'Congaree National Park, South Carolina',
        33.7949998,
        -80.7711458,
        'South_Carolina',
        'United_States',
        'Congaree_National_Park'
    ],
    [
        'Conway, South Carolina',
        33.8360034,
        -79.0478143,
        'South_Carolina',
        'United_States',
        'Conway'
    ],
    [
        'Cowpens National Battlefield, South Carolina',
        35.132708,
        -81.8087721,
        'South_Carolina',
        'United_States',
        'Cowpens_National_Battlefield'
    ],
    [
        'Darlington, South Carolina',
        34.2998762,
        -79.8761741,
        'South_Carolina',
        'United_States',
        'Darlington'
    ],
    [
        'Dillon, South Carolina',
        34.4165505,
        -79.3711579,
        'South_Carolina',
        'United_States',
        'Dillon'
    ],
    [
        'Edgefield, South Carolina',
        33.7895774,
        -81.9295582,
        'South_Carolina',
        'United_States',
        'Edgefield'
    ],
    [
        'Florence, South Carolina',
        34.1954331,
        -79.7625625,
        'South_Carolina',
        'United_States',
        'Florence'
    ],
    [
        'Fort Sumter National Monument, South Carolina',
        32.7523476,
        -79.8746925,
        'South_Carolina',
        'United_States',
        'Fort_Sumter_National_Monument'
    ],
    [
        'Gaffney, South Carolina',
        35.0717945,
        -81.6498195,
        'South_Carolina',
        'United_States',
        'Gaffney'
    ],
    [
        'Georgetown, South Carolina',
        33.376834,
        -79.2944964,
        'South_Carolina',
        'United_States',
        'Georgetown'
    ],
    [
        'Greenville, South Carolina',
        34.8526176,
        -82.3940104,
        'South_Carolina',
        'United_States',
        'Greenville'
    ],
    [
        'Greenwood, South Carolina',
        34.1954001,
        -82.1617883,
        'South_Carolina',
        'United_States',
        'Greenwood'
    ],
    [
        'Hampton, South Carolina',
        32.8779425,
        -81.1276052,
        'South_Carolina',
        'United_States',
        'Hampton'
    ],
    [
        'Hopkins, South Carolina',
        33.9043212,
        -80.8770342,
        'South_Carolina',
        'United_States',
        'Hopkins'
    ],
    [
        'Kingstree, South Carolina',
        33.6676643,
        -79.8306264,
        'South_Carolina',
        'United_States',
        'Kingstree'
    ],
    [
        'Kings Mountain National Military Park, South Carolina',
        35.1403681,
        -81.3897766,
        'South_Carolina',
        'United_States',
        'Kings_Mountain_National_Military_Park'
    ],
    [
        'Lake View, South Carolina',
        34.3457189,
        -79.1655946,
        'South_Carolina',
        'United_States',
        'Lake_View'
    ],
    [
        'Lancaster, South Carolina',
        34.7204257,
        -80.7709014,
        'South_Carolina',
        'United_States',
        'Lancaster'
    ],
    [
        'Laurens, South Carolina',
        34.4990116,
        -82.0142597,
        'South_Carolina',
        'United_States',
        'Laurens'
    ],
    [
        'Lexington, South Carolina',
        33.9815369,
        -81.2362107,
        'South_Carolina',
        'United_States',
        'Lexington'
    ],
    [
        'Lynchburg, South Carolina',
        34.0601571,
        -80.07146,
        'South_Carolina',
        'United_States',
        'Lynchburg'
    ],
    [
        'Manning, South Carolina',
        33.6951627,
        -80.2109134,
        'South_Carolina',
        'United_States',
        'Manning'
    ],
    [
        'Marion, South Carolina',
        34.178216,
        -79.4006069,
        'South_Carolina',
        'United_States',
        'Marion'
    ],
    [
        'McCormick, South Carolina',
        33.9134577,
        -82.2934585,
        'South_Carolina',
        'United_States',
        'McCormick'
    ],
    [
        'Moncks Corner, South Carolina',
        33.1960027,
        -80.0131374,
        'South_Carolina',
        'United_States',
        'Moncks_Corner'
    ],
    [
        'Myrtle Beach, South Carolina',
        33.6890603,
        -78.8866943,
        'South_Carolina',
        'United_States',
        'Myrtle_Beach'
    ],
    [
        'Newberry, South Carolina',
        34.2745833,
        -81.6187178,
        'South_Carolina',
        'United_States',
        'Newberry'
    ],
    [
        'Ninety Six, South Carolina',
        34.1751267,
        -82.024007,
        'South_Carolina',
        'United_States',
        'Ninety_Six'
    ],
    [
        'Ninety Six National Historic Site, South Carolina',
        34.142987,
        -82.0161269,
        'South_Carolina',
        'United_States',
        'Ninety_Six_National_Historic_Site'
    ],
    [
        'Orangeburg, South Carolina',
        33.4918203,
        -80.8556476,
        'South_Carolina',
        'United_States',
        'Orangeburg'
    ],
    [
        'Pickens, South Carolina',
        34.8834489,
        -82.7073573,
        'South_Carolina',
        'United_States',
        'Pickens'
    ],
    [
        'Ridgeland, South Carolina',
        32.4807435,
        -80.980386,
        'South_Carolina',
        'United_States',
        'Ridgeland'
    ],
    [
        'Saint George, South Carolina',
        33.1859958,
        -80.5756533,
        'South_Carolina',
        'United_States',
        'Saint_George'
    ],
    [
        'Saint Matthews, South Carolina',
        33.664876,
        -80.7778681,
        'South_Carolina',
        'United_States',
        'Saint_Matthews'
    ],
    [
        'Saluda, South Carolina',
        34.0015232,
        -81.7720522,
        'South_Carolina',
        'United_States',
        'Saluda'
    ],
    [
        'Seneca, South Carolina',
        34.6856555,
        -82.9532036,
        'South_Carolina',
        'United_States',
        'Seneca'
    ],
    [
        'Spartanburg, South Carolina',
        34.9495672,
        -81.9320482,
        'South_Carolina',
        'United_States',
        'Spartanburg'
    ],
    [
        'Sumter, South Carolina',
        33.9204354,
        -80.3414693,
        'South_Carolina',
        'United_States',
        'Sumter'
    ],
    [
        'Union, South Carolina',
        34.7154122,
        -81.623711,
        'South_Carolina',
        'United_States',
        'Union'
    ],
    [
        'Walhalla, South Carolina',
        34.7648176,
        -83.0640417,
        'South_Carolina',
        'United_States',
        'Walhalla'
    ],
    [
        'Walterboro, South Carolina',
        32.9051704,
        -80.6667688,
        'South_Carolina',
        'United_States',
        'Walterboro'
    ],
    [
        'Williamston, South Carolina',
        34.6184471,
        -82.4779053,
        'South_Carolina',
        'United_States',
        'Williamston'
    ],
    [
        'Winnsboro, South Carolina',
        34.3807012,
        -81.0864776,
        'South_Carolina',
        'United_States',
        'Winnsboro'
    ],
    [
        'York, South Carolina',
        34.9943021,
        -81.2420175,
        'South_Carolina',
        'United_States',
        'York'
    ],
    [
        'Aberdeen, South Dakota',
        45.4646985,
        -98.4864829,
        'South_Dakota',
        'United_States',
        'Aberdeen'
    ],
    [
        'Alexandria, South Dakota',
        43.653592,
        -97.7828482,
        'South_Dakota',
        'United_States',
        'Alexandria'
    ],
    [
        'Armour, South Dakota',
        43.3186012,
        -98.3467455,
        'South_Dakota',
        'United_States',
        'Armour'
    ],
    [
        'Badlands National Park, South Dakota',
        43.8553804,
        -102.3396912,
        'South_Dakota',
        'United_States',
        'Badlands_National_Park'
    ],
    [
        'Bell Fourche, South Dakota',
        44.6713733,
        -103.852148,
        'South_Dakota',
        'United_States',
        'Bell_Fourche'
    ],
    [
        'Bison, South Dakota',
        45.5202647,
        -102.4612708,
        'South_Dakota',
        'United_States',
        'Bison'
    ],
    [
        'Britton, South Dakota',
        45.7916192,
        -97.7509366,
        'South_Dakota',
        'United_States',
        'Britton'
    ],
    [
        'Brookings, South Dakota',
        44.3113573,
        -96.7983877,
        'South_Dakota',
        'United_States',
        'Brookings'
    ],
    [
        'Buffalo, South Dakota',
        45.5841637,
        -103.5460251,
        'South_Dakota',
        'United_States',
        'Buffalo'
    ],
    [
        'Burke, South Dakota',
        43.1824998,
        -99.2920453,
        'South_Dakota',
        'United_States',
        'Burke'
    ],
    [
        'Canton, South Dakota',
        43.3008146,
        -96.5928198,
        'South_Dakota',
        'United_States',
        'Canton'
    ],
    [
        'Chamberlain, South Dakota',
        43.810828,
        -99.3306556,
        'South_Dakota',
        'United_States',
        'Chamberlain'
    ],
    [
        'Clark, South Dakota',
        44.877743,
        -97.7331411,
        'South_Dakota',
        'United_States',
        'Clark'
    ],
    [
        'Clear Lake, South Dakota',
        44.7535482,
        -96.679851,
        'South_Dakota',
        'United_States',
        'Clear_Lake'
    ],
    [
        'Custer, South Dakota',
        43.7666507,
        -103.5988057,
        'South_Dakota',
        'United_States',
        'Custer'
    ],
    [
        'Deadwood, South Dakota',
        44.376651,
        -103.7296415,
        'South_Dakota',
        'United_States',
        'Deadwood'
    ],
    [
        'De Smet, South Dakota',
        44.3874696,
        -97.5503541,
        'South_Dakota',
        'United_States',
        'De_Smet'
    ],
    [
        'Durpee, South Dakota',
        45.0474815,
        -101.6009896,
        'South_Dakota',
        'United_States',
        'Durpee'
    ],
    [
        'Elk Point, South Dakota',
        42.6833303,
        -96.6836475,
        'South_Dakota',
        'United_States',
        'Elk_Point'
    ],
    [
        'Faulkton, South Dakota',
        45.0349743,
        -99.1239979,
        'South_Dakota',
        'United_States',
        'Faulkton'
    ],
    [
        'Flandreau, South Dakota',
        44.0494154,
        -96.595324,
        'South_Dakota',
        'United_States',
        'Flandreau'
    ],
    [
        'Fort Pierre, South Dakota',
        44.3535933,
        -100.3737447,
        'South_Dakota',
        'United_States',
        'Fort_Pierre'
    ],
    [
        'Gann Valley, South Dakota',
        44.0327059,
        -98.9879382,
        'South_Dakota',
        'United_States',
        'Gann_Valley'
    ],
    [
        'Gettysburg, South Dakota',
        45.0116474,
        -99.9556728,
        'South_Dakota',
        'United_States',
        'Gettysburg'
    ],
    [
        'Hayti, South Dakota',
        44.6571872,
        -97.2050728,
        'South_Dakota',
        'United_States',
        'Hayti'
    ],
    [
        'Highmore, South Dakota',
        44.5213731,
        -99.4415007,
        'South_Dakota',
        'United_States',
        'Highmore'
    ],
    [
        'Hot Springs, South Dakota',
        43.431646,
        -103.4743625,
        'South_Dakota',
        'United_States',
        'Hot_Springs'
    ],
    [
        'Howard, South Dakota',
        44.0108074,
        -97.526736,
        'South_Dakota',
        'United_States',
        'Howard'
    ],
    [
        'Huron, South Dakota',
        44.3633173,
        -98.2142572,
        'South_Dakota',
        'United_States',
        'Huron'
    ],
    [
        'Ipswich, South Dakota',
        45.4444193,
        -99.0292784,
        'South_Dakota',
        'United_States',
        'Ipswich'
    ],
    [
        'Jewel Cave National Monument, South Dakota',
        43.7303594,
        -103.8290512,
        'South_Dakota',
        'United_States',
        'Jewel_Cave_National_Monument'
    ],
    [
        'Kadoka, South Dakota',
        43.833882,
        -101.5098658,
        'South_Dakota',
        'United_States',
        'Kadoka'
    ],
    [
        'Kennebec, South Dakota',
        43.903602,
        -99.8617833,
        'South_Dakota',
        'United_States',
        'Kennebec'
    ],
    [
        'Lake Andres, South Dakota',
        43.1563822,
        -98.5414703,
        'South_Dakota',
        'United_States',
        'Lake_Andres'
    ],
    [
        'Leola, South Dakota',
        45.7227538,
        -98.9409401,
        'South_Dakota',
        'United_States',
        'Leola'
    ],
    [
        'Madison, South Dakota',
        44.0060847,
        -97.1139496,
        'South_Dakota',
        'United_States',
        'Madison'
    ],
    [
        'Martin, South Dakota',
        43.1724984,
        -101.7326485,
        'South_Dakota',
        'United_States',
        'Martin'
    ],
    [
        'McIntosh, South Dakota',
        45.92139,
        -101.3495764,
        'South_Dakota',
        'United_States',
        'McIntosh'
    ],
    [
        'Milbank, South Dakota',
        45.2150121,
        -96.6338493,
        'South_Dakota',
        'United_States',
        'Milbank'
    ],
    [
        'Miller, South Dakota',
        44.5183148,
        -98.988434,
        'South_Dakota',
        'United_States',
        'Miller'
    ],
    [
        'Minuteman Missile National Historic Site, South Dakota',
        43.8443267,
        -101.9002794,
        'South_Dakota',
        'United_States',
        'Minuteman_Missile_National_Historic_Site'
    ],
    [
        'Mitchell, South Dakota',
        43.7094283,
        -98.0297992,
        'South_Dakota',
        'United_States',
        'Mitchell'
    ],
    [
        'Mobridge, South Dakota',
        45.5372162,
        -100.4279129,
        'South_Dakota',
        'United_States',
        'Mobridge'
    ],
    [
        'Mound City, South Dakota',
        45.7252697,
        -100.0684524,
        'South_Dakota',
        'United_States',
        'Mound_City'
    ],
    [
        'Mount Rushmore National Memorial, South Dakota',
        43.8791025,
        -103.4590667,
        'South_Dakota',
        'United_States',
        'Mount_Rushmore_National_Memorial'
    ],
    [
        'Murdo, South Dakota',
        43.8883224,
        -100.7129143,
        'South_Dakota',
        'United_States',
        'Murdo'
    ],
    [
        'Olivet, South Dakota',
        43.240824,
        -97.6753449,
        'South_Dakota',
        'United_States',
        'Olivet'
    ],
    [
        'Onida, South Dakota',
        44.7077106,
        -100.0617352,
        'South_Dakota',
        'United_States',
        'Onida'
    ],
    [
        'Parker, South Dakota',
        43.3974827,
        -97.1364454,
        'South_Dakota',
        'United_States',
        'Parker'
    ],
    [
        'Philip, South Dakota',
        44.0394329,
        -101.6651441,
        'South_Dakota',
        'United_States',
        'Philip'
    ],
    [
        'Pierre, South Dakota',
        44.3683156,
        -100.3509665,
        'South_Dakota',
        'United_States',
        'Pierre'
    ],
    [
        'Plankinton, South Dakota',
        43.715546,
        -98.4850855,
        'South_Dakota',
        'United_States',
        'Plankinton'
    ],
    [
        'Rapid City, South Dakota',
        44.0805434,
        -103.2310149,
        'South_Dakota',
        'United_States',
        'Rapid_City'
    ],
    [
        'Redfield, South Dakota',
        44.8758095,
        -98.5187062,
        'South_Dakota',
        'United_States',
        'Redfield'
    ],
    [
        'Salem, South Dakota',
        43.7241455,
        -97.388953,
        'South_Dakota',
        'United_States',
        'Salem'
    ],
    [
        'Selby, South Dakota',
        45.5063788,
        -100.0320657,
        'South_Dakota',
        'United_States',
        'Selby'
    ],
    [
        'Sioux Falls, South Dakota',
        43.5445959,
        -96.7311034,
        'South_Dakota',
        'United_States',
        'Sioux_Falls'
    ],
    [
        'Sisseton, South Dakota',
        45.6646815,
        -97.0498046,
        'South_Dakota',
        'United_States',
        'Sisseton'
    ],
    [
        'Spearfish, South Dakota',
        44.4908172,
        -103.8593698,
        'South_Dakota',
        'United_States',
        'Spearfish'
    ],
    [
        'Sturgis, South Dakota',
        44.4097069,
        -103.5090786,
        'South_Dakota',
        'United_States',
        'Sturgis'
    ],
    [
        'Timber Lake, South Dakota',
        45.4291548,
        -101.0740344,
        'South_Dakota',
        'United_States',
        'Timber_Lake'
    ],
    [
        'Tyndall, South Dakota',
        42.9933296,
        -97.8628464,
        'South_Dakota',
        'United_States',
        'Tyndall'
    ],
    [
        'Vermillion, South Dakota',
        42.7794417,
        -96.9292104,
        'South_Dakota',
        'United_States',
        'Vermillion'
    ],
    [
        'Wall, South Dakota',
        43.9924889,
        -102.2415477,
        'South_Dakota',
        'United_States',
        'Wall'
    ],
    [
        'Watertown, South Dakota',
        44.8994088,
        -97.1150732,
        'South_Dakota',
        'United_States',
        'Watertown'
    ],
    [
        'Webster, South Dakota',
        45.3321795,
        -97.5200891,
        'South_Dakota',
        'United_States',
        'Webster'
    ],
    [
        'Wessington Springs, South Dakota',
        44.0791571,
        -98.569536,
        'South_Dakota',
        'United_States',
        'Wessington_Springs'
    ],
    [
        'White River, South Dakota',
        43.5680531,
        -100.7454167,
        'South_Dakota',
        'United_States',
        'White_River'
    ],
    [
        'Wind Cave National Park, South Dakota',
        43.6045811,
        -103.4213433,
        'South_Dakota',
        'United_States',
        'Wind_Cave_National_Park'
    ],
    [
        'Winner, South Dakota',
        43.3766665,
        -99.8590069,
        'South_Dakota',
        'United_States',
        'Winner'
    ],
    [
        'Woonsocket, South Dakota',
        44.0535982,
        -98.2756432,
        'South_Dakota',
        'United_States',
        'Woonsocket'
    ],
    [
        'Yankton, South Dakota',
        42.8711088,
        -97.3972813,
        'South_Dakota',
        'United_States',
        'Yankton'
    ],
    [
        'Alamo, Tennessee',
        35.7847949,
        -89.1172883,
        'Tennessee',
        'United_States',
        'Alamo'
    ],
    [
        'Altamont, Tennessee',
        35.4295186,
        -85.7230316,
        'Tennessee',
        'United_States',
        'Altamont'
    ],
    [
        'Andrew Johnson National Historic Site, Tennessee',
        36.1629664,
        -82.8294606,
        'Tennessee',
        'United_States',
        'Andrew_Johnson_National_Historic_Site'
    ],
    [
        'Ashland City, Tennessee',
        36.2742207,
        -87.0641699,
        'Tennessee',
        'United_States',
        'Ashland_City'
    ],
    [
        'Athens, Tennessee',
        35.4428512,
        -84.5929898,
        'Tennessee',
        'United_States',
        'Athens'
    ],
    [
        'Benton, Tennessee',
        35.1742411,
        -84.6535468,
        'Tennessee',
        'United_States',
        'Benton'
    ],
    [
        'Big South Fork National River and Recreation Area, Tennessee',
        36.4709004,
        -84.6513846,
        'Tennessee',
        'United_States',
        'Big_South_Fork_National_River_and_Recreation_Area'
    ],
    [
        'Blountville, Tennessee',
        36.5331586,
        -82.326806,
        'Tennessee',
        'United_States',
        'Blountville'
    ],
    [
        'Bolivar, Tennessee',
        35.2561937,
        -88.9878389,
        'Tennessee',
        'United_States',
        'Bolivar'
    ],
    [
        'Bristol, Tennessee',
        36.5951059,
        -82.1887444,
        'Tennessee',
        'United_States',
        'Bristol'
    ],
    [
        'Brownsville, Tennessee',
        35.5939671,
        -89.262291,
        'Tennessee',
        'United_States',
        'Brownsville'
    ],
    [
        'Burns, Tennessee',
        36.0533943,
        -87.3125103,
        'Tennessee',
        'United_States',
        'Burns'
    ],
    [
        'Byrdstown, Tennessee',
        36.5745104,
        -85.1288435,
        'Tennessee',
        'United_States',
        'Byrdstown'
    ],
    [
        'Camden, Tennessee',
        36.0589486,
        -88.0978151,
        'Tennessee',
        'United_States',
        'Camden'
    ],
    [
        'Carthage, Tennessee',
        36.2522766,
        -85.951654,
        'Tennessee',
        'United_States',
        'Carthage'
    ],
    [
        'Celina, Tennessee',
        36.5500611,
        -85.505247,
        'Tennessee',
        'United_States',
        'Celina'
    ],
    [
        'Centerville, Tennessee',
        35.7789565,
        -87.4669587,
        'Tennessee',
        'United_States',
        'Centerville'
    ],
    [
        'Charlotte, Tennessee',
        36.1772797,
        -87.3397319,
        'Tennessee',
        'United_States',
        'Charlotte'
    ],
    [
        'Chattanooga, Tennessee',
        35.0456297,
        -85.3096801,
        'Tennessee',
        'United_States',
        'Chattanooga'
    ],
    [
        'Clarksville, Tennessee',
        36.5297706,
        -87.3594528,
        'Tennessee',
        'United_States',
        'Clarksville'
    ],
    [
        'Cleveland, Tennessee',
        35.1595182,
        -84.8766115,
        'Tennessee',
        'United_States',
        'Cleveland'
    ],
    [
        'Clinton, Tennessee',
        36.1034126,
        -84.1318632,
        'Tennessee',
        'United_States',
        'Clinton'
    ],
    [
        'Collierville, Tennessee',
        35.042036,
        -89.6645266,
        'Tennessee',
        'United_States',
        'Collierville'
    ],
    [
        'Columbia, Tennessee',
        35.6150716,
        -87.0352831,
        'Tennessee',
        'United_States',
        'Columbia'
    ],
    [
        'Cookeville, Tennessee',
        36.162839,
        -85.5016423,
        'Tennessee',
        'United_States',
        'Cookeville'
    ],
    [
        'Covington, Tennessee',
        35.5642474,
        -89.6464672,
        'Tennessee',
        'United_States',
        'Covington'
    ],
    [
        'Crossville, Tennessee',
        35.9489566,
        -85.0269014,
        'Tennessee',
        'United_States',
        'Crossville'
    ],
    [
        'Cumberland Gap National Historical Park, Tennessee',
        36.599527,
        -83.6685252,
        'Tennessee',
        'United_States',
        'Cumberland_Gap_National_Historical_Park'
    ],
    [
        'Dandridge, Tennessee',
        36.0153693,
        -83.4148895,
        'Tennessee',
        'United_States',
        'Dandridge'
    ],
    [
        'Dayton, Tennessee',
        35.4939587,
        -85.0124535,
        'Tennessee',
        'United_States',
        'Dayton'
    ],
    [
        'Decatur, Tennessee',
        35.5147939,
        -84.7902223,
        'Tennessee',
        'United_States',
        'Decatur'
    ],
    [
        'Decaturville, Tennessee',
        35.5842371,
        -88.119479,
        'Tennessee',
        'United_States',
        'Decaturville'
    ],
    [
        'Dover, Tennessee',
        36.4878291,
        -87.8383567,
        'Tennessee',
        'United_States',
        'Dover'
    ],
    [
        'Dresden, Tennessee',
        36.2914512,
        -88.7081122,
        'Tennessee',
        'United_States',
        'Dresden'
    ],
    [
        'Dunlap, Tennessee',
        35.3714575,
        -85.3905209,
        'Tennessee',
        'United_States',
        'Dunlap'
    ],
    [
        'Dyersburg, Tennessee',
        36.0345159,
        -89.3856281,
        'Tennessee',
        'United_States',
        'Dyersburg'
    ],
    [
        'Elizabethton, Tennessee',
        36.3487196,
        -82.2106876,
        'Tennessee',
        'United_States',
        'Elizabethton'
    ],
    [
        'Erin, Tennessee',
        36.3183879,
        -87.6947414,
        'Tennessee',
        'United_States',
        'Erin'
    ],
    [
        'Erwin, Tennessee',
        36.1451082,
        -82.4168055,
        'Tennessee',
        'United_States',
        'Erwin'
    ],
    [
        'Fairview, Tennessee',
        35.9820074,
        -87.1213953,
        'Tennessee',
        'United_States',
        'Fairview'
    ],
    [
        'Fayetteville, Tennessee',
        35.1520266,
        -86.5705508,
        'Tennessee',
        'United_States',
        'Fayetteville'
    ],
    [
        'Fort Donelson National Battlefield, Tennessee',
        35.5174913,
        -86.5804473,
        'Tennessee',
        'United_States',
        'Fort_Donelson_National_Battlefield'
    ],
    [
        'Franklin, Tennessee',
        35.9250637,
        -86.8688899,
        'Tennessee',
        'United_States',
        'Franklin'
    ],
    [
        'Gainesboro, Tennessee',
        36.3556149,
        -85.6588665,
        'Tennessee',
        'United_States',
        'Gainesboro'
    ],
    [
        'Gallatin, Tennessee',
        36.3883809,
        -86.4466599,
        'Tennessee',
        'United_States',
        'Gallatin'
    ],
    [
        'Great Smoky Mountains National Park, Tennessee',
        35.6117644,
        -83.4895449,
        'Tennessee',
        'United_States',
        'Great_Smoky_Mountains_National_Park'
    ],
    [
        'Greeneville, Tennessee',
        36.1631574,
        -82.8309861,
        'Tennessee',
        'United_States',
        'Greeneville'
    ],
    [
        'Green Brier, Tennessee',
        36.4275477,
        -86.8047199,
        'Tennessee',
        'United_States',
        'Green_Brier'
    ],
    [
        'Harrison, Tennessee',
        35.1136837,
        -85.1380092,
        'Tennessee',
        'United_States',
        'Harrison'
    ],
    [
        'Hartsville, Tennessee',
        36.3911079,
        -86.1661024,
        'Tennessee',
        'United_States',
        'Hartsville'
    ],
    [
        'Henderson, Tennessee',
        35.4392435,
        -88.641441,
        'Tennessee',
        'United_States',
        'Henderson'
    ],
    [
        'Hendersonville, Tennessee',
        36.3047735,
        -86.6199957,
        'Tennessee',
        'United_States',
        'Hendersonville'
    ],
    [
        'Hohenwald, Tennessee',
        35.5478513,
        -87.5519628,
        'Tennessee',
        'United_States',
        'Hohenwald'
    ],
    [
        'Huntingdon, Tennessee',
        36.0006178,
        -88.4281063,
        'Tennessee',
        'United_States',
        'Huntingdon'
    ],
    [
        'Huntsville, Tennessee',
        36.409801,
        -84.4904939,
        'Tennessee',
        'United_States',
        'Huntsville'
    ],
    [
        'Jacksboro, Tennessee',
        36.3300793,
        -84.1838156,
        'Tennessee',
        'United_States',
        'Jacksboro'
    ],
    [
        'Jackson, Tennessee',
        35.6145169,
        -88.8139469,
        'Tennessee',
        'United_States',
        'Jackson'
    ],
    [
        'Jamestown, Tennessee',
        36.4275699,
        -84.9318919,
        'Tennessee',
        'United_States',
        'Jamestown'
    ],
    [
        'Jasper, Tennessee',
        35.0742448,
        -85.6260789,
        'Tennessee',
        'United_States',
        'Jasper'
    ],
    [
        'Johnson City, Tennessee',
        36.3134397,
        -82.3534727,
        'Tennessee',
        'United_States',
        'Johnson_City'
    ],
    [
        'Jonesborough, Tennessee',
        36.2942722,
        -82.4734787,
        'Tennessee',
        'United_States',
        'Jonesborough'
    ],
    [
        'Kenton, Tennessee',
        36.2022892,
        -89.0122879,
        'Tennessee',
        'United_States',
        'Kenton'
    ],
    [
        'Kingsport, Tennessee',
        36.548434,
        -82.5618186,
        'Tennessee',
        'United_States',
        'Kingsport'
    ],
    [
        'Kingston, Tennessee',
        35.8809084,
        -84.5085447,
        'Tennessee',
        'United_States',
        'Kingston'
    ],
    [
        'Knoxville, Tennessee',
        35.9606384,
        -83.9207392,
        'Tennessee',
        'United_States',
        'Knoxville'
    ],
    [
        'Lafayette, Tennessee',
        36.5211623,
        -86.0263732,
        'Tennessee',
        'United_States',
        'Lafayette'
    ],
    [
        'Lawrenceburg, Tennessee',
        35.2423023,
        -87.3347389,
        'Tennessee',
        'United_States',
        'Lawrenceburg'
    ],
    [
        'Lebanon, Tennessee',
        36.2081098,
        -86.2911024,
        'Tennessee',
        'United_States',
        'Lebanon'
    ],
    [
        'Lewisburg, Tennessee',
        35.4492404,
        -86.7888887,
        'Tennessee',
        'United_States',
        'Lewisburg'
    ],
    [
        'Lexington, Tennessee',
        35.6509029,
        -88.3933796,
        'Tennessee',
        'United_States',
        'Lexington'
    ],
    [
        'Linden, Tennessee',
        35.6172917,
        -87.8394704,
        'Tennessee',
        'United_States',
        'Linden'
    ],
    [
        'Livingston, Tennessee',
        36.3833961,
        -85.3230221,
        'Tennessee',
        'United_States',
        'Livingston'
    ],
    [
        'Loudon, Tennessee',
        35.7328541,
        -84.3338112,
        'Tennessee',
        'United_States',
        'Loudon'
    ],
    [
        'Lynchburg, Tennessee',
        35.2830242,
        -86.3740205,
        'Tennessee',
        'United_States',
        'Lynchburg'
    ],
    [
        'Madisonville, Tennessee',
        35.5197984,
        -84.3635338,
        'Tennessee',
        'United_States',
        'Madisonville'
    ],
    [
        'Manchester, Tennessee',
        35.4817431,
        -86.0885993,
        'Tennessee',
        'United_States',
        'Manchester'
    ],
    [
        'Martin, Tennessee',
        36.3433965,
        -88.8503379,
        'Tennessee',
        'United_States',
        'Martin'
    ],
    [
        'Maryville, Tennessee',
        35.7564719,
        -83.9704593,
        'Tennessee',
        'United_States',
        'Maryville'
    ],
    [
        'Maynardville, Tennessee',
        36.2506364,
        -83.7974099,
        'Tennessee',
        'United_States',
        'Maynardville'
    ],
    [
        'McMinnville, Tennessee',
        35.6865889,
        -85.7801453,
        'Tennessee',
        'United_States',
        'McMinnville'
    ],
    [
        'Memphis, Tennessee',
        35.1495343,
        -90.0489801,
        'Tennessee',
        'United_States',
        'Memphis'
    ],
    [
        'Millington, Tennessee',
        35.3414744,
        -89.8973084,
        'Tennessee',
        'United_States',
        'Millington'
    ],
    [
        'Morristown, Tennessee',
        36.2139814,
        -83.2948922,
        'Tennessee',
        'United_States',
        'Morristown'
    ],
    [
        'Mountain City, Tennessee',
        36.4745636,
        -81.804838,
        'Tennessee',
        'United_States',
        'Mountain_City'
    ],
    [
        'Murfreesboro, Tennessee',
        35.8456213,
        -86.39027,
        'Tennessee',
        'United_States',
        'Murfreesboro'
    ],
    [
        'Nashville, Tennessee',
        36.1626638,
        -86.7816016,
        'Tennessee',
        'United_States',
        'Nashville'
    ],
    [
        'Newport, Tennessee',
        35.9670412,
        -83.1876578,
        'Tennessee',
        'United_States',
        'Newport'
    ],
    [
        'New Johnsonville, Tennessee',
        36.0265423,
        -87.983923,
        'Tennessee',
        'United_States',
        'New_Johnsonville'
    ],
    [
        'Oak Ridge, Tennessee',
        36.0103561,
        -84.2696449,
        'Tennessee',
        'United_States',
        'Oak_Ridge'
    ],
    [
        'Obed Wild and Scenic River, Tennessee',
        36.0846,
        -84.7224,
        'Tennessee',
        'United_States',
        'Obed_Wild_and_Scenic_River'
    ],
    [
        'Paris, Tennessee',
        36.3020023,
        -88.3267107,
        'Tennessee',
        'United_States',
        'Paris'
    ],
    [
        'Pikeville, Tennessee',
        35.6056231,
        -85.1888498,
        'Tennessee',
        'United_States',
        'Pikeville'
    ],
    [
        'Pulaski, Tennessee',
        35.1998023,
        -87.0308412,
        'Tennessee',
        'United_States',
        'Pulaski'
    ],
    [
        'Ripley, Tennessee',
        35.7453552,
        -89.5297973,
        'Tennessee',
        'United_States',
        'Ripley'
    ],
    [
        'Rogersville, Tennessee',
        36.407317,
        -83.0054423,
        'Tennessee',
        'United_States',
        'Rogersville'
    ],
    [
        'Rutledge, Tennessee',
        36.2809202,
        -83.5149023,
        'Tennessee',
        'United_States',
        'Rutledge'
    ],
    [
        'Savannah, Tennessee',
        35.2248034,
        -88.2492037,
        'Tennessee',
        'United_States',
        'Savannah'
    ],
    [
        'Selmer, Tennessee',
        35.1700834,
        -88.5922704,
        'Tennessee',
        'United_States',
        'Selmer'
    ],
    [
        'Sevierville, Tennessee',
        35.8681455,
        -83.561835,
        'Tennessee',
        'United_States',
        'Sevierville'
    ],
    [
        'Sewanee, Tennessee',
        35.2031373,
        -85.9210899,
        'Tennessee',
        'United_States',
        'Sewanee'
    ],
    [
        'Shelbyville, Tennessee',
        35.483406,
        -86.4602717,
        'Tennessee',
        'United_States',
        'Shelbyville'
    ],
    [
        'Shiloh National Battlefield, Tennessee',
        35.142937,
        -88.3408499,
        'Tennessee',
        'United_States',
        'Shiloh_National_Battlefield'
    ],
    [
        'Smithvillle, Tennessee',
        35.9606185,
        -85.8141516,
        'Tennessee',
        'United_States',
        'Smithvillle'
    ],
    [
        'Smyrna, Tennessee',
        35.9828412,
        -86.5186045,
        'Tennessee',
        'United_States',
        'Smyrna'
    ],
    [
        'Sneedville, Tennessee',
        36.5298107,
        -83.2173971,
        'Tennessee',
        'United_States',
        'Sneedville'
    ],
    [
        'Somerville, Tennessee',
        35.2436969,
        -89.3500714,
        'Tennessee',
        'United_States',
        'Somerville'
    ],
    [
        'South Pittsburg, Tennessee',
        35.0123024,
        -85.7044149,
        'Tennessee',
        'United_States',
        'South_Pittsburg'
    ],
    [
        'Sparta, Tennessee',
        35.9258985,
        -85.4641421,
        'Tennessee',
        'United_States',
        'Sparta'
    ],
    [
        'Spencer, Tennessee',
        35.7472893,
        -85.4666413,
        'Tennessee',
        'United_States',
        'Spencer'
    ],
    [
        'Springfield, Tennessee',
        36.5092118,
        -86.8849984,
        'Tennessee',
        'United_States',
        'Springfield'
    ],
    [
        'Stones River National Battlefield, Tennessee',
        35.8805236,
        -86.4348155,
        'Tennessee',
        'United_States',
        'Stones_River_National_Battlefield'
    ],
    [
        'Tazewell, Tennessee',
        36.45425,
        -83.569352,
        'Tennessee',
        'United_States',
        'Tazewell'
    ],
    [
        'Tiptonville, Tennessee',
        36.3783984,
        -89.4720193,
        'Tennessee',
        'United_States',
        'Tiptonville'
    ],
    [
        'Trenton, Tennessee',
        35.9806239,
        -88.9414538,
        'Tennessee',
        'United_States',
        'Trenton'
    ],
    [
        'Tullahoma, Tennessee',
        35.3620235,
        -86.2094342,
        'Tennessee',
        'United_States',
        'Tullahoma'
    ],
    [
        'Union City, Tennessee',
        36.4242303,
        -89.0570096,
        'Tennessee',
        'United_States',
        'Union_City'
    ],
    [
        'Wartburg, Tennessee',
        36.1047979,
        -84.597162,
        'Tennessee',
        'United_States',
        'Wartburg'
    ],
    [
        'Waverly, Tennessee',
        36.0839489,
        -87.794747,
        'Tennessee',
        'United_States',
        'Waverly'
    ],
    [
        'Waynesboro, Tennessee',
        35.3195217,
        -87.7622468,
        'Tennessee',
        'United_States',
        'Waynesboro'
    ],
    [
        'Winchester, Tennessee',
        35.1859163,
        -86.1122071,
        'Tennessee',
        'United_States',
        'Winchester'
    ],
    [
        'Woodbury, Tennessee',
        35.8275672,
        -86.0716565,
        'Tennessee',
        'United_States',
        'Woodbury'
    ],
    [
        'Abilene, Texas',
        32.4487364,
        -99.7331439,
        'Texas',
        'United_States',
        'Abilene'
    ],
    [
        'Albany, Texas',
        32.723452,
        -99.2973005,
        'Texas',
        'United_States',
        'Albany'
    ],
    [
        'Alibates Flint Quarries National Monument, Texas',
        35.5836092,
        -101.6698299,
        'Texas',
        'United_States',
        'Alibates_Flint_Quarries_National_Monument'
    ],
    [
        'Alice, Texas',
        27.7522487,
        -98.0697249,
        'Texas',
        'United_States',
        'Alice'
    ],
    [
        'Allen, Texas',
        33.1031744,
        -96.6705503,
        'Texas',
        'United_States',
        'Allen'
    ],
    [
        'Alpine, Texas',
        30.3584919,
        -103.6610115,
        'Texas',
        'United_States',
        'Alpine'
    ],
    [
        'Amarillo, Texas',
        35.2219971,
        -101.8312969,
        'Texas',
        'United_States',
        'Amarillo'
    ],
    [
        'Amistad National Recreation Area, Texas',
        29.436667,
        -101.05,
        'Texas',
        'United_States',
        'Amistad_National_Recreation_Area'
    ],
    [
        'Anahuac, Texas',
        29.7730001,
        -94.6826961,
        'Texas',
        'United_States',
        'Anahuac'
    ],
    [
        'Anderson, Texas',
        30.4876971,
        -95.9924515,
        'Texas',
        'United_States',
        'Anderson'
    ],
    [
        'Andrews, Texas',
        32.3187158,
        -102.5457155,
        'Texas',
        'United_States',
        'Andrews'
    ],
    [
        'Angleton, Texas',
        29.16941,
        -95.4318847,
        'Texas',
        'United_States',
        'Angleton'
    ],
    ['Anson, Texas', 32.7565042, -99.896207, 'Texas', 'United_States', 'Anson'],
    [
        'Aransas Pass, Texas',
        27.9094677,
        -97.1499898,
        'Texas',
        'United_States',
        'Aransas_Pass'
    ],
    [
        'Archer City, Texas',
        33.5956593,
        -98.6256128,
        'Texas',
        'United_States',
        'Archer_City'
    ],
    [
        'Arlington, Texas',
        32.735687,
        -97.1080656,
        'Texas',
        'United_States',
        'Arlington'
    ],
    [
        'Aspermont, Texas',
        33.1334307,
        -100.2273276,
        'Texas',
        'United_States',
        'Aspermont'
    ],
    [
        'Athens, Texas',
        32.2048735,
        -95.8555207,
        'Texas',
        'United_States',
        'Athens'
    ],
    [
        'Austin, Texas',
        30.267153,
        -97.7430608,
        'Texas',
        'United_States',
        'Austin'
    ],
    [
        'Baird, Texas',
        32.3940168,
        -99.3942436,
        'Texas',
        'United_States',
        'Baird'
    ],
    [
        'Ballinger, Texas',
        31.7382062,
        -99.9473077,
        'Texas',
        'United_States',
        'Ballinger'
    ],
    [
        'Bandera, Texas',
        29.7266131,
        -99.0736462,
        'Texas',
        'United_States',
        'Bandera'
    ],
    [
        'Bastrop, Texas',
        30.1104947,
        -97.3152701,
        'Texas',
        'United_States',
        'Bastrop'
    ],
    [
        'Baytown, Texas',
        29.7355047,
        -94.9774274,
        'Texas',
        'United_States',
        'Baytown'
    ],
    [
        'Bay City, Texas',
        28.9827565,
        -95.969402,
        'Texas',
        'United_States',
        'Bay_City'
    ],
    [
        'Beaumont, Texas',
        30.080174,
        -94.1265562,
        'Texas',
        'United_States',
        'Beaumont'
    ],
    [
        'Beeville, Texas',
        28.4008319,
        -97.7483312,
        'Texas',
        'United_States',
        'Beeville'
    ],
    [
        'Bellville, Texas',
        29.9502253,
        -96.2571858,
        'Texas',
        'United_States',
        'Bellville'
    ],
    [
        'Belton, Texas',
        31.0560132,
        -97.464453,
        'Texas',
        'United_States',
        'Belton'
    ],
    [
        'Benjamin, Texas',
        33.5839808,
        -99.7923132,
        'Texas',
        'United_States',
        'Benjamin'
    ],
    [
        'Big Bend National Park, Texas',
        29.2499017,
        -103.2501638,
        'Texas',
        'United_States',
        'Big_Bend_National_Park'
    ],
    [
        'Big Lake, Texas',
        31.1915437,
        -101.4603945,
        'Texas',
        'United_States',
        'Big_Lake'
    ],
    [
        'Big Spring, Texas',
        32.2503979,
        -101.4787355,
        'Texas',
        'United_States',
        'Big_Spring'
    ],
    [
        'Big Thicket National Preserve, Texas',
        30.5395535,
        -94.3404861,
        'Texas',
        'United_States',
        'Big_Thicket_National_Preserve'
    ],
    [
        'Blossom, Texas',
        33.6614962,
        -95.3857864,
        'Texas',
        'United_States',
        'Blossom'
    ],
    [
        'Boerne, Texas',
        29.7946641,
        -98.7319703,
        'Texas',
        'United_States',
        'Boerne'
    ],
    [
        'Bonham, Texas',
        33.5773275,
        -96.1783111,
        'Texas',
        'United_States',
        'Bonham'
    ],
    [
        'Boston, Texas',
        33.4598415,
        -94.4154787,
        'Texas',
        'United_States',
        'Boston'
    ],
    [
        'Brackettville, Texas',
        29.3105125,
        -100.4178563,
        'Texas',
        'United_States',
        'Brackettville'
    ],
    [
        'Brady, Texas',
        31.1351682,
        -99.3350552,
        'Texas',
        'United_States',
        'Brady'
    ],
    [
        'Breckenridge, Texas',
        32.7556768,
        -98.9022898,
        'Texas',
        'United_States',
        'Breckenridge'
    ],
    [
        'Brenham, Texas',
        30.1668828,
        -96.3977442,
        'Texas',
        'United_States',
        'Brenham'
    ],
    [
        'Brownfield, Texas',
        33.1812035,
        -102.2743489,
        'Texas',
        'United_States',
        'Brownfield'
    ],
    [
        'Brownsville, Texas',
        25.9017472,
        -97.4974838,
        'Texas',
        'United_States',
        'Brownsville'
    ],
    [
        'Brownwood, Texas',
        31.7093197,
        -98.9911611,
        'Texas',
        'United_States',
        'Brownwood'
    ],
    [
        'Bryan, Texas',
        30.6743643,
        -96.3699632,
        'Texas',
        'United_States',
        'Bryan'
    ],
    [
        'Burleson, Texas',
        32.5420821,
        -97.3208492,
        'Texas',
        'United_States',
        'Burleson'
    ],
    [
        'Burnet, Texas',
        30.7582376,
        -98.2283585,
        'Texas',
        'United_States',
        'Burnet'
    ],
    [
        'Caldwell, Texas',
        30.5313152,
        -96.6930303,
        'Texas',
        'United_States',
        'Caldwell'
    ],
    [
        'Cameron, Texas',
        30.8532454,
        -96.9769304,
        'Texas',
        'United_States',
        'Cameron'
    ],
    [
        'Canadian, Texas',
        35.91282,
        -100.3820772,
        'Texas',
        'United_States',
        'Canadian'
    ],
    [
        'Canton, Texas',
        32.5565244,
        -95.8632996,
        'Texas',
        'United_States',
        'Canton'
    ],
    [
        'Canyon, Texas',
        34.9803342,
        -101.9188024,
        'Texas',
        'United_States',
        'Canyon'
    ],
    [
        'Carrizo Springs, Texas',
        28.5219292,
        -99.8606107,
        'Texas',
        'United_States',
        'Carrizo_Springs'
    ],
    [
        'Carthage, Texas',
        32.1573841,
        -94.3374199,
        'Texas',
        'United_States',
        'Carthage'
    ],
    [
        'Center, Texas',
        31.7954512,
        -94.1790862,
        'Texas',
        'United_States',
        'Center'
    ],
    [
        'Centerville, Texas',
        31.2579584,
        -95.978292,
        'Texas',
        'United_States',
        'Centerville'
    ],
    [
        'Chamizal National Memorial, Texas',
        31.7677406,
        -106.4580213,
        'Texas',
        'United_States',
        'Chamizal_National_Memorial'
    ],
    [
        'Channing, Texas',
        35.6836536,
        -102.3301953,
        'Texas',
        'United_States',
        'Channing'
    ],
    [
        'Chester, Texas',
        30.9263062,
        -94.5965927,
        'Texas',
        'United_States',
        'Chester'
    ],
    [
        'Childress, Texas',
        34.4264529,
        -100.2040019,
        'Texas',
        'United_States',
        'Childress'
    ],
    [
        'China Spring, Texas',
        31.6522133,
        -97.3079638,
        'Texas',
        'United_States',
        'China_Spring'
    ],
    [
        'Clarendon, Texas',
        34.9378289,
        -100.8881993,
        'Texas',
        'United_States',
        'Clarendon'
    ],
    [
        'Clarksville, Texas',
        33.6106648,
        -95.052722,
        'Texas',
        'United_States',
        'Clarksville'
    ],
    [
        'Claude, Texas',
        35.1117176,
        -101.3632223,
        'Texas',
        'United_States',
        'Claude'
    ],
    [
        'Cleburne, Texas',
        32.3476438,
        -97.3866837,
        'Texas',
        'United_States',
        'Cleburne'
    ],
    [
        'Coldspring, Texas',
        30.592421,
        -95.1293818,
        'Texas',
        'United_States',
        'Coldspring'
    ],
    [
        'Coleman, Texas',
        31.8273679,
        -99.4264532,
        'Texas',
        'United_States',
        'Coleman'
    ],
    [
        'College Station, Texas',
        30.627977,
        -96.3344068,
        'Texas',
        'United_States',
        'College_Station'
    ],
    [
        'Colorado City, Texas',
        32.3881745,
        -100.8645576,
        'Texas',
        'United_States',
        'Colorado_City'
    ],
    [
        'Columbus, Texas',
        29.7066232,
        -96.5396933,
        'Texas',
        'United_States',
        'Columbus'
    ],
    [
        'Comranche, Texas',
        31.8973693,
        -98.6036581,
        'Texas',
        'United_States',
        'Comranche'
    ],
    [
        'Conroe, Texas',
        30.3118769,
        -95.4560512,
        'Texas',
        'United_States',
        'Conroe'
    ],
    [
        'Cooper, Texas',
        33.3734427,
        -95.6882925,
        'Texas',
        'United_States',
        'Cooper'
    ],
    [
        'Coppell, Texas',
        32.9545687,
        -97.0150078,
        'Texas',
        'United_States',
        'Coppell'
    ],
    [
        'Corpus Christi, Texas',
        27.8005828,
        -97.396381,
        'Texas',
        'United_States',
        'Corpus_Christi'
    ],
    [
        'Corsicana, Texas',
        32.0954304,
        -96.4688727,
        'Texas',
        'United_States',
        'Corsicana'
    ],
    [
        'Cotulla, Texas',
        28.436934,
        -99.2350322,
        'Texas',
        'United_States',
        'Cotulla'
    ],
    [
        'Crane, Texas',
        31.3973624,
        -102.3501419,
        'Texas',
        'United_States',
        'Crane'
    ],
    [
        'Crockett, Texas',
        31.3182359,
        -95.4566136,
        'Texas',
        'United_States',
        'Crockett'
    ],
    [
        'Crosbyton, Texas',
        33.6600847,
        -101.2379276,
        'Texas',
        'United_States',
        'Crosbyton'
    ],
    [
        'Crowell, Texas',
        33.983973,
        -99.7248158,
        'Texas',
        'United_States',
        'Crowell'
    ],
    [
        'Crystal City, Texas',
        28.6774795,
        -99.8281104,
        'Texas',
        'United_States',
        'Crystal_City'
    ],
    [
        'Cuero, Texas',
        29.0938652,
        -97.2891568,
        'Texas',
        'United_States',
        'Cuero'
    ],
    [
        'Daingerfield, Texas',
        33.031793,
        -94.7218731,
        'Texas',
        'United_States',
        'Daingerfield'
    ],
    [
        'Dalhart, Texas',
        36.0594772,
        -102.5132497,
        'Texas',
        'United_States',
        'Dalhart'
    ],
    [
        'Dallas, Texas',
        32.7766642,
        -96.7969879,
        'Texas',
        'United_States',
        'Dallas'
    ],
    [
        'Dayton, Texas',
        30.0466051,
        -94.8852026,
        'Texas',
        'United_States',
        'Dayton'
    ],
    [
        'Decatur, Texas',
        33.2342834,
        -97.5861393,
        'Texas',
        'United_States',
        'Decatur'
    ],
    [
        'Del Rio, Texas',
        29.3708857,
        -100.8958674,
        'Texas',
        'United_States',
        'Del_Rio'
    ],
    [
        'Denison, Texas',
        33.7556593,
        -96.536658,
        'Texas',
        'United_States',
        'Denison'
    ],
    [
        'Denton, Texas',
        33.2148412,
        -97.1330683,
        'Texas',
        'United_States',
        'Denton'
    ],
    [
        'Denver City, Texas',
        32.9645475,
        -102.8290963,
        'Texas',
        'United_States',
        'Denver_City'
    ],
    [
        'Devine, Texas',
        29.1399633,
        -98.905306,
        'Texas',
        'United_States',
        'Devine'
    ],
    [
        'Dickens, Texas',
        33.6217516,
        -100.836521,
        'Texas',
        'United_States',
        'Dickens'
    ],
    [
        'Dimmitt, Texas',
        34.5509028,
        -102.3118607,
        'Texas',
        'United_States',
        'Dimmitt'
    ],
    [
        'Dumas, Texas',
        35.8653789,
        -101.9732236,
        'Texas',
        'United_States',
        'Dumas'
    ],
    [
        'Eagle Pass, Texas',
        28.7091433,
        -100.4995214,
        'Texas',
        'United_States',
        'Eagle_Pass'
    ],
    [
        'Eastland, Texas',
        32.4015198,
        -98.8175623,
        'Texas',
        'United_States',
        'Eastland'
    ],
    [
        'Edinburg, Texas',
        26.3017374,
        -98.1633432,
        'Texas',
        'United_States',
        'Edinburg'
    ],
    ['Edna, Texas', 28.9785947, -96.6460877, 'Texas', 'United_States', 'Edna'],
    [
        'Eldorado, Texas',
        30.8601745,
        -100.6009299,
        'Texas',
        'United_States',
        'Eldorado'
    ],
    [
        'El Paso, Texas',
        31.7618778,
        -106.4850217,
        'Texas',
        'United_States',
        'El_Paso'
    ],
    ['Emory, Texas', 32.874566, -95.7655183, 'Texas', 'United_States', 'Emory'],
    [
        'Euless, Texas',
        32.8370727,
        -97.0819541,
        'Texas',
        'United_States',
        'Euless'
    ],
    [
        'Everman, Texas',
        32.630968,
        -97.2891817,
        'Texas',
        'United_States',
        'Everman'
    ],
    [
        'Fairfield, Texas',
        31.7246128,
        -96.1652481,
        'Texas',
        'United_States',
        'Fairfield'
    ],
    [
        'Falfurrias, Texas',
        27.2269872,
        -98.1441714,
        'Texas',
        'United_States',
        'Falfurrias'
    ],
    [
        'Farwell, Texas',
        34.383409,
        -103.0380016,
        'Texas',
        'United_States',
        'Farwell'
    ],
    [
        'Ferris, Texas',
        32.5340262,
        -96.6655488,
        'Texas',
        'United_States',
        'Ferris'
    ],
    [
        'Floresville, Texas',
        29.1335781,
        -98.1561192,
        'Texas',
        'United_States',
        'Floresville'
    ],
    [
        'Flower Mound, Texas',
        33.0145673,
        -97.0969552,
        'Texas',
        'United_States',
        'Flower_Mound'
    ],
    [
        'Floydada, Texas',
        33.9845232,
        -101.3376574,
        'Texas',
        'United_States',
        'Floydada'
    ],
    [
        'Fort Davis, Texas',
        30.5882111,
        -103.8946253,
        'Texas',
        'United_States',
        'Fort_Davis'
    ],
    [
        'Fort Stockton, Texas',
        30.8940431,
        -102.8793222,
        'Texas',
        'United_States',
        'Fort_Stockton'
    ],
    [
        'Fort Worth, Texas',
        32.7554883,
        -97.3307658,
        'Texas',
        'United_States',
        'Fort_Worth'
    ],
    [
        'Franklin, Texas',
        31.0260194,
        -96.4852444,
        'Texas',
        'United_States',
        'Franklin'
    ],
    [
        'Fredericksburg, Texas',
        30.2752011,
        -98.8719843,
        'Texas',
        'United_States',
        'Fredericksburg'
    ],
    ['Gail, Texas', 32.7703457, -101.445743, 'Texas', 'United_States', 'Gail'],
    [
        'Gainesville, Texas',
        33.6259414,
        -97.1333453,
        'Texas',
        'United_States',
        'Gainesville'
    ],
    [
        'Galveston, Texas',
        29.3013479,
        -94.7976958,
        'Texas',
        'United_States',
        'Galveston'
    ],
    [
        'Garden City, Texas',
        31.8639016,
        -101.4811969,
        'Texas',
        'United_States',
        'Garden_City'
    ],
    [
        'Gatesville, Texas',
        31.4351645,
        -97.743911,
        'Texas',
        'United_States',
        'Gatesville'
    ],
    [
        'Georgetown, Texas',
        30.6332618,
        -97.6779842,
        'Texas',
        'United_States',
        'Georgetown'
    ],
    [
        'George West, Texas',
        28.3325002,
        -98.1175054,
        'Texas',
        'United_States',
        'George_West'
    ],
    [
        'Giddings, Texas',
        30.1827159,
        -96.936371,
        'Texas',
        'United_States',
        'Giddings'
    ],
    [
        'Gilmer, Texas',
        32.7287472,
        -94.9424379,
        'Texas',
        'United_States',
        'Gilmer'
    ],
    [
        'Glen Rose, Texas',
        32.2345872,
        -97.7553061,
        'Texas',
        'United_States',
        'Glen_Rose'
    ],
    [
        'Goldthwaite, Texas',
        31.4498855,
        -98.5708763,
        'Texas',
        'United_States',
        'Goldthwaite'
    ],
    [
        'Goliad, Texas',
        28.6683252,
        -97.3883265,
        'Texas',
        'United_States',
        'Goliad'
    ],
    [
        'Gonzales, Texas',
        29.5016257,
        -97.4524926,
        'Texas',
        'United_States',
        'Gonzales'
    ],
    [
        'Graham, Texas',
        33.1070597,
        -98.589502,
        'Texas',
        'United_States',
        'Graham'
    ],
    [
        'Granbury, Texas',
        32.4420826,
        -97.7941967,
        'Texas',
        'United_States',
        'Granbury'
    ],
    [
        'Grand Prairie, Texas',
        32.7459645,
        -96.9977846,
        'Texas',
        'United_States',
        'Grand_Prairie'
    ],
    [
        'Greenville, Texas',
        33.1384488,
        -96.1108066,
        'Texas',
        'United_States',
        'Greenville'
    ],
    [
        'Groesbeck, Texas',
        31.5243379,
        -96.5338693,
        'Texas',
        'United_States',
        'Groesbeck'
    ],
    [
        'Groveton, Texas',
        31.0549071,
        -95.1257691,
        'Texas',
        'United_States',
        'Groveton'
    ],
    [
        'Gruver, Texas',
        36.2650314,
        -101.4062723,
        'Texas',
        'United_States',
        'Gruver'
    ],
    [
        'Guadalupe Mountains National Park, Texas',
        31.94519,
        -104.8725221,
        'Texas',
        'United_States',
        'Guadalupe_Mountains_National_Park'
    ],
    [
        'Guthrie, Texas',
        33.6206613,
        -100.3228034,
        'Texas',
        'United_States',
        'Guthrie'
    ],
    [
        'Hallettsville, Texas',
        29.4438528,
        -96.9410929,
        'Texas',
        'United_States',
        'Hallettsville'
    ],
    [
        'Hamilton, Texas',
        31.7037655,
        -98.1239231,
        'Texas',
        'United_States',
        'Hamilton'
    ],
    [
        'Haskell, Texas',
        33.1576031,
        -99.7337014,
        'Texas',
        'United_States',
        'Haskell'
    ],
    [
        'Hebbronville, Texas',
        27.3067057,
        -98.6783516,
        'Texas',
        'United_States',
        'Hebbronville'
    ],
    [
        'Hemphill, Texas',
        31.3407403,
        -93.846852,
        'Texas',
        'United_States',
        'Hemphill'
    ],
    [
        'Hempstead, Texas',
        30.0974405,
        -96.0782918,
        'Texas',
        'United_States',
        'Hempstead'
    ],
    [
        'Henderson, Texas',
        32.1532156,
        -94.7993802,
        'Texas',
        'United_States',
        'Henderson'
    ],
    [
        'Henrietta, Texas',
        33.8173224,
        -98.1953221,
        'Texas',
        'United_States',
        'Henrietta'
    ],
    [
        'Hereford, Texas',
        34.8150622,
        -102.3977036,
        'Texas',
        'United_States',
        'Hereford'
    ],
    [
        'Highlands, Texas',
        29.818836,
        -95.0560404,
        'Texas',
        'United_States',
        'Highlands'
    ],
    [
        'Hillsboro, Texas',
        32.0109886,
        -97.1300061,
        'Texas',
        'United_States',
        'Hillsboro'
    ],
    [
        'Hondo, Texas',
        29.3474565,
        -99.1414249,
        'Texas',
        'United_States',
        'Hondo'
    ],
    [
        'Horseshoe Bay, Texas',
        30.5421579,
        -98.3882723,
        'Texas',
        'United_States',
        'Horseshoe_Bay'
    ],
    [
        'Houston, Texas',
        29.7604267,
        -95.3698028,
        'Texas',
        'United_States',
        'Houston'
    ],
    ['Hunt, Texas', 30.0710434, -99.3379764, 'Texas', 'United_States', 'Hunt'],
    [
        'Huntsville, Texas',
        30.7235263,
        -95.5507771,
        'Texas',
        'United_States',
        'Huntsville'
    ],
    [
        'Iowa Park, Texas',
        33.9514847,
        -98.6686709,
        'Texas',
        'United_States',
        'Iowa_Park'
    ],
    [
        'Irving, Texas',
        32.8140177,
        -96.9488945,
        'Texas',
        'United_States',
        'Irving'
    ],
    [
        'Jacksboro, Texas',
        33.2184477,
        -98.1586558,
        'Texas',
        'United_States',
        'Jacksboro'
    ],
    [
        'Jasper, Texas',
        30.9201995,
        -93.9965759,
        'Texas',
        'United_States',
        'Jasper'
    ],
    [
        'Jayton, Texas',
        33.2481485,
        -100.5737264,
        'Texas',
        'United_States',
        'Jayton'
    ],
    [
        'Jefferson, Texas',
        32.7573626,
        -94.3451926,
        'Texas',
        'United_States',
        'Jefferson'
    ],
    [
        'Johnson City, Texas',
        30.2767408,
        -98.4119811,
        'Texas',
        'United_States',
        'Johnson_City'
    ],
    [
        'Johnson Space Center, Texas',
        29.562222,
        -95.090833,
        'Texas',
        'United_States',
        'Johnson_Space_Center'
    ],
    [
        'Jourdanton, Texas',
        28.9180294,
        -98.5464068,
        'Texas',
        'United_States',
        'Jourdanton'
    ],
    [
        'Junction, Texas',
        30.4893555,
        -99.7720109,
        'Texas',
        'United_States',
        'Junction'
    ],
    [
        'Karnes City, Texas',
        28.8849772,
        -97.9008355,
        'Texas',
        'United_States',
        'Karnes_City'
    ],
    [
        'Kaufman, Texas',
        32.5890238,
        -96.3088693,
        'Texas',
        'United_States',
        'Kaufman'
    ],
    [
        'Kempner, Texas',
        31.081007,
        -98.0025249,
        'Texas',
        'United_States',
        'Kempner'
    ],
    [
        'Kermit, Texas',
        31.8576265,
        -103.0926652,
        'Texas',
        'United_States',
        'Kermit'
    ],
    [
        'Kerrville, Texas',
        30.0474332,
        -99.1403189,
        'Texas',
        'United_States',
        'Kerrville'
    ],
    [
        'Kingsville, Texas',
        27.5158689,
        -97.856109,
        'Texas',
        'United_States',
        'Kingsville'
    ],
    [
        'Kingwood, Texas',
        30.0575359,
        -95.1902986,
        'Texas',
        'United_States',
        'Kingwood'
    ],
    [
        'Kountze, Texas',
        30.3715975,
        -94.3124116,
        'Texas',
        'United_States',
        'Kountze'
    ],
    [
        'Lake Meredith National Recreation Area, Texas',
        35.714722,
        -101.552778,
        'Texas',
        'United_States',
        'Lake_Meredith_National_Recreation_Area'
    ],
    [
        'Lamesa, Texas',
        32.7376001,
        -101.950992,
        'Texas',
        'United_States',
        'Lamesa'
    ],
    [
        'Lampasas, Texas',
        31.063784,
        -98.1816957,
        'Texas',
        'United_States',
        'Lampasas'
    ],
    [
        'Laredo, Texas',
        27.5305671,
        -99.4803241,
        'Texas',
        'United_States',
        'Laredo'
    ],
    [
        'La Grange, Texas',
        29.9055033,
        -96.876647,
        'Texas',
        'United_States',
        'La_Grange'
    ],
    [
        'Leakey, Texas',
        29.7288351,
        -99.761448,
        'Texas',
        'United_States',
        'Leakey'
    ],
    [
        'Levelland, Texas',
        33.5873164,
        -102.37796,
        'Texas',
        'United_States',
        'Levelland'
    ],
    [
        'Lewisville, Texas',
        33.046233,
        -96.994174,
        'Texas',
        'United_States',
        'Lewisville'
    ],
    [
        'Liberty, Texas',
        30.057993,
        -94.7954783,
        'Texas',
        'United_States',
        'Liberty'
    ],
    [
        'Linden, Texas',
        33.0123537,
        -94.3654707,
        'Texas',
        'United_States',
        'Linden'
    ],
    [
        'Lipscomb, Texas',
        36.2333711,
        -100.2709665,
        'Texas',
        'United_States',
        'Lipscomb'
    ],
    [
        'Littlefield, Texas',
        33.9173148,
        -102.3249022,
        'Texas',
        'United_States',
        'Littlefield'
    ],
    [
        'Livingston, Texas',
        30.711029,
        -94.9329898,
        'Texas',
        'United_States',
        'Livingston'
    ],
    [
        'Llano, Texas',
        30.7593452,
        -98.6750379,
        'Texas',
        'United_States',
        'Llano'
    ],
    [
        'Lockhart, Texas',
        29.8849441,
        -97.6699996,
        'Texas',
        'United_States',
        'Lockhart'
    ],
    [
        'Longview, Texas',
        32.5007037,
        -94.7404891,
        'Texas',
        'United_States',
        'Longview'
    ],
    [
        'Los Fresnos, Texas',
        26.0717438,
        -97.4763733,
        'Texas',
        'United_States',
        'Los_Fresnos'
    ],
    [
        'Lubbock, Texas',
        33.5778631,
        -101.8551665,
        'Texas',
        'United_States',
        'Lubbock'
    ],
    [
        'Lufkin, Texas',
        31.3382406,
        -94.729097,
        'Texas',
        'United_States',
        'Lufkin'
    ],
    [
        'Lyndon B Johnson National Historic Park, Texas',
        30.2410219,
        -98.6245083,
        'Texas',
        'United_States',
        'Lyndon_B_Johnson_National_Historic_Park'
    ],
    [
        'Madisonville, Texas',
        30.9499111,
        -95.9116188,
        'Texas',
        'United_States',
        'Madisonville'
    ],
    [
        'Marfa, Texas',
        30.3094622,
        -104.020623,
        'Texas',
        'United_States',
        'Marfa'
    ],
    [
        'Marlin, Texas',
        31.3062874,
        -96.8980439,
        'Texas',
        'United_States',
        'Marlin'
    ],
    [
        'Marshall, Texas',
        32.5448714,
        -94.3674184,
        'Texas',
        'United_States',
        'Marshall'
    ],
    ['Mason, Texas', 30.7487884, -99.230611, 'Texas', 'United_States', 'Mason'],
    [
        'Matador, Texas',
        34.0120211,
        -100.8220785,
        'Texas',
        'United_States',
        'Matador'
    ],
    [
        'McAllen, Texas',
        26.2034071,
        -98.2300124,
        'Texas',
        'United_States',
        'McAllen'
    ],
    [
        'McGregor, Texas',
        31.4440557,
        -97.4091792,
        'Texas',
        'United_States',
        'McGregor'
    ],
    [
        'McKinney, Texas',
        33.1972465,
        -96.6397822,
        'Texas',
        'United_States',
        'McKinney'
    ],
    [
        'McQueeney, Texas',
        29.6000331,
        -98.0449628,
        'Texas',
        'United_States',
        'McQueeney'
    ],
    [
        'Memphis, Texas',
        34.7247758,
        -100.5340144,
        'Texas',
        'United_States',
        'Memphis'
    ],
    [
        'Menard, Texas',
        30.9176736,
        -99.7864587,
        'Texas',
        'United_States',
        'Menard'
    ],
    [
        'Mentone, Texas',
        31.7051291,
        -103.5993477,
        'Texas',
        'United_States',
        'Mentone'
    ],
    [
        'Meridian, Texas',
        31.9232085,
        -97.6566894,
        'Texas',
        'United_States',
        'Meridian'
    ],
    [
        'Mertzon, Texas',
        31.2618316,
        -100.8173263,
        'Texas',
        'United_States',
        'Mertzon'
    ],
    [
        'Mesquite, Texas',
        32.7667955,
        -96.5991593,
        'Texas',
        'United_States',
        'Mesquite'
    ],
    ['Mexia, Texas', 31.6798895, -96.482203, 'Texas', 'United_States', 'Mexia'],
    [
        'Miami, Texas',
        35.6914327,
        -100.6381933,
        'Texas',
        'United_States',
        'Miami'
    ],
    [
        'Midland, Texas',
        31.9973456,
        -102.0779146,
        'Texas',
        'United_States',
        'Midland'
    ],
    [
        'Mission, Texas',
        26.2159066,
        -98.3252932,
        'Texas',
        'United_States',
        'Mission'
    ],
    [
        'Monahans, Texas',
        31.5942991,
        -102.8926536,
        'Texas',
        'United_States',
        'Monahans'
    ],
    [
        'Montague, Texas',
        33.6649474,
        -97.7205807,
        'Texas',
        'United_States',
        'Montague'
    ],
    [
        'Morton, Texas',
        33.7250974,
        -102.7593763,
        'Texas',
        'United_States',
        'Morton'
    ],
    [
        'Mount Pleasant, Texas',
        33.1567863,
        -94.968269,
        'Texas',
        'United_States',
        'Mount_Pleasant'
    ],
    [
        'Mount Vernon, Texas',
        33.1887271,
        -95.2213321,
        'Texas',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Muleshoe, Texas',
        34.2264676,
        -102.7238263,
        'Texas',
        'United_States',
        'Muleshoe'
    ],
    [
        'Nacogdoches, Texas',
        31.6035129,
        -94.6554874,
        'Texas',
        'United_States',
        'Nacogdoches'
    ],
    [
        'Navasota, Texas',
        30.3879845,
        -96.0877349,
        'Texas',
        'United_States',
        'Navasota'
    ],
    [
        'Newton, Texas',
        30.8485337,
        -93.7574008,
        'Texas',
        'United_States',
        'Newton'
    ],
    [
        'New Braunfels, Texas',
        29.7030024,
        -98.1244531,
        'Texas',
        'United_States',
        'New_Braunfels'
    ],
    ['Nixon, Texas', 29.267464, -97.7644429, 'Texas', 'United_States', 'Nixon'],
    [
        'Odessa, Texas',
        31.8456816,
        -102.3676431,
        'Texas',
        'United_States',
        'Odessa'
    ],
    [
        'Orange, Texas',
        30.0929879,
        -93.7365549,
        'Texas',
        'United_States',
        'Orange'
    ],
    [
        'Ozona, Texas',
        30.7022249,
        -101.2013819,
        'Texas',
        'United_States',
        'Ozona'
    ],
    [
        'Padre Island National Seashore, Texas',
        27.4241558,
        -97.2991836,
        'Texas',
        'United_States',
        'Padre_Island_National_Seashore'
    ],
    [
        'Paducah, Texas',
        34.0123005,
        -100.3020588,
        'Texas',
        'United_States',
        'Paducah'
    ],
    [
        'Paint Rock, Texas',
        31.508491,
        -99.9200779,
        'Texas',
        'United_States',
        'Paint_Rock'
    ],
    [
        'Palestine, Texas',
        31.7621153,
        -95.6307891,
        'Texas',
        'United_States',
        'Palestine'
    ],
    [
        'Palo Alto Battlefield National Historic Site, Texas',
        26.0199747,
        -97.4651828,
        'Texas',
        'United_States',
        'Palo_Alto_Battlefield_National_Historic_Site'
    ],
    [
        'Palo Pinto, Texas',
        32.7679859,
        -98.2987543,
        'Texas',
        'United_States',
        'Palo_Pinto'
    ],
    [
        'Pampa, Texas',
        35.5361559,
        -100.9598709,
        'Texas',
        'United_States',
        'Pampa'
    ],
    [
        'Panhandle, Texas',
        35.3456038,
        -101.3804447,
        'Texas',
        'United_States',
        'Panhandle'
    ],
    ['Paris, Texas', 33.6609389, -95.555513, 'Texas', 'United_States', 'Paris'],
    [
        'Pearsall, Texas',
        28.8921939,
        -99.095033,
        'Texas',
        'United_States',
        'Pearsall'
    ],
    [
        'Pecos, Texas',
        31.4229124,
        -103.4932293,
        'Texas',
        'United_States',
        'Pecos'
    ],
    [
        'Perryton, Texas',
        36.4000313,
        -100.8026505,
        'Texas',
        'United_States',
        'Perryton'
    ],
    [
        'Pilot Point, Texas',
        33.396503,
        -96.9605608,
        'Texas',
        'United_States',
        'Pilot_Point'
    ],
    [
        'Pittsburg, Texas',
        32.9954021,
        -94.9657688,
        'Texas',
        'United_States',
        'Pittsburg'
    ],
    [
        'Plains, Texas',
        33.1887135,
        -102.8279888,
        'Texas',
        'United_States',
        'Plains'
    ],
    [
        'Plainview, Texas',
        34.1847936,
        -101.7068417,
        'Texas',
        'United_States',
        'Plainview'
    ],
    [
        'Plano, Texas',
        33.0198431,
        -96.6988856,
        'Texas',
        'United_States',
        'Plano'
    ],
    [
        'Port Aransas, Texas',
        27.8339158,
        -97.0610994,
        'Texas',
        'United_States',
        'Port_Aransas'
    ],
    [
        'Port Arthur, Texas',
        29.8849504,
        -93.939947,
        'Texas',
        'United_States',
        'Port_Arthur'
    ],
    [
        'Port Isabel, Texas',
        26.0734119,
        -97.2085844,
        'Texas',
        'United_States',
        'Port_Isabel'
    ],
    [
        'Port Lavaca, Texas',
        28.6149968,
        -96.6260892,
        'Texas',
        'United_States',
        'Port_Lavaca'
    ],
    ['Post, Texas', 33.1909283, -101.3781941, 'Texas', 'United_States', 'Post'],
    [
        'Quanah, Texas',
        34.297855,
        -99.7403718,
        'Texas',
        'United_States',
        'Quanah'
    ],
    [
        'Quitman, Texas',
        32.7959605,
        -95.4510641,
        'Texas',
        'United_States',
        'Quitman'
    ],
    [
        'Rankin, Texas',
        31.2226477,
        -101.9379085,
        'Texas',
        'United_States',
        'Rankin'
    ],
    [
        'Raymondville, Texas',
        26.4814565,
        -97.783051,
        'Texas',
        'United_States',
        'Raymondville'
    ],
    [
        'Refugio, Texas',
        28.3052838,
        -97.2752704,
        'Texas',
        'United_States',
        'Refugio'
    ],
    [
        'Richmond, Texas',
        29.5821811,
        -95.7607832,
        'Texas',
        'United_States',
        'Richmond'
    ],
    [
        'Rio Grande City, Texas',
        26.3797874,
        -98.8203046,
        'Texas',
        'United_States',
        'Rio_Grande_City'
    ],
    [
        'Roanoke, Texas',
        33.0040126,
        -97.2258483,
        'Texas',
        'United_States',
        'Roanoke'
    ],
    [
        'Robert Lee, Texas',
        31.8923657,
        -100.4848211,
        'Texas',
        'United_States',
        'Robert_Lee'
    ],
    ['Roby, Texas', 32.7448314, -100.3776067, 'Texas', 'United_States', 'Roby'],
    [
        'Rockport, Texas',
        28.0205733,
        -97.0544341,
        'Texas',
        'United_States',
        'Rockport'
    ],
    [
        'Rocksprings, Texas',
        30.0157647,
        -100.2053582,
        'Texas',
        'United_States',
        'Rocksprings'
    ],
    [
        'Rockwall, Texas',
        32.9312336,
        -96.4597089,
        'Texas',
        'United_States',
        'Rockwall'
    ],
    ['Rusk, Texas', 31.7960064, -95.1502214, 'Texas', 'United_States', 'Rusk'],
    [
        'Sabinal, Texas',
        29.3174576,
        -99.4664354,
        'Texas',
        'United_States',
        'Sabinal'
    ],
    [
        'Sanderson, Texas',
        30.1424083,
        -102.3940324,
        'Texas',
        'United_States',
        'Sanderson'
    ],
    [
        'San Angelo, Texas',
        31.4637723,
        -100.4370375,
        'Texas',
        'United_States',
        'San_Angelo'
    ],
    [
        'San Antonio, Texas',
        29.4241219,
        -98.4936282,
        'Texas',
        'United_States',
        'San_Antonio'
    ],
    [
        'San Antonio Missions National Historic Park, Texas',
        29.361157,
        -98.4784305,
        'Texas',
        'United_States',
        'San_Antonio_Missions_National_Historic_Park'
    ],
    [
        'San Augustine, Texas',
        31.5299029,
        -94.1060282,
        'Texas',
        'United_States',
        'San_Augustine'
    ],
    [
        'San Diego, Texas',
        27.7639145,
        -98.2388953,
        'Texas',
        'United_States',
        'San_Diego'
    ],
    [
        'San Marcos, Texas',
        29.8832749,
        -97.9413941,
        'Texas',
        'United_States',
        'San_Marcos'
    ],
    [
        'San Saba, Texas',
        31.1957234,
        -98.718098,
        'Texas',
        'United_States',
        'San_Saba'
    ],
    [
        'Sarita, Texas',
        27.2217001,
        -97.7893059,
        'Texas',
        'United_States',
        'Sarita'
    ],
    [
        'Schertz, Texas',
        29.5521737,
        -98.269734,
        'Texas',
        'United_States',
        'Schertz'
    ],
    [
        'Sealy, Texas',
        29.7807878,
        -96.1571833,
        'Texas',
        'United_States',
        'Sealy'
    ],
    [
        'Seguin, Texas',
        29.5688411,
        -97.9647269,
        'Texas',
        'United_States',
        'Seguin'
    ],
    [
        'Seminole, Texas',
        32.7189926,
        -102.6449101,
        'Texas',
        'United_States',
        'Seminole'
    ],
    [
        'Seymour, Texas',
        33.5942608,
        -99.2603531,
        'Texas',
        'United_States',
        'Seymour'
    ],
    [
        'Shallowater, Texas',
        33.6889728,
        -101.9982275,
        'Texas',
        'United_States',
        'Shallowater'
    ],
    [
        'Sherman, Texas',
        33.6356618,
        -96.6088805,
        'Texas',
        'United_States',
        'Sherman'
    ],
    [
        'Sierra Blanca, Texas',
        31.1745732,
        -105.3571764,
        'Texas',
        'United_States',
        'Sierra_Blanca'
    ],
    [
        'Silverton, Texas',
        34.4742306,
        -101.3046051,
        'Texas',
        'United_States',
        'Silverton'
    ],
    [
        'Sinton, Texas',
        28.0366818,
        -97.5091611,
        'Texas',
        'United_States',
        'Sinton'
    ],
    [
        'Snyder, Texas',
        32.7178862,
        -100.9176184,
        'Texas',
        'United_States',
        'Snyder'
    ],
    [
        'Sonora, Texas',
        30.5668484,
        -100.6434273,
        'Texas',
        'United_States',
        'Sonora'
    ],
    [
        'South Padre Island, Texas',
        26.1118401,
        -97.1681257,
        'Texas',
        'United_States',
        'South_Padre_Island'
    ],
    [
        'Spearman, Texas',
        36.1983665,
        -101.1923795,
        'Texas',
        'United_States',
        'Spearman'
    ],
    [
        'Stanton, Texas',
        32.1292891,
        -101.7884642,
        'Texas',
        'United_States',
        'Stanton'
    ],
    [
        'Stephenville, Texas',
        32.2206958,
        -98.2022633,
        'Texas',
        'United_States',
        'Stephenville'
    ],
    [
        'Sterling City, Texas',
        31.8362502,
        -100.9848324,
        'Texas',
        'United_States',
        'Sterling_City'
    ],
    [
        'Stinnett, Texas',
        35.8269841,
        -101.4429435,
        'Texas',
        'United_States',
        'Stinnett'
    ],
    [
        'Stratford, Texas',
        36.3361402,
        -102.0721191,
        'Texas',
        'United_States',
        'Stratford'
    ],
    [
        'Sulphur Springs, Texas',
        33.1384479,
        -95.6010668,
        'Texas',
        'United_States',
        'Sulphur_Springs'
    ],
    [
        'Sweeny, Texas',
        29.0388615,
        -95.6985608,
        'Texas',
        'United_States',
        'Sweeny'
    ],
    [
        'Sweetwater, Texas',
        32.4709519,
        -100.4059384,
        'Texas',
        'United_States',
        'Sweetwater'
    ],
    [
        'Tahoka, Texas',
        33.1667601,
        -101.7937669,
        'Texas',
        'United_States',
        'Tahoka'
    ],
    [
        'Tarpley, Texas',
        29.6571703,
        -99.2764299,
        'Texas',
        'United_States',
        'Tarpley'
    ],
    [
        'Temple, Texas',
        31.0982344,
        -97.342782,
        'Texas',
        'United_States',
        'Temple'
    ],
    [
        'Texarkana, Texas',
        33.425125,
        -94.0476882,
        'Texas',
        'United_States',
        'Texarkana'
    ],
    [
        'The Woodlands, Texas',
        30.1658207,
        -95.4612625,
        'Texas',
        'United_States',
        'The_Woodlands'
    ],
    [
        'Throckmorton, Texas',
        33.1787153,
        -99.1775756,
        'Texas',
        'United_States',
        'Throckmorton'
    ],
    [
        'Tilden, Texas',
        28.4615079,
        -98.5493785,
        'Texas',
        'United_States',
        'Tilden'
    ],
    [
        'Tulia, Texas',
        34.5358942,
        -101.7585159,
        'Texas',
        'United_States',
        'Tulia'
    ],
    [
        'Tyler, Texas',
        32.3512601,
        -95.3010624,
        'Texas',
        'United_States',
        'Tyler'
    ],
    [
        'Uvalde, Texas',
        29.2096836,
        -99.7861679,
        'Texas',
        'United_States',
        'Uvalde'
    ],
    [
        'Van Horn, Texas',
        31.0398558,
        -104.8307698,
        'Texas',
        'United_States',
        'Van_Horn'
    ],
    ['Vega, Texas', 35.2428319, -102.4282607, 'Texas', 'United_States', 'Vega'],
    [
        'Vernon, Texas',
        34.1545306,
        -99.2650804,
        'Texas',
        'United_States',
        'Vernon'
    ],
    [
        'Victoria, Texas',
        28.8052674,
        -97.0035982,
        'Texas',
        'United_States',
        'Victoria'
    ],
    ['Waco, Texas', 31.549333, -97.1466695, 'Texas', 'United_States', 'Waco'],
    [
        'Waller, Texas',
        30.0566085,
        -95.9268986,
        'Texas',
        'United_States',
        'Waller'
    ],
    [
        'Waxahachie, Texas',
        32.3865312,
        -96.8483311,
        'Texas',
        'United_States',
        'Waxahachie'
    ],
    [
        'Weatherford, Texas',
        32.7592955,
        -97.7972544,
        'Texas',
        'United_States',
        'Weatherford'
    ],
    [
        'Weimar, Texas',
        29.7030111,
        -96.7805333,
        'Texas',
        'United_States',
        'Weimar'
    ],
    [
        'Wellington, Texas',
        34.856166,
        -100.2137263,
        'Texas',
        'United_States',
        'Wellington'
    ],
    [
        'Wharton, Texas',
        29.3116366,
        -96.1027371,
        'Texas',
        'United_States',
        'Wharton'
    ],
    [
        'Wheeler, Texas',
        35.4453257,
        -100.2709552,
        'Texas',
        'United_States',
        'Wheeler'
    ],
    [
        'Wichita Falls, Texas',
        33.9137085,
        -98.4933873,
        'Texas',
        'United_States',
        'Wichita_Falls'
    ],
    [
        'Wimberley, Texas',
        29.9974362,
        -98.0986204,
        'Texas',
        'United_States',
        'Wimberley'
    ],
    [
        'Woodville, Texas',
        30.7752011,
        -94.4154758,
        'Texas',
        'United_States',
        'Woodville'
    ],
    [
        'Yoakum, Texas',
        29.2877469,
        -97.151931,
        'Texas',
        'United_States',
        'Yoakum'
    ],
    [
        'Zapata, Texas',
        26.9072605,
        -99.2714255,
        'Texas',
        'United_States',
        'Zapata'
    ],
    [
        'American Fork, Utah',
        40.3768954,
        -111.7957645,
        'Utah',
        'United_States',
        'American_Fork'
    ],
    [
        'Arches National Park, Utah',
        38.733081,
        -109.5925139,
        'Utah',
        'United_States',
        'Arches_National_Park'
    ],
    [
        'Beaver, Utah',
        38.2769149,
        -112.6410518,
        'Utah',
        'United_States',
        'Beaver'
    ],
    [
        'Bountiful, Utah',
        40.8893895,
        -111.880771,
        'Utah',
        'United_States',
        'Bountiful'
    ],
    [
        'Brigham City, Utah',
        41.5102129,
        -112.0155015,
        'Utah',
        'United_States',
        'Brigham_City'
    ],
    [
        'Bryce Canyon National Park, Utah',
        37.5930377,
        -112.1870895,
        'Utah',
        'United_States',
        'Bryce_Canyon_National_Park'
    ],
    [
        'Canyonlands National Park, Utah',
        38.3268693,
        -109.8782592,
        'Utah',
        'United_States',
        'Canyonlands_National_Park'
    ],
    [
        'Capitol Reef National Park, Utah',
        38.3669703,
        -111.2615042,
        'Utah',
        'United_States',
        'Capitol_Reef_National_Park'
    ],
    [
        'Castle Dale, Utah',
        39.212192,
        -111.019613,
        'Utah',
        'United_States',
        'Castle_Dale'
    ],
    [
        'Cedar Breaks National Monument, Utah',
        37.6353733,
        -112.8452799,
        'Utah',
        'United_States',
        'Cedar_Breaks_National_Monument'
    ],
    [
        'Cedar City, Utah',
        37.6774769,
        -113.0618931,
        'Utah',
        'United_States',
        'Cedar_City'
    ],
    [
        'Clearfield, Utah',
        41.1107771,
        -112.0260538,
        'Utah',
        'United_States',
        'Clearfield'
    ],
    [
        'Coalville, Utah',
        40.9177251,
        -111.3993634,
        'Utah',
        'United_States',
        'Coalville'
    ],
    [
        'Duchesne, Utah',
        40.1632913,
        -110.4029329,
        'Utah',
        'United_States',
        'Duchesne'
    ],
    [
        'Farmington, Utah',
        40.9804999,
        -111.8874392,
        'Utah',
        'United_States',
        'Farmington'
    ],
    [
        'Fillmore, Utah',
        38.9638553,
        -112.3397377,
        'Utah',
        'United_States',
        'Fillmore'
    ],
    [
        'Glen Canyon National Recreation Area, Utah',
        37.5222129,
        -110.7215324,
        'Utah',
        'United_States',
        'Glen_Canyon_National_Recreation_Area'
    ],
    [
        'Heber City, Utah',
        40.5070087,
        -111.4133234,
        'Utah',
        'United_States',
        'Heber_City'
    ],
    [
        'Hovenweep National Monument, Utah',
        37.3837623,
        -109.0726022,
        'Utah',
        'United_States',
        'Hovenweep_National_Monument'
    ],
    [
        'Junction, Utah',
        38.2374788,
        -112.2199252,
        'Utah',
        'United_States',
        'Junction'
    ],
    ['Kanab, Utah', 37.0474855, -112.5263145, 'Utah', 'United_States', 'Kanab'],
    [
        'Layton, Utah',
        41.0602216,
        -111.9710529,
        'Utah',
        'United_States',
        'Layton'
    ],
    ['Loa, Utah', 38.4027571, -111.642962, 'Utah', 'United_States', 'Loa'],
    ['Logan, Utah', 41.7369803, -111.8338359, 'Utah', 'United_States', 'Logan'],
    [
        'Manila, Utah',
        40.9880142,
        -109.7226498,
        'Utah',
        'United_States',
        'Manila'
    ],
    ['Manti, Utah', 39.2682951, -111.6368627, 'Utah', 'United_States', 'Manti'],
    ['Moab, Utah', 38.5733155, -109.5498395, 'Utah', 'United_States', 'Moab'],
    [
        'Monticello, Utah',
        37.8713829,
        -109.3428948,
        'Utah',
        'United_States',
        'Monticello'
    ],
    [
        'Morgan, Utah',
        41.036056,
        -111.6768769,
        'Utah',
        'United_States',
        'Morgan'
    ],
    [
        'Natural Bridges National Monument, Utah',
        37.6039774,
        -110.0050394,
        'Utah',
        'United_States',
        'Natural_Bridges_National_Monument'
    ],
    ['Nephi, Utah', 39.7102336, -111.8363216, 'Utah', 'United_States', 'Nephi'],
    ['Ogden, Utah', 41.223, -111.9738304, 'Utah', 'United_States', 'Ogden'],
    ['Orem, Utah', 40.2968979, -111.6946475, 'Utah', 'United_States', 'Orem'],
    [
        'Panguitch, Utah',
        37.8227551,
        -112.4357638,
        'Utah',
        'United_States',
        'Panguitch'
    ],
    [
        'Parowan, Utah',
        37.8421975,
        -112.8279996,
        'Utah',
        'United_States',
        'Parowan'
    ],
    [
        'Pleasant Grove, Utah',
        40.3641184,
        -111.73854,
        'Utah',
        'United_States',
        'Pleasant_Grove'
    ],
    ['Price, Utah', 39.5994095, -110.8107148, 'Utah', 'United_States', 'Price'],
    [
        'Promontory, Utah',
        41.61977,
        -112.546791,
        'Utah',
        'United_States',
        'Promontory'
    ],
    ['Provo, Utah', 40.2338438, -111.6585337, 'Utah', 'United_States', 'Provo'],
    [
        'Rainbow Bridge National Monument, Utah',
        37.0774313,
        -110.9642924,
        'Utah',
        'United_States',
        'Rainbow_Bridge_National_Monument'
    ],
    [
        'Randolph, Utah',
        41.6657759,
        -111.1821409,
        'Utah',
        'United_States',
        'Randolph'
    ],
    [
        'Richfield, Utah',
        38.7724673,
        -112.0840943,
        'Utah',
        'United_States',
        'Richfield'
    ],
    ['Roy, Utah', 41.1616108, -112.0263313, 'Utah', 'United_States', 'Roy'],
    [
        'Saint George, Utah',
        37.0965278,
        -113.5684164,
        'Utah',
        'United_States',
        'Saint_George'
    ],
    [
        'Salt Lake City, Utah',
        40.7607793,
        -111.8910474,
        'Utah',
        'United_States',
        'Salt_Lake_City'
    ],
    [
        'Taylorsville, Utah',
        40.6677248,
        -111.9388258,
        'Utah',
        'United_States',
        'Taylorsville'
    ],
    [
        'Timpanogos Cave National Monument, Utah',
        40.4405556,
        -111.7094444,
        'Utah',
        'United_States',
        'Timpanogos_Cave_National_Monument'
    ],
    ['Tooele, Utah', 40.5307776, -112.29828, 'Utah', 'United_States', 'Tooele'],
    [
        'Vernal, Utah',
        40.4555157,
        -109.5287479,
        'Utah',
        'United_States',
        'Vernal'
    ],
    [
        'Zion National Park, Utah',
        37.2982022,
        -113.0263005,
        'Utah',
        'United_States',
        'Zion_National_Park'
    ],
    [
        'Bennington, Vermont',
        42.8781345,
        -73.1967741,
        'Vermont',
        'United_States',
        'Bennington'
    ],
    [
        'Brattleboro, Vermont',
        42.8509152,
        -72.5578678,
        'Vermont',
        'United_States',
        'Brattleboro'
    ],
    [
        'Burlington, Vermont',
        44.4758825,
        -73.212072,
        'Vermont',
        'United_States',
        'Burlington'
    ],
    [
        'Charleston, Vermont',
        44.8443616,
        -72.0330896,
        'Vermont',
        'United_States',
        'Charleston'
    ],
    [
        'Chelsea, Vermont',
        43.989788,
        -72.4475994,
        'Vermont',
        'United_States',
        'Chelsea'
    ],
    [
        'Essex Junction, Vermont',
        44.4905433,
        -73.1112207,
        'Vermont',
        'United_States',
        'Essex_Junction'
    ],
    [
        'Fair Haven, Vermont',
        43.594801,
        -73.2657155,
        'Vermont',
        'United_States',
        'Fair_Haven'
    ],
    [
        'Guildhall, Vermont',
        44.5422719,
        -71.648975,
        'Vermont',
        'United_States',
        'Guildhall'
    ],
    [
        'Hyde Park, Vermont',
        44.5939318,
        -72.6165192,
        'Vermont',
        'United_States',
        'Hyde_Park'
    ],
    [
        'Middlebury, Vermont',
        44.0153371,
        -73.16734,
        'Vermont',
        'United_States',
        'Middlebury'
    ],
    [
        'Montpelier, Vermont',
        44.2600593,
        -72.5753869,
        'Vermont',
        'United_States',
        'Montpelier'
    ],
    [
        'Newfane, Vermont',
        42.9856736,
        -72.6559313,
        'Vermont',
        'United_States',
        'Newfane'
    ],
    [
        'Newport, Vermont',
        44.9364356,
        -72.2051022,
        'Vermont',
        'United_States',
        'Newport'
    ],
    [
        'North Bennington, Vermont',
        42.930356,
        -73.242609,
        'Vermont',
        'United_States',
        'North_Bennington'
    ],
    [
        'North Hero, Vermont',
        44.8311432,
        -73.273505,
        'Vermont',
        'United_States',
        'North_Hero'
    ],
    [
        'Proctor, Vermont',
        43.6606225,
        -73.0356641,
        'Vermont',
        'United_States',
        'Proctor'
    ],
    [
        'Royalton, Vermont',
        43.8176574,
        -72.5427505,
        'Vermont',
        'United_States',
        'Royalton'
    ],
    [
        'Rutland, Vermont',
        43.6106237,
        -72.9726065,
        'Vermont',
        'United_States',
        'Rutland'
    ],
    [
        'Saint Albans, Vermont',
        44.8107132,
        -73.0835582,
        'Vermont',
        'United_States',
        'Saint_Albans'
    ],
    [
        'Saint Johnsbury, Vermont',
        44.4192627,
        -72.0151183,
        'Vermont',
        'United_States',
        'Saint_Johnsbury'
    ],
    [
        'Springfield, Vermont',
        43.2984078,
        -72.4823117,
        'Vermont',
        'United_States',
        'Springfield'
    ],
    [
        'Wilmington, Vermont',
        42.8683889,
        -72.8714468,
        'Vermont',
        'United_States',
        'Wilmington'
    ],
    [
        'Woodstock, Vermont',
        43.6242442,
        -72.5185112,
        'Vermont',
        'United_States',
        'Woodstock'
    ],
    [
        'Abingdon, Virginia',
        36.7098335,
        -81.9773482,
        'Virginia',
        'United_States',
        'Abingdon'
    ],
    [
        'Accomac, Virginia',
        37.7195741,
        -75.6654845,
        'Virginia',
        'United_States',
        'Accomac'
    ],
    [
        'Alexandria, Virginia',
        38.8048355,
        -77.0469214,
        'Virginia',
        'United_States',
        'Alexandria'
    ],
    [
        'Amelia Court House, Virginia',
        37.3426037,
        -77.9805478,
        'Virginia',
        'United_States',
        'Amelia_Court_House'
    ],
    [
        'Amherst, Virginia',
        37.5851412,
        -79.0514134,
        'Virginia',
        'United_States',
        'Amherst'
    ],
    [
        'Appomattox Court House National Historical Park, Virginia',
        37.3775405,
        -78.7959894,
        'Virginia',
        'United_States',
        'Appomattox_Court_House_National_Historical_Park'
    ],
    [
        'Arlington, Virginia',
        38.8799697,
        -77.1067698,
        'Virginia',
        'United_States',
        'Arlington'
    ],
    [
        'Arlington House National Memorial, Virginia',
        38.8821953,
        -77.0734759,
        'Virginia',
        'United_States',
        'Arlington_House_National_Memorial'
    ],
    [
        'Ashburn, Virginia',
        39.0437567,
        -77.4874416,
        'Virginia',
        'United_States',
        'Ashburn'
    ],
    [
        'Bedford, Virginia',
        37.3343079,
        -79.5230877,
        'Virginia',
        'United_States',
        'Bedford'
    ],
    [
        'Berryville, Virginia',
        39.1517713,
        -77.9822193,
        'Virginia',
        'United_States',
        'Berryville'
    ],
    [
        'Blacksburg, Virginia',
        37.2295733,
        -80.4139393,
        'Virginia',
        'United_States',
        'Blacksburg'
    ],
    [
        'Bland, Virginia',
        37.1021861,
        -81.116215,
        'Virginia',
        'United_States',
        'Bland'
    ],
    [
        'Booker T Washington National Monument, Virginia',
        37.1195544,
        -79.7316768,
        'Virginia',
        'United_States',
        'Booker_T_Washington_National_Monument'
    ],
    [
        'Bowling Green, Virginia',
        38.0495789,
        -77.3466468,
        'Virginia',
        'United_States',
        'Bowling_Green'
    ],
    [
        'Boydton, Virginia',
        36.6676413,
        -78.3874978,
        'Virginia',
        'United_States',
        'Boydton'
    ],
    [
        'Bristol, Virginia',
        36.595141,
        -82.1888089,
        'Virginia',
        'United_States',
        'Bristol'
    ],
    [
        'Buckingham, Virginia',
        37.5518299,
        -78.5545165,
        'Virginia',
        'United_States',
        'Buckingham'
    ],
    [
        'Buena Vista, Virginia',
        37.7343004,
        -79.3539238,
        'Virginia',
        'United_States',
        'Buena_Vista'
    ],
    [
        'Burke, Virginia',
        38.7934466,
        -77.2716505,
        'Virginia',
        'United_States',
        'Burke'
    ],
    [
        'Cedar Creek and Belle Grove Historical Park, Virginia',
        38.0133123,
        -79.8408787,
        'Virginia',
        'United_States',
        'Cedar_Creek_and_Belle_Grove_Historical_Park'
    ],
    [
        'Chantilly, Virginia',
        38.8942786,
        -77.4310992,
        'Virginia',
        'United_States',
        'Chantilly'
    ],
    [
        'Charles City, Virginia',
        37.3438906,
        -77.071268,
        'Virginia',
        'United_States',
        'Charles_City'
    ],
    [
        'Charlottesville, Virginia',
        38.0293059,
        -78.4766781,
        'Virginia',
        'United_States',
        'Charlottesville'
    ],
    [
        'Charlotte Court House, Virginia',
        37.0565361,
        -78.638334,
        'Virginia',
        'United_States',
        'Charlotte_Court_House'
    ],
    [
        'Chatham, Virginia',
        36.8256943,
        -79.3980806,
        'Virginia',
        'United_States',
        'Chatham'
    ],
    [
        'Chesapeake, Virginia',
        36.7682088,
        -76.2874927,
        'Virginia',
        'United_States',
        'Chesapeake'
    ],
    [
        'Chesterfield, Virginia',
        37.3770935,
        -77.5049863,
        'Virginia',
        'United_States',
        'Chesterfield'
    ],
    [
        'Christiansburg, Virginia',
        37.1298517,
        -80.4089389,
        'Virginia',
        'United_States',
        'Christiansburg'
    ],
    [
        'Clintwood, Virginia',
        37.1501067,
        -82.4559845,
        'Virginia',
        'United_States',
        'Clintwood'
    ],
    [
        'Colonial Heights, Virginia',
        37.244039,
        -77.4102607,
        'Virginia',
        'United_States',
        'Colonial_Heights'
    ],
    [
        'Colonial Naitonal Historical Park, Virginia',
        37.2881,
        -76.6342,
        'Virginia',
        'United_States',
        'Colonial_Naitonal_Historical_Park'
    ],
    [
        'Courtland, Virginia',
        36.7162613,
        -77.0680195,
        'Virginia',
        'United_States',
        'Courtland'
    ],
    [
        'Covington, Virginia',
        37.7934585,
        -79.9939463,
        'Virginia',
        'United_States',
        'Covington'
    ],
    [
        'Culpeper, Virginia',
        38.4729632,
        -77.9962512,
        'Virginia',
        'United_States',
        'Culpeper'
    ],
    [
        'Cumberland, Virginia',
        37.4963918,
        -78.2448664,
        'Virginia',
        'United_States',
        'Cumberland'
    ],
    [
        'Danville, Virginia',
        36.5859718,
        -79.3950228,
        'Virginia',
        'United_States',
        'Danville'
    ],
    [
        'Dinwiddie, Virginia',
        37.0774889,
        -77.5857056,
        'Virginia',
        'United_States',
        'Dinwiddie'
    ],
    [
        'Earlysville, Virginia',
        38.1529068,
        -78.4624064,
        'Virginia',
        'United_States',
        'Earlysville'
    ],
    [
        'Eastville, Virginia',
        37.3526369,
        -75.945765,
        'Virginia',
        'United_States',
        'Eastville'
    ],
    [
        'Emporia, Virginia',
        36.6859829,
        -77.5424809,
        'Virginia',
        'United_States',
        'Emporia'
    ],
    [
        'Fairfax, Virginia',
        38.8462236,
        -77.3063733,
        'Virginia',
        'United_States',
        'Fairfax'
    ],
    [
        'Falls Church, Virginia',
        38.882334,
        -77.1710914,
        'Virginia',
        'United_States',
        'Falls_Church'
    ],
    [
        'Farmville, Virginia',
        37.3020965,
        -78.3919401,
        'Virginia',
        'United_States',
        'Farmville'
    ],
    [
        'Fincastle, Virginia',
        37.4992986,
        -79.8772647,
        'Virginia',
        'United_States',
        'Fincastle'
    ],
    [
        'Floyd, Virginia',
        36.9112443,
        -80.3200502,
        'Virginia',
        'United_States',
        'Floyd'
    ],
    [
        'Franklin, Virginia',
        36.6776507,
        -76.9224608,
        'Virginia',
        'United_States',
        'Franklin'
    ],
    [
        'Fredericksburg, Virginia',
        38.3031837,
        -77.4605399,
        'Virginia',
        'United_States',
        'Fredericksburg'
    ],
    [
        'Fredericksburg and Spotsylvania National Military Park, Virginia',
        38.2937833,
        -77.4674082,
        'Virginia',
        'United_States',
        'Fredericksburg_and_Spotsylvania_National_Military_Park'
    ],
    [
        'Front Royal, Virginia',
        38.9181671,
        -78.1944446,
        'Virginia',
        'United_States',
        'Front_Royal'
    ],
    [
        'Galax, Virginia',
        36.6612387,
        -80.9239671,
        'Virginia',
        'United_States',
        'Galax'
    ],
    [
        'Gate City, Virginia',
        36.6378774,
        -82.5809876,
        'Virginia',
        'United_States',
        'Gate_City'
    ],
    [
        'George Washington Birthplace National Monument, Virginia',
        38.1929491,
        -76.9225766,
        'Virginia',
        'United_States',
        'George_Washington_Birthplace_National_Monument'
    ],
    [
        'Gloucester, Virginia',
        37.4098631,
        -76.5266174,
        'Virginia',
        'United_States',
        'Gloucester'
    ],
    [
        'Goochland, Virginia',
        37.6841421,
        -77.885374,
        'Virginia',
        'United_States',
        'Goochland'
    ],
    [
        'Gordonsville, Virginia',
        38.1373577,
        -78.187781,
        'Virginia',
        'United_States',
        'Gordonsville'
    ],
    [
        'Green Springs National Historic Landmark District, Virginia',
        38.0345099,
        -78.1792434,
        'Virginia',
        'United_States',
        'Green_Springs_National_Historic_Landmark_District'
    ],
    [
        'Grundy, Virginia',
        37.2778886,
        -82.0990223,
        'Virginia',
        'United_States',
        'Grundy'
    ],
    [
        'Halifax, Virginia',
        36.7659709,
        -78.9283441,
        'Virginia',
        'United_States',
        'Halifax'
    ],
    [
        'Hampton, Virginia',
        37.0298687,
        -76.3452218,
        'Virginia',
        'United_States',
        'Hampton'
    ],
    [
        'Hanover, Virginia',
        37.7665686,
        -77.3702444,
        'Virginia',
        'United_States',
        'Hanover'
    ],
    [
        'Harrisonburg, Virginia',
        38.4495688,
        -78.8689155,
        'Virginia',
        'United_States',
        'Harrisonburg'
    ],
    [
        'Heathsville, Virginia',
        37.9175317,
        -76.4721934,
        'Virginia',
        'United_States',
        'Heathsville'
    ],
    [
        'Herndon, Virginia',
        38.9695545,
        -77.3860976,
        'Virginia',
        'United_States',
        'Herndon'
    ],
    [
        'Hillsville, Virginia',
        36.7626282,
        -80.7347947,
        'Virginia',
        'United_States',
        'Hillsville'
    ],
    [
        'Hopewell, Virginia',
        37.3043154,
        -77.2872001,
        'Virginia',
        'United_States',
        'Hopewell'
    ],
    [
        'Independence, Virginia',
        36.6223478,
        -81.150923,
        'Virginia',
        'United_States',
        'Independence'
    ],
    [
        'Isle of Wight, Virginia',
        36.908286,
        -76.7065346,
        'Virginia',
        'United_States',
        'Isle_of_Wight'
    ],
    [
        'Jonesville, Virginia',
        36.6889777,
        -83.1110047,
        'Virginia',
        'United_States',
        'Jonesville'
    ],
    [
        'King and Queen Court House, Virginia',
        37.6699718,
        -76.8773242,
        'Virginia',
        'United_States',
        'King_and_Queen_Court_House'
    ],
    [
        'King George, Virginia',
        38.2664512,
        -77.1807842,
        'Virginia',
        'United_States',
        'King_George'
    ],
    [
        'King William, Virginia',
        37.6871635,
        -77.0136839,
        'Virginia',
        'United_States',
        'King_William'
    ],
    [
        'Lancaster, Virginia',
        37.770026,
        -76.4660157,
        'Virginia',
        'United_States',
        'Lancaster'
    ],
    [
        'Langley Research Center, Virginia',
        37.0927,
        -76.3813,
        'Virginia',
        'United_States',
        'Langley_Research_Center'
    ],
    [
        'Lawrenceville, Virginia',
        36.7576469,
        -77.8469374,
        'Virginia',
        'United_States',
        'Lawrenceville'
    ],
    [
        'Lebanon, Virginia',
        36.900942,
        -82.0801309,
        'Virginia',
        'United_States',
        'Lebanon'
    ],
    [
        'Leesburg, Virginia',
        39.1156615,
        -77.5636015,
        'Virginia',
        'United_States',
        'Leesburg'
    ],
    [
        'Lexington, Virginia',
        37.7840208,
        -79.4428157,
        'Virginia',
        'United_States',
        'Lexington'
    ],
    [
        'Louisa, Virginia',
        38.0251394,
        -78.0041649,
        'Virginia',
        'United_States',
        'Louisa'
    ],
    [
        'Lovingston, Virginia',
        37.7598066,
        -78.8707458,
        'Virginia',
        'United_States',
        'Lovingston'
    ],
    [
        'Lunenburg, Virginia',
        36.9612967,
        -78.2660275,
        'Virginia',
        'United_States',
        'Lunenburg'
    ],
    [
        'Luray, Virginia',
        38.665397,
        -78.4594522,
        'Virginia',
        'United_States',
        'Luray'
    ],
    [
        'Lynchburg, Virginia',
        37.4137536,
        -79.1422464,
        'Virginia',
        'United_States',
        'Lynchburg'
    ],
    [
        'Madison, Virginia',
        38.3804062,
        -78.2575035,
        'Virginia',
        'United_States',
        'Madison'
    ],
    [
        'Manassas, Virginia',
        38.7509488,
        -77.4752667,
        'Virginia',
        'United_States',
        'Manassas'
    ],
    [
        'Manassas National Battlefield Park, Virginia',
        38.8213,
        -77.5307,
        'Virginia',
        'United_States',
        'Manassas_National_Battlefield_Park'
    ],
    [
        'Marion, Virginia',
        36.8348383,
        -81.5148368,
        'Virginia',
        'United_States',
        'Marion'
    ],
    [
        'Martinsville, Virginia',
        36.6915262,
        -79.8725386,
        'Virginia',
        'United_States',
        'Martinsville'
    ],
    [
        'Matthews, Virginia',
        37.437006,
        -76.3206618,
        'Virginia',
        'United_States',
        'Matthews'
    ],
    [
        'Mid-Atlantic Regional Spaceport, Virginia',
        37.843333,
        -75.478056,
        'Virginia',
        'United_States',
        'Mid-Atlantic_Regional_Spaceport'
    ],
    [
        'Monterey, Virginia',
        38.4123429,
        -79.5806036,
        'Virginia',
        'United_States',
        'Monterey'
    ],
    [
        'Montross, Virginia',
        38.0951317,
        -76.8274644,
        'Virginia',
        'United_States',
        'Montross'
    ],
    [
        'Newport News, Virginia',
        37.0870821,
        -76.4730122,
        'Virginia',
        'United_States',
        'Newport_News'
    ],
    [
        'New Castle, Virginia',
        37.5001287,
        -80.1108815,
        'Virginia',
        'United_States',
        'New_Castle'
    ],
    [
        'New Kent, Virginia',
        37.5149037,
        -76.9848327,
        'Virginia',
        'United_States',
        'New_Kent'
    ],
    [
        'Norfolk, Virginia',
        36.8507689,
        -76.2858726,
        'Virginia',
        'United_States',
        'Norfolk'
    ],
    [
        'Norton, Virginia',
        36.933433,
        -82.6290459,
        'Virginia',
        'United_States',
        'Norton'
    ],
    [
        'Nottoway, Virginia',
        37.1299922,
        -78.0793888,
        'Virginia',
        'United_States',
        'Nottoway'
    ],
    [
        'Onancock, Virginia',
        37.7117971,
        -75.7490966,
        'Virginia',
        'United_States',
        'Onancock'
    ],
    [
        'Orange, Virginia',
        38.2454106,
        -78.1108342,
        'Virginia',
        'United_States',
        'Orange'
    ],
    [
        'Palmyra, Virginia',
        37.8609872,
        -78.2633426,
        'Virginia',
        'United_States',
        'Palmyra'
    ],
    [
        'Parksley, Virginia',
        37.7820725,
        -75.6535401,
        'Virginia',
        'United_States',
        'Parksley'
    ],
    [
        'Pearisburg, Virginia',
        37.3265112,
        -80.7350711,
        'Virginia',
        'United_States',
        'Pearisburg'
    ],
    [
        'Petersburg, Virginia',
        37.2279279,
        -77.4019267,
        'Virginia',
        'United_States',
        'Petersburg'
    ],
    [
        'Petersburg National Battlefield, Virginia',
        37.2438545,
        -77.3568983,
        'Virginia',
        'United_States',
        'Petersburg_National_Battlefield'
    ],
    [
        'Poquoson, Virginia',
        37.1223664,
        -76.3457773,
        'Virginia',
        'United_States',
        'Poquoson'
    ],
    [
        'Portsmouth, Virginia',
        36.8354258,
        -76.2982742,
        'Virginia',
        'United_States',
        'Portsmouth'
    ],
    [
        'Powhatan, Virginia',
        37.5415273,
        -77.9188239,
        'Virginia',
        'United_States',
        'Powhatan'
    ],
    [
        'Prince George, Virginia',
        37.2220383,
        -77.2856305,
        'Virginia',
        'United_States',
        'Prince_George'
    ],
    [
        'Prince William Forest, Virginia',
        38.5852778,
        -77.3797222,
        'Virginia',
        'United_States',
        'Prince_William_Forest'
    ],
    [
        'Pulaski, Virginia',
        37.0478982,
        -80.7797935,
        'Virginia',
        'United_States',
        'Pulaski'
    ],
    [
        'Purcellville, Virginia',
        39.1367717,
        -77.7147153,
        'Virginia',
        'United_States',
        'Purcellville'
    ],
    [
        'Radford, Virginia',
        37.1317924,
        -80.5764477,
        'Virginia',
        'United_States',
        'Radford'
    ],
    [
        'Reston, Virginia',
        38.9586307,
        -77.3570028,
        'Virginia',
        'United_States',
        'Reston'
    ],
    [
        'Richmond, Virginia',
        37.5407246,
        -77.4360481,
        'Virginia',
        'United_States',
        'Richmond'
    ],
    [
        'Richmond National Battlefield Park, Virginia',
        37.429167,
        77.373611,
        'Virginia',
        'United_States',
        'Richmond_National_Battlefield_Park'
    ],
    [
        'Roanoke, Virginia',
        37.2709704,
        -79.9414266,
        'Virginia',
        'United_States',
        'Roanoke'
    ],
    [
        'Rocky Mount, Virginia',
        36.9976403,
        -79.8919774,
        'Virginia',
        'United_States',
        'Rocky_Mount'
    ],
    [
        'Rustburg, Virginia',
        37.2768113,
        -79.1008543,
        'Virginia',
        'United_States',
        'Rustburg'
    ],
    [
        'Salem, Virginia',
        37.2934681,
        -80.0547626,
        'Virginia',
        'United_States',
        'Salem'
    ],
    [
        'Saluda, Virginia',
        37.6063547,
        -76.5949768,
        'Virginia',
        'United_States',
        'Saluda'
    ],
    [
        'Shenandoah National Park, Virginia',
        38.2927558,
        -78.6795836,
        'Virginia',
        'United_States',
        'Shenandoah_National_Park'
    ],
    [
        'South Hill, Virginia',
        36.726532,
        -78.1288857,
        'Virginia',
        'United_States',
        'South_Hill'
    ],
    [
        'Spotsylvania Courthouse, Virginia',
        38.1979096,
        -77.5877652,
        'Virginia',
        'United_States',
        'Spotsylvania_Courthouse'
    ],
    [
        'Springfield, Virginia',
        38.7892801,
        -77.1872036,
        'Virginia',
        'United_States',
        'Springfield'
    ],
    [
        'Stafford, Virginia',
        38.4220687,
        -77.4083086,
        'Virginia',
        'United_States',
        'Stafford'
    ],
    [
        'Stanardsville, Virginia',
        38.2973519,
        -78.4400099,
        'Virginia',
        'United_States',
        'Stanardsville'
    ],
    [
        'Staunton, Virginia',
        38.149576,
        -79.0716958,
        'Virginia',
        'United_States',
        'Staunton'
    ],
    [
        'Stuart, Virginia',
        36.6363992,
        -80.2693963,
        'Virginia',
        'United_States',
        'Stuart'
    ],
    [
        'Suffolk, Virginia',
        36.7282054,
        -76.5835621,
        'Virginia',
        'United_States',
        'Suffolk'
    ],
    [
        'Surry, Virginia',
        37.1379265,
        -76.8352384,
        'Virginia',
        'United_States',
        'Surry'
    ],
    [
        'Sussex, Virginia',
        36.9150425,
        -77.2793864,
        'Virginia',
        'United_States',
        'Sussex'
    ],
    [
        'Tangier, Virginia',
        37.8262373,
        -75.9916035,
        'Virginia',
        'United_States',
        'Tangier'
    ],
    [
        'Tappahannock, Virginia',
        37.9254135,
        -76.8591301,
        'Virginia',
        'United_States',
        'Tappahannock'
    ],
    [
        'Tazewell, Virginia',
        37.1148374,
        -81.5195548,
        'Virginia',
        'United_States',
        'Tazewell'
    ],
    [
        'Virginia Beach, Virginia',
        36.8529263,
        -75.977985,
        'Virginia',
        'United_States',
        'Virginia_Beach'
    ],
    [
        'Wallops Island, Virginia',
        37.8431229,
        -75.4779349,
        'Virginia',
        'United_States',
        'Wallops_Island'
    ],
    [
        'Warm Springs, Virginia',
        38.0460901,
        -79.7905863,
        'Virginia',
        'United_States',
        'Warm_Springs'
    ],
    [
        'Warrenton, Virginia',
        38.7134516,
        -77.7952712,
        'Virginia',
        'United_States',
        'Warrenton'
    ],
    [
        'Warsaw, Virginia',
        37.9587446,
        -76.7580139,
        'Virginia',
        'United_States',
        'Warsaw'
    ],
    [
        'Washington, Virginia',
        38.7134519,
        -78.1594439,
        'Virginia',
        'United_States',
        'Washington'
    ],
    [
        'Waynesboro, Virginia',
        38.0684692,
        -78.8894682,
        'Virginia',
        'United_States',
        'Waynesboro'
    ],
    [
        'Williamsburg, Virginia',
        37.2707022,
        -76.7074571,
        'Virginia',
        'United_States',
        'Williamsburg'
    ],
    [
        'Winchester, Virginia',
        39.1856597,
        -78.1633341,
        'Virginia',
        'United_States',
        'Winchester'
    ],
    [
        'Wise, Virginia',
        36.9759345,
        -82.5757108,
        'Virginia',
        'United_States',
        'Wise'
    ],
    [
        'Wolf Trap Farm Park National Park, Virginia',
        38.9409943,
        -77.2671368,
        'Virginia',
        'United_States',
        'Wolf_Trap_Farm_Park_National_Park'
    ],
    [
        'Woodbridge, Virginia',
        38.6581722,
        -77.2497049,
        'Virginia',
        'United_States',
        'Woodbridge'
    ],
    [
        'Woodstock, Virginia',
        38.8817784,
        -78.5058429,
        'Virginia',
        'United_States',
        'Woodstock'
    ],
    [
        'Wytheville, Virginia',
        36.9484528,
        -81.084811,
        'Virginia',
        'United_States',
        'Wytheville'
    ],
    [
        'Yorktown, Virginia',
        37.2387556,
        -76.5096731,
        'Virginia',
        'United_States',
        'Yorktown'
    ],
    [
        'Buck Island Reef National Monument, Virgin Islands',
        17.7873008,
        -64.6197171,
        'Virgin_Islands',
        'United_States',
        'Buck_Island_Reef_National_Monument'
    ],
    [
        'Charlotte Amalie, Virgin Islands',
        18.3419004,
        -64.9307007,
        'Virgin_Islands',
        'United_States',
        'Charlotte_Amalie'
    ],
    [
        'Christiansted National Historic Site, Virgin Islands',
        17.7468672,
        -64.7021636,
        'Virgin_Islands',
        'United_States',
        'Christiansted_National_Historic_Site'
    ],
    [
        'Saint Croix, Virgin Islands',
        17.7058446,
        -64.858516,
        'Virgin_Islands',
        'United_States',
        'Saint_Croix'
    ],
    [
        'Saint John, Virgin Islands',
        18.3274718,
        -64.7399494,
        'Virgin_Islands',
        'United_States',
        'Saint_John'
    ],
    [
        'Saint Thomas, Virgin Islands',
        18.335361,
        -64.9534009,
        'Virgin_Islands',
        'United_States',
        'Saint_Thomas'
    ],
    [
        'Salt River Bay National Historical Park, Virgin Islands',
        17.7768421,
        -64.7547678,
        'Virgin_Islands',
        'United_States',
        'Salt_River_Bay_National_Historical_Park'
    ],
    [
        'Virgin Islands Coral Reef National Monument, Virgin Islands',
        18.306111,
        -64.726944,
        'Virgin_Islands',
        'United_States',
        'Virgin_Islands_Coral_Reef_National_Monument'
    ],
    [
        'Virgin Islands National Park, Virgin Islands',
        18.3424047,
        -64.7485759,
        'Virgin_Islands',
        'United_States',
        'Virgin_Islands_National_Park'
    ],
    [
        'Aberdeen, Washington',
        46.9753708,
        -123.8157218,
        'Washington',
        'United_States',
        'Aberdeen'
    ],
    [
        'Anacortes, Washington',
        48.5126045,
        -122.6126718,
        'Washington',
        'United_States',
        'Anacortes'
    ],
    [
        'Asotin, Washington',
        46.3393265,
        -117.0482116,
        'Washington',
        'United_States',
        'Asotin'
    ],
    [
        'Bainbridge Island, Washington',
        47.6262081,
        -122.5212448,
        'Washington',
        'United_States',
        'Bainbridge_Island'
    ],
    [
        'Bellingham, Washington',
        48.74908,
        -122.4781473,
        'Washington',
        'United_States',
        'Bellingham'
    ],
    [
        'Benton City, Washington',
        46.2631897,
        -119.487802,
        'Washington',
        'United_States',
        'Benton_City'
    ],
    [
        'Blaine, Washington',
        48.993723,
        -122.7471191,
        'Washington',
        'United_States',
        'Blaine'
    ],
    [
        'Bremerton, Washington',
        47.5673202,
        -122.6329356,
        'Washington',
        'United_States',
        'Bremerton'
    ],
    [
        'Burlington, Washington',
        48.4756621,
        -122.3254375,
        'Washington',
        'United_States',
        'Burlington'
    ],
    [
        'Cathlamet, Washington',
        46.2031656,
        -123.3831834,
        'Washington',
        'United_States',
        'Cathlamet'
    ],
    [
        'Chehalis, Washington',
        46.6620478,
        -122.9640175,
        'Washington',
        'United_States',
        'Chehalis'
    ],
    [
        'Colfax, Washington',
        46.8801654,
        -117.3643495,
        'Washington',
        'United_States',
        'Colfax'
    ],
    [
        'Colville, Washington',
        48.5449971,
        -117.9009544,
        'Washington',
        'United_States',
        'Colville'
    ],
    [
        'Coupeville, Washington',
        48.2198208,
        -122.6862804,
        'Washington',
        'United_States',
        'Coupeville'
    ],
    [
        'Davenport, Washington',
        47.6540456,
        -118.149973,
        'Washington',
        'United_States',
        'Davenport'
    ],
    [
        'Dayton, Washington',
        46.3237525,
        -117.9724367,
        'Washington',
        'United_States',
        'Dayton'
    ],
    [
        'Ebeys Landing National Historical Reserve, Washington',
        48.1929553,
        -122.7096898,
        'Washington',
        'United_States',
        'Ebeys_Landing_National_Historical_Reserve'
    ],
    [
        'Ellensburg, Washington',
        46.9965144,
        -120.5478474,
        'Washington',
        'United_States',
        'Ellensburg'
    ],
    [
        'Enumclaw, Washington',
        47.2042681,
        -121.9915003,
        'Washington',
        'United_States',
        'Enumclaw'
    ],
    [
        'Ephrata, Washington',
        47.3176385,
        -119.5536491,
        'Washington',
        'United_States',
        'Ephrata'
    ],
    [
        'Everett, Washington',
        47.9789848,
        -122.2020794,
        'Washington',
        'United_States',
        'Everett'
    ],
    [
        'Fort Vancouver National Historic Site, Washington',
        45.622632,
        -122.6621373,
        'Washington',
        'United_States',
        'Fort_Vancouver_National_Historic_Site'
    ],
    [
        'Friday Harbor, Washington',
        48.5342662,
        -123.0171242,
        'Washington',
        'United_States',
        'Friday_Harbor'
    ],
    [
        'Goldendale, Washington',
        45.8206794,
        -120.8217312,
        'Washington',
        'United_States',
        'Goldendale'
    ],
    [
        'Kelso, Washington',
        46.146779,
        -122.9084445,
        'Washington',
        'United_States',
        'Kelso'
    ],
    [
        'Kennewick, Washington',
        46.2112458,
        -119.1372338,
        'Washington',
        'United_States',
        'Kennewick'
    ],
    [
        'Lake Chelan National Recreation Area, Washington',
        48.2594272,
        -120.5708312,
        'Washington',
        'United_States',
        'Lake_Chelan_National_Recreation_Area'
    ],
    [
        'Lake Roosevelt National Recreation Area, Washington',
        48.1011309,
        -118.246639,
        'Washington',
        'United_States',
        'Lake_Roosevelt_National_Recreation_Area'
    ],
    [
        'Lewis and Clark National Historical Park, Washington',
        46.6195461,
        -122.4554639,
        'Washington',
        'United_States',
        'Lewis_and_Clark_National_Historical_Park'
    ],
    [
        'Longview, Washington',
        46.1381676,
        -122.9381672,
        'Washington',
        'United_States',
        'Longview'
    ],
    [
        'Marysville, Washington',
        48.0517637,
        -122.1770818,
        'Washington',
        'United_States',
        'Marysville'
    ],
    [
        'Montesano, Washington',
        46.9812062,
        -123.6026629,
        'Washington',
        'United_States',
        'Montesano'
    ],
    [
        'Moses Lake, Washington',
        47.1301417,
        -119.2780771,
        'Washington',
        'United_States',
        'Moses_Lake'
    ],
    [
        'Mount Rainier National Park, Washington',
        46.8799663,
        -121.7269094,
        'Washington',
        'United_States',
        'Mount_Rainier_National_Park'
    ],
    [
        'Mount Vernon, Washington',
        48.421216,
        -122.3340474,
        'Washington',
        'United_States',
        'Mount_Vernon'
    ],
    [
        'Newport, Washington',
        48.1796277,
        -117.0432583,
        'Washington',
        'United_States',
        'Newport'
    ],
    [
        'North Cascades National Park, Washington',
        48.7718174,
        -121.2984648,
        'Washington',
        'United_States',
        'North_Cascades_National_Park'
    ],
    [
        'Oak Harbor, Washington',
        48.2931559,
        -122.6432245,
        'Washington',
        'United_States',
        'Oak_Harbor'
    ],
    [
        'Odessa, Washington',
        47.3332023,
        -118.6908274,
        'Washington',
        'United_States',
        'Odessa'
    ],
    [
        'Okanogan, Washington',
        48.361262,
        -119.5833869,
        'Washington',
        'United_States',
        'Okanogan'
    ],
    [
        'Olympia, Washington',
        47.0378741,
        -122.9006951,
        'Washington',
        'United_States',
        'Olympia'
    ],
    [
        'Olympic National Park, Washington',
        47.8021067,
        -123.6043524,
        'Washington',
        'United_States',
        'Olympic_National_Park'
    ],
    [
        'Pasco, Washington',
        46.2395793,
        -119.1005657,
        'Washington',
        'United_States',
        'Pasco'
    ],
    [
        'Pomeroy, Washington',
        46.4748738,
        -117.6026896,
        'Washington',
        'United_States',
        'Pomeroy'
    ],
    [
        'Port Angeles, Washington',
        48.118146,
        -123.4307413,
        'Washington',
        'United_States',
        'Port_Angeles'
    ],
    [
        'Port Orchard, Washington',
        47.5403732,
        -122.6362492,
        'Washington',
        'United_States',
        'Port_Orchard'
    ],
    [
        'Port Townsend, Washington',
        48.1170387,
        -122.7604472,
        'Washington',
        'United_States',
        'Port_Townsend'
    ],
    [
        'Poulsbo, Washington',
        47.735928,
        -122.6465372,
        'Washington',
        'United_States',
        'Poulsbo'
    ],
    [
        'Prosser, Washington',
        46.2067997,
        -119.7689222,
        'Washington',
        'United_States',
        'Prosser'
    ],
    [
        'Pullman, Washington',
        46.7297771,
        -117.1817377,
        'Washington',
        'United_States',
        'Pullman'
    ],
    [
        'Redmond, Washington',
        47.6739881,
        -122.121512,
        'Washington',
        'United_States',
        'Redmond'
    ],
    [
        'Republic, Washington',
        48.6482183,
        -118.7378067,
        'Washington',
        'United_States',
        'Republic'
    ],
    [
        'Richland, Washington',
        46.2856907,
        -119.2844621,
        'Washington',
        'United_States',
        'Richland'
    ],
    [
        'Ritzville, Washington',
        47.1273723,
        -118.3799751,
        'Washington',
        'United_States',
        'Ritzville'
    ],
    [
        'Roslyn, Washington',
        47.2234523,
        -120.9931394,
        'Washington',
        'United_States',
        'Roslyn'
    ],
    [
        'Ross Lake National Recreation Area, Washington',
        48.6998733,
        -121.0198366,
        'Washington',
        'United_States',
        'Ross_Lake_National_Recreation_Area'
    ],
    [
        'Roy, Washington',
        47.0042643,
        -122.539846,
        'Washington',
        'United_States',
        'Roy'
    ],
    [
        'San Juan Island National Historical Park, Washington',
        48.462,
        -123.0048,
        'Washington',
        'United_States',
        'San_Juan_Island_National_Historical_Park'
    ],
    [
        'Seattle, Washington',
        47.6062095,
        -122.3320708,
        'Washington',
        'United_States',
        'Seattle'
    ],
    [
        'Sequim, Washington',
        48.0795365,
        -123.1018437,
        'Washington',
        'United_States',
        'Sequim'
    ],
    [
        'Shelton, Washington',
        47.2150945,
        -123.1007066,
        'Washington',
        'United_States',
        'Shelton'
    ],
    [
        'South Bend, Washington',
        46.6631549,
        -123.8046063,
        'Washington',
        'United_States',
        'South_Bend'
    ],
    [
        'Spokane, Washington',
        47.6587802,
        -117.4260466,
        'Washington',
        'United_States',
        'Spokane'
    ],
    [
        'Steilacoom, Washington',
        47.1698197,
        -122.6026274,
        'Washington',
        'United_States',
        'Steilacoom'
    ],
    [
        'Stevenson, Washington',
        45.6956723,
        -121.8845241,
        'Washington',
        'United_States',
        'Stevenson'
    ],
    [
        'Tacoma, Washington',
        47.2528768,
        -122.4442906,
        'Washington',
        'United_States',
        'Tacoma'
    ],
    [
        'Vancouver, Washington',
        45.6387281,
        -122.6614861,
        'Washington',
        'United_States',
        'Vancouver'
    ],
    [
        'Walla Walla, Washington',
        46.0645809,
        -118.3430209,
        'Washington',
        'United_States',
        'Walla_Walla'
    ],
    [
        'Waterville, Washington',
        47.6470761,
        -120.0711788,
        'Washington',
        'United_States',
        'Waterville'
    ],
    [
        'Wenatchee, Washington',
        47.4234599,
        -120.3103494,
        'Washington',
        'United_States',
        'Wenatchee'
    ],
    [
        'Whitman Mission National Historic Site, Washington',
        46.0413251,
        -118.4639176,
        'Washington',
        'United_States',
        'Whitman_Mission_National_Historic_Site'
    ],
    [
        'Winlock, Washington',
        46.4912176,
        -122.9378983,
        'Washington',
        'United_States',
        'Winlock'
    ],
    [
        'Woodinville, Washington',
        47.7542651,
        -122.1634582,
        'Washington',
        'United_States',
        'Woodinville'
    ],
    [
        'Yakima, Washington',
        46.6020711,
        -120.5058987,
        'Washington',
        'United_States',
        'Yakima'
    ],
    [
        'Athens, West Virginia',
        37.4223414,
        -81.0161994,
        'West_Virginia',
        'United_States',
        'Athens'
    ],
    [
        'Beckley, West Virginia',
        37.7781702,
        -81.1881557,
        'West_Virginia',
        'United_States',
        'Beckley'
    ],
    [
        'Berkeley Springs, West Virginia',
        39.6269902,
        -78.2271957,
        'West_Virginia',
        'United_States',
        'Berkeley_Springs'
    ],
    [
        'Bluefield, West Virginia',
        37.2698395,
        -81.2223195,
        'West_Virginia',
        'United_States',
        'Bluefield'
    ],
    [
        'Bluestone National Scenic, West Virginia',
        37.5674681,
        -80.9843446,
        'West_Virginia',
        'United_States',
        'Bluestone_National_Scenic'
    ],
    [
        'Buckhannon, West Virginia',
        38.9939872,
        -80.2320276,
        'West_Virginia',
        'United_States',
        'Buckhannon'
    ],
    [
        'Charleston, West Virginia',
        38.3498195,
        -81.6326234,
        'West_Virginia',
        'United_States',
        'Charleston'
    ],
    [
        'Charles Town, West Virginia',
        39.2889903,
        -77.8597175,
        'West_Virginia',
        'United_States',
        'Charles_Town'
    ],
    [
        'Chester, West Virginia',
        40.6131203,
        -80.5628478,
        'West_Virginia',
        'United_States',
        'Chester'
    ],
    [
        'Clarksburg, West Virginia',
        39.2806451,
        -80.3445341,
        'West_Virginia',
        'United_States',
        'Clarksburg'
    ],
    [
        'Clay, West Virginia',
        38.4603788,
        -81.0851086,
        'West_Virginia',
        'United_States',
        'Clay'
    ],
    [
        'Elizabeth, West Virginia',
        39.0634129,
        -81.3951198,
        'West_Virginia',
        'United_States',
        'Elizabeth'
    ],
    [
        'Elkins, West Virginia',
        38.9259397,
        -79.8467349,
        'West_Virginia',
        'United_States',
        'Elkins'
    ],
    [
        'Fairmont, West Virginia',
        39.4850848,
        -80.1425781,
        'West_Virginia',
        'United_States',
        'Fairmont'
    ],
    [
        'Fayetteville, West Virginia',
        38.0528884,
        -81.1039911,
        'West_Virginia',
        'United_States',
        'Fayetteville'
    ],
    [
        'Franklin, West Virginia',
        38.6428945,
        -79.3311531,
        'West_Virginia',
        'United_States',
        'Franklin'
    ],
    [
        'Gauley River National Recreation Area, West Virginia',
        38.2089655,
        -81.01473,
        'West_Virginia',
        'United_States',
        'Gauley_River_National_Recreation_Area'
    ],
    [
        'Glenville, West Virginia',
        38.9342573,
        -80.8376033,
        'West_Virginia',
        'United_States',
        'Glenville'
    ],
    [
        'Grafton, West Virginia',
        39.3409249,
        -80.0189659,
        'West_Virginia',
        'United_States',
        'Grafton'
    ],
    [
        'Grantsville, West Virginia',
        38.9234195,
        -81.0959455,
        'West_Virginia',
        'United_States',
        'Grantsville'
    ],
    [
        'Hamlin, West Virginia',
        38.2787019,
        -82.1029156,
        'West_Virginia',
        'United_States',
        'Hamlin'
    ],
    [
        'Harpers Ferry National Historical Park, West Virginia',
        39.3169709,
        -77.7543957,
        'West_Virginia',
        'United_States',
        'Harpers_Ferry_National_Historical_Park'
    ],
    [
        'Harrisville, West Virginia',
        39.2095244,
        -81.0517772,
        'West_Virginia',
        'United_States',
        'Harrisville'
    ],
    [
        'Hinton, West Virginia',
        37.674008,
        -80.8892539,
        'West_Virginia',
        'United_States',
        'Hinton'
    ],
    [
        'Huntington, West Virginia',
        38.4192496,
        -82.445154,
        'West_Virginia',
        'United_States',
        'Huntington'
    ],
    [
        'Keyser, West Virginia',
        39.4409277,
        -78.9739156,
        'West_Virginia',
        'United_States',
        'Keyser'
    ],
    [
        'Kingwood, West Virginia',
        39.4717557,
        -79.6833884,
        'West_Virginia',
        'United_States',
        'Kingwood'
    ],
    [
        'Lewisburg, West Virginia',
        37.8017879,
        -80.4456303,
        'West_Virginia',
        'United_States',
        'Lewisburg'
    ],
    [
        'Logan, West Virginia',
        37.8487147,
        -81.9934581,
        'West_Virginia',
        'United_States',
        'Logan'
    ],
    [
        'Madison, West Virginia',
        38.0670454,
        -81.8192892,
        'West_Virginia',
        'United_States',
        'Madison'
    ],
    [
        'Marlinton, West Virginia',
        38.2234533,
        -80.0945099,
        'West_Virginia',
        'United_States',
        'Marlinton'
    ],
    [
        'Martinsburg, West Virginia',
        39.4562099,
        -77.9638869,
        'West_Virginia',
        'United_States',
        'Martinsburg'
    ],
    [
        'Middlebourne, West Virginia',
        39.4922999,
        -80.9037181,
        'West_Virginia',
        'United_States',
        'Middlebourne'
    ],
    [
        'Moorefield, West Virginia',
        39.06233,
        -78.9694723,
        'West_Virginia',
        'United_States',
        'Moorefield'
    ],
    [
        'Morgantown, West Virginia',
        39.629526,
        -79.9558968,
        'West_Virginia',
        'United_States',
        'Morgantown'
    ],
    [
        'Moundsville, West Virginia',
        39.9203526,
        -80.7431407,
        'West_Virginia',
        'United_States',
        'Moundsville'
    ],
    [
        'New Cumberland, West Virginia',
        40.4967329,
        -80.6067392,
        'West_Virginia',
        'United_States',
        'New_Cumberland'
    ],
    [
        'New Martinsville, West Virginia',
        39.6445214,
        -80.8575993,
        'West_Virginia',
        'United_States',
        'New_Martinsville'
    ],
    [
        'New River Gorge National River, West Virginia',
        37.8817637,
        -81.0620212,
        'West_Virginia',
        'United_States',
        'New_River_Gorge_National_River'
    ],
    [
        'Parkersburg, West Virginia',
        39.2667418,
        -81.5615135,
        'West_Virginia',
        'United_States',
        'Parkersburg'
    ],
    [
        'Parsons, West Virginia',
        39.096495,
        -79.680896,
        'West_Virginia',
        'United_States',
        'Parsons'
    ],
    [
        'Petersburg, West Virginia',
        38.9926097,
        -79.1239239,
        'West_Virginia',
        'United_States',
        'Petersburg'
    ],
    [
        'Philippi, West Virginia',
        39.1523198,
        -80.0403578,
        'West_Virginia',
        'United_States',
        'Philippi'
    ],
    [
        'Pineville, West Virginia',
        37.5831684,
        -81.5370499,
        'West_Virginia',
        'United_States',
        'Pineville'
    ],
    [
        'Point Pleasant, West Virginia',
        38.8445251,
        -82.1370889,
        'West_Virginia',
        'United_States',
        'Point_Pleasant'
    ],
    [
        'Princeton, West Virginia',
        37.3662293,
        -81.1025918,
        'West_Virginia',
        'United_States',
        'Princeton'
    ],
    [
        'Ripley, West Virginia',
        38.8186957,
        -81.7106851,
        'West_Virginia',
        'United_States',
        'Ripley'
    ],
    [
        'Romney, West Virginia',
        39.3420431,
        -78.7566839,
        'West_Virginia',
        'United_States',
        'Romney'
    ],
    [
        'Saint Marys, West Virginia',
        39.3962109,
        -81.2013363,
        'West_Virginia',
        'United_States',
        'Saint_Marys'
    ],
    [
        'Seneca Rocks, West Virginia',
        38.8348342,
        -79.3761566,
        'West_Virginia',
        'United_States',
        'Seneca_Rocks'
    ],
    [
        'Spencer, West Virginia',
        38.8020322,
        -81.3509532,
        'West_Virginia',
        'United_States',
        'Spencer'
    ],
    [
        'Summersville, West Virginia',
        38.2812203,
        -80.8525981,
        'West_Virginia',
        'United_States',
        'Summersville'
    ],
    [
        'Sutton, West Virginia',
        38.6645443,
        -80.7098191,
        'West_Virginia',
        'United_States',
        'Sutton'
    ],
    [
        'Union, West Virginia',
        37.591512,
        -80.5436807,
        'West_Virginia',
        'United_States',
        'Union'
    ],
    [
        'Wayne, West Virginia',
        38.2214748,
        -82.4423747,
        'West_Virginia',
        'United_States',
        'Wayne'
    ],
    [
        'Webster Springs, West Virginia',
        38.4792749,
        -80.4134157,
        'West_Virginia',
        'United_States',
        'Webster_Springs'
    ],
    [
        'Welch, West Virginia',
        37.4328913,
        -81.5845513,
        'West_Virginia',
        'United_States',
        'Welch'
    ],
    [
        'Wellsburg, West Virginia',
        40.2720146,
        -80.6095187,
        'West_Virginia',
        'United_States',
        'Wellsburg'
    ],
    [
        'Weston, West Virginia',
        39.0384274,
        -80.467313,
        'West_Virginia',
        'United_States',
        'Weston'
    ],
    [
        'West Union, West Virginia',
        39.2964723,
        -80.777049,
        'West_Virginia',
        'United_States',
        'West_Union'
    ],
    [
        'Wheeling, West Virginia',
        40.0639616,
        -80.7209149,
        'West_Virginia',
        'United_States',
        'Wheeling'
    ],
    [
        'White Sulphur Springs, West Virginia',
        37.7965107,
        -80.2975704,
        'West_Virginia',
        'United_States',
        'White_Sulphur_Springs'
    ],
    [
        'Williamson, West Virginia',
        37.6742682,
        -82.2773629,
        'West_Virginia',
        'United_States',
        'Williamson'
    ],
    [
        'Winfield, West Virginia',
        38.5331448,
        -81.8934675,
        'West_Virginia',
        'United_States',
        'Winfield'
    ],
    [
        'Alma, Wisconsin',
        44.3199654,
        -91.9148839,
        'Wisconsin',
        'United_States',
        'Alma'
    ],
    [
        'Amery, Wisconsin',
        45.3069062,
        -92.3621369,
        'Wisconsin',
        'United_States',
        'Amery'
    ],
    [
        'Amherst, Wisconsin',
        44.4508079,
        -89.2848359,
        'Wisconsin',
        'United_States',
        'Amherst'
    ],
    [
        'Antigo, Wisconsin',
        45.140245,
        -89.1523353,
        'Wisconsin',
        'United_States',
        'Antigo'
    ],
    [
        'Apostle Islands National Lakeshore, Wisconsin',
        46.9302046,
        -90.6333321,
        'Wisconsin',
        'United_States',
        'Apostle_Islands_National_Lakeshore'
    ],
    [
        'Appleton, Wisconsin',
        44.2619309,
        -88.4153847,
        'Wisconsin',
        'United_States',
        'Appleton'
    ],
    [
        'Arlington, Wisconsin',
        43.3380439,
        -89.3803956,
        'Wisconsin',
        'United_States',
        'Arlington'
    ],
    [
        'Ashland, Wisconsin',
        46.5924428,
        -90.8837982,
        'Wisconsin',
        'United_States',
        'Ashland'
    ],
    [
        'Balsam Lake, Wisconsin',
        45.4521807,
        -92.4546428,
        'Wisconsin',
        'United_States',
        'Balsam_Lake'
    ],
    [
        'Baraboo, Wisconsin',
        43.4710944,
        -89.7442906,
        'Wisconsin',
        'United_States',
        'Baraboo'
    ],
    [
        'Barron, Wisconsin',
        45.4013471,
        -91.8490626,
        'Wisconsin',
        'United_States',
        'Barron'
    ],
    [
        'Black River Falls, Wisconsin',
        44.2946833,
        -90.8515311,
        'Wisconsin',
        'United_States',
        'Black_River_Falls'
    ],
    [
        'Chilton, Wisconsin',
        44.0288803,
        -88.1628785,
        'Wisconsin',
        'United_States',
        'Chilton'
    ],
    [
        'Chippewa Falls, Wisconsin',
        44.9369054,
        -91.3929348,
        'Wisconsin',
        'United_States',
        'Chippewa_Falls'
    ],
    [
        'Crandon, Wisconsin',
        45.5719072,
        -88.9028922,
        'Wisconsin',
        'United_States',
        'Crandon'
    ],
    [
        'Cudahy, Wisconsin',
        42.959738,
        -87.861471,
        'Wisconsin',
        'United_States',
        'Cudahy'
    ],
    [
        'Darlington, Wisconsin',
        42.6830566,
        -90.1176258,
        'Wisconsin',
        'United_States',
        'Darlington'
    ],
    [
        'Dodgeville, Wisconsin',
        42.9602743,
        -90.1301237,
        'Wisconsin',
        'United_States',
        'Dodgeville'
    ],
    [
        'Durand, Wisconsin',
        44.6263543,
        -91.965726,
        'Wisconsin',
        'United_States',
        'Durand'
    ],
    [
        'Eagle River, Wisconsin',
        45.9171763,
        -89.2442988,
        'Wisconsin',
        'United_States',
        'Eagle_River'
    ],
    [
        'Eau Claire, Wisconsin',
        44.811349,
        -91.4984941,
        'Wisconsin',
        'United_States',
        'Eau_Claire'
    ],
    [
        'Elkhorn, Wisconsin',
        42.6727927,
        -88.5445447,
        'Wisconsin',
        'United_States',
        'Elkhorn'
    ],
    [
        'Ellsworth, Wisconsin',
        44.7321897,
        -92.4874124,
        'Wisconsin',
        'United_States',
        'Ellsworth'
    ],
    [
        'Florence, Wisconsin',
        45.9224168,
        -88.2520047,
        'Wisconsin',
        'United_States',
        'Florence'
    ],
    [
        'Fond du Lac, Wisconsin',
        43.7730448,
        -88.4470508,
        'Wisconsin',
        'United_States',
        'Fond_du_Lac'
    ],
    [
        'Friendship, Wisconsin',
        43.9705262,
        -89.816793,
        'Wisconsin',
        'United_States',
        'Friendship'
    ],
    [
        'Green Bay, Wisconsin',
        44.519159,
        -88.019826,
        'Wisconsin',
        'United_States',
        'Green_Bay'
    ],
    [
        'Gren Lake, Wisconsin',
        43.8441481,
        -88.9601133,
        'Wisconsin',
        'United_States',
        'Gren_Lake'
    ],
    [
        'Hayward, Wisconsin',
        46.0130065,
        -91.4846208,
        'Wisconsin',
        'United_States',
        'Hayward'
    ],
    [
        'Holmen, Wisconsin',
        43.9632962,
        -91.2562539,
        'Wisconsin',
        'United_States',
        'Holmen'
    ],
    [
        'Hudson, Wisconsin',
        44.9746896,
        -92.7568703,
        'Wisconsin',
        'United_States',
        'Hudson'
    ],
    [
        'Hurley, Wisconsin',
        46.4496698,
        -90.186564,
        'Wisconsin',
        'United_States',
        'Hurley'
    ],
    [
        'Ice Age National Scenic Trail, Wisconsin',
        44.2117321,
        -87.5141446,
        'Wisconsin',
        'United_States',
        'Ice_Age_National_Scenic_Trail'
    ],
    [
        'Janesville, Wisconsin',
        42.6827885,
        -89.0187222,
        'Wisconsin',
        'United_States',
        'Janesville'
    ],
    [
        'Jefferson, Wisconsin',
        43.0055594,
        -88.8073273,
        'Wisconsin',
        'United_States',
        'Jefferson'
    ],
    [
        'Juneau, Wisconsin',
        43.4055504,
        -88.7051037,
        'Wisconsin',
        'United_States',
        'Juneau'
    ],
    [
        'Kenosha, Wisconsin',
        42.5847425,
        -87.8211854,
        'Wisconsin',
        'United_States',
        'Kenosha'
    ],
    [
        'Keshena, Wisconsin',
        44.8838712,
        -88.6337152,
        'Wisconsin',
        'United_States',
        'Keshena'
    ],
    [
        'Kewaunee, Wisconsin',
        44.4583321,
        -87.5031397,
        'Wisconsin',
        'United_States',
        'Kewaunee'
    ],
    [
        'Ladysmith, Wisconsin',
        45.4630231,
        -91.1040358,
        'Wisconsin',
        'United_States',
        'Ladysmith'
    ],
    [
        'Lake Geneva, Wisconsin',
        42.5916836,
        -88.4334301,
        'Wisconsin',
        'United_States',
        'Lake_Geneva'
    ],
    [
        'Lancaster, Wisconsin',
        42.8474905,
        -90.7106821,
        'Wisconsin',
        'United_States',
        'Lancaster'
    ],
    [
        'La Crosse, Wisconsin',
        43.8013556,
        -91.2395807,
        'Wisconsin',
        'United_States',
        'La_Crosse'
    ],
    [
        'Lone Rock, Wisconsin',
        43.1833235,
        -90.1979016,
        'Wisconsin',
        'United_States',
        'Lone_Rock'
    ],
    [
        'Madison, Wisconsin',
        43.0730517,
        -89.4012302,
        'Wisconsin',
        'United_States',
        'Madison'
    ],
    [
        'Manitowoc, Wisconsin',
        44.0886059,
        -87.657584,
        'Wisconsin',
        'United_States',
        'Manitowoc'
    ],
    [
        'Marinette, Wisconsin',
        45.0999849,
        -87.6306623,
        'Wisconsin',
        'United_States',
        'Marinette'
    ],
    [
        'Mauston, Wisconsin',
        43.7971946,
        -90.0773495,
        'Wisconsin',
        'United_States',
        'Mauston'
    ],
    [
        'Medford, Wisconsin',
        45.1385798,
        -90.3401404,
        'Wisconsin',
        'United_States',
        'Medford'
    ],
    [
        'Menomonie, Wisconsin',
        44.8755183,
        -91.9193422,
        'Wisconsin',
        'United_States',
        'Menomonie'
    ],
    [
        'Merrill, Wisconsin',
        45.1805223,
        -89.683459,
        'Wisconsin',
        'United_States',
        'Merrill'
    ],
    [
        'Milwaukee, Wisconsin',
        43.0389025,
        -87.9064736,
        'Wisconsin',
        'United_States',
        'Milwaukee'
    ],
    [
        'Monroe, Wisconsin',
        42.6011194,
        -89.6384532,
        'Wisconsin',
        'United_States',
        'Monroe'
    ],
    [
        'Montello, Wisconsin',
        43.7913679,
        -89.3198414,
        'Wisconsin',
        'United_States',
        'Montello'
    ],
    [
        'Neenah, Wisconsin',
        44.1858193,
        -88.462609,
        'Wisconsin',
        'United_States',
        'Neenah'
    ],
    [
        'Neillsville, Wisconsin',
        44.559962,
        -90.5962498,
        'Wisconsin',
        'United_States',
        'Neillsville'
    ],
    [
        'Oconto, Wisconsin',
        44.8872124,
        -87.8645473,
        'Wisconsin',
        'United_States',
        'Oconto'
    ],
    [
        'Onalaska, Wisconsin',
        43.8844092,
        -91.2351393,
        'Wisconsin',
        'United_States',
        'Onalaska'
    ],
    [
        'Oshkosh, Wisconsin',
        44.0247062,
        -88.5426136,
        'Wisconsin',
        'United_States',
        'Oshkosh'
    ],
    [
        'Phillips, Wisconsin',
        45.6966257,
        -90.4004296,
        'Wisconsin',
        'United_States',
        'Phillips'
    ],
    [
        'Portage, Wisconsin',
        43.5391486,
        -89.4626202,
        'Wisconsin',
        'United_States',
        'Portage'
    ],
    [
        'Port Washington, Wisconsin',
        43.3872247,
        -87.875644,
        'Wisconsin',
        'United_States',
        'Port_Washington'
    ],
    [
        'Poynette, Wisconsin',
        43.3902644,
        -89.4028963,
        'Wisconsin',
        'United_States',
        'Poynette'
    ],
    [
        'Prairie du Chien, Wisconsin',
        43.0516505,
        -91.1412404,
        'Wisconsin',
        'United_States',
        'Prairie_du_Chien'
    ],
    [
        'Presque Isle, Wisconsin',
        46.247171,
        -89.7293228,
        'Wisconsin',
        'United_States',
        'Presque_Isle'
    ],
    [
        'Racine, Wisconsin',
        42.7261309,
        -87.7828523,
        'Wisconsin',
        'United_States',
        'Racine'
    ],
    [
        'Reedsburg, Wisconsin',
        43.5324809,
        -90.0026259,
        'Wisconsin',
        'United_States',
        'Reedsburg'
    ],
    [
        'Rhinelander, Wisconsin',
        45.6366228,
        -89.4120753,
        'Wisconsin',
        'United_States',
        'Rhinelander'
    ],
    [
        'Rice Lake, Wisconsin',
        45.5060682,
        -91.738225,
        'Wisconsin',
        'United_States',
        'Rice_Lake'
    ],
    [
        'Richland Center, Wisconsin',
        43.3347053,
        -90.3867928,
        'Wisconsin',
        'United_States',
        'Richland_Center'
    ],
    [
        'Rosendale, Wisconsin',
        43.8077629,
        -88.674832,
        'Wisconsin',
        'United_States',
        'Rosendale'
    ],
    [
        'Saint Croix National Scenic River, Wisconsin',
        43.7844397,
        -88.7878678,
        'Wisconsin',
        'United_States',
        'Saint_Croix_National_Scenic_River'
    ],
    [
        'Shawano, Wisconsin',
        44.7822064,
        -88.6089917,
        'Wisconsin',
        'United_States',
        'Shawano'
    ],
    [
        'Sheboygan, Wisconsin',
        43.7508284,
        -87.71453,
        'Wisconsin',
        'United_States',
        'Sheboygan'
    ],
    [
        'Shell Lake, Wisconsin',
        45.7393928,
        -91.9254537,
        'Wisconsin',
        'United_States',
        'Shell_Lake'
    ],
    [
        'Shullsburg, Wisconsin',
        42.5733354,
        -90.23096,
        'Wisconsin',
        'United_States',
        'Shullsburg'
    ],
    [
        'Siren, Wisconsin',
        45.7857818,
        -92.3810284,
        'Wisconsin',
        'United_States',
        'Siren'
    ],
    [
        'Sparta, Wisconsin',
        43.9441328,
        -90.8129118,
        'Wisconsin',
        'United_States',
        'Sparta'
    ],
    [
        'Stevens Point, Wisconsin',
        44.5235792,
        -89.574563,
        'Wisconsin',
        'United_States',
        'Stevens_Point'
    ],
    [
        'Sturgeon Bay, Wisconsin',
        44.8341639,
        -87.3770419,
        'Wisconsin',
        'United_States',
        'Sturgeon_Bay'
    ],
    [
        'Superior, Wisconsin',
        46.7207737,
        -92.1040796,
        'Wisconsin',
        'United_States',
        'Superior'
    ],
    [
        'Trevor, Wisconsin',
        42.5124074,
        -88.1207351,
        'Wisconsin',
        'United_States',
        'Trevor'
    ],
    [
        'Viroqua, Wisconsin',
        43.5569174,
        -90.8887413,
        'Wisconsin',
        'United_States',
        'Viroqua'
    ],
    [
        'Washburn, Wisconsin',
        46.6732722,
        -90.8949075,
        'Wisconsin',
        'United_States',
        'Washburn'
    ],
    [
        'Waukesha, Wisconsin',
        43.0116784,
        -88.2314813,
        'Wisconsin',
        'United_States',
        'Waukesha'
    ],
    [
        'Waupaca, Wisconsin',
        44.3580348,
        -89.0859464,
        'Wisconsin',
        'United_States',
        'Waupaca'
    ],
    [
        'Waupun, Wisconsin',
        43.6333219,
        -88.7295519,
        'Wisconsin',
        'United_States',
        'Waupun'
    ],
    [
        'Wausau, Wisconsin',
        44.9591352,
        -89.6301221,
        'Wisconsin',
        'United_States',
        'Wausau'
    ],
    [
        'Wautoma, Wisconsin',
        44.0746995,
        -89.287897,
        'Wisconsin',
        'United_States',
        'Wautoma'
    ],
    [
        'Wauwatosa, Wisconsin',
        43.0494572,
        -88.0075875,
        'Wisconsin',
        'United_States',
        'Wauwatosa'
    ],
    [
        'Westby, Wisconsin',
        43.6569157,
        -90.8542977,
        'Wisconsin',
        'United_States',
        'Westby'
    ],
    [
        'West Bend, Wisconsin',
        43.4252776,
        -88.1834277,
        'Wisconsin',
        'United_States',
        'West_Bend'
    ],
    [
        'Weyauwega, Wisconsin',
        44.3213695,
        -88.9337226,
        'Wisconsin',
        'United_States',
        'Weyauwega'
    ],
    [
        'Whitehall, Wisconsin',
        44.367461,
        -91.3165482,
        'Wisconsin',
        'United_States',
        'Whitehall'
    ],
    [
        'Wisconsin Rapids, Wisconsin',
        44.3835763,
        -89.8173465,
        'Wisconsin',
        'United_States',
        'Wisconsin_Rapids'
    ],
    [
        'Basin, Wyoming',
        44.3799574,
        -108.0389895,
        'Wyoming',
        'United_States',
        'Basin'
    ],
    [
        'Buffalo, Wyoming',
        44.3483072,
        -106.6989375,
        'Wyoming',
        'United_States',
        'Buffalo'
    ],
    [
        'Casper, Wyoming',
        42.866632,
        -106.313081,
        'Wyoming',
        'United_States',
        'Casper'
    ],
    [
        'Cheyenne, Wyoming',
        41.1399814,
        -104.8202462,
        'Wyoming',
        'United_States',
        'Cheyenne'
    ],
    [
        'Cody, Wyoming',
        44.5263422,
        -109.0565308,
        'Wyoming',
        'United_States',
        'Cody'
    ],
    [
        'Devils Tower National Monument, Wyoming',
        44.5902098,
        -104.7146168,
        'Wyoming',
        'United_States',
        'Devils_Tower_National_Monument'
    ],
    [
        'Douglas, Wyoming',
        42.7596897,
        -105.3822069,
        'Wyoming',
        'United_States',
        'Douglas'
    ],
    [
        'Evanston, Wyoming',
        41.2682794,
        -110.9632373,
        'Wyoming',
        'United_States',
        'Evanston'
    ],
    [
        'Fort Laramie National Historic Site, Wyoming',
        42.2127448,
        -104.5171788,
        'Wyoming',
        'United_States',
        'Fort_Laramie_National_Historic_Site'
    ],
    [
        'Fossil Butte National Monument, Wyoming',
        41.8581804,
        -110.7658867,
        'Wyoming',
        'United_States',
        'Fossil_Butte_National_Monument'
    ],
    [
        'Gillette, Wyoming',
        44.2910915,
        -105.5022205,
        'Wyoming',
        'United_States',
        'Gillette'
    ],
    [
        'Grand Teton National Park, Wyoming',
        43.7904282,
        -110.6817627,
        'Wyoming',
        'United_States',
        'Grand_Teton_National_Park'
    ],
    [
        'Green River, Wyoming',
        41.5285757,
        -109.4662461,
        'Wyoming',
        'United_States',
        'Green_River'
    ],
    [
        'Jackson, Wyoming',
        43.4799291,
        -110.7624282,
        'Wyoming',
        'United_States',
        'Jackson'
    ],
    [
        'John D Rockefeller Jr Memorial Parkway, Wyoming',
        44.0836219,
        -110.7215955,
        'Wyoming',
        'United_States',
        'John_D_Rockefeller_Jr_Memorial_Parkway'
    ],
    [
        'Kemmerer, Wyoming',
        41.792447,
        -110.5376692,
        'Wyoming',
        'United_States',
        'Kemmerer'
    ],
    [
        'Lander, Wyoming',
        42.833014,
        -108.7306725,
        'Wyoming',
        'United_States',
        'Lander'
    ],
    [
        'Laramie, Wyoming',
        41.3113669,
        -105.5911007,
        'Wyoming',
        'United_States',
        'Laramie'
    ],
    [
        'Lusk, Wyoming',
        42.7624668,
        -104.4521747,
        'Wyoming',
        'United_States',
        'Lusk'
    ],
    [
        'Newcastle, Wyoming',
        43.8547003,
        -104.2049408,
        'Wyoming',
        'United_States',
        'Newcastle'
    ],
    [
        'Pinedale, Wyoming',
        42.8678809,
        -109.8633501,
        'Wyoming',
        'United_States',
        'Pinedale'
    ],
    [
        'Rawlins, Wyoming',
        41.7910697,
        -107.2386627,
        'Wyoming',
        'United_States',
        'Rawlins'
    ],
    [
        'Riverton, Wyoming',
        43.0249592,
        -108.3801036,
        'Wyoming',
        'United_States',
        'Riverton'
    ],
    [
        'Rock Springs, Wyoming',
        41.5874644,
        -109.2029043,
        'Wyoming',
        'United_States',
        'Rock_Springs'
    ],
    [
        'Sheridan, Wyoming',
        44.7971939,
        -106.9561791,
        'Wyoming',
        'United_States',
        'Sheridan'
    ],
    [
        'Sundance, Wyoming',
        44.4063746,
        -104.3757816,
        'Wyoming',
        'United_States',
        'Sundance'
    ],
    [
        'Thermopolis, Wyoming',
        43.6460672,
        -108.2120432,
        'Wyoming',
        'United_States',
        'Thermopolis'
    ],
    [
        'Torrington, Wyoming',
        42.0624646,
        -104.1843942,
        'Wyoming',
        'United_States',
        'Torrington'
    ],
    [
        'Wheatland, Wyoming',
        42.0544141,
        -104.9527501,
        'Wyoming',
        'United_States',
        'Wheatland'
    ],
    [
        'Worland, Wyoming',
        44.0169014,
        -107.9553721,
        'Wyoming',
        'United_States',
        'Worland'
    ],
    [
        'Montevideo, Uruguay',
        -34.9011127,
        -56.1645314,
        'None',
        'Uruguay',
        'Montevideo'
    ],
    [
        'Punta del Este, Uruguay',
        -34.9368789,
        -54.9281496,
        'None',
        'Uruguay',
        'Punta_del_Este'
    ],
    ['Salto, Uruguay', -31.3854988, -57.9600793, 'None', 'Uruguay', 'Salto'],
    [
        'Santa Lucia, Uruguay',
        -34.4522519,
        -56.3880186,
        'None',
        'Uruguay',
        'Santa_Lucia'
    ],
    [
        'Tashkent, Uzbekistan',
        41.2994958,
        69.2400734,
        'None',
        'Uzbekistan',
        'Tashkent'
    ],
    [
        'Barquisimeto, Venezuela',
        10.0677719,
        -69.3473509,
        'None',
        'Venezuela',
        'Barquisimeto'
    ],
    [
        'Caracas, Venezuela',
        10.4805937,
        -66.9036063,
        'None',
        'Venezuela',
        'Caracas'
    ],
    [
        'Ciudad Guayana, Venezuela',
        8.3663119,
        -62.6496813,
        'None',
        'Venezuela',
        'Ciudad_Guayana'
    ],
    [
        'Maracaibo, Venezuela',
        10.6544509,
        -71.7147951,
        'None',
        'Venezuela',
        'Maracaibo'
    ],
    [
        'Valencia, Venezuela',
        10.1579312,
        -67.9972104,
        'None',
        'Venezuela',
        'Valencia'
    ],
    ['Hanoi, Vietnam', 21.0277644, 105.8341598, 'None', 'Vietnam', 'Hanoi'],
    [
        'Ho Chi Minh City, Vietnam',
        10.8230989,
        106.6296638,
        'None',
        'Vietnam',
        'Ho_Chi_Minh_City'
    ],
    ['Aden, Yemen', 12.7854969, 45.0186548, 'None', 'Yemen', 'Aden'],
    ['San A, Yemen', 15.3694451, 44.1910066, 'None', 'Yemen', 'San_A'],
    ['Chingola, Zambia', -12.5419553, 27.8545867, 'None', 'Zambia', 'Chingola'],
    ['Lusaka, Zambia', -15.3875259, 28.3228165, 'None', 'Zambia', 'Lusaka'],
    ['Ndola, Zambia', -12.9906407, 28.6498144, 'None', 'Zambia', 'Ndola'],
    ['Harare, Zimbabwe', -17.8251657, 31.03351, 'None', 'Zimbabwe', 'Harare']
];
export default markers;
