import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState([
    {
      name: '',
      class: '',
      file: '',
    },
    {
      name: '',
      class: '',
      file: '',
    },
  ]);

  const setFormFunc = (e, index) => {
    const vals = form.map((el, i) => {
      if (i === index) {
        return {
          ...el,
          [e.target.name]:
            e.target.name === 'file' ? e.target.files[0] : e.target.value,
        };
      } else {
        return el;
      }
    });
    setForm(vals);
  };

  const addMore = () => {
    setForm((prev) => [...prev, { name: '', class: '', file: '' }]);
  };

  const deleteFunc = (index) => {
    const val = form.filter((e, i) => i !== index);
    setForm(val);
  };
  return (
    <div>
      <section className="flex flex-col gap-y-3 px-3">
        {form.map((val, index) => (
          <div key={index} className="flex gap-x-3">
            <input
              type="text"
              name="name"
              value={val.name}
              placeholder="name"
              className="border-2"
              onChange={(e) => {
                setFormFunc(e, index);
              }}
            />
            <input
              type="text"
              className="border-2"
              placeholder="class"
              name="class"
              value={val.class}
              onChange={(e) => {
                setFormFunc(e, index);
              }}
            />
            <input
              type="file"
              className="border-2"
              placeholder="class"
              name="file"
              onChange={(e) => {
                setFormFunc(e, index);
              }}
            />

            <button
              className="text-red-500 border px-3 py-1 rounded-md"
              onClick={() => deleteFunc(index)}
            >
              delete
            </button>
          </div>
        ))}
        <button className="px-3 py-2 bg-cyan-200 rounded-sm" onClick={addMore}>
          Add more
        </button>
      </section>
    </div>
  );
};

export default Form;
