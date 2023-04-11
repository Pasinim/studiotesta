import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../img/logo_noback.png'
import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/20/solid";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Homepage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [contactOpen, setContactsOpen] = useState(false)

    return (
        <div className="bg-white">
            <main>
                <div className="relative isolate">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div
                        className="absolute w-1/3 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6  sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <div className="text-center">
                                        <img className="scale-75"  src={logo} />
                                    {/*<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">*/}
                                    {/*    studiotesta*/}
                                    {/*</h1>*/}
                                    {/*<h2 className="text-3xl  tracking-tight text-gray-800"> lo studio dei fighi</h2>*/}
                                    </div>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Qua puoi scrivere le cose tipo bla bla bla sono un figo ma devi pagarmi un botto perchè devo pagare Paso siiiiii lesgooooo
                                        dennis avvia il server di minecraft dai
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="#"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Contatti
                                        </a>
                                        <button onClick={() => {setContactsOpen(!contactOpen)}} className="text-sm font-semibold leading-6 text-gray-900">
                                        Contatti <span aria-hidden="true">↓</span>
                                        </button>
                                    </div>

                                    {contactOpen ?
                                        (


                                        <div className="relative isolate bg-white">
                                        <div className="mx-auto grid max-w-7xl ">
                                        <div className="relative px-6 pb-10 pt-2">
                                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 ">
                                        <svg
                                        className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                        aria-hidden="true"
                                        >
                                        <defs>
                                        <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                    height={200}
                                    x="100%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                            <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                    <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Telephone</span>
                                <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                545 Mavis Island
                                <br />
                                Chicago, IL 99191
                            </dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Telephone</span>
                                <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                                    +1 (555) 234-5678
                                </a>
                            </dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Telephone</span>
                                <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                <a className="hover:text-gray-900" href="mailto:hello@example.com">
                                    hello@example.com
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
        </div>

</div>
</div>

)
                                    : (null)
                                    }


                                </div>
                                {/*<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">*/}

                                    {/*<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">*/}
                                    {/*    <div className="relative">*/}
                                    {/*        <img*/}
                                    {/*            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"*/}
                                    {/*            alt=""*/}
                                    {/*            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"*/}
                                    {/*        />*/}
                                    {/*        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">*/}
                                    {/*    <div className="relative">*/}
                                    {/*        <img*/}
                                    {/*            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"*/}
                                    {/*            alt=""*/}
                                    {/*            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"*/}
                                    {/*        />*/}
                                    {/*        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="relative">*/}
                                    {/*        <img*/}
                                    {/*            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"*/}
                                    {/*            alt=""*/}
                                    {/*            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"*/}
                                    {/*        />*/}
                                    {/*        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">*/}
                                    {/*    <div className="relative">*/}
                                    {/*        <img*/}
                                    {/*            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"*/}
                                    {/*            alt=""*/}
                                    {/*            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"*/}
                                    {/*        />*/}
                                    {/*        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="relative">*/}
                                    {/*        <img*/}
                                    {/*            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"*/}
                                    {/*            alt=""*/}
                                    {/*            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"*/}
                                    {/*        />*/}
                                    {/*        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
