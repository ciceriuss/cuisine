// script.js

const recettes = {
    entrees: [
        {
            id: 1,
            titre: 'Soupe à l\'oignon',
            ingredients: 'Oignons (4), bouillon de boeuf (1L), vin blanc (100ml), pain (4 tranches), fromage râpé (100g), beurre (50g), sel (au goût), poivre (au goût)',
            instructions: '1. Faire revenir les oignons dans le beurre jusqu\'à ce qu\'ils soient dorés. 2. Ajouter le bouillon et le vin blanc. 3. Laisser mijoter pendant 30 minutes. 4. Verser la soupe dans des bols, ajouter le pain et le fromage râpé, et faire gratiner au four.',
            image: 'soupe.jfif',
            preparation: '10 min',
            cuisson: '30 min'
        },
        {
            id: 2,
            titre: 'Salade César',
            ingredients: 'Laitue romaine (1), poulet (2 filets), croûtons (100g), parmesan (50g), sauce César (au goût)',
            instructions: '1. Laver et couper la laitue. 2. Cuire le poulet et le couper en morceaux. 3. Mélanger avec les croûtons et le parmesan. 4. Ajouter la sauce César.',
            image: 'saladecesar.jfif',
            preparation: '10 min',
            cuisson: '20 min'
        }
    ],
    plats: [
        {
            id: 3,
            titre: 'Spaghetti Bolognese',
            ingredients: 'Spaghetti (200g), viande hachée (300g), tomates (3), oignons (2), ail (2 gousses), huile d\'olive (2 cuillères à soupe), sel (au goût), poivre (au goût)',
            instructions: '1. Faire cuire les spaghetti. 2. Préparer la sauce bolognese. 3. Mélanger et servir chaud.',
            image: 'spaghettibolo.jfif',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 4,
            titre: 'Pizza Margherita',
            ingredients: 'Pâte à pizza (1), tomates (3), mozzarella (200g), basilic (quelques feuilles), huile d\'olive (2 cuillères à soupe), sel (au goût)',
            instructions: '1. Étaler la pâte à pizza. 2. Ajouter la sauce tomate et la mozzarella. 3. Cuire au four à 220°C pendant 15 minutes. 4. Ajouter le basilic et l\'huile d\'olive avant de servir.',
            image: 'pizza.jpg',
            preparation: '20 min',
            cuisson: '15 min'
        },
        {
            id: 5,
            titre: 'Curry de Poulet',
            ingredients: 'Poulet (400g), lait de coco (400ml), curry en poudre (2 cuillères à soupe), oignons (2), ail (2 gousses), gingembre (1 pouce), tomates (2), huile d\'olive (2 cuillères à soupe), sel (au goût), poivre (au goût)',
            instructions: '1. Faire revenir les oignons, l\'ail et le gingembre. 2. Ajouter le poulet et le curry. 3. Ajouter les tomates et le lait de coco. 4. Laisser mijoter pendant 30 minutes.',
            image: 'currypoulet.jpg',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 6,
            titre: 'Poulet Rôti',
            ingredients: 'Poulet entier (1), huile d\'olive (2 cuillères à soupe), ail (4 gousses), thym (quelques brins), sel (au goût), poivre (au goût)',
            instructions: '1. Préchauffer le four à 200°C. 2. Frotter le poulet avec l\'huile d\'olive, l\'ail, le thym, le sel et le poivre. 3. Rôtir le poulet au four pendant 1h30, en arrosant régulièrement.',
            image: 'poulet.jfif',
            preparation: '10 min',
            cuisson: '90 min'
        },
        {
            id: 7,
            titre: 'Quiche Lorraine',
            ingredients: 'Pâte brisée (1), lardons (200g), crème fraîche (200ml), oeufs (3), fromage râpé (100g), sel (au goût), poivre (au goût), muscade (1 pincée)',
            instructions: '1. Préchauffer le four à 180°C. 2. Étaler la pâte brisée dans un moule. 3. Faire revenir les lardons et les répartir sur la pâte. 4. Mélanger la crème, les oeufs, le fromage, le sel, le poivre et la muscade, et verser sur les lardons. 5. Cuire au four pendant 30 minutes.',
            image: 'quiche.jfif',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 8,
            titre: 'Ratatouille',
            ingredients: 'Aubergines (2), courgettes (2), poivrons (2), tomates (4), oignons (2), ail (2 gousses), huile d\'olive (2 cuillères à soupe), herbes de Provence (1 cuillère à café), sel (au goût), poivre (au goût)',
            instructions: '1. Couper les légumes en dés. 2. Faire revenir les oignons et l\'ail dans l\'huile d\'olive. 3. Ajouter les aubergines, les courgettes et les poivrons, et cuire pendant 10 minutes. 4. Ajouter les tomates et les herbes de Provence, puis laisser mijoter pendant 20 minutes. Assaisonner avec le sel et le poivre.',
            image: 'ratatouille.jfif',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 9,
            titre: 'Lasagnes',
            ingredients: 'Pâtes à lasagne (12 feuilles), viande hachée (500g), tomates (4), oignons (2), ail (2 gousses), béchamel (500ml), fromage râpé (200g), huile d\'olive (2 cuillères à soupe), sel (au goût), poivre (au goût)',
            instructions: '1. Préchauffer le four à 180°C. 2. Préparer la sauce bolognese avec la viande hachée, les tomates, les oignons et l\'ail. 3. Préparer la béchamel. 4. Dans un plat à gratin, alterner des couches de pâtes, de sauce bolognese, de béchamel et de fromage râpé. 5. Cuire au four pendant 40 minutes.',
            image: 'lasagne.jfif',
            preparation: '30 min',
            cuisson: '40 min'
        },
        {
            id: 10,
            titre: 'Burger Classique',
            ingredients: 'Pain à burger (1), steak haché (1), cheddar (1 tranche), laitue (quelques feuilles), tomate (1 tranche), oignon (quelques rondelles), cornichon (2), sauce burger (au goût)',
            instructions: '1. Griller le steak haché selon votre préférence. 2. Toastez légèrement les pains à burger. 3. Assemblez les ingrédients dans l\'ordre : pain, sauce burger, steak, cheddar, laitue, tomate, oignon, cornichon. 4. Servez chaud.',
            image: 'burgeur.jfif',
            preparation: '15 min',
            cuisson: '10 min'
        },
        {
            id: 11,
            titre: 'Sushi Rolls',
            ingredients: 'Riz à sushi (200g), vinaigre de riz (60ml), algue nori (10 feuilles), saumon frais (200g), avocat (1), concombre (1/2), sauce soja (pour servir)',
            instructions: '1. Préparez le riz à sushi et ajoutez-y le vinaigre de riz. 2. Coupez le saumon, l\'avocat et le concombre en fines lamelles. 3. Disposez une feuille d\'algue nori sur une natte de bambou. 4. Étalez une fine couche de riz, ajoutez les ingrédients, puis roulez fermement. 5. Coupez en tranches et servez avec de la sauce soja.',
            image: 'sushirolls.jfif',
            preparation: '30 min',
            cuisson: '0 min'
        },
        {
            id: 12,
            titre: 'Couscous aux Légumes',
            ingredients: 'Semoule de couscous (250g), carottes (2), courgettes (1), poivrons (1 rouge), pois chiches (1 boîte), épices (cumin, curcuma, paprika), huile d\'olive (3 cuillères à soupe)',
            instructions: '1. Préparez la semoule de couscous selon les instructions sur l\'emballage. 2. Faites revenir les carottes, les courgettes et les poivrons coupés en dés dans de l\'huile d\'olive avec les épices. 3. Ajoutez les pois chiches et laissez mijoter quelques minutes. 4. Servez le couscous avec les légumes par-dessus.',
            image: 'couscous.jfif',
            preparation: '20 min',
            cuisson: '20 min'
        },
        {
            id: 13,
            titre: 'Poulet Tandoori',
            ingredients: 'Cuisses de poulet (4), yaourt nature (150g), citron (1), ail (2 gousses), gingembre (1 pouce), épices tandoori (2 cuillères à soupe), coriandre fraîche (pour garnir)',
            instructions: '1. Faites des incisions sur les cuisses de poulet. 2. Mélangez le yaourt, le jus de citron, l\'ail écrasé, le gingembre râpé et les épices tandoori. 3. Enrobez les cuisses de poulet de cette marinade et laissez reposer au réfrigérateur pendant au moins 2 heures. 4. Faites cuire au four à 200°C pendant environ 30 minutes ou jusqu\'à ce que le poulet soit bien cuit. 5. Garnissez de coriandre fraîche avant de servir.',
            image: 'poulettandori.jpg',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 14,
            titre: 'Tacos Mexicains',
            ingredients: 'Tortillas de maïs (8), viande hachée (300g), haricots noirs (1 boîte), maïs (1 boîte), salsa (200g), avocat (1), coriandre fraîche (quelques feuilles), lime (1)',
            instructions: '1. Faites revenir la viande hachée avec les haricots noirs et les épices mexicaines jusqu\'à ce qu\'elle soit bien cuite. 2. Faites chauffer les tortillas de maïs dans une poêle chaude. 3. Garnissez les tortillas de viande hachée, de maïs, de salsa, d\'avocat en dés, de coriandre fraîche et d\'un filet de jus de lime. 4. Servez chaud.',
            image: 'tacosmexicain.jfif',
            preparation: '20 min',
            cuisson: '10 min'
        },
        {
            id: 15,
            titre: 'Risotto aux Champignons',
            ingredients: 'Riz Arborio (300g), champignons de Paris (250g), bouillon de légumes (1L), vin blanc (120mL), oignon (1gros), ail (2gousses), parmesan (100g), beurre (60g)',
            instructions: "1. Faites revenir l\'oignon et l\'ail dans du beurre jusqu\'à ce qu\'ils soient translucides. 2. Ajoutez le riz Arborio et faites-le cuire jusqu\'à ce qu'il devienne translucide. 3. Déglacez avec du vin blanc. 4. Ajoutez progressivement le bouillon chaud, une louche à la fois, en remuant jusqu'à absorption avant d'ajouter la suivante. 5. Faites sauter les champignons dans une poêle séparée. 6. Ajoutez les champignons sautés et le parmesan au risotto une fois le riz cuit. 7. Assaisonnez selon votre goût et servez chaud.",
            image: 'risotochampignons.jfif',
            preparation: '15 min',
            cuisson: '30 min'
        },
        {
            id: 16,
            titre: 'Pad Thaï',
            ingredients: 'Nouilles de riz (200g), crevettes ou tofu (300g), oeufs (2), cacahuètes grillées (50g), oignon (1), ail (2 gousses), pousses de soja (100g), sauce tamarin (60mL), sauce soja (60mL), sucre (2 cuillères à soupe), jus de lime (1)',
            instructions: "1. Faites tremper les nouilles de riz dans de l\'eau chaude jusqu\'à ce qu\'elles ramollissent. 2. Faites sauter l\'ail et l\'oignon dans un wok avec de l\'huile. 3. Ajoutez les crevettes ou le tofu et faites cuire jusqu'à ce qu'ils soient dorés. 4. Poussez les ingrédients sur le côté du wok, cassez les œufs et faites-les cuire légèrement. 5. Ajoutez les nouilles égouttées, la sauce tamarin, la sauce soja et le sucre. 6. Mélangez bien tous les ingrédients. 7. Ajoutez les pousses de soja et les cacahuètes grillées. 8. Servez chaud avec du jus de lime frais.",
            image: 'padthai.jpg',
            preparation: '20 min',
            cuisson: '15 min'
        },
        {
            id: 17,
            titre: 'Makis et Sushis',
            ingredients: 'Riz à sushi (300g), vinaigre de riz (60ml), feuilles d\'algue nori (10 feuilles), saumon frais (300g), avocat (2), concombre (1), sauce soja (pour servir), wasabi (pour servir), gingembre mariné (pour servir)',
            instructions: '1. Préparez le riz à sushi en le rinçant jusqu\'à ce que l\'eau soit claire, puis faites-le cuire avec du vinaigre de riz. 2. Coupez le saumon, l\'avocat et le concombre en lanières fines. 3. Placez une feuille d\'algue nori sur une natte de bambou, étalez une fine couche de riz, ajoutez les ingrédients et roulez fermement. 4. Coupez les rouleaux en tranches pour les makis ou en morceaux pour les sushis. 5. Servez avec de la sauce soja, du wasabi et du gingembre mariné.',
            image: 'maki.jfif',
            preparation: '30 min',
            cuisson: '0 min'
        },
        {
            id: 18,
            titre: 'Tarte à l\'Oignon',
            ingredients: 'Pâte brisée (250g), oignons (500g), crème fraîche (200ml), œufs (3), gruyère râpé (100g), beurre (30g), muscade (1 pincée), sel, poivre',
            instructions: '1. Préchauffez votre four à 180°C. 2. Faites revenir les oignons émincés dans du beurre jusqu\'à ce qu\'ils soient dorés. 3. Dans un bol, mélangez la crème fraîche, les œufs, le gruyère râpé, la muscade, le sel et le poivre. 4. Abaissez la pâte brisée dans un moule à tarte et piquez le fond à l\'aide d\'une fourchette. 5. Étalez les oignons cuits sur le fond de tarte. 6. Versez le mélange à la crème fraîche sur les oignons. 7. Faites cuire au four pendant environ 30 minutes, jusqu\'à ce que la tarte soit dorée et que la garniture soit prise. 8. Laissez refroidir légèrement avant de servir.',
            image: 'tarteoignons.jfif',
            preparation: '20 min',
            cuisson: '30 min'
        },
        {
            id: 19,
            titre: 'Pâtes Carbonara',
            ingredients: 'Spaghetti (200g), lardons (150g), jaunes d\'oeufs (3), parmesan râpé (50g), crème fraîche (100ml), ail (1 gousse), sel (au goût), poivre (au goût)',
            instructions: '1. Faire cuire les spaghetti dans une grande casserole d\'eau salée. 2. Dans une poêle, faire revenir les lardons jusqu\'à ce qu\'ils soient dorés. Ajouter l\'ail écrasé et faire revenir encore une minute. 3. Dans un bol, mélanger les jaunes d\'oeufs, le parmesan râpé et la crème fraîche. 4. Égoutter les pâtes en réservant un peu d\'eau de cuisson. 5. Ajouter les pâtes aux lardons dans la poêle et mélanger. 6. Retirer la poêle du feu et ajouter le mélange d\'oeufs et de parmesan. Mélanger rapidement pour que les oeufs ne cuisent pas trop. Si nécessaire, ajouter un peu d\'eau de cuisson des pâtes pour obtenir une sauce crémeuse. 7. Assaisonner avec du sel et du poivre, et servir immédiatement.',
            image: 'patecarboFR.jfif',
            preparation: '10 min',
            cuisson: '15 min'
        },
        {
            id: 20,
            titre: 'Pâtes Carbonara à Italienne',
            ingredients: 'Spaghetti (200g), guanciale (100g), jaunes d\'oeufs (3), pecorino romano râpé (50g), sel (au goût), poivre noir (au goût)',
            instructions: '1. Faire cuire les spaghetti dans une grande casserole d\'eau salée jusqu\'à ce qu\'ils soient al dente. 2. Pendant ce temps, couper le guanciale en petits dés et le faire revenir dans une poêle à feu moyen jusqu\'à ce qu\'il soit croustillant. 3. Dans un bol, mélanger les jaunes d\'oeufs et le pecorino râpé. 4. Égoutter les pâtes en réservant une tasse d\'eau de cuisson. 5. Ajouter les pâtes au guanciale dans la poêle et mélanger. 6. Retirer la poêle du feu et ajouter le mélange d\'oeufs et de pecorino. Mélanger rapidement pour que les oeufs ne cuisent pas trop, en ajoutant de l\'eau de cuisson des pâtes au besoin pour obtenir une sauce crémeuse. 7. Assaisonner avec du poivre noir fraîchement moulu et servir immédiatement.',
            image: 'patecarboIT.jpg',
            preparation: '10 min',
            cuisson: '15 min'
        }
    ],
    desserts: [
        {
            id: 21,
            titre: 'Crêpes Sucrées',
            ingredients: 'Farine (200g), oeufs (2), lait (500ml), sucre (50g), beurre (50g), sel (une pincée)',
            instructions: '1. Mélanger la farine, les oeufs, le lait, le sucre et le sel. 2. Faire chauffer une poêle et ajouter une noisette de beurre. 3. Verser une louche de pâte dans la poêle et cuire des deux côtés. 4. Servir avec du sucre, du miel ou de la confiture.',
            image: 'crepe.jfif',
            preparation: '10 min',
            cuisson: '20 min'
        },
        {
            id: 22,
            titre: 'Tarte aux Pommes',
            ingredients: 'Pâte feuilletée (1), pommes (4), sucre (100g), cannelle (1 cuillère à café), beurre (50g)',
            instructions: '1. Étaler la pâte feuilletée dans un moule. 2. Éplucher et trancher les pommes. 3. Disposer les pommes sur la pâte, saupoudrer de sucre et de cannelle, et ajouter des noisettes de beurre. 4. Cuire au four à 180°C pendant 35 minutes.',
            image: 'tarte au pommes.jfif',
            preparation: '15 min',
            cuisson: '35 min'
        },
        {
            id: 23,
            titre: 'Brownies au Chocolat',
            ingredients: 'Chocolat (200g), beurre (150g), sucre (200g), oeufs (3), farine (100g), noix (50g)',
            instructions: '1. Faire fondre le chocolat et le beurre. 2. Ajouter le sucre, les oeufs, la farine et les noix. 3. Verser dans un moule et cuire au four à 180°C pendant 25 minutes.',
            image: 'brownie.jfif',
            preparation: '15 min',
            cuisson: '25 min'
        },
        {
            id: 24,
            titre: 'Mousse au Chocolat',
            ingredients:'Chocolat noir (200g), oeufs (4), sucre (50g), crème fraîche (200ml)',
            instructions: '1. Faire fondre le chocolat. 2. Séparer les blancs des jaunes d\'oeufs. 3. Mélanger les jaunes avec le chocolat fondu, puis ajouter la crème fraîche. 4. Monter les blancs en neige avec le sucre, puis les incorporer délicatement au mélange au chocolat. 5. Réfrigérer pendant au moins 2 heures avant de servir.',
            image: 'moussechoco.jfif',
            preparation: '20 min',
            cuisson: '0 min'
        },
        {
            id: 25,
            titre: 'Tiramisu',
            ingredients: 'Mascarpone (250g), oeufs (3), sucre (100g), café (200ml), biscuits à la cuillère (24), cacao en poudre (pour saupoudrer)',
            instructions: '1. Séparer les blancs des jaunes d\'oeufs. 2. Fouetter les jaunes avec le sucre jusqu\'à ce que le mélange blanchisse. Ajouter le mascarpone et mélanger. 3. Monter les blancs en neige et les incorporer délicatement au mélange. 4. Tremper les biscuits dans le café et les disposer dans un plat. 5. Ajouter une couche de crème au mascarpone, puis une autre couche de biscuits et ainsi de suite. 6. Saupoudrer de cacao en poudre et réfrigérer pendant au moins 4 heures.',
            image: 'tiramisu.jfif',
            preparation: '30 min',
            cuisson: '0 min'
        },
        {
            id: 26,
            titre: 'Pancakes',
            ingredients: 'Farine (200g), lait (300ml), oeufs (2), sucre (50g), levure chimique (1 cuillère à café), beurre (pour la cuisson), sel (une pincée)',
            instructions: '1. Mélanger la farine, le sucre, la levure et le sel dans un bol. 2. Ajouter les oeufs et le lait, puis mélanger jusqu\'à obtention d\'une pâte lisse. 3. Faire chauffer une poêle avec un peu de beurre et cuire les pancakes des deux côtés jusqu\'à ce qu\'ils soient dorés. 4. Servir avec du sirop d\'érable, des fruits ou du chocolat.',
            image: 'pancake.jfif',
            preparation: '10 min',
            cuisson: '20 min'
        },
        {
            id: 27,
            titre: 'Cheesecake New Yorkais',
            ingredients: 'Biscuits Graham (200g), beurre (100g), cream cheese (500g), sucre (150g), oeufs (3), vanille (1 cuillère à café), crème fraîche (200ml)',
            instructions: '1. Préchauffez votre four à 180°C. 2. Émiettez les biscuits Graham et mélangez-les avec le beurre fondu. 3. Tapissez le fond d\'un moule à charnière avec ce mélange et tassez bien. 4. Battez le cream cheese avec le sucre jusqu\'à obtenir une texture lisse. 5. Ajoutez les oeufs un à un en battant bien entre chaque ajout. 6. Incorporez la vanille et la crème fraîche. 7. Versez cette préparation sur la croûte de biscuits. 8. Faites cuire au four pendant environ 45 minutes. 9. Laissez refroidir à température ambiante, puis réfrigérez pendant au moins 4 heures avant de servir.',
            image: 'cheescake.jpg',
            preparation: '20 min',
            cuisson: '45 min'
        },
        {
            id: 28,
            titre: 'Crème Brûlée',
            ingredients: 'Crème liquide (400ml), jaunes d\'oeufs (6), sucre (100g), vanille (1 gousse), cassonade (pour saupoudrer)',
            instructions: '1. Préchauffez votre four à 150°C. 2. Faites chauffer la crème liquide avec la vanille jusqu\'à ce qu\'elle frémisse. 3. Battez les jaunes d\'oeufs avec le sucre jusqu\'à ce que le mélange blanchisse. 4. Versez la crème chaude sur ce mélange en fouettant vivement. 5. Répartissez la préparation dans des ramequins. 6. Disposez les ramequins dans un plat allant au four, remplissez-le d\'eau chaude jusqu\'à mi-hauteur des ramequins. 7. Faites cuire au four pendant environ 40 à 45 minutes, jusqu\'à ce que la crème soit prise mais encore tremblotante au centre. 8. Laissez refroidir à température ambiante, puis réfrigérez pendant au moins 2 heures. 9. Juste avant de servir, saupoudrez de cassonade sur le dessus des crèmes et caramélisez au chalumeau ou sous le gril du four.',
            image: 'cremebrule.jfif',
            preparation: '20 min',
            cuisson: '45 min'
        },
        {
            id: 29,
            titre: 'Tarte aux Fraises',
            ingredients:  'Pâte sablée (1), crème pâtissière (250g), fraises fraîches (500g), confiture d\'abricot (50g)',
            instructions: '1. Préparez la pâte sablée et étalez-la dans un moule à tarte. 2. Faites cuire à blanc pendant environ 15-20 minutes à 180°C. 3. Laissez refroidir la pâte. 4. Préparez la crème pâtissière et étalez-la sur le fond de tarte refroidi. 5. Lavez et équeutez les fraises, puis disposez-les sur la crème pâtissière. 6. Faites chauffer légèrement la confiture d\'abricot et badigeonnez-en les fraises pour les faire briller. 7. Réfrigérez la tarte avant de servir.',
            image: 'tarteaufraise.jfif',
            preparation: '30 min',
            cuisson: '20 min'
        },
        {
            id: 30,
            titre: 'Gâteau au Chocolat Fondant',
            ingredients: 'Chocolat noir (200g), beurre (150g), sucre (150g), oeufs (4), farine (50g), cacao en poudre (2 cuillères à soupe)',
            instructions: '1. Préchauffez votre four à 180°C. 2. Faites fondre le chocolat noir et le beurre au bain-marie ou au micro-ondes. 3. Dans un grand bol, fouettez les oeufs avec le sucre jusqu\'à ce que le mélange blanchisse. 4. Incorporez le chocolat fondu au mélange d\'oeufs et mélangez bien. 5. Ajoutez la farine et le cacao tamisés et mélangez jusqu\'à obtenir une pâte lisse. 6. Versez la pâte dans un moule beurré et fariné. 7. Faites cuire au four pendant environ 20-25 minutes. 8. Laissez refroidir légèrement avant de démouler et de servir.',
            image: 'fondantchocolat.jpg',
            preparation: '20 min',
            cuisson: '25 min'
        },
        {
            id: 31,
            titre: 'Cookies aux Pépites de Chocolat',
            ingredients: 'Farine (250g), beurre mou (150g), sucre blanc (150g), sucre brun (150g), œuf (1), extrait de vanille (1 cuillère à café), pépites de chocolat (200g), bicarbonate de soude (1 cuillère à café), sel (1/2 cuillère à café)',
            instructions: "1. Préchauffez votre four à 180°C. 2. Dans un bol, mélangez la farine, le bicarbonate de soude et le sel. 3. Dans un autre grand bol, battez le beurre mou avec le sucre blanc et le sucre brun jusqu\'à obtenir une texture crémeuse. 4. Ajoutez l\'œuf et l\'extrait de vanille au mélange de beurre et battez bien. 5. Incorporez progressivement le mélange de farine jusqu\'à ce que la pâte soit homogène. 6. Ajoutez les pépites de chocolat et mélangez-les à la pâte. 7. Sur une plaque à pâtisserie non graissée, déposez des cuillerées à soupe de pâte espacées de quelques centimètres. 8. Faites cuire au four préchauffé pendant environ 10-12 minutes, jusqu'à ce que les bords soient légèrement dorés. 9. Laissez refroidir les cookies sur la plaque pendant 5 minutes avant de les transférer sur une grille pour refroidir complètement.",
            image: 'cookies.jfif',
            preparation: '15 min',
            cuisson: '10 min'
        },
        {
            id: 32,
            titre: 'Pain Perdu',
            ingredients: "Pain rassis (4 tranches épaisses), lait (250ml), œufs (2), sucre (50g), extrait de vanille (1 cuillère à café), beurre (pour la cuisson)",
            instructions: "1. Dans un bol, mélangez le lait, les œufs battus, le sucre et l'extrait de vanille. 2. Faites chauffer une poêle à feu moyen et faites fondre un peu de beurre. 3. Trempez rapidement les tranches de pain dans le mélange de lait et d'œufs, en les retournant pour qu'elles soient bien imbibées. 4. Faites cuire les tranches de pain dans la poêle chaude jusqu'à ce qu'elles soient dorées et croustillantes des deux côtés. 5. Servez chaud avec du sirop d'érable, des fruits frais ou saupoudré de sucre glace.",
            image: 'pain perdu.jpg',
            preparation: '10 min',
            cuisson: '10 min'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const entreeList = document.getElementById('entree-list');
    const platList = document.getElementById('plat-list');
    const dessertList = document.getElementById('dessert-list');

    if (entreeList) {
        recettes.entrees.forEach(recette => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `recette.html?id=${recette.id}`;
            a.textContent = recette.titre;
            li.appendChild(a);
            entreeList.appendChild(li);
        });
    }

    if (platList) {
        recettes.plats.forEach(recette => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `recette.html?id=${recette.id}`;
            a.textContent = recette.titre;
            li.appendChild(a);
            platList.appendChild(li);
        });
    }

    if (dessertList) {
        recettes.desserts.forEach(recette => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `recette.html?id=${recette.id}`;
            a.textContent = recette.titre;
            li.appendChild(a);
            dessertList.appendChild(li);
        });
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
        let recette = recettes.entrees.find(r => r.id == id) ||
                      recettes.plats.find(r => r.id == id) ||
                      recettes.desserts.find(r => r.id == id);

        if (recette) {
            document.getElementById('recette-titre').textContent = recette.titre;
            document.title = recette.titre;
            document.getElementById('recette-ingredients').textContent = recette.ingredients;
            document.getElementById('recette-instructions').textContent = recette.instructions;
            document.getElementById('recette-image').src = recette.image;
            document.getElementById('recette-preparation').textContent = recette.preparation;
            document.getElementById('recette-cuisson').textContent = recette.cuisson;
        }
    }
});
