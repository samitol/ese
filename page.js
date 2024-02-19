import React from "react";

export default function LoginPage() {
  const InputField = ({ label, type, id, name }) => (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2">
        {label}:
      </label>
      <br />
      <input
        type={type}
        id={id}
        name={name}
        className="px-2 py-1 w-full box-border border border-black rounded"
      />
    </div>
  );

  const Button = ({ onClick, text }) => (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
    >
      {text}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white p-10 border-2 border-black rounded-lg w-full md:w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          <span className="font-bold">Kirjaudu sisään</span>
        </h1>
        <form className="text-center mb-6">
          <InputField label="Sähköposti" type="email" id="email" name="email" />
          <InputField
            label="Salasana"
            type="password"
            id="password"
            name="password"
          />
          <Button text="Kirjaudu sisään" />
        </form>
        <div className="text-center">
          <a href="#" className="text-blue-500 underline">
            Ei vielä tunnusta? Rekisteröidy tästä.
          </a>
          <br />
          <a href="#" className="text-gray-600 underline">
            Unohditko salasanasi?
          </a>
        </div>
      </div>
    </div>
  );
}
