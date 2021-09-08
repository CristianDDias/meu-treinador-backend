interface GuardResult {
  error: boolean;
  message?: string;
}

interface GuardField {
  value: any;
  key: string;
}

export class Guard {
  static againstEmpty({ value, key }: GuardField): GuardResult {
    if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
      return { error: true, message: `"${key}" is empty` };
    }
    return { error: false };
  }

  static againstEmptyBulk(fields: GuardField[]): GuardResult {
    for (const field of fields) {
      const result = Guard.againstEmpty(field);
      if (result.error) {
        return result;
      }
    }
    return { error: false };
  }
}
