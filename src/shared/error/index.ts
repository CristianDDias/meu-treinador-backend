export class BusinessError extends Error {
  title: string;
  constructor(message?: string) {
    super(message);
    this.title = 'Business error';
  }
}

export class UnauthorizedError extends Error {
  title: string;
  constructor(message?: string) {
    super(message);
    this.title = 'Unauthorized error';
  }
}

export class ForbiddenError extends Error {
  title: string;
  constructor(message?: string) {
    super(message);
    this.title = 'Forbidden error';
  }
}

export class NotFoundError extends Error {
  title: string;
  constructor(message?: string) {
    super(message);
    this.title = 'Not found error';
  }
}
