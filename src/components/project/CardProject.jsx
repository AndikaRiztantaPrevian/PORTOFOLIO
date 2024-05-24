import React from 'react'
import TechStack from './TechStack'
import { IoLogoElectron, IoLogoJavascript } from 'react-icons/io5'
import { DiNodejs } from 'react-icons/di'

const CardProject = () => {
  return (
    <div className="flex justify-center items-start gap-4 w-full h-2/4" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="200">
        {/* Card 1 */}
        <div class="border border-blue-300 shadow rounded-md p-4 w-80 h-auto">
            <div class="py-1 h-full flex flex-col justify-between space-y-3">
                <div class="text-center text-xl tracking-wider">Pomodoro</div>
                <div className="text-justify text-xs sm:text-sm">This application was created to manage work and rest hours, users can set them according to their wishes.</div>
                <div class="flex h-10">
                    <div className="flex items-end w-2/4">
                        <TechStack icon={IoLogoElectron} name="Electron" color="text-cyan-600"/>
                        <TechStack icon={IoLogoJavascript} name="Javascript" color="text-yellow-500"/>
                        <TechStack icon={DiNodejs} name="NodeJS" color="text-green-500"/>
                    </div>
                    <div className="w-2/4 flex items-end justify-end"><a href="https://github.com/AndikaRiztantaPrevian/POMODORO-APP" target="blank" className="text-xs">See more on github..</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProject