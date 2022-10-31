export const filesUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningun archivo a subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dynp9xj2p/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-learn");
  formData.append("file", file);

  try {
    const res = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    // console.log(res);
    if (res === "ok") throw new Error("No se pudo subir imagen");
    const cloudResp = await res.json();
    // console.log(cloudResp);
    return cloudResp;

  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
