import React from "react";
import "./Front.css";


function Front() {

  return (
    <>
      <div id="back">
        <div id="B" className="p-3 box col-md-4 card">
          <div class="toplayer">
            <div class="box-header with-border">
              <div class="text-center mb-2 mt-5">
                <img
                  alt="PUP"
                  class="img-circle"
                  src="https://cdn.pup.edu.ph/img/symbols/logo88x88.png"
                />
              </div>
              <h2 className="but">
                <strong style={{ color: "#4C0001" }}>PUP Lopez Quezon </strong>
                <h6>Branch</h6>
              </h2>
            </div>
            <div class="box-body login-box-msg">
              <section id="introduction">
                <p>
                  <i class="fas fa-arrow-down"></i> Please click or tap your
                  destination.
                </p>
              </section>
              <div class="row">
                <div class="col-12">
                  <a
                    className="d-grid gap-2 btn btn-lg btn-primary btn-block btn-flat"
                    href="/login"
                  >
                    Student
                  </a>
                  <br />
                  <a
                    className="d-grid gap-2 btn btn-lg btn-danger btn-block btn-flat"
                    href="/LoginAdmin"
                  >
                    Admin
                  </a>
                </div>
              </div>
              <p>
                By using this service, you understood and agree to the PUP
                Online Services{" "}
                <a
                  href="https://www.pup.edu.ph/terms"
                  target="_blank"
                  class="text-primary"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  href="https://www.pup.edu.ph/privacy"
                  target="_blank"
                  class="text-primary"
                >
                  Privacy Statement
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
