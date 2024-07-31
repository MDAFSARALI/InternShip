import React, { useState } from 'react';
import { ChakraProvider, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Image } from '@chakra-ui/react';

const Form = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [file, setFile] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [fileError, setFileError] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleMobileInput = (e) => setMobile(e.target.value);
  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== 'image/png') {
        setFileError('Only .png files are allowed.');
        setFile('');
        setImageUrl('');
        return;
      }
      if (selectedFile.size > 150000) { // 150kb
        setFileError('File size must be less than 150kb.');
        setFile('');
        setImageUrl('');
        return;
      }
      setFile(selectedFile);
      setFileError('');
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAadhaar = (e) => {
    let value = e.target.value.replace(/\s+/g, ''); // Remove all spaces
    if (value.length > 12) {
      value = value.slice(0, 12); // Limit to 12 digits
    }
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
    setAadhaar(formattedValue);
  };

  const handleReset = () => {
    setName('');
    setMobile('');
    setFile('');
    setAadhaar('');
    setImageUrl('');
    setFileError('');
  };

  const isErrorName = name === '';
  const isErrorMobile = mobile === '';
  const isErrorAadhaar = aadhaar === '';
  const isFile = file === '';

  return (
    <div>
      <ChakraProvider>
        <div className='container'>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form pl-3">
                <h6 className='pt-3'>Students Registration Form</h6><hr />
                <form>
                  <FormControl isInvalid={isErrorName}>
                    <FormLabel fontSize={'15px'}>Name <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='text'
                      name='name'
                      placeholder='Enter Your Name :'
                      value={name} 
                      onChange={handleNameChange} 
                      onPaste={(e) => e.preventDefault()}
                      onCopy={(e) => e.preventDefault()}
                    />
                    {!isErrorName ? (
                      <FormHelperText>{name}</FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isErrorMobile}>
                    <FormLabel fontSize={'15px'} mt={4}>Mobile No <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='number'
                      name='number'
                      placeholder='Enter Your Mobile No :'
                      value={mobile} 
                      onChange={handleMobileInput}
                      onPaste={(e) => e.preventDefault()}
                      onCopy={(e) => e.preventDefault()}
                    />
                    {!isErrorMobile ? (
                      <FormHelperText>{mobile}</FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isErrorAadhaar}>
                    <FormLabel fontSize={'15px'} mt={4}>Aadhaar No <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='text'
                      name='aadhaar'
                      placeholder='Enter Your Aadhaar :'
                      value={aadhaar} 
                      onChange={handleAadhaar} 
                      maxLength="14" // 12 digits + 2 spaces
                      onPaste={(e) => e.preventDefault()}
                      onCopy={(e) => e.preventDefault()}
                    />
                    {!isErrorAadhaar ? (
                      <FormHelperText>{aadhaar}</FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>This Field is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isFile || fileError}>
                    <FormLabel fontSize={'15px'} mt={4}>Upload Your Image <sup><span style={{color:"red"}}>*</span></sup></FormLabel>
                    <Input 
                      type='file'
                      name='file'
                      placeholder='Choose the Image:'
                      pt={1}
                      onChange={handleFile}
                      accept=".png"
                    />
                    {!isFile && !fileError ? (
                      <FormHelperText><span style={{color:'green'}}>Uploaded</span></FormHelperText>
                    ) : (
                      <FormErrorMessage ml={1}>{fileError || "This Field is required."}</FormErrorMessage>
                    )}
                  </FormControl>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-block float-right">
                        <Button 
                          colorScheme='red' 
                          mr={'5px'} 
                          style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} 
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                        <Button 
                          colorScheme='blue' 
                          style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {imageUrl && (
            <footer className='pt-3'>
              <Box textAlign="center" mt={4}>
                <Image src={imageUrl} alt="Uploaded file" boxSize="150px" />
              </Box>
            </footer>
          )}
        </div>
      </ChakraProvider>
    </div>
  );
}

export default Form;
