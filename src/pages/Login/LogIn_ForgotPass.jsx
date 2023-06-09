import { AiOutlineArrowLeft } from "react-icons/ai";
import Btn_Primary from "../../components/Btn_Primary";
import { useState } from "react";
import { useForgetPasswordMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";
import ChangePass from "./ChangePass";

const LogIn_ForgotPass = ({ setIsConfirmPass }) => {
  const [UserEmail, setUserEmail] = useState("");
  const [UserCode, setUserCode] = useState("");
  const [isFinalStage, setIsFinalStage] = useState(false);

  const [IsGotOTP, setIsGotOTP] = useState(false);

  const [ForgetPassword, { isLoading }] = useForgetPasswordMutation();

  return (
    <>
      {isFinalStage ? (
        <ChangePass UserCode={UserCode} UserEmail={UserEmail} />
      ) : (
        <div className=" p-14">
          <div className="flex justify-between">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsConfirmPass(false);
              }}
            >
              <AiOutlineArrowLeft className="text-Shades text-3xl font-bold" />
            </span>
            <p className=" text-Shades text-2xl font-bold">Go Back </p>
          </div>

          <form className="mt-20">
            <div className="mt-10">
              <label
                htmlFor="NewPassCode"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="forgetPassEmail"
                placeholder="**********"
                className="form-input"
                onChange={(email) => {
                  setUserEmail(email.target.value);
                }}
              />
            </div>

            {IsGotOTP && (
              <div className="mt-10">
                <label
                  htmlFor="NewPassCode"
                  className=" block mb-4 text-sm font-medium text-gray-900"
                >
                  Code
                </label>
                <input
                  type="text"
                  id="OTPcode"
                  value={UserCode}
                  placeholder="OTP  Code From your Email"
                  className="form-input"
                  required
                  onChange={(e) => {
                    setUserCode(e.target.value);
                  }}
                />
              </div>
            )}
            {!IsGotOTP ? (
              <Btn_Primary
                className={"w-full mt-7 pt-3"}
                onClick={async () => {
                  try {
                    if (UserEmail) {
                      let go = await ForgetPassword({
                        email: UserEmail,
                      });
                      if (go?.data.status == "success") {
                        setIsGotOTP(true);
                      }
                    }
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
              >
                {isLoading ? "Loading..." : "Send Code"}
              </Btn_Primary>
            ) : (
              <Btn_Primary
                className={"w-full mt-7 pt-3"}
                onClick={() => {
                  console.log(UserCode);
                  if (UserCode) {
                    setIsFinalStage(true);
                  } else {
                    alert("Please Enter the Code");
                    console.log("Please Enter the Code");
                  }
                }}
              >
                Change Password
              </Btn_Primary>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn_ForgotPass;
