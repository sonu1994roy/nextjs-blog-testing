import React, { useState,useEffect  } from "react";
import FeatherIcon from "feather-icons-react";
import { IconButton, Input, Box, Drawer } from "@mui/material";
import Link from 'next/link'

const SearchDD = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };
  // ......
  const [sechShow, setsechShow] = useState(false)
  const [serch, setserch] = useState([])
  const [msg, setmsg] = useState("")
  const [dataSerch, setdataSerch] = useState([])
  useEffect(() => {
      const getItems = async () => {
          const res = await fetch(`http://localhost:3000/api/getitem`)
          const data = await res.json()
          setserch(data.itms)
      };
      getItems()
  }, [])


  const serchValue = (text) => {
      setsechShow(true)
      if (text == "") {
          setsechShow(false)
          // setdataSerch([])
      } else {

          const regex = new RegExp(`${text}`, "gi");
          let match = serch.filter((itms) => {
              return itms.title.match(regex) || itms.slug.match(regex)
          })
          setdataSerch(match);
          // if (dataSerch==undefined || dataSerch==['']) {
          //     setmsg("Result Not Found")
          // }
      }
  };

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <FeatherIcon icon="search" width="20" height="20" />
      </IconButton>
      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input onChange={(e) => serchValue(e.target.value)} placeholder="Search here" aria-label="description" fullWidth />
          
          <Box
            sx={{
              ml: "auto",

            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
              onClick={handleDrawerClose2}
            >
             
            </IconButton>
          </Box>
        </Box>
     
        {/* <br/>
        <span><Box display="flex" alignItems="center">
          <Input placeholder="Search here" aria-label="description" fullWidth />
          
         
        </Box></span> */}
    {sechShow &&
                
                    <ul className="list-group">
                        <danger className='test-red mt-12'>{msg}</danger>
                        {dataSerch && dataSerch.map((data, index) => {

                            return (
                                <li key={index} className='list-group-item'>
                                    <a href={`/series/${data.slug}`} className='text-dark '>{data.slug.slice(0, 100)}..<br/>
                                    {/* <small>{data.slug.slice(0, 100)}..</small> */}
                                    </a>
                                
                                  </li>
                            )

                        })}
                    </ul>
             
            }
      </Drawer>
      
    </>
  );
};

export default SearchDD;
