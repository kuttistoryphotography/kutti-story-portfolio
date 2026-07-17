import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">

            <FaPhoneAlt className="mx-auto text-3xl text-[#7A8450]" />

            <h3 className="mt-5 text-xl">Phone</h3>

            <p className="mt-3 text-gray-600">
              +91 XXXXX XXXXX
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">

            <FaEnvelope className="mx-auto text-3xl text-[#7A8450]" />

            <h3 className="mt-5 text-xl">Email</h3>

            <p className="mt-3 text-gray-600">
              hello@kuttistory.com
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">

            <FaMapMarkerAlt className="mx-auto text-3xl text-[#7A8450]" />

            <h3 className="mt-5 text-xl">Location</h3>

            <p className="mt-3 text-gray-600">
              Madurai, Tamil Nadu
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">

            <FaClock className="mx-auto text-3xl text-[#7A8450]" />

            <h3 className="mt-5 text-xl">Working Hours</h3>

            <p className="mt-3 text-gray-600">
              By Appointment Only
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}