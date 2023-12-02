var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var add_fix_btn = document.getElementById('addFixBtn');
var table_body_element = document.getElementById('fixedDepositTableBody');
var update_interest_btn = document.getElementById('updateInterestBtn');
var rate_input_element = document.getElementById('newInterestRate');
var Account = /** @class */ (function () {
    function Account(owner_name, fixed_amount, interest_rate, annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = interest_rate;
        this.annual_interest = annual_interest;
    }
    Account.prototype.updateRate = function (rate) {
        this.interest_rate = rate;
        this.annual_interest = (this.fixed_amount * rate) / 100;
    };
    Account.prototype.getInterestRate = function () {
        return this.interest_rate;
    };
    Account.prototype.getAnnualInterest = function () {
        return this.annual_interest;
    };
    return Account;
}());
var accounts = [];
var rate = 12.5;
add_fix_btn.addEventListener('click', function () {
    var name = owner_name_input_element.value;
    var fixed_amount = fixed_amount_input_element.value ? +fixed_amount_input_element.value : 0;
    var annual_interest = (fixed_amount * rate) / 100;
    var account = new Account(name, fixed_amount, rate, annual_interest);
    accounts.push(account);
    updateTable();
});
update_interest_btn.addEventListener('click', function () {
    var new_rate = rate_input_element.value;
    if (new_rate) {
        rate = +new_rate;
        accounts.map(function (account) {
            account.updateRate(rate);
        });
        updateTable();
    }
});
var updateTable = function () {
    table_body_element.innerHTML = '';
    accounts.map(function (account) {
        var row_element = document.createElement('tr');
        row_element.innerHTML = "\n              <td>".concat(account.owner_name, "</td>\n              <td>").concat(account.fixed_amount, "</td>\n              <td>").concat(account.getInterestRate(), "</td>\n              <td>").concat(account.getAnnualInterest(), "</td>\n        ");
        table_body_element.appendChild(row_element);
    });
};
//--------------------- 2 ---------------------------------------------------------
// const arr: { id: number, name: string, fixed_amount: number, interest_rate: number, annual_interest: number }[] = [];
//
// let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
// let fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
// let rate_input_element = document.getElementById('newInterestRate') as HTMLInputElement;
// let table_body_element = document.getElementById('fixedDepositTableBody');
//
// document.getElementById('addFixBtn').addEventListener('click', () => {
//     let name = owner_name_input_element.value;
//     let fixed_amount = +fixed_amount_input_element.value;
//
//     arr.push({
//         id: arr.length,
//         name,
//         fixed_amount,
//         interest_rate: 0,
//         annual_interest: 0
//     });
//     refreshTable();
// });
// document.getElementById('updateInterestBtn').addEventListener('click', () => {
//     let rate = rate_input_element.value ? +rate_input_element.value : 0;
//     arr.forEach(obj => {
//         obj.interest_rate = rate;
//         obj.annual_interest = rate == 0 ? rate : (obj.fixed_amount * rate / 100 * 12);
//     })
//     refreshTable();
// });
//
// const refreshTable = () => {
//     table_body_element.innerHTML = '';
//     let rows = '';
//     arr.forEach(obj => {
//         rows += `
//             <tr id=${obj.id}>
//               <td>${obj.name}</td>
//               <td>${obj.fixed_amount}</td>
//               <td>${obj.interest_rate}</td>
//               <td>${obj.annual_interest}</td>
//             </tr>
//         `;
//     });
//     table_body_element.innerHTML = rows;
// }
//--------------------- 3 ---------------------------------------------------------
// const arr: { id: number, name: string, fixedAmount: number }[] = [];
//
// let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
// let fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
// let rate_input_element = document.getElementById('newInterestRate') as HTMLInputElement;
// let table_body_element = document.getElementById('fixedDepositTableBody');
//
// document.getElementById('addFixBtn').addEventListener('click', () => {
//
//     let id = arr.length;
//     let ownerName = owner_name_input_element.value;
//     let fixedAmount = +fixed_amount_input_element.value;
//
//     arr.push({
//         id: id,
//         name: ownerName,
//         fixedAmount
//     });
//     refreshTable();
// });
// document.getElementById('updateInterestBtn').addEventListener('click', () => {
//     refreshTable();
// });
//
// const refreshTable = () => {
//     let rate = rate_input_element.value ? +rate_input_element.value : 0;
//     table_body_element.innerHTML = '';
//     let rows = '';
//     arr.forEach(obj => {
//         rows += `
//             <tr id=${obj.id}>
//               <td>${obj.name}</td>
//               <td>${obj.fixedAmount}</td>
//               <td>${rate}</td>
//               <td>${rate == 0 ? rate : (obj.fixedAmount * rate / 100 * 12)}</td>
//             </tr>
//         `;
//     });
//     table_body_element.innerHTML = rows;
// }
