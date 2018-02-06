class RegisterController < ApplicationController
    def show
        @user = User.new
    end
    
    def verify
        if params[:username] == ""
            usernameError = "Username field empty."
        end

        if params[:password] == ""
            passwordError = "Password field empty."
        end
        unless usernameError.nil? && passwordError.nil?
            flash.now[:passwordError] = passwordError
            flash.now[:usernameError] = usernameError 
            flash.now[:params] = params
            render "show"
            return
        end
        
        @user = User.new(:name => params[:username],:password => params[:password],:role_id =>1)
        if @user.save
            redirect_to "/login"
        end
       #errors.add("", "用户名只能是字母、数字或下划线，且长度必须为4到20位") 
    end
     #validates_presence_of :register, :message => "用户名不能为空!"
    def verifyy
        @user = User.new(params[:users])
        if @user.save
            redirect_to "index"
        else
            render "show"
        end
    end
end
