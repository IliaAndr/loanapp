import { test, expect } from '@playwright/test';
import {LoanPage} from "./pages/loan-page";

let loanPage: LoanPage

test.beforeEach(async ({page}) => {
  loanPage = new LoanPage(page);
  loanPage.openLoanPage()
})