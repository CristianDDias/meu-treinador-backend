import { TrainerExpanded } from "src/interfaces/trainer-expanded.interface";

export const mock: TrainerExpanded[] = [
  {
    id: '8f5f9807-de8c-4127-9aa2-493e370e550f',
    name: 'Ethan Moore',
    description:
      'Nihil qui praesentium. Saepe veritatis eum ut voluptas cupiditate quia at. Aliquid adipisci et ut est est inventore et qui.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/15539755273179878-Male_25.jpg',
    rating: {
      value: 3.8,
      reviews: 365,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
          'Estúdio 3',
        ],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
          'Estúdio 3',
        ],
      },
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: ['Academia 2', 'Academia 3', 'Crossfit 3'],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: [],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '08:00',
        endTime: '19:00',
      },
      {
        weekday: 'tuesday',
        startTime: '06:00',
        endTime: '19:00',
      },
      {
        weekday: 'wednesday',
        startTime: '08:00',
        endTime: '20:00',
      },
      {
        weekday: 'thursday',
        startTime: '10:00',
        endTime: '21:00',
      },
      {
        weekday: 'saturday',
        startTime: '10:00',
        endTime: '19:00',
      },
    ],
    reviews: [
      {
        id: '979b7e7d-7a11-4829-af5f-58fa5f92b74d',
        name: 'Estevan Buckridge',
        description:
          'Nemo nesciunt sit et dolor ducimus accusamus animi iusto. Officia omnis et tempora et et cumque suscipit. Similique iste quia.',
        rating: 5,
      },
      {
        id: '6a56b307-43a9-4746-83a1-71ac1bafa716',
        name: 'Alfreda Grady',
        description:
          'Provident cupiditate dolores iure voluptas. Quasi facilis modi ut. Quod expedita deleniti quam pariatur necessitatibus consequatur. Expedita beatae voluptatem ut nobis. Dolorem ullam qui asperiores et rem velit eligendi dolorem. Magni aut qui sit.',
        rating: 3.8,
      },
      {
        id: '5720e2e0-6ba5-4b19-b14e-894eca63d4d9',
        name: "Nikita O'Connell",
        description:
          'Consequatur ut et tenetur voluptatem eveniet atque in distinctio. Ratione consequatur qui est ut. Omnis officiis tenetur sequi enim dicta illum est et pariatur. Maiores tenetur sit. Vel optio esse aut distinctio quae nostrum ipsam distinctio eveniet. Ratione et ut in corporis quae rerum non.',
        rating: 4.8,
      },
    ],
  },
  {
    id: '30935631-5fd7-414e-8667-726f46ade62e',
    name: 'Adonis Wintheiser',
    description:
      'Quidem amet quia laudantium et libero. Quis aut quisquam quas et dolorum occaecati a ab. Dolores omnis aut et nesciunt. Quo consequuntur minus voluptatibus porro quos et vero.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/7446838120089077-Male_15.jpg',
    rating: {
      value: 4.9,
      reviews: 433,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: ['Academia 2', 'Academia 3', 'Crossfit 1', 'Crossfit 2', 'Crossfit 3', 'Estúdio 1'],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Crossfit 1', 'Crossfit 3', 'Estúdio 2'],
      },
      {
        city: 'Porto Alegre',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Crossfit 2', 'Crossfit 3', 'Estúdio 1'],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '10:00',
        endTime: '18:00',
      },
      {
        weekday: 'tuesday',
        startTime: '06:00',
        endTime: '19:00',
      },
      {
        weekday: 'wednesday',
        startTime: '06:00',
        endTime: '20:00',
      },
      {
        weekday: 'thursday',
        startTime: '07:00',
        endTime: '18:00',
      },
      {
        weekday: 'saturday',
        startTime: '08:00',
        endTime: '19:00',
      },
    ],
    reviews: [
      {
        id: 'abe07df1-684b-4e61-b858-5a21e876e4e0',
        name: 'Nola Sauer',
        description:
          'Mollitia vero ut perferendis aut distinctio modi sint. Qui et rerum enim sapiente nisi sit non voluptas. Eum nemo nihil corporis maxime dolore doloremque error.',
        rating: 4.7,
      },
      {
        id: 'f15913e9-d9f2-422f-a291-3757265dedc9',
        name: 'Salma Goldner',
        description:
          'Et esse hic eaque nostrum. Accusamus molestiae sit nisi odio eligendi vel enim ea suscipit. Velit nihil consequatur dolorem suscipit voluptatum.',
        rating: 4.2,
      },
      {
        id: 'bf488641-8f71-479f-be09-2500d943f73e',
        name: 'Westley Blick',
        description:
          'Qui atque modi et voluptatibus. Dignissimos modi aut deleniti dolore est repudiandae fuga cupiditate. Magni dolorem laudantium eum consequuntur culpa molestias distinctio. Quo minus architecto nihil nihil. Voluptatem ut sequi facilis maxime explicabo soluta est consequatur consequatur. Nisi ducimus quaerat quo nesciunt molestiae qui.',
        rating: 4.2,
      },
    ],
  },
  {
    id: '85a1289c-4b8f-40d5-82ae-625d53d49ac3',
    name: 'Joy Carroll',
    description:
      'Harum veniam laboriosam amet placeat error recusandae amet molestias quis. Et iste magnam earum tempore. Maxime et est sunt et velit. Atque sed ut blanditiis corporis consequatur molestias suscipit. Praesentium et repudiandae eos quis deleniti voluptatibus magnam. Optio odit aperiam maxime odit aut.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/40013598437633613-Male_18.jpg',
    rating: {
      value: 3.1,
      reviews: 408,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Canoas',
        state: 'RS',
        places: ['Estúdio 2'],
      },
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: [],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '08:00',
        endTime: '19:00',
      },
      {
        weekday: 'tuesday',
        startTime: '09:00',
        endTime: '18:00',
      },
      {
        weekday: 'wednesday',
        startTime: '08:00',
        endTime: '20:00',
      },
      {
        weekday: 'thursday',
        startTime: '07:00',
        endTime: '19:00',
      },
      {
        weekday: 'friday',
        startTime: '07:00',
        endTime: '17:00',
      },
      {
        weekday: 'saturday',
        startTime: '10:00',
        endTime: '20:00',
      },
      {
        weekday: 'sunday',
        startTime: '08:00',
        endTime: '17:00',
      },
    ],
    reviews: [
      {
        id: '6e0aff63-2d91-4073-83fb-36f9677c4c07',
        name: 'Pink Kiehn',
        description:
          'Omnis quisquam quidem rerum aut laborum exercitationem. Explicabo et et accusamus. Vero dolore ratione. Velit optio omnis cum at sit ut. Dolores impedit placeat quo expedita enim et doloribus non natus.',
        rating: 4.6,
      },
      {
        id: '24fc3369-22fe-4fe3-b035-01bc4b79ebfd',
        name: 'Benjamin Rau',
        description:
          'Id illo incidunt et ullam quisquam voluptatem qui veritatis praesentium. Quidem odit magni. Maxime eveniet quam at repellendus ut molestiae corporis qui. Quaerat inventore earum consectetur odit. Mollitia praesentium repellat possimus pariatur nihil cum.',
        rating: 4.9,
      },
      {
        id: 'e32aa1d4-9fb3-4397-9791-2356eac3aeff',
        name: 'Bernie Ruecker',
        description:
          'Id omnis totam tempora aperiam atque. Sit ullam omnis excepturi. Mollitia veritatis voluptas. Eaque adipisci nesciunt non dolorem sunt inventore qui repudiandae corrupti.',
        rating: 4.5,
      },
      {
        id: '9ac74ca1-3938-4351-8ffc-f189df727e89',
        name: 'Korbin Turner',
        description:
          'Ut fugit qui. Omnis optio vel et et. Aut quidem non nostrum quibusdam aspernatur expedita.',
        rating: 4.8,
      },
      {
        id: 'ed0cb23a-bc0d-40a6-b303-8d0201c5b394',
        name: 'Uriah Dare',
        description:
          'Cum facilis accusantium. Dolorem sed ea iste minima quia maxime vitae minus aliquid. Qui et doloribus facere quibusdam porro et ullam sed. Aut illo est aut voluptates ex corrupti aut voluptatem aliquam. Laudantium consequatur harum non ea architecto inventore asperiores similique.',
        rating: 4.3,
      },
      {
        id: '8b49fc62-6f57-4c2a-a379-b05474b57fdd',
        name: 'Gaetano Heathcote',
        description:
          'Autem atque reiciendis qui numquam consequatur quae similique perspiciatis sint. Voluptates tempora assumenda. Culpa similique iure ullam. Unde possimus aspernatur accusamus ab voluptatem consectetur. Maiores impedit vitae delectus explicabo magni a soluta excepturi.',
        rating: 3.9,
      },
      {
        id: '05aa9660-3e0b-4fe0-95f3-4b9ffdf99a5f',
        name: 'Tremaine Dibbert',
        description:
          'Vel esse a voluptas sit sed quasi. Ratione veritatis aut cumque exercitationem totam magni asperiores culpa aut. Sit inventore deleniti a accusantium quis et voluptatum amet voluptatem.',
        rating: 4.1,
      },
      {
        id: '5cb51cb3-82f9-48f1-b3a5-b902d70a0266',
        name: 'Webster Pagac',
        description:
          'Ex dolore suscipit. Ut adipisci temporibus minus. Qui voluptas eaque libero tempore. Corrupti recusandae ullam assumenda est temporibus autem deserunt. Dolor at debitis assumenda vel aut eius in ut.',
        rating: 3.2,
      },
    ],
  },
  {
    id: '2e6baf0c-641c-4cce-8a44-71816e59fb13',
    name: 'Sonny Kuhlman',
    description:
      'Natus et aut eum sunt autem quas eaque sed. Facilis at magnam. Aut dolorum qui. Sed quis suscipit aliquid. Maiores sint enim impedit maiores. Odio adipisci temporibus enim suscipit nulla.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/3219824028519749-Female_21.jpg',
    rating: {
      value: 4.7,
      reviews: 417,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: true,
    locations: [
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Academia 3', 'Crossfit 1', 'Crossfit 2', 'Estúdio 1'],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '09:00',
        endTime: '19:00',
      },
      {
        weekday: 'tuesday',
        startTime: '06:00',
        endTime: '19:00',
      },
      {
        weekday: 'wednesday',
        startTime: '06:00',
        endTime: '20:00',
      },
      {
        weekday: 'thursday',
        startTime: '08:00',
        endTime: '21:00',
      },
      {
        weekday: 'friday',
        startTime: '08:00',
        endTime: '18:00',
      },
      {
        weekday: 'saturday',
        startTime: '06:00',
        endTime: '21:00',
      },
      {
        weekday: 'sunday',
        startTime: '09:00',
        endTime: '18:00',
      },
    ],
    reviews: [
      {
        id: 'bf65f1c3-fd10-4178-bd05-4eb4effbc041',
        name: 'Madge Larson',
        description:
          'Quas saepe aut corrupti aut optio magni. Quos quia illum voluptatem. Est accusamus soluta.',
        rating: 5,
      },
      {
        id: '92eb68be-a76f-487e-8f3b-2962f5522ab3',
        name: 'Columbus Eichmann',
        description:
          'Sequi atque facilis. Soluta mollitia voluptatibus molestiae et saepe veniam. Optio et accusantium saepe ad voluptatem repudiandae dolorem ullam.',
        rating: 4.9,
      },
      {
        id: '74248c80-e24a-4e84-a763-7527417a5b7d',
        name: 'Delbert Heaney',
        description:
          'Nisi qui reiciendis iusto et laborum asperiores consectetur quia sed. Cum nulla quaerat ut molestiae vel molestiae. Qui cupiditate qui repellendus reiciendis ab. Est totam incidunt voluptatibus consequatur cumque voluptatem. Cumque ea doloribus consequuntur maxime mollitia commodi aut.',
        rating: 3.9,
      },
      {
        id: 'a26a3cc4-e8f1-4d31-8ac2-aeeed4c7b5d8',
        name: 'Julianne Keeling',
        description:
          'Ut voluptas fugiat autem accusamus inventore. Quae molestiae voluptatem officiis aliquam quos reprehenderit. Minus dolorem sunt accusamus odit sequi soluta at. Nulla explicabo voluptatum voluptate nostrum ratione dolor. Sunt ut sed voluptas dolor quis eius et. Ut officia assumenda suscipit dolores eum enim velit qui quos.',
        rating: 3.9,
      },
      {
        id: '18f0e867-557a-45e6-aa16-21ffe5e7ebe3',
        name: 'Timothy Nienow',
        description:
          'Eligendi sit facilis dicta est voluptatum quaerat architecto. Nisi qui qui harum delectus modi nihil nesciunt occaecati. Quo est et qui eum qui rerum officia. Tempora voluptatem reprehenderit sapiente neque.',
        rating: 3.7,
      },
      {
        id: '2e24bb6d-40ce-4678-a8e8-a30b50bf857f',
        name: 'Jacey Kautzer',
        description:
          'Maiores rerum neque eos similique sit. Voluptates sit nihil officiis dolores et quo numquam possimus culpa. Aut sint autem perferendis. Porro aut rerum molestiae velit illum nihil autem. Perspiciatis minima veniam sit sit. Aut ut et atque beatae perspiciatis maxime aut consequatur qui.',
        rating: 3.1,
      },
      {
        id: '4ccd4a97-5737-4b81-aecc-639b800351e2',
        name: 'Samanta Gleason',
        description: 'Dolores et quo. Voluptatem nostrum rem ipsum odio ex. Harum fuga id est.',
        rating: 4.8,
      },
    ],
  },
  {
    id: '8a338d28-3b34-420e-9c33-68d8403c28b1',
    name: 'Peggie Breitenberg',
    description:
      'Sequi adipisci quisquam odit veniam. Similique repellat dicta dolor est. Ea illo cum esse sint tempora eveniet quos illo. Quia vel sed. Impedit quis dolore perferendis.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/5124207109028098-Male_20.jpg',
    rating: {
      value: 4.3,
      reviews: 136,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: [],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Estúdio 1',
          'Estúdio 2',
        ],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Academia 3', 'Crossfit 1', 'Crossfit 3', 'Estúdio 1'],
      },
      {
        city: 'Sapiranga',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
          'Estúdio 3',
        ],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '07:00',
        endTime: '18:00',
      },
      {
        weekday: 'tuesday',
        startTime: '08:00',
        endTime: '19:00',
      },
      {
        weekday: 'friday',
        startTime: '06:00',
        endTime: '20:00',
      },
      {
        weekday: 'saturday',
        startTime: '08:00',
        endTime: '17:00',
      },
    ],
    reviews: [
      {
        id: 'f3d18c86-d8ac-4c32-968f-9ec0926b53cd',
        name: 'Henriette Jacobson',
        description:
          'Commodi saepe sed et aut ut. Rem dolor dolorem et iure quos accusantium magnam est. Officiis sed ex nulla aliquam magnam explicabo. Ipsa qui sunt sit sed distinctio maiores. Illo suscipit aliquam nisi voluptates unde.',
        rating: 4.1,
      },
      {
        id: 'e674a5f4-47ff-42a0-b0f0-637019fac00c',
        name: 'Alec Considine',
        description:
          'Sit laborum non. Iure et est reprehenderit aliquam voluptatem est commodi. Ea saepe consequatur. Sit quo ab molestiae. Quo error ipsam modi quisquam esse perferendis.',
        rating: 4.9,
      },
      {
        id: '8bb89a05-7d94-4b9f-a295-4ff219bb7100',
        name: 'Ahmed Dibbert',
        description:
          'Modi sunt voluptates ut iusto maxime aut. Sint minus temporibus voluptatibus non officia inventore magnam sit rem. Qui pariatur est et excepturi quae enim quia culpa.',
        rating: 4.8,
      },
      {
        id: '99e3d983-c302-4531-9c5d-1b82f5d71988',
        name: 'Selmer Weber',
        description:
          'Nihil possimus nesciunt at temporibus dolores laborum doloribus maxime. Voluptatem minima eius exercitationem magnam. Aut qui facilis sit aspernatur. Quo error ut natus quo molestiae deleniti aut dolores. Provident laboriosam illum animi ut sit soluta enim iure facere. Temporibus tempore ea.',
        rating: 3.1,
      },
      {
        id: '34b487ca-98c3-4d8a-9853-c5c0f7252c8f',
        name: 'Gage Ankunding',
        description:
          'Sint asperiores architecto quos aspernatur. Rerum molestiae occaecati illo aut aspernatur eum libero id. Eos occaecati mollitia et natus in ut repellendus nobis eum.',
        rating: 3.7,
      },
      {
        id: '6431606e-1b28-44ed-ac83-5f45f04b49d8',
        name: 'Leola Strosin',
        description:
          'Illo nobis minima enim ad repudiandae. Et atque recusandae id culpa. Nihil ea dignissimos consectetur. Voluptate qui laborum ab sit voluptas odio et. Quo placeat dolor libero laudantium magnam. Voluptas error adipisci aperiam totam quis neque deleniti occaecati.',
        rating: 5,
      },
    ],
  },
  {
    id: 'a831c9a5-0f8c-44c5-96bd-5776361e0254',
    name: 'Marcel Conn',
    description:
      'Enim adipisci quam sint. Dolores nihil consequatur itaque repellat itaque quis. Maiores quasi dolorem amet itaque consequatur voluptatum quo est deleniti. Necessitatibus aperiam doloribus laboriosam corrupti adipisci. Reprehenderit ut omnis odio magni nisi neque error optio. Iste accusantium voluptatibus corporis amet voluptatem.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/012235256338216649-Female_19.jpg',
    rating: {
      value: 4.9,
      reviews: 452,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: true,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: ['Crossfit 1', 'Crossfit 2', 'Estúdio 1'],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: ['Crossfit 3'],
      },
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: [],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
        ],
      },
      {
        city: 'Porto Alegre',
        state: 'RS',
        places: ['Academia 3', 'Crossfit 1', 'Crossfit 3', 'Estúdio 1'],
      },
      {
        city: 'Sapiranga',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
        ],
      },
    ],
    schedules: [
      {
        weekday: 'tuesday',
        startTime: '10:00',
        endTime: '19:00',
      },
      {
        weekday: 'thursday',
        startTime: '07:00',
        endTime: '21:00',
      },
      {
        weekday: 'friday',
        startTime: '06:00',
        endTime: '18:00',
      },
    ],
    reviews: [
      {
        id: '7e4e91eb-b633-4096-9fcc-10b14d4884a0',
        name: 'Roger Walker',
        description:
          'Corrupti voluptatibus sint iusto beatae est rem eligendi sed et. Sunt asperiores ab libero placeat est qui. Iure iste consequatur omnis quo sint velit explicabo. Voluptatem sit sed aspernatur sed ut quis. Accusantium ipsum laboriosam vitae ducimus nobis molestiae totam. At occaecati debitis omnis quidem.',
        rating: 3.6,
      },
      {
        id: '8ee25af0-c59e-4afd-b833-672907c381b0',
        name: 'Aaliyah Witting',
        description:
          'Sunt voluptatem vel dolores quia. Quae est qui sunt. Voluptatem ipsum non ad eum omnis deleniti. Perspiciatis veniam hic. Tempora expedita rerum voluptatem a rem cum aliquid. Tempore recusandae delectus autem vero.',
        rating: 4.5,
      },
    ],
  },
  {
    id: '5c724ae6-9ad2-4763-b2cd-0a56618156c1',
    name: "Helmer O'Keefe",
    description:
      'Maiores iste et dolor soluta assumenda ea qui voluptas praesentium. Dolores nemo voluptas autem nostrum porro quos nam adipisci beatae. Dolorem voluptas quia. Eos reprehenderit illum sint atque blanditiis omnis tempore ut. Cumque reiciendis harum et.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/6698617542413317-Female_23.jpg',
    rating: {
      value: 3.3,
      reviews: 89,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: true,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
        ],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: ['Academia 2', 'Estúdio 1'],
      },
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Crossfit 2'],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
        ],
      },
      {
        city: 'Porto Alegre',
        state: 'RS',
        places: ['Academia 2', 'Crossfit 1', 'Crossfit 2', 'Crossfit 3'],
      },
      {
        city: 'Sapiranga',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Crossfit 1', 'Crossfit 2', 'Crossfit 3'],
      },
      {
        city: 'São Leopoldo',
        state: 'RS',
        places: ['Estúdio 2'],
      },
    ],
    schedules: [
      {
        weekday: 'monday',
        startTime: '09:00',
        endTime: '18:00',
      },
      {
        weekday: 'tuesday',
        startTime: '06:00',
        endTime: '21:00',
      },
      {
        weekday: 'wednesday',
        startTime: '10:00',
        endTime: '18:00',
      },
      {
        weekday: 'thursday',
        startTime: '06:00',
        endTime: '19:00',
      },
      {
        weekday: 'friday',
        startTime: '06:00',
        endTime: '18:00',
      },
      {
        weekday: 'saturday',
        startTime: '10:00',
        endTime: '21:00',
      },
    ],
    reviews: [
      {
        id: '06db3192-d117-48e2-87c8-3443b190bee4',
        name: 'Earnestine Jast',
        description:
          'Earum velit voluptatibus rem tempora dolorum ratione. Atque non reiciendis facilis pariatur nulla culpa consequuntur nobis debitis. Quo ut voluptate ipsam mollitia possimus consequatur. Ut est hic incidunt voluptatem sint veniam. Sint soluta quos quod officia eum. Cupiditate non reprehenderit suscipit a ea sed quos.',
        rating: 4.1,
      },
      {
        id: '3b876c90-82f1-4f73-9a87-3418a648e5c1',
        name: 'Carol Okuneva',
        description:
          'Dolores enim in in. Vel vel ut illum ea magnam sunt dolor nesciunt enim. Praesentium voluptatibus tenetur recusandae at aperiam neque vel minima quia. Iure eligendi sit libero id nihil rerum rerum et. Modi et eum dolore. Neque delectus omnis nulla.',
        rating: 4.4,
      },
      {
        id: '6cad5978-f569-419e-bf94-a9f92aa851e7',
        name: 'Laurel Leuschke',
        description:
          'Cumque et et ea ut ut ea et. Labore sed modi aliquam fugit. Quidem rem dolorem at sunt maiores ex aliquam. Consequuntur rerum sequi doloremque corrupti dolorem. Hic qui autem tenetur. Eum molestias sed asperiores nemo reprehenderit magnam dicta molestias.',
        rating: 4.5,
      },
      {
        id: 'd90efa3d-df5c-4a19-bd10-5c2b19e9aff7',
        name: 'Ola Senger',
        description:
          'Amet ex placeat ut et sit. Voluptatem ut qui maiores. Molestiae quia laudantium officiis rem ut quos officia.',
        rating: 3.3,
      },
      {
        id: 'eb15795d-beca-45e3-b1ee-6348119d5aea',
        name: 'Gabriella Roob',
        description:
          'Non ut assumenda numquam. Omnis rerum dolorem rerum fuga tempora reprehenderit. Qui quod tempore dolorem dolores. Veniam repellendus ad eos aut ex. Rem facilis nam quis eius ullam quo ipsa veritatis cumque.',
        rating: 4.1,
      },
      {
        id: 'f909ba77-cb76-4156-8a45-9f4bebd76532',
        name: 'Dovie Kris',
        description:
          'Et repellendus quos in aut illo expedita dignissimos qui explicabo. Aut assumenda repellat molestiae omnis. Dolores repellendus enim aperiam illo expedita blanditiis rerum omnis repellat. Deleniti quo eum. Id illum omnis unde eligendi ea et eum qui dignissimos.',
        rating: 4.1,
      },
      {
        id: 'ccfe95a9-4c71-4c30-be31-2075eb84373a',
        name: 'Betsy Swift',
        description:
          'Aliquid est sit labore atque minus. Accusamus amet quibusdam. Nulla et explicabo. Sint maiores possimus adipisci error eos. Aut labore ut dolor dignissimos dolore cumque eveniet.',
        rating: 3.3,
      },
    ],
  },
  {
    id: 'b09d67d3-d713-4bde-8be2-c8932ec7fa6d',
    name: "Carmine O'Connell",
    description:
      'Debitis sint qui aut eaque deserunt aut. Autem qui perspiciatis recusandae qui eos. Itaque cumque itaque pariatur velit hic harum qui dolores. Quo autem saepe. Nihil fuga voluptatem vitae est excepturi.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/7870331612203003-Female_24.jpg',
    rating: {
      value: 3.7,
      reviews: 294,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: ['Academia 2', 'Academia 3', 'Crossfit 1', 'Crossfit 3', 'Estúdio 2'],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: ['Crossfit 2'],
      },
    ],
    schedules: [
      {
        weekday: 'tuesday',
        startTime: '07:00',
        endTime: '17:00',
      },
      {
        weekday: 'thursday',
        startTime: '09:00',
        endTime: '20:00',
      },
      {
        weekday: 'friday',
        startTime: '07:00',
        endTime: '17:00',
      },
      {
        weekday: 'saturday',
        startTime: '07:00',
        endTime: '18:00',
      },
    ],
    reviews: [
      {
        id: 'a44d346c-0d90-4c8f-a503-48ddc3a37f59',
        name: 'Jaylen Lakin',
        description:
          'Tempora dicta quis sapiente voluptatem. Vitae totam rem aut cupiditate non enim. Blanditiis et fuga.',
        rating: 5,
      },
      {
        id: '9cec2fb4-841a-400b-942c-73220bf3ce9f',
        name: 'Celia Jacobson',
        description: 'Eos sint dolor error. Qui eum quod et beatae qui. Architecto in asperiores.',
        rating: 4.6,
      },
      {
        id: '554512ac-dd60-41d9-b6e8-3a3098913e3e',
        name: 'Julianne Armstrong',
        description:
          'Dolorum unde soluta maiores maiores dicta beatae vel. Quia quia odit voluptatem labore maiores sint quis. Reprehenderit et ea et similique veniam est a.',
        rating: 3.5,
      },
      {
        id: '7d842ae2-3907-4b6e-8f3c-24d9dbde8b9e',
        name: 'Guy Wyman',
        description:
          'Tenetur consequatur est repellat eius est animi. Sit illo qui. Eius aut ullam aliquid et excepturi.',
        rating: 4.8,
      },
      {
        id: '5ca17999-a280-459f-acaf-a72cf306c365',
        name: 'Alexanne Boyle',
        description:
          'Dolore assumenda possimus quas est. Molestiae a beatae. Soluta inventore consequuntur in eos voluptatum dolore et.',
        rating: 4.6,
      },
    ],
  },
  {
    id: '7dde3d13-0524-4e88-a697-5ce3618a63d1',
    name: 'Freeda Cormier',
    description:
      'Hic praesentium qui sed error autem dolorum nobis est. Nostrum omnis magni enim omnis quia consequatur quos. Maiores veritatis et saepe unde quam mollitia et. Ratione officia vel. Delectus praesentium illum corrupti eveniet.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/35796344988312057-Male_17.jpg',
    rating: {
      value: 4.8,
      reviews: 68,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: false,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: ['Crossfit 1', 'Crossfit 2', 'Estúdio 2'],
      },
    ],
    schedules: [
      {
        weekday: 'tuesday',
        startTime: '08:00',
        endTime: '18:00',
      },
      {
        weekday: 'wednesday',
        startTime: '09:00',
        endTime: '18:00',
      },
      {
        weekday: 'saturday',
        startTime: '06:00',
        endTime: '20:00',
      },
    ],
    reviews: [
      {
        id: 'd5d59186-b56a-48fd-92b6-8abebad449e2',
        name: 'Fritz Schneider',
        description:
          'Quia quibusdam illum modi rerum repellat nihil vel ut officia. Enim ut laudantium numquam ut aspernatur sed magni dolorem. Non eveniet porro quo ut.',
        rating: 4.7,
      },
      {
        id: 'ebe84406-ec9b-4941-b032-e50c6f5e27c6',
        name: 'Melvin Weissnat',
        description:
          'Velit aut quos placeat et. Dolores tempore dolores in. Soluta tenetur amet voluptatum quis praesentium fugit doloribus. Rerum ex aliquid enim cupiditate. Cumque enim voluptas eligendi adipisci.',
        rating: 4.1,
      },
      {
        id: 'c7b0684e-f937-4275-b1bb-a66102488303',
        name: 'Anne Bogisich',
        description:
          'Libero impedit consequatur ipsum est. Enim unde qui. Inventore laboriosam unde. Nobis numquam fugiat.',
        rating: 4.9,
      },
      {
        id: 'b2f2dc5d-7f25-4251-8503-489c7187d3fa',
        name: 'Mallie Kling',
        description:
          'Similique aut cum cum et autem est. Sunt voluptatem optio tempore eum. Ducimus veritatis dolor nam consequuntur voluptate perspiciatis. Nemo culpa et cumque. Aut ut nobis ut dolores veniam. Aut laboriosam sunt aut officiis et distinctio velit numquam eaque.',
        rating: 4.7,
      },
      {
        id: '5a247d0c-b725-41d0-be98-de3cc99cd54e',
        name: 'Reilly Stroman',
        description:
          'Quo possimus ex. Beatae unde ut. Dolor doloremque totam occaecati magni eius fugiat non adipisci magnam. Quidem quam voluptatem illo architecto consectetur eligendi. Nihil quis ratione nobis ullam laborum.',
        rating: 4.3,
      },
      {
        id: 'ba7b295a-b5de-4278-9000-74c60238055d',
        name: 'Ophelia Schoen',
        description:
          'Libero amet fugit incidunt eaque quo eum eum. Amet voluptatem ea et totam quibusdam tempore maiores ipsum. Sapiente veritatis error commodi consequatur odio et aut debitis doloremque.',
        rating: 4.6,
      },
    ],
  },
  {
    id: 'fff2c892-e5bb-49de-8cc6-badc76175e8f',
    name: 'Kendall McKenzie',
    description:
      'Sunt quia aut nostrum perspiciatis quod iusto quam. Velit aliquid sequi. Quia enim illo optio similique vel hic similique. Autem exercitationem ut quo et modi similique.',
    img:
      'https://assetbucketdevelopment.blob.core.windows.net/testing/5682418048070823-Female_22.jpg',
    rating: {
      value: 3.1,
      reviews: 27,
    },
    contact: {
      email: 'email@email.com',
      whatsapp: '51999611696',
    },
    isFavorite: true,
    locations: [
      {
        city: 'Campo Bom',
        state: 'RS',
        places: ['Academia 1', 'Academia 2', 'Academia 3', 'Crossfit 1'],
      },
      {
        city: 'Canoas',
        state: 'RS',
        places: ['Academia 3'],
      },
      {
        city: 'Dois Irmãos',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
        ],
      },
      {
        city: 'Novo Hamburgo',
        state: 'RS',
        places: ['Academia 2', 'Academia 3', 'Crossfit 2', 'Crossfit 3', 'Estúdio 1'],
      },
      {
        city: 'Porto Alegre',
        state: 'RS',
        places: ['Estúdio 1', 'Estúdio 2'],
      },
      {
        city: 'Sapiranga',
        state: 'RS',
        places: ['Academia 2', 'Crossfit 3', 'Estúdio 1'],
      },
      {
        city: 'São Leopoldo',
        state: 'RS',
        places: [
          'Academia 1',
          'Academia 2',
          'Academia 3',
          'Crossfit 1',
          'Crossfit 2',
          'Crossfit 3',
          'Estúdio 1',
          'Estúdio 2',
          'Estúdio 3',
        ],
      },
    ],
    schedules: [
      {
        weekday: 'tuesday',
        startTime: '10:00',
        endTime: '20:00',
      },
      {
        weekday: 'thursday',
        startTime: '08:00',
        endTime: '18:00',
      },
      {
        weekday: 'friday',
        startTime: '06:00',
        endTime: '20:00',
      },
    ],
    reviews: [
      {
        id: '0a1b7065-b683-40a8-88eb-5115631fc450',
        name: 'Fausto Denesik',
        description:
          'Aut voluptate sunt nemo quia quas deleniti. Tenetur quia dolor est ducimus amet consequuntur tenetur quod fuga. Assumenda amet soluta exercitationem velit ipsa aut ea. Sed qui pariatur quibusdam exercitationem voluptas.',
        rating: 4.3,
      },
      {
        id: 'f1796de8-f549-430c-a124-bd6111312877',
        name: 'Nelda Littel',
        description:
          'Dignissimos et iure eius. Ut aspernatur sunt dolorum voluptatum delectus aut. Tempora deserunt est modi eos et quis nesciunt fuga architecto. Rerum fugiat nesciunt non at.',
        rating: 4.3,
      },
      {
        id: 'e7659a3d-dd4a-4115-9a0b-58357ca91f53',
        name: 'Perry Olson',
        description:
          'Fuga aut non amet culpa. Commodi omnis nesciunt ab illum non. Fuga dicta perspiciatis dolorum rerum. Doloremque rerum quia est deleniti quis. Aut aliquam earum numquam.',
        rating: 4.9,
      },
      {
        id: 'fbbf0911-da03-44c5-96ee-965322176cb0',
        name: 'Milo Muller',
        description:
          'Id expedita in ut. Commodi et architecto voluptate vero voluptatem repudiandae et impedit. Et vel quam eum ut iste. Dolorum possimus impedit ipsam eum eius occaecati assumenda eos.',
        rating: 3.4,
      },
      {
        id: '604bcf4e-be3d-4d22-aed8-05a0d6463ac8',
        name: 'Veronica Daugherty',
        description:
          'Nostrum cupiditate ea voluptatem minus ducimus. Debitis modi odio amet quia eligendi unde voluptatem harum. Laborum dolores dolor cumque.',
        rating: 3.4,
      },
      {
        id: '5f269a63-3cb1-4196-b115-57f82d1c8916',
        name: 'Nathanael Abernathy',
        description:
          'Ipsa perferendis ea atque non quidem quas consequatur neque. Eveniet voluptas ut est rerum. Ea dolor et est explicabo ad suscipit non. Ab nostrum aperiam. Provident officia magni quia. Minima officia rerum rerum similique fuga quasi ut incidunt.',
        rating: 3.6,
      },
      {
        id: '0341b92e-d1c9-43fb-97f2-6ffd4e3b81da',
        name: 'Creola Thiel',
        description:
          'Laborum eligendi et placeat quasi atque cum mollitia qui quia. Libero architecto adipisci et assumenda et. Amet soluta exercitationem dolores. Dolorum est reiciendis temporibus reiciendis error eum ut quia rem. Cum necessitatibus mollitia veniam. Libero voluptates minus corporis nemo earum assumenda ut neque.',
        rating: 4.9,
      },
    ],
  },
];
