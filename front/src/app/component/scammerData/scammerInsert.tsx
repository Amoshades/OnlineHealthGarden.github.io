import { Icon } from '@iconify/react/dist/iconify.js'
import axios, { formToJSON } from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ScammerInsert() {

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [product, setProduct] = useState('')
    const [thaiID, setThaiID] = useState('')
    const [bankAccNumber, setBankAccNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [transferAmount, setTransferAmount] = useState('')
    const [dateTransfer, setDateTransfer] = useState('')
    const [nationality, setNationality] = useState('')
    const [country, setCountry] = useState('')
    const [additionalInformation, setAdditionalInformation] = useState('')
    const [evidenceFile, setEvidenceFile] = useState<File | null>();
    const [noticeFile, setNoticeFile] = useState<File | null>();
    const router = useRouter();
    const postData = async() => {
        console.log('posting data please wait')
        const headers = {
            'Content-Type': 'applioation/json'
        };
        // const formDataEvidence = new FormData();
        // formDataEvidence.append('file', evidenceFile)
        // const formDataNotice = new FormData();
        // formDataNotice.append('file', noticeFile)
        const formData = new FormData();
        const data = {
            "firstName": "string",
            "lastName": "string",
            "gender": 99,
            "product": "string",
            "thId": "",
            "bankAccNumber": "string",
            "bankName": "string",
            "transferAmount": 0,
            "dateTransfer": "string",
            "evidencePhoto": "",
            "policeNotice": "",
            "nationality": "",
            "country": "ประเทศไทย",
            "additionalInformation": "",
            "dangerLevel": 5,
            "avatarPhoto": "string",
            "tags": "[]",
            "age": 0
        }
        // for (const key in data) {
        //     if (data.hasOwnProperty(key)) {
        //       formData.append(key, data[key]);
        //     }
        //   }
        const response = await axios.post(`https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/register-scammer`, data, { headers: {
            "Content-Type": 'application/json'
        }});
        console.log(response.data)
        // const responseEvidence = await axios.post('https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/add-scammer-picture', formDataEvidence, {
        //     headers
        // })
        // const responseNotice = await axios.post('https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/register-scammer-picture', formDataNotice, {
        //     headers
        // })
        console.log('sent data.')
        if (response.status == 200) {
            console.log('Register successful:', response.data);
            router.push('/');
        }
    }

    return (
        <div className='w-full min-h-screen h-auto'>
            <div className='w-[80%] h-auto mx-auto bg-slate-600 rounded-xl mb-32 font-Poppins p-[5%]'>
                <p className=' font-bold text-3xl text-white'>แจ้งผู้ขายที่ควรระวัง</p>
                <div className=' grid grid-cols-2 grid-flow-row gap-8 mt-10'>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อคนขาย </p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อคนขาย...' onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>นามสกุล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='นามสกุลคนขาย...' onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เพศ</p>
                        <select className="select select-ghost w-full focus:bg-secondary-800 focus:text-white text-slate-400 text-base" onChange={(e) => setGender(e.target.value)}>
                            <option disabled selected>เพศ</option>
                            <option value={2}>หญิง</option>
                            <option value={1}>ชาย</option>
                            <option value={99}>อื่นๆ</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>สินค้าที่โกง</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รายละเอียดเพิ่มเติม...' onChange={(e) => setProduct(e.target.value)} />
                    </div>
                    <div className='col-span-2 w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เลขบัตรประชาชนคนขาย </p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เลขบัตรประชาชนคนขาย...' onChange={(e) => setThaiID(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เลขบัญชี</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เลขบัญชี...' onChange={(e) => setBankAccNumber(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ธนาคาร</p>
                        <select className="select select-ghost w-full focus:bg-secondary-800 focus:text-white text-slate-400 text-base " onChange={(e) => setBankName(e.target.value)}>
                            <option disabled selected>เลือกธนาคาร</option>
                            <option>หญิง</option>
                            <option>ชาย</option>
                            <option>อื่นๆ</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ยอดที่โอน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ยอดที่โอน...' onChange={(e) => setTransferAmount(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>วันโอนเงิน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='วันที่โอนเงิน...' onChange={(e) => setDateTransfer(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รูปหลักฐาน</p>
                        <input id='evidencePhoto' type="file" className="file-input file-input-bordered file-input-secondary w-full bg-slate-500 " />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ใบแจ้งความ</p>
                        <input id='policeNotice' type="file" className="file-input file-input-bordered file-input-secondary w-full bg-slate-500 " />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>สัญชาติ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='สัญชาติของคุณ...' onChange={(e) => setNationality(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ประเทศ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ประเทศ...' onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className='col-span-2 row-span-2 w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รายละเอียดเพิ่มเติม</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รายละเอียดเพิ่มเติม...' onChange={(e) => setAdditionalInformation(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins mt-5'>
                        <button className='btn btn-primary w-[30%] text-white' onClick={postData}>โพสต์ประกาศ</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
