import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white h-16">
            <Button
                color="gray"
                buttonType="link"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
                className="h-10 w-10 border-0 rounded-full"
            >
                <Icon name="menu" size="2xl"/>
            </Button>
            <Icon name="description" size="4xl" color="blue" />
            <h1 className="ml-2 text-gray-700 text-2xl">
                Docs
            </h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-3 
                            bg-gray-100 text-gray-600 rounded-lg
                            focus-within:text-gray-600 focus-within:shadow-md focus-within:bg-gray-50">
                <Icon name="search" size="xl" color="darkGray"/>
                <input type="text"
                        placeholder="Search" 
                        className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>

            <Button
                color="gray"
                buttonType="link"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
                className="ml-5 md:ml-20 h-10 w-10 border-0 rounded-full"
            >
                <Icon name="apps" size="2xl"/>
            </Button>

            <img
                loading="lazy"
                className="cursor-pointer h-8 w-8 rounded-full ml-2"
                src="https://lh3.googleusercontent.com/a-/AOh14GgutOV03_DTFnWwYI780OTlHRWpPzmhTW8xDlYG=s288-p-rw-no" 
                alt="" 
            />
        </div>
    );
}

export default Header
