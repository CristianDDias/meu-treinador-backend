- Classes Factory (`TrainerFactory`) precisam gerar IDs de acordo com os valores aceitos pelo MongoDB (BSON UUID).
  - Utilizar `mongo.ObjectId().toHexString()`.

```typescript
import { mongo } from 'mongoose';

new mongo.ObjectId().toHexString();
```

---

- Criar Value Objects para propriedades da entidade `Trainer`.

---

- Valores obrigatórios para criar/registrar um Trainer.
  - Pelo menos 1 contato.
  - Pelo menos 1 cidade.

```json
{
  "name": "",
  "description": "",
  "image": "",
  "details": {
    "contacts": { "email": "", "whatsapp": "" },
    "locations": {
      "cities": [{ "city": "", "state": "" }]
    }
  }
}
```
