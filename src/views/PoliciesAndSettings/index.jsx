import React, { useState } from "react";
import { Form } from "react-bootstrap";
import * as Icons from "tabler-icons-react";

const PoliciesAndSettings = () => {
  const [isCreditCardChecked, setIsCreditCardChecked] = useState(false);
  const [
    isYesSelectedInRequireAnyDeposits,
    setIsYesSelectedInRequireAnyDeposits,
  ] = useState(false);
  console.log(isCreditCardChecked);
  return (
    <section className="p-4">
      <form action="" className="d-flex flex-column gap-4">
        {/* 1 */}
        <div className="border p-3 rounded d-flex flex-column gap-3">
          <p
            className="text-black"
            style={{ fontSize: "18px", fontWeight: 400 }}
          >
            Which languages are spoken at your property?
          </p>
          <div className="d-flex gap-2">
            {/* Should get the value from the select language text field and set to a state and render here by mapping */}
            <p
              className="d-flex justify-content-around align-content-center border rounded-pill"
              style={{
                width: "74px",
                fontSize: "12px",
                padding: "2px 0",
                cursor: "pointer",
              }}
            >
              <span>English</span>
              <span>
                <Icons.X width={12} height={12} />
              </span>
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px" }}>Add a language</p>
            <div
              className="d-flex align-items-center gap-2 border rounded p-1 w-50"
              style={{ minWidth: "250px" }}
            >
              <Icons.Search width={16} height={16} className="border-right" />
              <input
                type="text"
                placeholder="Search"
                className="border-0 w-100"
                style={{ outline: "none" }}
              />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="border p-3 rounded d-flex flex-column gap-3">
          <p
            className="text-black"
            style={{ fontSize: "18px", fontWeight: 400 }}
          >
            Which languages are spoken at your property?
          </p>
          <p>Type of cards you accept: </p>
          <Form.Group
            className="mb-3"
            id="formGridCheckbox"
            style={{ fontSize: "16px" }}
          >
            <Form.Check
              type="checkbox"
              label="Credit / Debit Cards"
              onChange={(e) => {
                setIsCreditCardChecked(e.target.checked);
              }}
            />
            {!isCreditCardChecked ? (
              <Form.Check type="checkbox" label="Cash" />
            ) : (
              <Form.Group
                className="mb-3"
                id="formGridCheckbox"
                style={{ fontSize: "16px" }}
              >
                <Form.Check type="checkbox" label="Debit Cards" />
                <Form.Check type="checkbox" label="JCB International" />
                <Form.Check type="checkbox" label="Visa" />
                <Form.Check type="checkbox" label="Discover" />
                <Form.Check type="checkbox" label="MasterCard" />
                <Form.Check type="checkbox" label="Carte Blanche" />
                <Form.Check type="checkbox" label="American Express" />
                <Form.Check type="checkbox" label="UnionPay" />
                <Form.Check type="checkbox" label="Diners Club" />

                <p className="mt-3">Other Settings</p>
                <Form.Check
                  type="checkbox"
                  label="Installment payments offered at front desk (for locals only)"
                />
                <Form.Check type="checkbox" label="Cash" />
              </Form.Group>
            )}
          </Form.Group>
        </div>

        {/* 3 */}
        <div className="border p-3 rounded d-flex flex-column gap-1">
          <p className="text-black">Do you require any deposits ?</p>
          <div className="d-flex gap-2">
            <p
              className="py-1 px-4 border rounded-pill"
              style={
                isYesSelectedInRequireAnyDeposits
                  ? {
                      cursor: "pointer",
                      fontWeight: 400,
                      backgroundColor: "#000000",
                      color: "white",
                    }
                  : { cursor: "pointer", fontWeight: 400 }
              }
              onClick={() => {
                setIsYesSelectedInRequireAnyDeposits(true);
              }}
            >
              Yes
            </p>{" "}
            <p
              className="py-1 px-4 border rounded-pill"
              style={
                isYesSelectedInRequireAnyDeposits
                  ? {
                      cursor: "pointer",
                      fontWeight: 400,
                    }
                  : {
                      cursor: "pointer",
                      fontWeight: 400,
                      backgroundColor: "#000000",
                      color: "white",
                    }
              }
              onClick={() => {
                setIsYesSelectedInRequireAnyDeposits(false);
              }}
            >
              No
            </p>
          </div>
          <div></div>
        </div>
      </form>
    </section>
  );
};

export default PoliciesAndSettings;
