/*
============================================
; Title: In-N-Out Books
; Author: Mike Goldberg
; Date: 08/27/2020
; Modified By: Mike Goldberg
; Description: Angular Application using API
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
