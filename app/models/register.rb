class Register < ActiveRecord::Base
    validates :name, :password,:presence => true
end 