'use client'

import { useState } from "react"
import { useChains } from "wagmi"
import { Select } from 'antd';
import ChainCard from '../components/ChainCard'


export default function Page() {
    const chains = useChains()

    console.log(chains)

    const [selectedId, setSelectedId] = useState();
    const selectedChain = chains.find(t => t.id === selectedId) || null;

    return (
        <div>
            <div className="flex flex-row justify-center items-center">
                请选择一条链: <Select value={selectedId} onChange={setSelectedId} className="mx-2 w-40" placeholder="链" options={chains.map(t => ({ label: t.name, value: t.id }))} />
            </div>
            {selectedChain && <ChainCard chain={selectedChain} />}
        </div>
    )

}