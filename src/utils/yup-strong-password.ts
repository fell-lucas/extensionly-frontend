import * as yup from 'yup';
import { BaseSchema, StringSchema } from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';

// Original source code by Kyriacos Nicola https://github.com/knicola/yup-password

const p = function (word: string, num: number) {
  return num === 1 ? word : `${word}s`;
};

const isNullOrUndefined = function (value: string) {
  return value === null || value === undefined;
};

yup.addMethod<StringSchema>(yup.string, 'minLowercase', function (length: number = 1, message: string) {
  const msg = message || '${path} must contain at least ${length} lowercase ' + p('letter', length);
  return this.test({
    name: 'minLowercase',
    exclusive: true,
    message: msg,
    params: { length },
    test(value) {
      return isNullOrUndefined(value!) || (value!.match(/[a-z]/g) || []).length >= length;
    },
  });
});

yup.addMethod<StringSchema>(yup.string, 'minUppercase', function (length: number = 1, message: string) {
  const msg = message || '${path} must contain at least ${length} uppercase ' + p('letter', length);
  return this.test({
    name: 'minUppercase',
    exclusive: true,
    message: msg,
    params: { length },
    test(value) {
      return isNullOrUndefined(value!) || (value!.match(/[A-Z]/g) || []).length >= length;
    },
  });
});

yup.addMethod<StringSchema>(yup.string, 'minNumbers', function (length: number = 1, message: string) {
  const msg = message || '${path} must contain at least ${length} ' + p('number', length);
  return this.test({
    name: 'minNumbers',
    exclusive: true,
    message: msg,
    params: { length },
    test(value) {
      return isNullOrUndefined(value!) || (value!.match(/[0-9]/g) || []).length >= length;
    },
  });
});

yup.addMethod<StringSchema>(yup.string, 'minSymbols', function (length: number = 1, message: string) {
  const msg = message || '${path} must contain at least ${length} ' + p('symbol', length);
  return this.test({
    name: 'minSymbols',
    exclusive: true,
    message: msg,
    params: { length },
    test(value) {
      return isNullOrUndefined(value!) || (value!.match(/[^a-zA-Z0-9\s]/g) || []).length >= length;
    },
  });
});

yup.addMethod<StringSchema>(yup.string, 'minRepeating', function (length: number = 2, message: string) {
  const msg = message || '${path} must not contain sequences of more than ${length} repeated ' + p('character', length);
  return this.test({
    name: 'minRepeating',
    exclusive: true,
    message: msg,
    params: { length: length },
    test(value) {
      return isNullOrUndefined(value!) || !new RegExp(`(.)\\1{${length},}`).test(value!);
    },
  });
});

yup.addMethod<StringSchema>(yup.string, 'minWords', function (length: number = 2, message: string) {
  const msg = message || '${path} must contain at least ${length} ' + p('word', length);
  const rx = new RegExp('[a-zA-Z0-9]');
  return this.test({
    name: 'minWords',
    exclusive: true,
    message: msg,
    params: { length },
    test(value) {
      return isNullOrUndefined(value!) || value!.split(' ').filter((v) => !!v && rx.test(v)).length >= length;
    },
  });
});

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    minWords(length: number, message: string): StringSchema<TType, TContext>;
    minRepeating(length: number, message: string): StringSchema<TType, TContext>;
    minSymbols(length: number, message: string): StringSchema<TType, TContext>;
    minNumbers(length: number, message: string): StringSchema<TType, TContext>;
    minUppercase(length: number, message: string): StringSchema<TType, TContext>;
    minLowercase(length: number, message: string): StringSchema<TType, TContext>;
  }
}

export default yup;
